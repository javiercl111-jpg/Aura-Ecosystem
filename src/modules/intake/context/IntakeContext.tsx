import { createContext, useContext, useState, useMemo, type ReactNode } from 'react';
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
    origin: 'WEBSITE',
    entryMode: 'WEBSITE',
    idempotencyKey: crypto.randomUUID(),
  });
  const [result, setResult] = useState<ExecutiveIntakeResult | null>(null);
  const [advisorResolution, setAdvisorResolution] = useState<AdvisorResolutionResult | null>(null);

  const gateway = useMemo(() => getExecutiveIntakeGateway(), []);
  const orchestrator = useMemo(() => new ExecutiveIntakeOrchestrator(gateway), [gateway]);

  const isMockEnvironment = import.meta.env.DEV && import.meta.env.VITE_INTAKE_GATEWAY_MODE === 'fixture';

  const updateInput = (data: Partial<ExecutiveIntakeInput>) => {
    setInput((prev) => ({ ...prev, ...data }));
  };

  const resolveAdvisor = async (code: string) => {
    setState('ANALYZING');
    const res = await orchestrator.resolveAdvisor(code);
    setAdvisorResolution(res);
    if (res.status === 'OK') {
      updateInput({ commercialCode: code, entryMode: 'ADVISOR_SHARE' });
      setState('DATA_CAPTURE');
    } else {
      updateInput({ entryMode: 'WEBSITE' });
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
      let res = await orchestrator.submitIntake(input as ExecutiveIntakeInput);
      
      let attempts = 0;
      while (res.status === 'PROCESSING' && attempts < 5) {
        attempts++;
        const delay = (res.retryAfterSeconds || 2) * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
        res = await orchestrator.submitIntake(input as ExecutiveIntakeInput);
      }
      
      setResult(res);
      const nextState = orchestrator.getNextStateFromResult(res);
      setState(nextState);
    } catch (error) {
      setResult({
        status: 'ERROR',
        nextAction: 'SHOW_ERROR',
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
