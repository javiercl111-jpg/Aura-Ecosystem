import type { ExecutiveIntakeGateway } from '../gateways/ExecutiveIntakeGateway';
import type { ExecutiveIntakeInput, ExecutiveIntakeResult, AdvisorResolutionResult } from '../types';
import { SCENARIOS } from './scenarios';

export class FixtureExecutiveIntakeGateway implements ExecutiveIntakeGateway {
  async resolveAdvisor(commercialCode: string): Promise<AdvisorResolutionResult> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    if (commercialCode.toUpperCase() === 'INVALID') {
      return {
        status: 'INVALID',
        ownerStatus: 'UNASSIGNED',
      };
    }

    return {
      status: 'OK',
      advisorDisplayName: 'Javier Cuéllar',
      ownerStatus: 'ASSIGNED',
    };
  }

  async prepareIntake(input: ExecutiveIntakeInput): Promise<ExecutiveIntakeResult> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Fixture logic for UI testing based on input values
    if (input.email.includes('@liverpool.com.mx') || input.email.includes('@suburbia.com.mx')) {
      return SCENARIOS.CORPORATE_HANDOFF;
    }

    if (input.email.includes('review') || input.companyName.toLowerCase().includes('competitor')) {
      return SCENARIOS.REVIEW_PENDING;
    }

    if (input.email.includes('error')) {
      return SCENARIOS.ERROR;
    }

    return SCENARIOS.WEBSITE_SUCCESS;
  }
}
