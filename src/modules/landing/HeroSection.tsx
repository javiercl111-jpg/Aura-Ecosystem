import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Database } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
    },
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.45, 0.3],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  const scrollToModules = () => {
    const modulesSection = document.getElementById('modules-section');
    if (modulesSection) {
      modulesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden bg-slate-950">
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70" />
      
      {/* Glowing backdrop elements */}
      <motion.div 
        variants={glowVariants}
        animate="animate"
        className="absolute top-1/4 left-1/4 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none"
      />
      <motion.div 
        variants={glowVariants}
        animate="animate"
        className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none"
        style={{ animationDelay: '3s' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs md:text-sm font-medium backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Sparkles size={14} className="animate-pulse" />
            <span>El Ecosistema Corporativo del Futuro</span>
          </motion.div>

          {/* Logo in Hero */}
          <motion.div 
            variants={itemVariants} 
            className="flex justify-center pt-2"
          >
            <img 
              src="/aura-logo-oficial.png" 
              alt="Aura Logo" 
              className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_20px_rgba(6,182,212,0.25)]"
            />
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400"
          >
            Aura Ecosystem
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants} 
            className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed font-light"
          >
            Un ecosistema empresarial para conectar personas, operaciones, documentos e inteligencia en una sola plataforma.
          </motion.p>

          {/* Call to Actions */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 active:scale-95 transition-all shadow-[0_4px_20px_rgba(6,182,212,0.25)] flex items-center justify-center gap-2"
            >
              Solicitar demo
              <ArrowRight size={18} />
            </a>
            
            <button
              onClick={scrollToModules}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-slate-300 border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 hover:text-white active:scale-95 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <Database size={18} className="text-cyan-400" />
              Explorar módulos
            </button>
          </motion.div>

          {/* Dashboard Preview / Floating elements decoration */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 relative rounded-2xl border border-slate-800/80 bg-slate-900/20 backdrop-blur-sm p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
            <div className="rounded-xl overflow-hidden bg-slate-950/80 border border-slate-900 p-4 md:p-8 aspect-[16/9] flex items-center justify-center relative">
              {/* Decorative graphic depicting module integration */}
              <div className="absolute inset-0 flex items-center justify-center opacity-25">
                <div className="w-[80%] h-[80%] border border-cyan-500/20 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="w-[60%] h-[60%] border border-blue-500/20 rounded-full absolute animate-[spin_40s_linear_infinite_reverse]" />
                <div className="w-[40%] h-[40%] border border-slate-700/20 rounded-full absolute" />
              </div>
              
              <div className="relative z-10 text-center space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  <Database size={24} />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">Plataforma Unificada</h3>
                  <p className="text-xs text-slate-400 max-w-sm">
                    HCM • Firma Electrónica • Inteligencia Artificial • Órdenes de Trabajo • Control Operativo
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
