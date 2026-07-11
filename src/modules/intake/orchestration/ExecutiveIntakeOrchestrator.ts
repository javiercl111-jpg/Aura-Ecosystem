import type { ExecutiveIntakeInput, ExecutiveIntakeResult } from '../types';
import type { ExecutiveIntakeGateway } from '../gateways/ExecutiveIntakeGateway';

export type IntakeState = 
  | 'ENTRY'
  | 'DATA_CAPTURE'
  | 'ADVISOR_CONTEXT'
  | 'CONSENT'
  | 'SUBMITTING'
  | 'ANALYZING'
  | 'REVIEW_PENDING'
  | 'CORPORATE_HANDOFF'
  | 'DISCOVERY_READY'
  | 'REDIRECTING'
  | 'ERROR';

export class ExecutiveIntakeOrchestrator {
  private gateway: ExecutiveIntakeGateway;

  constructor(gateway: ExecutiveIntakeGateway) {
    this.gateway = gateway;
  }

  async resolveAdvisor(commercialCode: string) {
    return await this.gateway.resolveAdvisor(commercialCode);
  }

  async submitIntake(input: ExecutiveIntakeInput): Promise<ExecutiveIntakeResult> {
    return await this.gateway.prepareIntake(input);
  }

  getNextStateFromResult(result: ExecutiveIntakeResult): IntakeState {
    if (result.status === 'SUCCESS' && result.nextAction === 'REDIRECT_DISCOVERY') {
      return 'DISCOVERY_READY';
    }
    if (result.status === 'CORPORATE_HANDOFF' || result.nextAction === 'SHOW_CORPORATE_WELCOME') {
      return 'CORPORATE_HANDOFF';
    }
    if (result.status === 'REVIEW_PENDING' || result.nextAction === 'SHOW_REVIEW_PENDING') {
      return 'REVIEW_PENDING';
    }
    return 'ERROR';
  }
}
