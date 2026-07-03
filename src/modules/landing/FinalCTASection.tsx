import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden border-t border-slate-900 bg-slate-950 px-4 py-24 md:px-8"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative space-y-8 overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/20 p-8 backdrop-blur-md md:p-16"
        >
          <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Lleva tu empresa al siguiente nivel
          </span>

          <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-100 md:text-5xl lg:text-6xl">
            Construye una operación más conectada con Aura.
          </h3>

          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-slate-400 md:text-lg">
            Aura Ecosystem integra las áreas críticas de tu empresa en una
            experiencia moderna, segura y medible.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <a
              href="/#contacto"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold text-slate-950 shadow-[0_4px_20px_rgba(6,182,212,0.25)] transition-all hover:from-cyan-300 hover:to-blue-400 active:scale-95 sm:w-auto"
            >
              <Compass size={18} />
              Solicitar diagnóstico
              <ArrowRight size={16} />
            </a>
          </div>

          <p className="text-xs text-slate-500">
            Un consultor Aura revisará tu solicitud antes de compartir
            información comercial o demostraciones internas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;