import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ModuleCardProps {
  logoUrl: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  color: string;
}

const ModuleCard = ({ logoUrl, title, shortDescription, description, features, color }: ModuleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="glass-panel glass-panel-hover flex flex-col justify-between p-6 md:p-8 rounded-2xl relative overflow-hidden group min-h-[480px]"
    >
      {/* Light gradient highlight on group hover */}
      <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${color}`} />
      <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`} />

      <div>
        <div className="flex justify-between items-start mb-6">
          {/* Logo container wrapper for uniform alignment - Increased size */}
          <div className="flex items-center justify-center p-3 rounded-2xl bg-slate-950/80 border border-slate-800/60 w-[72px] h-[72px] md:w-[88px] md:h-[88px] lg:w-[100px] lg:h-[100px] overflow-hidden shadow-inner group-hover:border-cyan-500/30 transition-colors">
            <img 
              src={logoUrl} 
              alt={`${title} Logo`} 
              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <span className="text-slate-500 group-hover:text-slate-300 transition-colors pt-2">
            <ArrowUpRight size={18} />
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-1 group-hover:text-white transition-colors">
          {title}
        </h3>
        
        <p className="text-xs font-semibold text-cyan-400 mb-4 tracking-wide uppercase">
          {shortDescription}
        </p>
        
        <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
          {description}
        </p>
      </div>

      <div className="space-y-4 mt-auto">
        <div className="border-t border-slate-800/80 pt-4">
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="text-xs md:text-sm text-slate-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/80" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Status and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-900/50">
          <span className="px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold shadow-[0_0_10px_rgba(16,185,129,0.05)]">
            Disponible
          </span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors cursor-pointer">
            Conocer más
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const ModulesSection = () => {
  const modules = [
    {
      logoUrl: '/aura-hcm.png',
      title: 'Aura HCM',
      shortDescription: 'Gestión integral de talento humano.',
      description: 'Gestión integral del capital humano. Centraliza nóminas, control de asistencia, evaluación del desempeño y beneficios financieros en un entorno seguro.',
      features: ['Gestión de Nóminas y Beneficios', 'Control Horario Integrado', 'Desempeño y Clima Laboral'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      logoUrl: '/aura-signature.png',
      title: 'Aura Signature',
      shortDescription: 'Firma electrónica y gestión documental.',
      description: 'Solución de firma electrónica avanzada y gestión de contratos con validez legal. Optimiza el ciclo de vida de los documentos sin salir de tu flujo de trabajo.',
      features: ['Firma Avanzada y Biométrica', 'Flujos de Firma Multi-rol', 'Auditoría Criptográfica Completa'],
      color: 'from-cyan-500 to-teal-500',
    },
    {
      logoUrl: '/aura-intelligence.png',
      title: 'Aura Intelligence',
      shortDescription: 'Asistente empresarial impulsado por IA.',
      description: 'IA corporativa para análisis financiero predictivo, automatización de procesos operativos y soporte inteligente basado en datos del negocio.',
      features: ['Soporte inteligente', 'Búsqueda contextual', 'Automatización operativa'],
      color: 'from-violet-500 to-blue-500',
    },
    {
      logoUrl: '/aura-maintenance.png',
      title: 'Aura Maintenance OS',
      shortDescription: 'Gestión inteligente de mantenimiento y operaciones.',
      description: 'Plataforma para el mantenimiento preventivo y correctivo de activos y facilidades físicas. Asegura la continuidad operativa de tus instalaciones.',
      features: ['Órdenes de Trabajo Inteligentes', 'Inventario de Activos y SLAs', 'Mantenimiento Preventivo Planificado'],
      color: 'from-amber-500 to-orange-500',
    },
    {
      logoUrl: '/aura-control-center.png',
      title: 'Aura Control Center',
      shortDescription: 'Administración centralizada del ecosistema Aura.',
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

        {/* Responsive Grid with xl:grid-cols-6 and lg:grid-cols-3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {modules.map((mod, index) => {
            let gridClasses = "col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-2";
            if (index === 3) {
              gridClasses = "col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-2 xl:col-start-2";
            } else if (index === 4) {
              gridClasses = "col-span-1 md:col-span-2 md:max-w-md md:mx-auto md:w-full lg:col-span-1 lg:max-w-none xl:col-span-2 xl:col-start-auto";
            }
            return (
              <div key={index} className={gridClasses}>
                <ModuleCard {...mod} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
