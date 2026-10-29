import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, Users, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuraHCMPage = () => {
  const reducedMotion = useReducedMotion();
  return (
    <section className="relative min-h-screen pt-12 pb-24 px-4 md:px-8 bg-slate-950 overflow-hidden flex flex-col justify-center">
      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12">
        {/* Back Link */}
        <Link to="/#modulos" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-cyan-400 transition-colors uppercase tracking-wider">
          <ArrowLeft size={14} />
          Volver al Ecosistema
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 border-b border-slate-900 pb-12">
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

        {/* Visual de identidad de producto; no es una captura de software. */}
        <div className="relative isolate overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#06122b] p-6 shadow-[0_26px_80px_rgba(0,0,0,.35)] md:p-10">
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
          <motion.div aria-hidden="true" className="absolute -right-24 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[75px]" animate={reducedMotion ? undefined : { x: [0, -25, 0], scale: [1, 1.18, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
          <div className="relative flex min-h-[270px] flex-col items-center justify-center gap-6 md:min-h-[360px] md:flex-row md:gap-14">
            <motion.img src="/Logo%20Aura%20HCM%20oficial.png" alt="Identidad visual de Aura HCM" className="h-40 w-40 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,.5)] md:h-56 md:w-56" animate={reducedMotion ? undefined : { y: [0, -10, 0], scale: [1, 1.035, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
            <div className="max-w-md text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">Aura Nexus · Soluciones empresariales</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Aura HCM</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">Conoce la visión del producto y solicita información sobre sus capacidades verificadas y su estado de desarrollo.</p>
              <Link to="/#contacto" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl border border-cyan-500/40 px-5 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/10">Solicitar información</Link>
            </div>
          </div>
        </div>

        {/* Fotografía corporativa ilustrativa: personas, no pantallas del producto. */}
        <div className="relative isolate overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#06122b] shadow-[0_26px_70px_rgba(0,0,0,.3)]">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[290px] overflow-hidden md:min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=78"
                alt="Profesionales colaborando en un entorno de trabajo"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#06122b]/65 via-transparent to-transparent" />
            </div>
            <div className="relative flex flex-col justify-center p-8 md:p-12">
              <motion.div aria-hidden="true" className="pointer-events-none absolute -right-14 top-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" animate={reducedMotion ? undefined : { opacity: [0.4, 0.85, 0.4] }} transition={{ duration: 5, repeat: Infinity }} />
              <p className="relative text-xs font-semibold uppercase tracking-[.22em] text-cyan-300">Personas al centro</p>
              <h2 className="relative mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">La tecnología empieza por las personas.</h2>
              <p className="relative mt-5 max-w-md leading-7 text-slate-300">Una visión de Recursos Humanos que conecta equipos, jornadas y operaciones con procesos más claros.</p>
              <div className="relative mt-8 flex flex-wrap gap-3 text-sm text-cyan-100">
                {['Talento humano', 'Asistencia', 'Jornadas'].map((label) => (
                  <span key={label} className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">{label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Details & Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Description */}
          <div className="md:col-span-7 space-y-6 text-slate-400 leading-relaxed font-light text-sm md:text-base">
            <p>
              Aura HCM es una plataforma empresarial en desarrollo, orientada a integrar la administración de personal, el control de asistencia y los procesos de Recursos Humanos.
            </p>
            <p>
              Su visión modular contempla una operación más conectada, con funciones cuya disponibilidad y alcance se validan de forma individual antes de cualquier contratación.
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
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Área contemplada en la evolución del producto; disponibilidad por confirmar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <Shield size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Control Horario</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Funciones de asistencia y jornadas en desarrollo y validación.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <Sparkles size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Clima y Desempeño</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Capacidades previstas; todavía no acreditadas para comercialización.</p>
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
            Solicita información sobre la evolución de Aura HCM y las capacidades que se encuentren verificadas.
          </p>
          <div>
            <a 
              href="/#contacto"
              className="inline-flex px-8 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 active:scale-95 transition-all shadow-[0_4px_20px_rgba(6,182,212,0.15)] text-sm"
            >
              Solicitar información
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AuraHCMPage;
