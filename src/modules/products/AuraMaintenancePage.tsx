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

        {/* Industrial conceptual hero: no private product interfaces. */}
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-blue-400/35 bg-[#061331] shadow-[0_32px_100px_rgba(2,25,90,.45)]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=80"
              alt="Entorno industrial con equipos de mantenimiento"
              className="h-full w-full object-cover"
              decoding="async" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#03112f]/95 via-[#03112f]/87 to-[#03112f]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03112f]/75 via-transparent to-transparent" />
          </div>
          <motion.div aria-hidden="true" className="pointer-events-none absolute -left-20 top-5 h-80 w-80 rounded-full bg-blue-500/30 blur-[85px]" animate={reducedMotion ? undefined : { x: [0, 60, 0], opacity: [.45, .9, .45] }} transition={{ duration: 8, repeat: Infinity }} />
          <motion.div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" animate={reducedMotion ? undefined : { opacity: [.25, 1, .25] }} transition={{ duration: 3.5, repeat: Infinity }} />
          <div className="relative grid min-h-[500px] items-center gap-10 px-7 py-14 md:grid-cols-[1.2fr_.8fr] md:px-14">
            <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="max-w-2xl">
              <span className="inline-flex rounded-full border border-blue-300/35 bg-blue-400/15 px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-blue-200">Aura Maintenance OS · Activos y operaciones</span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.07] tracking-tight text-white sm:text-5xl lg:text-6xl">La operación no se detiene. <span className="bg-gradient-to-r from-blue-200 via-blue-400 to-cyan-300 bg-clip-text text-transparent">La innovación tampoco.</span></h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">Una propuesta para organizar activos, planear mantenimiento y dar seguimiento a incidencias en instalaciones y operaciones. Capacidades sujetas a validación.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/#contacto" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-400">Solicitar información</Link>
                <a href="#capacidades-maintenance" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-blue-300/45 bg-slate-950/40 px-6 py-3 font-semibold text-white hover:bg-slate-900/60">Explorar soluciones</a>
              </div>
            </motion.div>
            <div className="relative flex justify-center md:justify-end">
              <motion.div aria-hidden="true" className="absolute h-64 w-64 rounded-full border border-blue-400/35 shadow-[0_0_75px_rgba(59,130,246,.2)]" animate={reducedMotion ? undefined : { scale: [1, 1.1, 1], opacity: [.45, .9, .45] }} transition={{ duration: 5, repeat: Infinity }} />
              <motion.img src="/aura-maintenance.png" alt="Identidad visual de Aura Maintenance OS" className="relative z-10 max-h-56 w-full max-w-[280px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,.5)]" animate={reducedMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }} />
            </div>
          </div>
          <div className="relative flex flex-wrap gap-2 border-t border-blue-300/20 bg-[#03112f]/70 px-7 py-5 text-xs font-semibold text-blue-100 md:px-14">
            {['Activos e instalaciones', 'Equipos de mantenimiento', 'Continuidad operativa'].map(label => (
              <motion.span key={label} whileHover={reducedMotion ? undefined : { y: -3 }} className="rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2">{label}</motion.span>
            ))}
          </div>
        </div>

        {/* Details & Highlights */}
        <div id="capacidades-maintenance" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
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
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Flujo previsto para registrar, asignar y consultar tareas. Disponibilidad y alcance por validar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <Package size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Inventario y SLAs de Activos</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Gestión de activos, refacciones y garantías contemplada en el desarrollo; funciones por validar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <Calendar size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Mantenimiento Preventivo</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Planeación de revisiones recurrentes contemplada en el producto; automatización por validar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contexto comercial: sin promesas de disponibilidad ni métricas sin verificar. */}
        <section aria-labelledby="valor-maintenance" className="space-y-6">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-blue-300">Soluciones para retos reales</p><h2 id="valor-maintenance" className="mt-3 text-3xl font-semibold text-white md:text-4xl">Del mantenimiento reactivo a una operación mejor organizada</h2><p className="mt-4 leading-7 text-slate-300">Aura Maintenance OS está orientado a organizar activos, instalaciones y actividades de mantenimiento. Las capacidades descritas representan el enfoque del producto y deben verificarse individualmente antes de cualquier compromiso comercial.</p></div>
          <div className="grid gap-5 md:grid-cols-3"><div className="rounded-2xl border border-blue-400/20 bg-slate-900/50 p-6"><h3 className="mb-4 text-lg font-semibold text-white">Retos de las empresas</h3><ul className="space-y-3 text-sm leading-6 text-slate-300"><li className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />Mantenimiento reactivo y poca planificación preventiva</li><li className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />Información de equipos e instalaciones repartida en distintos registros</li><li className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />Dificultad para dar seguimiento a solicitudes y trabajos</li></ul></div><div className="rounded-2xl border border-blue-400/20 bg-slate-900/50 p-6"><h3 className="mb-4 text-lg font-semibold text-white">Áreas de la solución</h3><ul className="space-y-3 text-sm leading-6 text-slate-300"><li className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />Inventario y organización de activos</li><li className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />Planeación del mantenimiento preventivo</li><li className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />Órdenes de trabajo, seguimiento e incidencias</li></ul></div><div className="rounded-2xl border border-blue-400/20 bg-slate-900/50 p-6"><h3 className="mb-4 text-lg font-semibold text-white">¿Para quién está pensado?</h3><ul className="space-y-3 text-sm leading-6 text-slate-300"><li className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />Hoteles, resorts y complejos turísticos</li><li className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />Industria manufacturera, grupos automotrices y centros logísticos</li><li className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />Condominios, centros comerciales, hospitales y edificios con instalaciones que requieren mantenimiento</li></ul></div></div>
          <p className="text-sm leading-6 text-slate-400">El producto continúa evolucionando. Las funciones específicas, disponibilidad, integraciones y condiciones de uso requieren confirmación antes de contratar.</p>
        </section>

        {/* CTA Demo Banner */}
        <div className="p-8 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-950 to-slate-900/40 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            ¿Buscas organizar mejor el mantenimiento de tus instalaciones?
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
