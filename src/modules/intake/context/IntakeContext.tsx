import { createContext, useContext, useState, type ReactNode } from 'react';
import type { IntakeState } from '../orchestration/ExecutiveIntakeOrchestrator';
import { ExecutiveIntakeOrchestrator } from '../orchestration/ExecutiveIntakeOrchestrator';
import type { ExecutiveIntakeInput, ExecutiveIntakeResult, AdvisorResolutionResult } from '../types';
import { getExecutiveIntakeGateway } from '../gateways';

interface IntakeContextType {
  state: IntakeState;
  setState: (state: IntakeState) => void;
  input: Partial<ExecutiveIntakeInput>;
  updateInput: (data: Partial<ExecutiveIntakeInput>) => void;
  result: ExecutiveIntakeResult | null;
  advisorResolution: AdvisorResolutionResult | null;
  resolveAdvisor: (code: string) => Promise<void>;
  submitIntake: () => Promise<void>;
  isMockEnvironment: boolean;
}

const IntakeContext = createContext<IntakeContextType | undefined>(undefined);

export const IntakeProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<IntakeState>('ENTRY');
  const [input, setInput] = useState<Partial<ExecutiveIntakeInput>>({
    acquisitionSource: 'AURA_NEXUS',
  });
  const [result, setResult] = useState<ExecutiveIntakeResult | null>(null);
  const [advisorResolution, setAdvisorResolution] = useState<AdvisorResolutionResult | null>(null);

  const gateway = getExecutiveIntakeGateway();
  const orchestrator = new ExecutiveIntakeOrchestrator(gateway);

  const isMockEnvironment = import.meta.env.DEV && import.meta.env.VITE_INTAKE_GATEWAY_MODE === 'fixture';

  const updateInput = (data: Partial<ExecutiveIntakeInput>) => {
    setInput((prev) => ({ ...prev, ...data }));
  };

  const resolveAdvisor = async (code: string) => {
    setState('ANALYZING');
    const res = await orchestrator.resolveAdvisor(code);
    setAdvisorResolution(res);
    updateInput({ commercialCode: code });
    if (res.status === 'OK') {
      setState('DATA_CAPTURE');
    } else {
      // If invalid, fallback to normal entry
      setState('DATA_CAPTURE');
    }
  };

  // Removed unused simulated submitIntake

  const submitIntakeReal = async () => {
    if (state === 'SUBMITTING' || state === 'ANALYZING') return; // Prevent double submit
    setState('SUBMITTING');
    
    try {
      // Analyzing state shown while network request is pending
      setState('ANALYZING');
      const res = await orchestrator.submitIntake(input as ExecutiveIntakeInput);
      setResult(res);
      setState(orchestrator.getNextStateFromResult(res));
    } catch (error) {
      setResult({
        status: 'ERROR',
        nextAction: 'SHOW_REVIEW_PENDING',
        publicMessage: 'TEMPORARILY_UNAVAILABLE',
      });
      setState('ERROR');
    }
  };

  return (
    <IntakeContext.Provider
      value={{
        state,
        setState,
        input,
        updateInput,
        result,
        advisorResolution,
        resolveAdvisor,
        submitIntake: submitIntakeReal,
        isMockEnvironment,
      }}
    >
      {children}
    </IntakeContext.Provider>
  );
};

export const useIntake = () => {
  const context = useContext(IntakeContext);
  if (context === undefined) {
    throw new Error('useIntake must be used within an IntakeProvider');
  }
  return context;
};
