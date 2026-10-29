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
          <h1 id="hero-title" className="max-w-3xl text-4xl font-semibold leading-[1.09] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Conecta tu empresa con una <span className="bg-gradient-to-r from-cyan-200 via-sky-400 to-blue-500 bg-clip-text text-transparent">nueva visión digital.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
            Explora las soluciones Aura Nexus para personas, mantenimiento, documentos e inteligencia empresarial. Cada producto evoluciona a su propio ritmo y presenta su disponibilidad por separado.
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

        <motion.div initial={reducedMotion ? false : { opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.12 }} className="relative min-w-0">
          <div aria-hidden="true" className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-cyan-500/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/30 bg-[#06132b] p-4 shadow-[0_35px_100px_rgba(0,0,0,.45)] sm:p-6">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(103,232,249,.065)_1px,transparent_1px),linear-gradient(to_bottom,rgba(103,232,249,.065)_1px,transparent_1px)] bg-[size:30px_30px]" />
            <div className="relative mb-5 flex items-center justify-between gap-3 border-b border-cyan-300/20 pb-4">
              <div><p className="text-[10px] font-semibold uppercase tracking-[.24em] text-cyan-300">Aura Nexus / Ecosystem</p><h2 className="mt-2 text-lg font-semibold text-white sm:text-xl">Un ecosistema. Múltiples posibilidades.</h2></div>
              <span className="shrink-0 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold text-cyan-200">Visión conceptual</span>
            </div>
            <div className="relative mx-auto mb-5 aspect-square w-full max-w-[470px] overflow-hidden rounded-full">
              <div aria-hidden="true" className="absolute inset-[6%] rounded-full border border-cyan-400/25 shadow-[inset_0_0_55px_rgba(34,211,238,.08)]" />
              <div aria-hidden="true" className="absolute inset-[18%] rounded-full border border-dashed border-violet-300/30" />
              <div aria-hidden="true" className="absolute inset-[31%] rounded-full border border-cyan-300/30 bg-cyan-300/[.03]" />
              <div aria-hidden="true" className="absolute inset-x-[8%] top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
              <div aria-hidden="true" className="absolute inset-y-[8%] left-1/2 w-px bg-gradient-to-b from-transparent via-violet-400/50 to-transparent" />
              <div className="absolute inset-[34%] z-10 flex items-center justify-center rounded-full border border-cyan-200/50 bg-[#06152b] p-2 shadow-[0_0_42px_rgba(34,211,238,.22)]">
                <motion.img src="/aura-logo-oficial.png" alt="Aura Nexus: núcleo del ecosistema" className="max-h-full max-w-full object-contain" animate={reducedMotion ? undefined : { scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
              </div>
              {[
                { label: 'HCM', src: '/aura-hcm.png', href: '/aura-hcm', pos: 'left-[5%] top-[37%]', tone: 'border-cyan-300/50' },
                { label: 'Maintenance', src: '/aura-maintenance.png', href: '/aura-maintenance-os', pos: 'right-[5%] top-[37%]', tone: 'border-blue-300/50' },
                { label: 'Signature', src: '/aura-signature.png', href: '/aura-signature', pos: 'left-[20%] bottom-[8%]', tone: 'border-teal-300/50' },
                { label: 'Intelligence', src: '/aura-intelligence.png', href: '/aura-intelligence', pos: 'right-[20%] bottom-[8%]', tone: 'border-violet-300/50' },
                { label: 'Control', src: '/aura-control-center.png', href: '/aura-control-center', pos: 'left-1/2 top-[2%] -translate-x-1/2', tone: 'border-emerald-300/50' },
              ].map((node) => (
                <Link key={node.href} to={node.href} aria-label={`Explorar Aura ${node.label}`} className={`group absolute z-20 flex w-[25%] max-w-28 flex-col items-center gap-1.5 ${node.pos} focus-visible:rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300`}>
                  <span className={`flex aspect-square w-[65%] items-center justify-center rounded-2xl border ${node.tone} bg-[#071329]/95 p-1.5 shadow-[0_0_20px_rgba(34,211,238,.12)] transition-transform duration-200 group-hover:scale-110 sm:p-2`}>
                    <img src={node.src} alt="" loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />
                  </span>
                  <span className="rounded-md bg-slate-950/80 px-1.5 py-0.5 text-center text-[9px] font-semibold text-slate-200 sm:text-[11px]">{node.label}</span>
                </Link>
              ))}
            </div>
            <div className="relative grid grid-cols-2 gap-2 sm:grid-cols-3">
              <a href="#modulos" className="col-span-1 inline-flex min-h-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-2 text-center text-xs font-semibold text-cyan-100 hover:bg-cyan-400/20">Explorar módulos</a>
              <a href="#proximamente" className="col-span-1 inline-flex min-h-11 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-400/10 px-2 text-center text-xs font-semibold text-violet-100 hover:bg-violet-400/20">Próximamente</a>
              <a href="#contacto" className="col-span-2 inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-600 bg-slate-900 px-2 text-center text-xs font-semibold text-white hover:border-cyan-400/50 sm:col-span-1">Contacto</a>
            </div>
            <p className="relative mt-4 text-center text-[11px] leading-5 text-slate-400">Representación conceptual. La disponibilidad de cada solución se confirma individualmente.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
