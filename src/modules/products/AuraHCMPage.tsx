import { ArrowLeft, Users, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuraHCMPage = () => {
  return (
    <section className="relative min-h-screen pt-12 pb-24 px-4 md:px-8 bg-slate-950 overflow-hidden flex flex-col justify-center">
      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto w-full relative z-10 space-y-12">
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-cyan-400 transition-colors uppercase tracking-wider">
          <ArrowLeft size={14} />
          Volver al Ecosistema
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 border-b border-slate-900 pb-12">
          {/* Logo container */}
          <div className="flex items-center justify-center p-4 rounded-3xl bg-slate-900 border-2 border-slate-800 w-28 h-28 md:w-36 md:h-36 overflow-hidden shadow-2xl relative">
            <div className="absolute inset-1 rounded-3xl border border-cyan-500/10 animate-pulse" />
            <img 
              src="/aura-hcm.png" 
              alt="Aura HCM Logo" 
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              Talento Humano
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              Aura HCM
            </h1>
            <p className="text-lg md:text-xl text-cyan-400 font-light leading-relaxed">
              Gestión integral de talento humano y control operativo.
            </p>
          </div>
        </div>

        {/* Details & Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Description */}
          <div className="md:col-span-7 space-y-6 text-slate-400 leading-relaxed font-light text-sm md:text-base">
            <p>
              Aura HCM es la solución definitiva para medianas y grandes empresas que buscan unificar la administración de personal, el control horario y la gestión de nóminas en un único portal corporativo de alto rendimiento.
            </p>
            <p>
              Diseñado con una arquitectura modular y segura, permite automatizar los flujos de contratación, evaluar el desempeño laboral y brindar beneficios financieros seguros a tus empleados, fomentando una cultura de transparencia y eficiencia operativa.
            </p>
          </div>

          {/* Right Column: Highlights List */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-3">
              Capacidades Clave
            </h3>
            
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <Users size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Nóminas y Beneficios</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Administración automatizada de compensaciones y salarios.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <Shield size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Control Horario</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Registro de asistencia, turnos y jornadas con cumplimiento normativo.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <Sparkles size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Clima y Desempeño</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Evaluación de objetivos de negocio y encuestas en tiempo real.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Demo Banner */}
        <div className="p-8 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-950 to-slate-900/40 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            ¿Listo para transformar la gestión de personas en tu empresa?
          </h2>
          <p className="max-w-md mx-auto text-xs md:text-sm text-slate-400 font-light leading-relaxed">
            Solicita una presentación interactiva de Aura HCM y descubre cómo integrarlo de forma nativa con los demás módulos del ecosistema.
          </p>
          <div>
            <a 
              href="/#contacto"
              className="inline-flex px-8 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 active:scale-95 transition-all shadow-[0_4px_20px_rgba(6,182,212,0.15)] text-sm"
            >
              Solicitar Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AuraHCMPage;
