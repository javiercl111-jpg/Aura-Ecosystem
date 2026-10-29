import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ModuleCardProps {
  logoUrl: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  color: string;
  path: string;
}

const ModuleCard = ({ logoUrl, title, shortDescription, description, features, color, path }: ModuleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="glass-panel glass-panel-hover flex flex-col justify-between p-6 md:p-8 rounded-2xl relative overflow-hidden group min-h-[540px]"
    >
      {/* Light gradient highlight on group hover */}
      <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${color}`} />
      <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`} />

      <div>
        {/* Editorial product artwork: uses genuine brand assets, not fabricated screenshots. */}
        <Link to={path} aria-label={`Conocer ${title}`} className="relative mb-7 block aspect-[16/10] overflow-hidden rounded-2xl border border-slate-700/60 bg-[#050e22] focus-visible:outline-2 focus-visible:outline-cyan-300">
          <div aria-hidden="true" className={`absolute -right-12 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${color} opacity-20 blur-3xl`} />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <img src={logoUrl} alt={`Identidad visual de ${title}`} loading="lazy" decoding="async" className="relative z-10 max-h-[78%] max-w-[78%] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,.5)] transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-slate-950/75 px-3 py-1 text-[10px] font-medium text-slate-300 backdrop-blur">Solución Aura Nexus</div>
          <ArrowUpRight size={18} aria-hidden="true" className="absolute right-4 top-4 text-cyan-300" />
        </Link>

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
            En desarrollo
          </span>
          <Link to={path} className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
            Conocer más
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
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
      description: 'Gestión integral del capital humano. El desarrollo contempla RRHH y control de asistencia, con funcionalidades sujetas a validación antes de su comercialización.',
      features: ['Gestión de Nóminas y Beneficios', 'Control Horario Integrado', 'Desempeño y Clima Laboral'],
      color: 'from-blue-500 to-cyan-500',
      path: '/aura-hcm',
    },
    {
      logoUrl: '/aura-signature.png',
      title: 'Aura Signature',
      shortDescription: 'Firma electrónica y gestión documental.',
      description: 'Solución en desarrollo para firma electrónica y gestión documental. Su alcance jurídico y funcional requiere validación.',
      features: ['Firma Avanzada y Biométrica', 'Flujos de Firma Multi-rol', 'Auditoría Criptográfica Completa'],
      color: 'from-cyan-500 to-teal-500',
      path: '/aura-signature',
    },
    {
      logoUrl: '/aura-intelligence.png',
      title: 'Aura Intelligence',
      shortDescription: 'Asistente empresarial impulsado por IA.',
      description: 'Iniciativa en desarrollo de asistencia, búsqueda contextual y automatización empresarial con controles de seguridad y consumo.',
      features: ['Soporte inteligente', 'Búsqueda contextual', 'Automatización operativa'],
      color: 'from-violet-500 to-blue-500',
      path: '/aura-intelligence',
    },
    {
      logoUrl: '/aura-maintenance.png',
      title: 'Aura Maintenance OS',
      shortDescription: 'Gestión inteligente de mantenimiento y operaciones.',
      description: 'Plataforma para el mantenimiento preventivo y correctivo de activos y facilidades físicas. Su alcance comercial está sujeto a validación.',
      features: ['Órdenes de Trabajo Inteligentes', 'Inventario de Activos y SLAs', 'Mantenimiento Preventivo Planificado'],
      color: 'from-blue-500 to-cyan-400',
      path: '/aura-maintenance-os',
    },
    {
      logoUrl: '/aura-control-center.png',
      title: 'Aura Control Center',
      shortDescription: 'Administración centralizada del ecosistema Aura.',
      description: 'Consola en desarrollo para gestionar y supervisar componentes del ecosistema Aura.',
      features: ['Monitoreo Multi-tenant y Finanzas', 'Gestión de Permisos y Roles', 'Logs de Auditoría Corporativos'],
      color: 'from-emerald-500 to-teal-500',
      path: '/aura-control-center',
    },
  ];

  return (
    <section id="modulos" className="py-24 px-4 md:px-8 bg-slate-950 relative border-t border-slate-900">
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

