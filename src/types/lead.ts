export type ConsultingStage =
  | "DISCOVERY"
  | "DIAGNOSIS"
  | "SOLUTION"
  | "DEMO"
  | "PROPOSAL"
  | "IMPLEMENTATION"
  | "SUCCESS"
  | "AMBASSADOR";

export type ConsultingPriority = "LOW" | "MEDIUM" | "HIGH";

export interface WebsiteOrganizationInput {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  industry: string;
  companySize: string;
  mainChallenge: string;
  interestAreas: string[];
  notes: string;
  source: string;
  stage: ConsultingStage;
  priority: ConsultingPriority;
  recommendedNextStep: string;
}