import HeroSection from './modules/landing/HeroSection';
import ModulesSection from './modules/landing/ModulesSection';
import BenefitsSection from './modules/landing/BenefitsSection';
import AudienceSection from './modules/landing/AudienceSection';
import EnterpriseArchitectureSection from './modules/landing/EnterpriseArchitectureSection';
import FinalCTASection from './modules/landing/FinalCTASection';
import Footer from './modules/landing/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-extrabold text-lg tracking-tight">
            <span className="text-cyan-400">✨</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
              Aura Ecosystem
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="#modules-section" className="hover:text-cyan-400 transition-colors">Módulos</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Beneficios</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Arquitectura</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contacto</a>
          </nav>

          <div>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-900/60 hover:text-white transition-all"
            >
              Solicitar Demo
            </a>
          </div>
        </div>
      </header>

      {/* Main Sections */}
      <main className="flex-grow">
        <HeroSection />
        <ModulesSection />
        <BenefitsSection />
        <AudienceSection />
        <EnterpriseArchitectureSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
