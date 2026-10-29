import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, LineChart, Key, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuraControlCenterPage = () => {
  const reducedMotion = useReducedMotion();
  return (
    <section className="relative min-h-screen pt-12 pb-24 px-4 md:px-8 bg-slate-950 overflow-hidden flex flex-col justify-center">
      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12">
        {/* Back Link */}
        <Link to="/#modulos" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-cyan-400 transition-colors uppercase tracking-wider">
          <ArrowLeft size={14} />
          Volver al Ecosistema
        </Link>

        <div className="relative isolate overflow-hidden rounded-[2rem] border border-emerald-400/30 bg-[#041c24] shadow-[0_30px_90px_rgba(0,0,0,.4)]">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(16,185,129,.23),transparent_60%),linear-gradient(to_right,rgba(45,212,191,.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,212,191,.07)_1px,transparent_1px)] bg-[size:auto,54px_54px,54px_54px]" />
          <motion.div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-16 h-96 w-96 rounded-full bg-emerald-400/20 blur-[95px]" animate={reducedMotion ? undefined : { x:[0,-35,0], opacity:[.3,.85,.3] }} transition={{duration:8,repeat:Infinity}} />
          <div className="relative grid min-h-[480px] items-center gap-10 p-8 md:grid-cols-[1.2fr_.8fr] md:p-14">
            <motion.div initial={reducedMotion ? false : {opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
              <span className="inline-flex rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-emerald-200">Aura Control Center · Gobierno del ecosistema</span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">Una visión conectada. <span className="bg-gradient-to-r from-emerald-200 via-teal-300 to-cyan-300 bg-clip-text text-transparent">Un mejor control.</span></h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">Conoce nuestra visión de administración, supervisión y gobierno coordinado del ecosistema Aura.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Link to="/#contacto" className="inline-flex min-h-12 items-center rounded-xl bg-emerald-400 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-300">Solicitar información</Link><a href="#control-detalles" className="inline-flex min-h-12 items-center rounded-xl border border-emerald-300/40 px-6 py-3 font-semibold text-white hover:bg-white/5">Conocer la solución</a></div>
            </motion.div>
            <div className="relative flex items-center justify-center">
              <motion.div aria-hidden="true" className="absolute h-72 w-72 rounded-full border border-emerald-300/30 bg-emerald-300/5" animate={reducedMotion ? undefined : {scale:[1,1.08,1],opacity:[.4,.85,.4]}} transition={{duration:5,repeat:Infinity}} />
              <motion.img src="/aura-control-center.png" alt="Aura Control Center" className="relative z-10 max-h-56 w-full max-w-[280px] object-contain drop-shadow-[0_18px_36px_rgba(0,0,0,.5)]" animate={reducedMotion ? undefined : {y:[0,-9,0]}} transition={{duration:4.5,repeat:Infinity}} />
            </div>
          </div>
          <div className="relative flex flex-wrap gap-2 border-t border-emerald-300/20 bg-[#03151c]/70 px-8 py-5 text-xs font-semibold text-emerald-100 md:px-14">
            {['Supervisión', 'Permisos', 'Auditoría'].map(x => <span key={x} className="rounded-full border border-emerald-300/25 bg-emerald-300/5 px-4 py-2">{x}</span>)}
          </div>
        </div>

        {/* Details & Highlights */}
        <div id="control-detalles" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm md:text-base"><p>Aura Control Center es una solución en evolución orientada a centralizar criterios de administración, visibilidad y supervisión de los productos del ecosistema Aura.</p><p>El alcance real de permisos, auditorías, gestión de recursos e integraciones se verificará antes de ofrecer cualquier capacidad comercial.</p></div>
          {/* Right Column: Highlights List */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-3">
              Capacidades Clave
            </h3>
            
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <LineChart size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Consumo y Finanzas Multi-tenant</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Gestión y seguimiento de recursos previstos, sujetos a validación por entorno.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <Key size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Permisos y Roles Avanzados</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Administración de roles y políticas de acceso conforme a controles que sean verificados.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <Terminal size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Logs de Auditoría Corporativos</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Trazabilidad y auditoría como objetivos de gobierno, pendientes de validación integral.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section aria-labelledby="control-audiencias" className="space-y-6"><div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-emerald-300">Administración y supervisión</p><h2 id="control-audiencias" className="mt-3 text-3xl font-semibold text-white md:text-4xl">Pensado para operaciones que necesitan coordinación</h2></div><div className="grid gap-5 md:grid-cols-3"><div className="rounded-2xl border border-emerald-400/20 bg-slate-900/50 p-6"><h3 className="mb-3 text-lg font-semibold text-white">Retos</h3><p className="text-sm leading-7 text-slate-300">Distintos productos, múltiples responsables y necesidad de información clara sobre la operación.</p></div><div className="rounded-2xl border border-emerald-400/20 bg-slate-900/50 p-6"><h3 className="mb-3 text-lg font-semibold text-white">Áreas previstas</h3><p className="text-sm leading-7 text-slate-300">Visibilidad de recursos, roles, administración y seguimiento de actividades, sujetos a validación.</p></div><div className="rounded-2xl border border-emerald-400/20 bg-slate-900/50 p-6"><h3 className="mb-3 text-lg font-semibold text-white">¿A quién podría servir?</h3><p className="text-sm leading-7 text-slate-300">Dirección, TI, responsables de operaciones y administradores de organizaciones con diversas sedes o unidades.</p></div></div></section>

        {/* CTA Demo Banner */}
        <div className="p-8 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-950 to-slate-900/40 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            ¿Listo para centralizar el control y gobierno de tu tecnología corporativa?
          </h2>
          <p className="max-w-md mx-auto text-xs md:text-sm text-slate-400 font-light leading-relaxed">
            Solicita información sobre la evolución de Control Center y sus capacidades verificadas.
          </p>
          <div>
            <a 
              href="/#contacto"
              className="inline-flex px-8 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 active:scale-95 transition-all shadow-[0_4px_20px_rgba(16,185,129,0.15)] text-sm"
            >
              Solicitar información
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AuraControlCenterPage;
