import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IntakeProvider, useIntake } from './context/IntakeContext';
import IntakeExperience from './components/IntakeExperience';
import ExecutiveAnalysis from './components/ExecutiveAnalysis';
import ExecutiveCorporateWelcome from './components/ExecutiveCorporateWelcome';
import ExecutiveReviewPending from './components/ExecutiveReviewPending';
import ExecutiveWelcome from './components/ExecutiveWelcome';

const IntakeFlow = () => {
  const { commercialCode } = useParams<{ commercialCode?: string }>();
  const { state, resolveAdvisor } = useIntake();

  useEffect(() => {
    if (commercialCode) {
      resolveAdvisor(commercialCode);
    }
  }, [commercialCode]);

  // Render based on state
  switch (state) {
    case 'ENTRY':
    case 'DATA_CAPTURE':
    case 'CONSENT':
      return <IntakeExperience />;
    case 'ANALYZING':
    case 'SUBMITTING':
      return <ExecutiveAnalysis />;
    case 'CORPORATE_HANDOFF':
      return <ExecutiveCorporateWelcome />;
    case 'REVIEW_PENDING':
    case 'ERROR':
      return <ExecutiveReviewPending />;
    case 'DISCOVERY_READY':
    case 'REDIRECTING':
      return <ExecutiveWelcome />;
    default:
      return <IntakeExperience />;
  }
};

const ExecutiveIntakePage = () => {
  return (
    <IntakeProvider>
      <div className="min-h-screen bg-slate-950 text-slate-200 overflow-hidden relative font-sans">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
        
        {/* Main Content */}
        <div className="relative z-10 w-full min-h-screen flex items-center justify-center p-4">
          <IntakeFlow />
        </div>
      </div>
    </IntakeProvider>
  );
};

export default ExecutiveIntakePage;
