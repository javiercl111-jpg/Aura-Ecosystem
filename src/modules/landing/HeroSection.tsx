import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CheckCircle2, Layers3, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  { name: 'Aura HCM', category: 'Personas y asistencia', path: '/aura-hcm', accent: 'from-cyan-400 to-blue-500', code: '01' },
  { name: 'Maintenance OS', category: 'Activos y operaciones', path: '/aura-maintenance-os', accent: 'from-blue-400 to-indigo-500', code: '02' },
  { name: 'Aura Signature', category: 'Documentos y firmas', path: '/aura-signature', accent: 'from-teal-400 to-cyan-500', code: '03' },
];

const HeroSection = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#030915] px-4 pb-24 pt-16 md:px-8 md:pb-28 md:pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,.055)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <motion.div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-48 h-[520px] w-[520px] rounded-full bg-blue-600/15 blur-[110px]" animate={reducedMotion ? undefined : { x: [0, -45, 0], y: [0, 28, 0], scale: [1, 1.12, 1] }} transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div aria-hidden="true" className="pointer-events-none absolute -left-52 top-48 h-[480px] w-[480px] rounded-full bg-cyan-500/10 blur-[120px]" animate={reducedMotion ? undefined : { x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} />

      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" animate={reducedMotion ? undefined : { opacity: [0.3, 1, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold tracking-[.14em] text-cyan-300 uppercase">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Tecnología empresarial · México
          </div>
          <img src="/aura-logo-oficial.png" alt="Aura Nexus" className="mb-8 h-20 w-auto object-contain sm:h-24 lg:h-28" />
          <h1 id="hero-title" className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            El siguiente nivel de <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">gestión empresarial.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
            Conoce el ecosistema Aura Nexus: soluciones en desarrollo para conectar la gestión de personas, el mantenimiento, los documentos y la inteligencia empresarial.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
              Solicitar información <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#modulos" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition-colors hover:border-cyan-400 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
              Explorar soluciones <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><Layers3 size={16} className="text-cyan-400" aria-hidden="true" /> Visión de ecosistema</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-cyan-400" aria-hidden="true" /> Desarrollo con controles</span>
          </div>
        </motion.div>

        <motion.div initial={reducedMotion ? false : { opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.12 }} className="relative">
          <div aria-hidden="true" className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/15 via-blue-700/5 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-700/70 bg-slate-950/85 p-5 shadow-[0_35px_100px_rgba(0,0,0,.45)] sm:p-7">
            <div className="mb-7 flex items-center justify-between border-b border-slate-800 pb-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-cyan-400">Aura Nexus / Ecosystem</p>
                <h2 className="mt-2 text-xl font-semibold text-white">Explora nuestras soluciones</h2>
              </div>
              <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-2 text-cyan-300"><Layers3 size={22} aria-hidden="true" /></div>
            </div>
            <div className="mb-5 flex items-center gap-2 text-xs font-semibold text-cyan-300"><span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70 motion-reduce:animate-none" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" /></span> Ecosistema Aura · Visión conceptual <span className="ml-auto text-slate-500">Vista conceptual</span></div>
            <div aria-label="Representación abstracta animada del ecosistema Aura" className="relative mb-6 flex h-44 items-center justify-around overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#030b1d] px-3 sm:h-52 sm:px-6">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,.16),transparent_60%)]" />
              <motion.div aria-hidden="true" className="absolute left-[10%] right-[10%] top-1/2 h-px origin-center bg-gradient-to-r from-transparent via-cyan-400 to-transparent" animate={reducedMotion ? undefined : { scaleX: [0.4, 1, 0.4], opacity: [0.3, 1, 0.3] }} transition={{ duration: 3.5, ease: 'easeInOut', repeat: Infinity }} />
              {[
                { src: '/aura-hcm.png', label: 'HCM' },
                { src: '/aura-maintenance.png', label: 'Maintenance' },
                { src: '/aura-signature.png', label: 'Signature' }
              ].map((visual, index) => (
                <motion.div key={visual.label} className="relative z-10 flex w-[27%] flex-col items-center gap-3" animate={reducedMotion ? undefined : { y: [0, index === 1 ? -13 : 10, 0] }} transition={{ duration: 3.5 + index * 0.6, ease: 'easeInOut', repeat: Infinity }}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/40 bg-slate-950/95 p-2 shadow-[0_0_28px_rgba(34,211,238,.23)] sm:h-20 sm:w-20"><img src={visual.src} alt="" className="max-h-full max-w-full object-contain" /></div>
                  <span className="text-[10px] font-semibold tracking-wide text-slate-300 sm:text-xs">{visual.label}</span>
                </motion.div>
              ))}
              <motion.div aria-hidden="true" className="absolute bottom-3 left-4 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" animate={reducedMotion ? undefined : { width: ['12%', '80%', '12%'] }} transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }} style={reducedMotion ? { width: '80%' } : undefined} />
            </div>
            <div className="space-y-3">
              {solutions.map((item, index) => (
                <motion.div key={item.path} initial={reducedMotion ? false : { opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + index * 0.15, duration: 0.55 }} whileHover={reducedMotion ? undefined : { x: 5 }}>
                <Link to={item.path} className="group flex items-center gap-4 rounded-xl border border-slate-800 bg-white/[.025] p-4 transition-all hover:border-cyan-400/40 hover:bg-white/[.05] focus-visible:outline-2 focus-visible:outline-cyan-400">
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} text-sm font-bold text-slate-950`}>{item.code}</span>
                  <span className="min-w-0 flex-1"><span className="block text-sm font-semibold text-white">{item.name}</span><span className="mt-1 block text-xs text-slate-400">{item.category}</span></span>
                  <ArrowUpRight size={18} className="text-slate-500 transition-colors group-hover:text-cyan-300" aria-hidden="true" />
                </Link>
              </motion.div>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-2 border-t border-slate-800 pt-5 text-xs leading-5 text-slate-400">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-400" aria-hidden="true" />
              El alcance y la disponibilidad se confirman de forma individual para cada solución.
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">Visualización conceptual · Sin capturas ni información interna de los sistemas</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
