import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 p-8 md:p-16 rounded-3xl border border-slate-800/80 bg-slate-900/20 backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Lleva tu empresa al siguiente nivel
          </span>

          <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
            Construye una operación más conectada con Aura.
          </h3>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-400 font-light leading-relaxed">
            Aura Ecosystem integra las áreas críticas de tu empresa en una experiencia moderna, segura y medible.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="mailto:contacto@aura.com"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 active:scale-95 transition-all shadow-[0_4px_20px_rgba(6,182,212,0.25)] flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Contactar a Aura
              <ArrowRight size={16} />
            </a>
          </div>

          <p className="text-xs text-slate-500">
            Nuestros consultores corporativos se pondrán en contacto contigo en menos de 24 horas hábiles.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
