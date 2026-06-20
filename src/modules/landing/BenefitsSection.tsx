import { motion } from 'framer-motion';
import { Unlink, Eye, Zap, ShieldCheck, Layers, Network } from 'lucide-react';

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitItem = ({ icon, title, description }: BenefitItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className="flex gap-4 p-4 rounded-xl hover:bg-slate-900/40 transition-colors duration-300"
    >
      <div className="flex-shrink-0 text-cyan-400 mt-1">
        <div className="p-2.5 rounded-lg bg-cyan-950/50 border border-cyan-500/20">
          {icon}
        </div>
      </div>
      <div className="space-y-1">
        <h4 className="text-lg font-semibold text-slate-100">{title}</h4>
        <p className="text-sm text-slate-400 leading-relaxed font-light">{description}</p>
      </div>
    </motion.div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Unlink size={20} />,
      title: 'Menos sistemas aislados',
      description: 'Consolida operaciones financieras, talento y firma de documentos en una sola plataforma integrada que elimina silos informativos.',
    },
    {
      icon: <Eye size={20} />,
      title: 'Más trazabilidad',
      description: 'Auditorías criptográficas integradas y trazabilidad completa de cada acción y documento firmado dentro del ecosistema.',
    },
    {
      icon: <Zap size={20} />,
      title: 'Automatización operativa',
      description: 'Optimiza la ejecución de procesos automatizando flujos de trabajo repetitivos y validaciones mediante inteligencia artificial.',
    },
    {
      icon: <ShieldCheck size={20} />,
      title: 'Seguridad y auditoría',
      description: 'Seguridad de grado enterprise con logs inmutables, encriptación en tránsito y reposo, y estricto cumplimiento normativo.',
    },
    {
      icon: <Layers size={20} />,
      title: 'Visión centralizada por empresa',
      description: 'Visualiza indicadores clave de rendimiento financiero y operativo consolidados en un panel único de control directivo.',
    },
    {
      icon: <Network size={20} />,
      title: 'Escalabilidad multi-tenant',
      description: 'Arquitectura diseñada para soportar esquemas corporativos multi-empresa y divisiones, aislando datos de forma óptima.',
    },
  ];

  return (
    <section id="beneficios" className="py-24 px-4 md:px-8 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Soft gradient spot */}
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text block */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest block">
              Beneficios Clave
            </span>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              ¿Por qué elegir Aura Ecosystem?
            </h3>
            <p className="text-base text-slate-400 font-light leading-relaxed">
              Diseñado para resolver las ineficiencias de operar con sistemas desconectados. Proporcionamos una arquitectura integrada que impulsa el control de nóminas, recursos operativos y auditorías contractuales en un solo portal.
            </p>
            <div className="pt-4 border-t border-slate-900 flex items-center gap-4">
              <div className="text-left">
                <span className="block text-3xl font-bold text-cyan-400">99.9%</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">Uptime Garantizado</span>
              </div>
              <div className="h-8 w-[1px] bg-slate-800" />
              <div className="text-left">
                <span className="block text-3xl font-bold text-cyan-400">40%</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">Eficiencia Operativa</span>
              </div>
            </div>
          </div>

          {/* Grid layout of benefits */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} {...benefit} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
