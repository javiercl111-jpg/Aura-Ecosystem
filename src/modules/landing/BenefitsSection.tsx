import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Layers3, Compass, MessagesSquare, ArrowUpRight } from 'lucide-react';

const reasons = [
  { icon: Layers3, title: 'Soluciones con identidad propia', description: 'Cada producto responde a un área empresarial concreta. Su alcance y disponibilidad se presentan por separado, sin dar por concluidas integraciones pendientes.' },
  { icon: ShieldCheck, title: 'Seguridad desde el diseño', description: 'Promovemos controles de acceso, privacidad y auditoría como criterios de desarrollo. Las capacidades específicas requieren validación por producto.' },
  { icon: Compass, title: 'Evolución modular', description: 'El ecosistema contempla recursos humanos, mantenimiento, documentos e inteligencia, con iniciativas en distintas etapas de desarrollo.' },
  { icon: MessagesSquare, title: 'Atención a tus necesidades', description: 'Cuéntanos los retos de tu organización y te orientaremos sobre el alcance y el estado actual de las soluciones que te interesen.' },
];

const BenefitsSection = () => {
  const reducedMotion = useReducedMotion();
  return (
    <section id="beneficios" aria-labelledby="porque-aura" className="relative scroll-mt-64 overflow-hidden border-t border-slate-800 bg-gradient-to-b from-[#07152a] via-slate-950 to-slate-950 px-4 py-24 md:scroll-mt-32 md:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_15%,rgba(34,211,238,.10),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-[.2em] text-cyan-300">Nuestra manera de construir tecnología</span>
            <h2 id="porque-aura" className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl">¿Por qué <span className="bg-gradient-to-r from-cyan-200 to-blue-400 bg-clip-text text-transparent">Aura Nexus?</span></h2>
            <p className="mt-6 text-base leading-8 text-slate-300">Creamos soluciones empresariales con una visión modular, una identidad tecnológica consistente y una comunicación transparente sobre lo que está en desarrollo y lo que ya puede evaluarse.</p>
            <p className="mt-4 text-sm leading-7 text-slate-400">Nuestro enfoque combina necesidades reales de las organizaciones con criterios de seguridad, privacidad y evolución responsable. Ninguna certificación ni funcionalidad se presume disponible sin validación.</p>
            <a href="/#contacto" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">Cuéntanos qué necesita tu empresa <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, description }, index) => (
              <motion.article key={title} initial={reducedMotion ? false : { opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: .4, delay: index * .06 }} className="relative min-h-[218px] overflow-hidden rounded-2xl border border-cyan-300/15 bg-white/[.035] p-6">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300"><Icon size={23} aria-hidden="true" /></div>
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default BenefitsSection;
