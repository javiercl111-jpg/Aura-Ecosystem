import { motion } from 'framer-motion';
import { Rocket, Zap, Brain, Link } from 'lucide-react';

interface UpcomingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const UpcomingCard = ({ icon, title, description }: UpcomingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/30 to-blue-500/30 opacity-60" />
      
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:text-cyan-300 transition-colors">
            {icon}
          </div>
          <span className="px-2.5 py-0.5 text-[9px] font-mono tracking-widest uppercase rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold shadow-[0_0_10px_rgba(6,182,212,0.05)]">
            Próximamente
          </span>
        </div>

        <h4 className="text-base font-bold text-slate-100 mb-2 group-hover:text-white transition-colors">
          {title}
        </h4>
        <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const UpcomingSection = () => {
  const items = [
    {
      icon: <Rocket size={20} />,
      title: 'Nuevos Módulos Empresariales',
      description: 'Herramientas de próxima generación diseñadas para coordinar flujos de trabajo específicos sin fricciones operativas.',
    },
    {
      icon: <Zap size={20} />,
      title: 'Automatización Avanzada',
      description: 'Procesamiento inteligente de tareas repetitivas y disparadores automáticos transversales en todo el ecosistema.',
    },
    {
      icon: <Brain size={20} />,
      title: 'Inteligencia de Negocio Expandida',
      description: 'Modelos analíticos avanzados de predicción de datos y asistencia en lenguaje natural con contexto corporativo.',
    },
    {
      icon: <Link size={20} />,
      title: 'Integraciones Estratégicas',
      description: 'Conexión transparente con plataformas líderes de la industria para expandir la capacidad y sinergia de tu tenant.',
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest block">
            Evolución Continua
          </span>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            El ecosistema Aura continúa creciendo.
          </h3>
          <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
            Aura está diseñado como una plataforma empresarial modular lista para expandirse junto con las necesidades operativas y estratégicas de tu organización.
          </p>
          <p className="max-w-2xl mx-auto text-xs md:text-sm text-slate-500 font-light leading-relaxed">
            Nuevas capacidades, automatizaciones, integraciones e inteligencia empresarial continúan desarrollándose constantemente para ampliar el alcance de nuestras soluciones de negocio.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <UpcomingCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default UpcomingSection;
