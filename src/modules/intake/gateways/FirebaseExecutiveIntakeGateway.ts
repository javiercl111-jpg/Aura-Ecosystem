import { getFunctions, httpsCallable } from 'firebase/functions';
import { firebaseApp } from '../../../firebase/config';
import type { ExecutiveIntakeGateway } from './ExecutiveIntakeGateway';
import type { ExecutiveIntakeInput, ExecutiveIntakeResult, AdvisorResolutionResult } from '../types';

export class FirebaseExecutiveIntakeGateway implements ExecutiveIntakeGateway {
  private functions = getFunctions(firebaseApp, 'us-central1');

  async resolveAdvisor(commercialCode: string): Promise<AdvisorResolutionResult> {
    try {
      const resolveAdvisorFn = httpsCallable<{ commercialCode: string }, AdvisorResolutionResult>(
        this.functions,
        'resolveAdvisorByCode'
      );
      
      const { data } = await resolveAdvisorFn({ commercialCode });
      return data;
    } catch (error: any) {
      console.error('Error resolving advisor:', error);
      // Determine safe error mapping based on Firebase Functions error codes
      // For now, if the code is invalid or not found, it returns INVALID so we can fallback.
      return {
        status: 'INVALID',
        ownerStatus: 'UNASSIGNED',
      };
    }
  }

  async prepareIntake(input: ExecutiveIntakeInput): Promise<ExecutiveIntakeResult> {
    if (!import.meta.env.VITE_RECAPTCHA_SITE_KEY) {
      console.error('App Check is not configured. Submit blocked.');
      return {
        status: 'ERROR',
        nextAction: 'SHOW_ERROR',
        publicMessage: 'APP_CHECK_REQUIRED',
      };
    }

    try {
      const createDiscoveryLeadFn = httpsCallable<ExecutiveIntakeInput, ExecutiveIntakeResult>(
        this.functions,
        'createDiscoveryLead'
      );

      const { data } = await createDiscoveryLeadFn(input);
      return data;
    } catch (error: any) {
      console.error('Error preparing intake:', error);
      // Map to secure errors. Avoid exposing internal stack traces.
      if (error?.code === 'functions/resource-exhausted') {
        return {
          status: 'ERROR',
          nextAction: 'SHOW_ERROR',
          publicMessage: 'TEMPORARILY_UNAVAILABLE',
        };
      }
      
      if (error?.code === 'functions/unauthenticated' || String(error?.message || '').toLowerCase().includes('app check')) {
        return {
          status: 'ERROR',
          nextAction: 'SHOW_ERROR',
          publicMessage: 'APP_CHECK_REQUIRED',
        };
      }
      
      return {
        status: 'ERROR',
        nextAction: 'SHOW_ERROR',
        publicMessage: 'INVALID_INPUT',
      };
    }
  }
}
