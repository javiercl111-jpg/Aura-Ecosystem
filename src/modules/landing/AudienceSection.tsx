import { motion } from 'framer-motion';
import { Landmark, Users, TrendingUp, Wrench, Coins, Terminal } from 'lucide-react';

interface AudienceCardProps {
  icon: React.ReactNode;
  role: string;
  benefits: string[];
  description: string;
}

const AudienceCard = ({ icon, role, benefits, description }: AudienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:border-slate-700/80 transition-colors duration-300"
    >
      <div className="space-y-4">
        <div className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
          {icon}
        </div>
        <h4 className="text-xl font-bold text-slate-100">{role}</h4>
        <p className="text-sm text-slate-400 leading-relaxed font-light">{description}</p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/80">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Impacto Clave</span>
        <div className="flex flex-wrap gap-1.5">
          {benefits.map((benefit, i) => (
            <span key={i} className="text-xs bg-slate-900/85 border border-slate-800 px-2 py-0.5 rounded text-cyan-400/90 font-medium">
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const AudienceSection = () => {
  const audiences = [
    {
      icon: <Landmark size={20} />,
      role: 'Dirección General',
      description: 'Obtén control unificado de todas tus empresas, centralizando decisiones corporativas con KPIs operacionales y financieros unificados.',
      benefits: ['Control Multi-empresa', 'Dashboard Ejecutivo', 'Toma de Decisiones'],
    },
    {
      icon: <Users size={20} />,
      role: 'Recursos Humanos',
      description: 'Centraliza desde nóminas complejas y control de horarios hasta expedientes digitales con firmas autógrafas digitales válidas.',
      benefits: ['Nómina Electrónica', 'Firmas de Contratos', 'Expediente Único'],
    },
    {
      icon: <TrendingUp size={20} />,
      role: 'Operaciones',
      description: 'Conecta la estrategia de la organización con la ejecución diaria de equipos locales y globales a través de flujos de trabajo.',
      benefits: ['Flujos Operativos', 'Trazabilidad de Procesos', 'Métricas de Avance'],
    },
    {
      icon: <Wrench size={20} />,
      role: 'Mantenimiento',
      description: 'Supervisa el ciclo de vida de los activos corporativos y administra órdenes de trabajo correctivas y preventivas con facilidad.',
      benefits: ['Control de Activos', 'Órdenes de Trabajo', 'Proveedores'],
    },
    {
      icon: <Coins size={20} />,
      role: 'Finanzas',
      description: 'Reduce costos por sistemas dispersos, audita presupuestos operativos y controla el impacto de nómina desde una sola consola.',
      benefits: ['Reducción de Silos', 'Control de Costos', 'Auditoría Total'],
    },
    {
      icon: <Terminal size={20} />,
      role: 'Tecnología',
      description: 'Integra soluciones de forma segura mediante arquitectura moderna preparada para Firebase, APIs robustas y control multi-tenant.',
      benefits: ['Seguridad granular', 'PWA & Firebase Ready', 'Integración Simple'],
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
            Perfiles de Organización
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
            Para quién es Aura Ecosystem
          </h3>
          <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed">
            Diseñamos soluciones transversales para toda la cadena de mando. Empodera a cada departamento con las herramientas adecuadas y alineadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <AudienceCard key={index} {...audience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
