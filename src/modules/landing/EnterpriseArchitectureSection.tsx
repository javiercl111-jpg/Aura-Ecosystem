import { motion } from 'framer-motion';
import { Server, Users2, Shield, Eye, Smartphone, Zap, Flame } from 'lucide-react';

interface TechItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TechItem = ({ icon, title, description }: TechItemProps) => {
  return (
    <div className="flex gap-4 p-5 rounded-xl border border-slate-900 bg-slate-950/40 backdrop-blur-sm">
      <div className="flex-shrink-0 text-cyan-400">
        {icon}
      </div>
      <div>
        <h4 className="text-base font-semibold text-slate-200 mb-1">{title}</h4>
        <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const EnterpriseArchitectureSection = () => {
  const techSpecs = [
    {
      icon: <Server size={20} />,
      title: 'Aislamiento Multi-tenant',
      description: 'Garantiza la seguridad y privacidad aislando las bases de datos y configuraciones por empresa de manera estricta y transparente.',
    },
    {
      icon: <Users2 size={20} />,
      title: 'Roles y Permisos Granulares',
      description: 'Control de acceso basado en roles (RBAC) que permite definir con precisión milimétrica las capacidades y visibilidad de cada usuario.',
    },
    {
      icon: <Eye size={20} />,
      title: 'Trazabilidad y Auditoría',
      description: 'Sistema centralizado de logs inmutables que registra cada consulta, modificación y flujo contractual para auditorías de cumplimiento.',
    },
    {
      icon: <Smartphone size={20} />,
      title: 'PWA-ready',
      description: 'Instalable en cualquier dispositivo y diseñado con enfoque offline-first para asegurar que la operación nunca se interrumpa.',
    },
    {
      icon: <Shield size={20} />,
      title: 'Criptografía y Seguridad',
      description: 'Firmas digitales basadas en estándares internacionales de criptografía y cifrado de datos extremo a extremo (E2EE).',
    },
    {
      icon: <Zap size={20} />,
      title: 'Escalabilidad Horizontal',
      description: 'Infraestructura serverless optimizada para soportar picos masivos de operaciones y firmas concurrentes sin degradar rendimiento.',
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute left-10 bottom-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block - Interactive Visualization */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-md relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
              
              <h4 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
                <Server size={18} className="text-cyan-400" />
                Infraestructura Corporativa
              </h4>

              {/* Graphical simulation of multi-tenant security layers */}
              <div className="space-y-4">
                
                {/* Layer 1 */}
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-200">Acceso Seguro y Encriptado (SSL/TLS)</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">ACTIVO</span>
                </div>

                {/* Arrow connector */}
                <div className="h-4 w-[1px] bg-slate-800 mx-auto" />

                {/* Layer 2 */}
                <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/80 space-y-2.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-300">Aislamiento Multicompañía Estricto</span>
                    <span className="text-[10px] font-mono text-cyan-400">AISLADO</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] text-center text-slate-400">Razón Social A</div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] text-center text-slate-400">Razón Social B</div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] text-center text-slate-400">Razón Social C</div>
                  </div>
                </div>

                {/* Arrow connector */}
                <div className="h-4 w-[1px] bg-slate-800 mx-auto" />

                {/* Layer 3 - Real-time active architecture */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-cyan-950/40 text-cyan-400 border border-cyan-500/20">
                      <Flame size={16} />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-200">Infraestructura en la Nube de Alta Disponibilidad</span>
                      <span className="text-[10px] text-slate-400 font-light">Diseñado para el intercambio instantáneo y seguro de información.</span>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>

          {/* Right Block - Technical List */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest block">
                Arquitectura de Confianza
              </span>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
                Diseñado para la escala enterprise
              </h3>
              <p className="text-base text-slate-400 font-light leading-relaxed">
                Nuestra arquitectura modular separa rigurosamente las responsabilidades, garantizando un rendimiento óptimo, alta disponibilidad y una integración sencilla con sistemas en tiempo real para flujos de trabajo eficientes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techSpecs.map((spec, index) => (
                <TechItem key={index} {...spec} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EnterpriseArchitectureSection;
