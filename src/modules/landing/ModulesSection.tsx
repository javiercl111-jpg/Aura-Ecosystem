import { motion } from 'framer-motion';
import { Users, FileCheck, Brain, Wrench, LayoutDashboard, ArrowUpRight } from 'lucide-react';

interface ModuleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const ModuleCard = ({ icon, title, description, features, color }: ModuleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="glass-panel glass-panel-hover flex flex-col justify-between p-6 md:p-8 rounded-2xl relative overflow-hidden group"
    >
      {/* Light gradient highlight on group hover */}
      <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${color}`} />
      <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`} />

      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 group-hover:text-cyan-400 transition-colors">
            {icon}
          </div>
          <span className="text-slate-500 group-hover:text-slate-300 transition-colors">
            <ArrowUpRight size={18} />
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3 group-hover:text-white">
          {title}
        </h3>
        
        <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-6 font-light">
          {description}
        </p>
      </div>

      <div className="border-t border-slate-800/80 pt-4 mt-auto">
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="text-xs md:text-sm text-slate-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/80" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ModulesSection = () => {
  const modules = [
    {
      icon: <Users size={22} />,
      title: 'Aura HCM',
      description: 'Gestión integral del capital humano. Centraliza nóminas, control de asistencia, evaluación del desempeño y beneficios financieros en un entorno seguro.',
      features: ['Gestión de Nóminas y Beneficios', 'Control Horario Integrado', 'Desempeño y Clima Laboral'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FileCheck size={22} />,
      title: 'Aura Signature',
      description: 'Solución de firma electrónica avanzada y gestión de contratos con validez legal. Optimiza el ciclo de vida de los documentos sin salir de tu flujo de trabajo.',
      features: ['Firma Avanzada y Biométrica', 'Flujos de Firma Multi-rol', 'Auditoría Criptográfica Completa'],
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: <Brain size={22} />,
      title: 'Aura Intelligence',
      description: 'IA corporativa para análisis financiero predictivo, automatización de procesos operativos y soporte inteligente basado en datos del negocio.',
      features: ['Predicción de Flujo de Caja', 'Asistentes de IA de Contexto', 'Automatización de Tareas'],
      color: 'from-violet-500 to-blue-500',
    },
    {
      icon: <Wrench size={22} />,
      title: 'Aura Maintenance OS',
      description: 'Plataforma para el mantenimiento preventivo y correctivo de activos y facilidades físicas. Asegura la continuidad operativa de tus instalaciones.',
      features: ['Órdenes de Trabajo Inteligentes', 'Inventario de Activos y SLAs', 'Mantenimiento Preventivo Planificado'],
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: <LayoutDashboard size={22} />,
      title: 'Aura Control Center',
      description: 'La consola de administración global para supervisar métricas de rendimiento, controlar el tenant corporativo y auditar accesos en tiempo real.',
      features: ['Monitoreo Multi-tenant y Finanzas', 'Gestión de Permisos y Roles', 'Logs de Auditoría Corporativos'],
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="modules-section" className="py-24 px-4 md:px-8 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
            Módulos del Ecosistema
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
            Una plataforma modular y conectada
          </h3>
          <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed">
            Elige los módulos que tu organización necesita e intégralos de forma nativa para lograr sinergia operativa, financiera y de gestión de personas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, index) => (
            <div key={index} className={index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <ModuleCard {...mod} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
