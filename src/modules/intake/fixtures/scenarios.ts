import type { ExecutiveIntakeResult } from '../types';

export const SCENARIOS = {
  WEBSITE_SUCCESS: {
    status: 'SUCCESS',
    nextAction: 'REDIRECT_DISCOVERY',
    discoveryUrl: '/diagnostico/demo-ready',
    organizationProfile: 'LOCAL',
  } as ExecutiveIntakeResult,
  
  CORPORATE_HANDOFF: {
    status: 'CORPORATE_HANDOFF',
    nextAction: 'SHOW_CORPORATE_WELCOME',
    organizationProfile: 'CORPORATE',
  } as ExecutiveIntakeResult,

  REVIEW_PENDING: {
    status: 'REVIEW_PENDING',
    nextAction: 'SHOW_REVIEW_PENDING',
    requiresManualReview: true,
  } as ExecutiveIntakeResult,

  ERROR: {
    status: 'ERROR',
    nextAction: 'SHOW_REVIEW_PENDING',
    publicMessage: 'TEMPORARILY_UNAVAILABLE',
  } as ExecutiveIntakeResult,
};
