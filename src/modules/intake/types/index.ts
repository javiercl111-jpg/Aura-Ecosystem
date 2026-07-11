export interface ExecutiveIntakeInput {
  entryMode: 'WEBSITE' | 'ADVISOR_SHARE';
  commercialCode?: string;
  companyName: string;
  contactName: string;
  jobTitle: string;
  email: string;
  phone?: string;
  state: string;
  city: string;
  employeeRange: string;
  acquisitionSource: 'AURA_NEXUS';
  privacyConsent: boolean;
  diagnosticDeliveryConsent: boolean;
  followUpConsent: boolean;
  marketingConsent: boolean;
  policyVersion: string;
}

export interface AdvisorResolutionResult {
  status: 'OK' | 'INVALID';
  advisorDisplayName?: string;
  ownerStatus: string;
}

export interface ExecutiveIntakeResult {
  status: 'SUCCESS' | 'CORPORATE_HANDOFF' | 'REVIEW_PENDING' | 'ERROR';
  publicMessage?: string;
  nextAction: 'REDIRECT_DISCOVERY' | 'SHOW_CORPORATE_WELCOME' | 'SHOW_REVIEW_PENDING';
  discoveryUrl?: string;
  advisorDisplayName?: string;
  organizationProfile?: 'LOCAL' | 'MULTISITE' | 'CORPORATE' | 'UNKNOWN';
  requiresManualReview?: boolean;
}
