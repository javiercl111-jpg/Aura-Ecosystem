import type { ExecutiveIntakeGateway } from './ExecutiveIntakeGateway';
import { FirebaseExecutiveIntakeGateway } from './FirebaseExecutiveIntakeGateway';
import { FixtureExecutiveIntakeGateway } from '../fixtures/FixtureExecutiveIntakeGateway';

export function getExecutiveIntakeGateway(): ExecutiveIntakeGateway {
  if (import.meta.env.PROD && import.meta.env.VITE_INTAKE_GATEWAY_MODE === 'fixture') {
    throw new Error('Fixture gateway is forbidden in production');
  }

  if (import.meta.env.DEV && import.meta.env.VITE_INTAKE_GATEWAY_MODE === 'fixture') {
    console.warn('⚠️ USING FIXTURE INTAKE GATEWAY ⚠️');
    return new FixtureExecutiveIntakeGateway();
  }

  return new FirebaseExecutiveIntakeGateway();
}
