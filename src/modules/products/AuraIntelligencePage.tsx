import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, Brain, Search, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuraIntelligencePage = () => {
  const reducedMotion = useReducedMotion();
  return (
    <section className="relative min-h-screen pt-12 pb-24 px-4 md:px-8 bg-slate-950 overflow-hidden flex flex-col justify-center">
      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12">
        {/* Back Link */}
        <Link to="/#modulos" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-cyan-400 transition-colors uppercase tracking-wider">
          <ArrowLeft size={14} />
          Volver al Ecosistema
        </Link>

        <div className="relative isolate overflow-hidden rounded-[2rem] border border-violet-400/30 bg-[#0c1030] shadow-[0_30px_90px_rgba(0,0,0,.4)]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(139,92,246,.23),transparent_55%),linear-gradient(to_right,rgba(139,92,246,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,.08)_1px,transparent_1px)] bg-[size:auto,54px_54px,54px_54px]" />
          <motion.div aria-hidden="true" className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-violet-500/20 blur-[90px]" animate={reducedMotion ? undefined : { x: [0,-35,0], opacity: [.3,.85,.3] }} transition={{ duration: 8, repeat: Infinity }} />
          <div className="relative grid min-h-[470px] items-center gap-8 p-8 md:grid-cols-[1.15fr_.85fr] md:p-14">
            <motion.div initial={reducedMotion ? false : {opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
              <span className="inline-flex rounded-full border border-violet-300/30 bg-violet-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-violet-200">Aura Intelligence · Visión de inteligencia empresarial</span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">Conocimiento conectado. <span className="bg-gradient-to-r from-violet-200 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">Decisiones mejor informadas.</span></h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">Explora nuestra visión de herramientas de asistencia y análisis para procesos empresariales.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Link to="/#contacto" className="inline-flex min-h-12 items-center rounded-xl bg-violet-400 px-6 py-3 font-semibold text-slate-950 hover:bg-violet-300">Solicitar información</Link><a href="#intelligence-detalles" className="inline-flex min-h-12 items-center rounded-xl border border-violet-300/40 px-6 py-3 font-semibold text-white hover:bg-white/5">Conocer la visión</a></div>
            </motion.div>
            <div className="relative flex items-center justify-center">
              <motion.div aria-hidden="true" className="absolute h-72 w-72 rounded-full border border-violet-300/30 bg-violet-300/5" animate={reducedMotion ? undefined : {scale:[1,1.09,1],opacity:[.4,.85,.4]}} transition={{duration:5,repeat:Infinity}} />
              <motion.img src="/aura-intelligence.png" alt="Aura Intelligence" className="relative z-10 max-h-56 w-full max-w-[280px] object-contain drop-shadow-[0_18px_36px_rgba(0,0,0,.5)]" animate={reducedMotion ? undefined : {y:[0,-9,0]}} transition={{duration:4.5,repeat:Infinity}} />
            </div>
          </div>
          <div className="relative flex flex-wrap gap-2 border-t border-violet-300/20 bg-[#080e24]/70 px-8 py-5 text-xs font-semibold text-violet-100 md:px-14">
            {['Conocimiento', 'Análisis', 'Asistencia'].map(x => <span key={x} className="rounded-full border border-violet-300/25 bg-violet-300/5 px-4 py-2">{x}</span>)}
          </div>
        </div>

        {/* Details & Highlights */}
        <div id="intelligence-detalles" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm md:text-base"><p>Aura Intelligence es una iniciativa en desarrollo enfocada en explorar asistencia, organización del conocimiento y análisis para entornos empresariales.</p><p>Las capacidades de inteligencia artificial, automatización e integraciones requieren validación y autorización antes de su oferta comercial o uso real.</p></div>
          {/* Right Column: Highlights List */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-3">
              Capacidades Clave
            </h3>
            
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <Brain size={16} className="text-violet-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Soporte Inteligente</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Respuestas interactivas basadas en manuales, contratos y normativas de la organización.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <Search size={16} className="text-violet-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Búsqueda Contextual</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Indexación semántica e inteligente de todos los documentos y bases de conocimiento del inquilino.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <Cpu size={16} className="text-violet-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Automatización Operativa</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Ejecución automática de flujos de trabajo basados en detonantes de texto o voz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section aria-labelledby="intelligence-valor" className="space-y-6">
          <div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-violet-300">Aplicaciones empresariales previstas</p><h2 id="intelligence-valor" className="mt-3 text-3xl font-semibold text-white md:text-4xl">Inteligencia orientada a las personas y los procesos</h2><p className="mt-4 leading-7 text-slate-300">Una propuesta para facilitar el acceso a información y apoyar el análisis empresarial. No implica que existan asistentes o automatizaciones certificados o disponibles.</p></div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-violet-400/20 bg-slate-900/50 p-6"><h3 className="mb-3 text-lg font-semibold text-white">Retos por abordar</h3><p className="text-sm leading-7 text-slate-300">Información dispersa, consultas repetitivas y dificultad para localizar conocimiento útil entre áreas.</p></div>
            <div className="rounded-2xl border border-violet-400/20 bg-slate-900/50 p-6"><h3 className="mb-3 text-lg font-semibold text-white">Áreas de exploración</h3><p className="text-sm leading-7 text-slate-300">Búsqueda contextual, asistencia informativa y análisis de procesos, sujetos a pruebas y controles de seguridad y costos.</p></div>
            <div className="rounded-2xl border border-violet-400/20 bg-slate-900/50 p-6"><h3 className="mb-3 text-lg font-semibold text-white">¿A quién podría servir?</h3><p className="text-sm leading-7 text-slate-300">Dirección, operaciones, RRHH y equipos de soporte de organizaciones industriales, hoteleras, comerciales y de servicios.</p></div>
          </div>
        </section>

        {/* CTA Demo Banner */}
        <div className="p-8 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-950 to-slate-900/40 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            ¿Listo para llevar la Inteligencia Artificial a tus procesos de negocio?
          </h2>
          <p className="max-w-md mx-auto text-xs md:text-sm text-slate-400 font-light leading-relaxed">
            Solicita información sobre el desarrollo de Aura Intelligence y las capacidades que hayan sido verificadas.
          </p>
          <div>
            <a 
              href="/#contacto"
              className="inline-flex px-8 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-violet-400 to-blue-500 hover:from-violet-300 hover:to-blue-400 active:scale-95 transition-all shadow-[0_4px_20px_rgba(139,92,246,0.15)] text-sm"
            >
              Solicitar información
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AuraIntelligencePage;
