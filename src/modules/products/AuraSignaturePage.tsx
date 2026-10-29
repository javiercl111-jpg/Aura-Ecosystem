import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, PenTool, ShieldCheck, History } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuraSignaturePage = () => {
  const reducedMotion = useReducedMotion();
  return (
    <section className="relative min-h-screen pt-12 pb-24 px-4 md:px-8 bg-slate-950 overflow-hidden flex flex-col justify-center">
      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12">
        {/* Back Link */}
        <Link to="/#modulos" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-cyan-400 transition-colors uppercase tracking-wider">
          <ArrowLeft size={14} />
          Volver al Ecosistema
        </Link>

        <div className="relative isolate overflow-hidden rounded-[2rem] border border-teal-400/30 bg-[#051b29] shadow-[0_30px_90px_rgba(0,0,0,.38)]">
          <div className="absolute inset-0">
            <motion.img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=78" alt="Mesa de trabajo con documentos profesionales" className="h-full w-full object-cover" decoding="async" animate={reducedMotion ? undefined : { scale: [1, 1.055, 1] }} transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#041824]/95 via-[#041824]/88 to-[#041824]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041824]/70 to-transparent" />
          </div>
          <motion.div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 h-96 w-96 rounded-full bg-teal-400/20 blur-[95px]" animate={reducedMotion ? undefined : { scale: [1, 1.18, 1], opacity: [.35, .8, .35] }} transition={{ duration: 7, repeat: Infinity }} />
          <div className="relative grid min-h-[470px] items-center gap-10 p-8 md:grid-cols-[1.15fr_.85fr] md:p-14">
            <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <span className="inline-flex rounded-full border border-teal-300/30 bg-teal-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-teal-200">Aura Signature · Documentos y acuerdos</span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">Acuerdos más claros. <span className="bg-gradient-to-r from-teal-200 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Procesos conectados.</span></h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">Una visión de gestión documental y procesos de firma con trazabilidad y organización.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Link to="/#contacto" className="inline-flex min-h-12 items-center rounded-xl bg-teal-400 px-6 py-3 font-semibold text-slate-950 hover:bg-teal-300">Solicitar información</Link><a href="#signature-detalles" className="inline-flex min-h-12 items-center rounded-xl border border-teal-300/40 px-6 py-3 font-semibold text-white hover:bg-white/5">Conocer la solución</a></div>
            </motion.div>
            <div className="relative flex items-center justify-center">
              <motion.div aria-hidden="true" className="absolute h-72 w-72 rounded-[2rem] border border-teal-300/30 bg-teal-300/5" animate={reducedMotion ? undefined : { rotate: [0, 3, 0], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity }} />
              <motion.img src="/aura-signature.png" alt="Aura Signature" className="relative z-10 max-h-56 w-full max-w-[280px] object-contain drop-shadow-[0_18px_36px_rgba(0,0,0,.5)]" animate={reducedMotion ? undefined : { y: [0, -9, 0] }} transition={{ duration: 4.5, repeat: Infinity }} />
            </div>
          </div>
          <div className="relative flex flex-wrap gap-2 border-t border-teal-300/20 bg-[#031521]/70 px-8 py-5 text-xs font-semibold text-teal-100 md:px-14">
            {['Gestión documental', 'Procesos de firma', 'Trazabilidad'].map(x => <span key={x} className="rounded-full border border-teal-300/25 bg-teal-300/5 px-4 py-2">{x}</span>)}
          </div>
        </div>

        {/* Details & Highlights */}
        <div id="signature-detalles" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Description */}
          <div className="md:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
            <p>Una experiencia documental diseñada para coordinar acuerdos, firmas y trazabilidad.</p>
            <p>Las funcionalidades específicas y su disponibilidad se confirman individualmente conforme avance su validación.</p>
          </div>

          {/* Right Column: Highlights List */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-3">
              Capacidades Clave
            </h3>
            
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <PenTool size={16} className="text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Firma Electrónica Avanzada</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Firmas biométricas y con certificado digital bajo regulaciones locales e internacionales.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <ShieldCheck size={16} className="text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Flujos Multi-rol y Plantillas</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Secuencias de aprobación dinámicas, firmas en paralelo e integraciones modulares.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <History size={16} className="text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Trazabilidad y Auditoría</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Generación automática de un Documento de Evidencias con sello de tiempo e integridad inmutable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alcance comercial informativo: no supone certificación jurídica o disponibilidad. */}
        <section aria-labelledby="signature-valor" className="space-y-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-300">Documentos y procesos empresariales</p>
            <h2 id="signature-valor" className="mt-3 text-3xl font-semibold text-white md:text-4xl">¿Cómo puede ayudar Aura Signature?</h2>
            <p className="mt-4 leading-7 text-slate-300">Una propuesta para organizar acuerdos y procesos documentales en equipos de distintos tamaños y sectores. Las funciones concretas, los tipos de firma y su alcance jurídico están sujetos a validación.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-teal-400/20 bg-slate-900/50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Retos de las organizaciones</h3>
              <p className="text-sm leading-7 text-slate-300">Documentos dispersos, múltiples participantes en revisiones y dificultades para dar seguimiento a acuerdos y versiones.</p>
            </div>
            <div className="rounded-2xl border border-teal-400/20 bg-slate-900/50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Áreas de la solución</h3>
              <p className="text-sm leading-7 text-slate-300">Organización documental, coordinación de aprobaciones, procesos de firma y consulta de trazabilidad, conforme a las capacidades que se verifiquen.</p>
            </div>
            <div className="rounded-2xl border border-teal-400/20 bg-slate-900/50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">¿A quién puede servir?</h3>
              <p className="text-sm leading-7 text-slate-300">Equipos de RRHH, áreas legales, administración, compras y dirección; empresas de servicios, industria, hotelería, comercio y grupos con múltiples sedes.</p>
            </div>
          </div>
          <p className="text-sm leading-6 text-slate-400">Aura Signature continúa en evolución. La disponibilidad, integraciones, mecanismos de firma y efectos legales se revisan caso por caso antes de ofrecerlos comercialmente.</p>
        </section>

        {/* CTA Demo Banner */}
        <div className="p-8 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-950 to-slate-900/40 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            ¿Listo para digitalizar tus contratos y firmas legales?
          </h2>
          <p className="max-w-md mx-auto text-xs md:text-sm text-slate-400 font-light leading-relaxed">
            Conoce las capacidades verificadas y el estado de desarrollo de Aura Signature.
          </p>
          <div>
            <a 
              href="/#contacto"
              className="inline-flex px-8 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-300 hover:to-cyan-400 active:scale-95 transition-all shadow-[0_4px_20px_rgba(20,184,166,0.15)] text-sm"
            >
              Solicitar información
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AuraSignaturePage;
