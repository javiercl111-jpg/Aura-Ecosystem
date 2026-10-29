import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, Users, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuraHCMPage = () => {
  const reducedMotion = useReducedMotion();
  return (
    <section className="relative min-h-screen pt-8 pb-24 px-4 md:px-8 bg-slate-950 overflow-hidden flex flex-col justify-center">
      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-8">
        {/* Back Link */}
        <Link to="/#modulos" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-cyan-400 transition-colors uppercase tracking-wider">
          <ArrowLeft size={14} />
          Volver al Ecosistema
        </Link>

        {/* Hero editorial: identidad HCM, fotografía humana y tecnología abstracta. */}
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-cyan-400/25 bg-[#06122b] shadow-[0_30px_95px_rgba(0,0,0,.48)]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=82"
              alt="Equipo de profesionales colaborando en una oficina"
              className="h-full w-full object-cover object-center"
              decoding="async" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#031022]/95 via-[#031022]/88 to-[#031022]/35 md:to-[#031022]/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#031022]/65 via-transparent to-transparent" />
          </div>
          <motion.div aria-hidden="true" className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-cyan-400/15 blur-[90px]" animate={reducedMotion ? undefined : { x: [0, 65, 0], opacity: [.35, .8, .35] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" animate={reducedMotion ? undefined : { opacity: [.25, 1, .25], scaleX: [.75, 1, .75] }} transition={{ duration: 4, repeat: Infinity }} />
          <div className="relative grid min-h-[510px] items-center gap-8 px-7 py-12 md:grid-cols-[1.15fr_.85fr] md:px-14 md:py-16">
            <motion.div initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-cyan-200">Aura HCM · Recursos Humanos</span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">El talento impulsa <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-sky-500 bg-clip-text text-transparent">grandes resultados.</span></h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">Una visión para simplificar la administración de personal, organizar jornadas y dar visibilidad al trabajo de RRHH en empresas mexicanas. Solución en desarrollo.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/#contacto" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-300">Solicitar información</Link>
                <a href="#capacidades-hcm" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-cyan-300/45 bg-slate-950/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-900/60">Explorar HCM</a>
              </div>
            </motion.div>
            <div className="relative flex items-center justify-center md:justify-end">
              <motion.div aria-hidden="true" className="absolute h-64 w-64 rounded-full border border-cyan-400/30 shadow-[0_0_80px_rgba(34,211,238,.15)]" animate={reducedMotion ? undefined : { scale: [1, 1.1, 1], opacity: [.4, .85, .4] }} transition={{ duration: 5.5, repeat: Infinity }} />
              <motion.img src="/Logo%20Aura%20HCM%20oficial.png" alt="Logotipo oficial Aura HCM" className="relative z-10 max-h-56 w-full max-w-[280px] object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,.55)]" animate={reducedMotion ? undefined : { y: [0, -9, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />
            </div>
          </div>
          <div className="relative flex flex-wrap gap-2 border-t border-cyan-300/20 bg-[#031022]/65 px-7 py-5 text-xs font-semibold text-cyan-100 backdrop-blur-sm md:px-14">
            {['Personas y organización', 'Cultura y colaboración', 'Gestión de RRHH'].map(label => (
              <motion.span key={label} whileHover={reducedMotion ? undefined : { y: -4, scale: 1.04 }} transition={{ duration: .22 }} className="rounded-full border border-cyan-300/25 bg-cyan-300/5 px-4 py-2">{label}</motion.span>
            ))}
          </div>
        </div>

        {/* Details & Highlights */}
        <div id="capacidades-hcm" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
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

        {/* Contexto comercial: sin promesas de disponibilidad ni métricas sin verificar. */}
        <section aria-labelledby="valor-hcm" className="space-y-6">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-cyan-300">Soluciones para retos reales</p><h2 id="valor-hcm" className="mt-3 text-3xl font-semibold text-white md:text-4xl">Organiza personas, asistencia y jornadas con mayor claridad</h2><p className="mt-4 leading-7 text-slate-300">Aura HCM busca conectar a las personas y los procesos de Recursos Humanos en una experiencia más clara. Las funciones de asistencia y horarios continúan en desarrollo y validación; su alcance comercial se confirmará antes de ofrecerlas.</p></div>
          <div className="grid gap-5 md:grid-cols-3"><div className="rounded-2xl border border-cyan-400/20 bg-slate-900/50 p-6"><h3 className="mb-4 text-lg font-semibold text-white">Retos de las empresas</h3><ul className="space-y-3 text-sm leading-6 text-slate-300"><li className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />Control de asistencia disperso entre distintas herramientas</li><li className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />Dificultad para coordinar jornadas y horarios flexibles</li><li className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />Poca visibilidad de incidencias para el equipo de RRHH</li></ul></div><div className="rounded-2xl border border-cyan-400/20 bg-slate-900/50 p-6"><h3 className="mb-4 text-lg font-semibold text-white">Áreas de la solución</h3><ul className="space-y-3 text-sm leading-6 text-slate-300"><li className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />Administración de personal y estructura organizacional</li><li className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />Registro de asistencia y seguimiento de jornadas</li><li className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />Horarios flexibles, incidencias y reportes operativos</li></ul></div><div className="rounded-2xl border border-cyan-400/20 bg-slate-900/50 p-6"><h3 className="mb-4 text-lg font-semibold text-white">¿Para quién está pensado?</h3><ul className="space-y-3 text-sm leading-6 text-slate-300"><li className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />Áreas de Recursos Humanos y responsables de personal en empresas de distintos tamaños</li><li className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />Hoteles, comercios, servicios, industrias y grupos empresariales</li><li className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />Organizaciones con múltiples sedes, turnos u horarios operativos variados</li></ul></div></div>
          <p className="text-sm leading-6 text-slate-400">El producto continúa evolucionando. Las funciones específicas, disponibilidad, integraciones y condiciones de uso requieren confirmación antes de contratar.</p>
        </section>

        {/* CTA Demo Banner */}
        <div className="p-8 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-950 to-slate-900/40 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            ¿Tu empresa necesita mayor claridad en asistencia y gestión de personal?
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
