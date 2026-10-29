import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, Wrench, Package, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuraMaintenancePage = () => {
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
              Operaciones & Activos
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              Aura Maintenance OS
            </h1>
            <p className="text-lg md:text-xl text-cyan-400 font-light leading-relaxed">
              Gestión inteligente de mantenimiento y operaciones físicas.
            </p>
          </div>
        </div>

        {/* Visual de identidad de producto; no es una captura de software. */}
        <div className="relative isolate overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#06122b] p-6 shadow-[0_26px_80px_rgba(0,0,0,.35)] md:p-10">
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
          <motion.div aria-hidden="true" className="absolute -right-24 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[75px]" animate={reducedMotion ? undefined : { opacity: [0.35, 0.85, 0.35], scale: [1, 1.18, 1], x: [0, -18, 0] }} transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }} />
          <div className="relative flex min-h-[270px] flex-col items-center justify-center gap-6 md:min-h-[360px] md:flex-row md:gap-14">
            <motion.img src="/aura-maintenance.png" alt="Identidad visual de Aura Maintenance OS" className="h-40 w-40 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,.5)] md:h-56 md:w-56" animate={reducedMotion ? undefined : { y: [0, -9, 0], scale: [1, 1.035, 1] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />
            <div className="max-w-md text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-300">Operación conectada</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Aura Maintenance OS</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">Una visión integral para organizar activos, mantenimiento preventivo y atención de incidencias.</p>
              <Link to="/#contacto" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl border border-cyan-500/40 px-5 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/10">Solicitar información</Link>
            </div>
          </div>
        </div>

        {/* Details & Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Description */}
          <div className="md:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
            <p>Una visión integral para organizar activos, mantenimiento preventivo y atención de incidencias.</p>
            <p>Las funcionalidades específicas y su disponibilidad se confirman individualmente conforme avance su validación.</p>
          </div>

          {/* Right Column: Highlights List */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-3">
              Capacidades Clave
            </h3>
            
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <Wrench size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Órdenes de Trabajo Inteligentes</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Creación, asignación y seguimiento móvil de tareas correctivas en tiempo real.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <Package size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Inventario y SLAs de Activos</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Control de refacciones, stock crítico y tracking de garantías de maquinaria y facilidades.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <Calendar size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Mantenimiento Preventivo</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Programación y calendarios de revisiones recurrentes automatizadas por el sistema.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Demo Banner */}
        <div className="p-8 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-950 to-slate-900/40 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            ¿Listo para asegurar la continuidad operativa de tus instalaciones?
          </h2>
          <p className="max-w-md mx-auto text-xs md:text-sm text-slate-400 font-light leading-relaxed">
            Conoce el alcance y el estado de desarrollo de Maintenance OS antes de solicitar una demostración.
          </p>
          <div>
            <a 
              href="/#contacto"
              className="inline-flex px-8 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-300 hover:to-cyan-400 active:scale-95 transition-all shadow-[0_4px_20px_rgba(37,99,235,0.18)] text-sm"
            >
              Solicitar información
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AuraMaintenancePage;
