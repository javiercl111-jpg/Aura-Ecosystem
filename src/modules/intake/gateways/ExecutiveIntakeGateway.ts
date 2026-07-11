import type { ExecutiveIntakeInput, ExecutiveIntakeResult, AdvisorResolutionResult } from '../types';

export interface ExecutiveIntakeGateway {
  resolveAdvisor(commercialCode: string): Promise<AdvisorResolutionResult>;
  prepareIntake(input: ExecutiveIntakeInput): Promise<ExecutiveIntakeResult>;
}
