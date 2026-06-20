import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle, Database, Layers, Eye, RefreshCw, BarChart3, Users2 } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <div className="p-5 rounded-xl border border-slate-900 bg-slate-950/30 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
      <div className="h-10 w-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
        {icon}
      </div>
      <h4 className="text-sm font-semibold text-slate-200 mb-1">{title}</h4>
      <p className="text-xs text-slate-400 font-light leading-relaxed">{description}</p>
    </div>
  );
};

const EcosystemArchitectureDiagram = () => {
  const benefits = [
    {
      icon: <Database size={18} />,
      title: 'Datos Unificados',
      description: 'Información consistente, segura y accesible en tiempo real entre todos los departamentos de tu negocio.',
    },
    {
      icon: <Layers size={18} />,
      title: 'Menos Sistemas Aislados',
      description: 'Elimina integraciones complejas mediante API externas y sincronizaciones manuales propensas a errores.',
    },
    {
      icon: <Eye size={18} />,
      title: 'Mayor Trazabilidad',
      description: 'Auditoría completa e historial inmutable de cada firma de contrato, mantenimiento y movimiento de personal.',
    },
    {
      icon: <RefreshCw size={18} />,
      title: 'Automatización Nativa',
      description: 'Flujos de trabajo cruzados: la contratación en HCM automatiza la firma digital y los accesos operativos.',
    },
    {
      icon: <BarChart3 size={18} />,
      title: 'Inteligencia Empresarial',
      description: 'Predicciones asistidas por IA y análisis de comportamiento basados en la totalidad de datos operativos.',
    },
    {
      icon: <Users2 size={18} />,
      title: 'Escalabilidad Multiempresa',
      description: 'Control de múltiples razones sociales bajo un único tenant con aislamiento seguro y administración consolidada.',
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
            Ecosistema Conectado
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            No son herramientas aisladas.<br/>Es un ecosistema conectado.
          </h3>
          <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed">
            Aura unifica personas, operaciones, documentos, mantenimiento e inteligencia de negocio en una sola plataforma SaaS multi-tenant diseñada para empresas de alta exigencia.
          </p>
        </div>

        {/* Diagram Area */}
        <div className="relative p-6 rounded-3xl border border-slate-900/60 bg-slate-950/20 backdrop-blur-md shadow-2xl overflow-hidden py-12 md:py-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_0.5px,transparent_0.5px),linear-gradient(to_bottom,#0f172a_0.5px,transparent_0.5px)] bg-[size:3rem_3rem] opacity-30" />
          
          {/* Radial Diagram for Desktop/Tablet (lg screens) */}
          <div className="hidden lg:block relative w-full max-w-[650px] aspect-square mx-auto z-10">
            {/* SVG Connections background layer */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              {/* Outer boundary links */}
              <path d="M 18 38 L 82 38" className="stroke-slate-800/60 stroke-[1] fill-none" />
              <path d="M 18 38 L 75 75" className="stroke-slate-800/60 stroke-[1] fill-none" />
              <path d="M 25 75 L 75 75" className="stroke-slate-800/60 stroke-[1] fill-none" />
              <path d="M 25 75 L 18 38" className="stroke-slate-800/60 stroke-[1] fill-none" />
              <path d="M 50 15 L 18 38" className="stroke-slate-800/60 stroke-[1] fill-none" />
              <path d="M 50 15 L 82 38" className="stroke-slate-800/60 stroke-[1] fill-none" />
              <path d="M 50 15 L 75 75" className="stroke-slate-800/60 stroke-[1] fill-none" />
              <path d="M 50 15 L 25 75" className="stroke-slate-800/60 stroke-[1] fill-none" />

              {/* Central hub spokes (Static) */}
              <path d="M 50 50 L 50 15" className="stroke-slate-700/80 stroke-[1.5] fill-none" strokeDasharray="3, 3" />
              <path d="M 50 50 L 18 38" className="stroke-slate-700/80 stroke-[1.5] fill-none" strokeDasharray="3, 3" />
              <path d="M 50 50 L 82 38" className="stroke-slate-700/80 stroke-[1.5] fill-none" strokeDasharray="3, 3" />
              <path d="M 50 50 L 75 75" className="stroke-slate-700/80 stroke-[1.5] fill-none" strokeDasharray="3, 3" />
              <path d="M 50 50 L 25 75" className="stroke-slate-700/80 stroke-[1.5] fill-none" strokeDasharray="3, 3" />

              {/* Flowing animated light particles */}
              <motion.path 
                d="M 18 38 L 82 38" 
                className="stroke-cyan-500/30 stroke-[1.5] fill-none"
                strokeDasharray="5, 20"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              />
              <motion.path 
                d="M 18 38 L 75 75" 
                className="stroke-blue-500/30 stroke-[1.5] fill-none"
                strokeDasharray="6, 24"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              />
              <motion.path 
                d="M 25 75 L 75 75" 
                className="stroke-cyan-500/30 stroke-[1.5] fill-none"
                strokeDasharray="5, 20"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              />
              <motion.path 
                d="M 25 75 L 18 38" 
                className="stroke-blue-500/30 stroke-[1.5] fill-none"
                strokeDasharray="6, 24"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              />

              {/* Hub spokes glowing connections */}
              <motion.path 
                d="M 50 50 L 50 15" 
                className="stroke-cyan-400 stroke-[2] fill-none"
                strokeDasharray="8, 22"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              <motion.path 
                d="M 50 50 L 18 38" 
                className="stroke-cyan-400 stroke-[2] fill-none"
                strokeDasharray="8, 22"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              <motion.path 
                d="M 50 50 L 82 38" 
                className="stroke-cyan-400 stroke-[2] fill-none"
                strokeDasharray="8, 22"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              <motion.path 
                d="M 50 50 L 75 75" 
                className="stroke-cyan-400 stroke-[2] fill-none"
                strokeDasharray="8, 22"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              <motion.path 
                d="M 50 50 L 25 75" 
                className="stroke-cyan-400 stroke-[2] fill-none"
                strokeDasharray="8, 22"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
            </svg>

            {/* Central Ecosystem Hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
              <motion.div 
                animate={{ boxShadow: ['0 0 15px rgba(6,182,212,0.15)', '0 0 35px rgba(6,182,212,0.3)', '0 0 15px rgba(6,182,212,0.15)'] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-32 h-32 rounded-full bg-slate-900 border-2 border-cyan-500/40 flex flex-col items-center justify-center p-4 relative"
              >
                <div className="absolute inset-1 rounded-full border border-cyan-500/10 animate-ping opacity-25" />
                <img 
                  src="/aura-favicon.png" 
                  alt="Aura Center" 
                  className="w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]"
                />
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 font-bold uppercase mt-2">Aura OS</span>
              </motion.div>
            </div>

            {/* Modules Radial Nodes */}
            {/* 1. Control Center */}
            <div className="absolute left-1/2 top-[15%] -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/90 shadow-xl min-w-[170px] hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-colors duration-300">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img src="/aura-control-center.png" alt="Control Center" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-slate-100 tracking-tight leading-none">Aura Control Center</span>
                  <span className="text-[9px] text-slate-500">Administración Global</span>
                </div>
              </motion.div>
            </div>

            {/* 2. HCM */}
            <div className="absolute left-[18%] top-[38%] -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/90 shadow-xl min-w-[170px] hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-colors duration-300">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img src="/aura-hcm.png" alt="Aura HCM" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-slate-100 tracking-tight leading-none">Aura HCM</span>
                  <span className="text-[9px] text-slate-500">Talento Humano</span>
                </div>
              </motion.div>
            </div>

            {/* 3. Signature */}
            <div className="absolute left-[82%] top-[38%] -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/90 shadow-xl min-w-[170px] hover:border-teal-500/40 hover:shadow-[0_0_15px_rgba(20,184,166,0.1)] transition-colors duration-300">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img src="/aura-signature.png" alt="Aura Signature" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-slate-100 tracking-tight leading-none">Aura Signature</span>
                  <span className="text-[9px] text-slate-500">Firma Electrónica</span>
                </div>
              </motion.div>
            </div>

            {/* 4. Intelligence */}
            <div className="absolute left-[75%] top-[75%] -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/90 shadow-xl min-w-[170px] hover:border-violet-500/40 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition-colors duration-300">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img src="/aura-intelligence.png" alt="Aura Intelligence" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-slate-100 tracking-tight leading-none">Aura Intelligence</span>
                  <span className="text-[9px] text-slate-500">Inteligencia de IA</span>
                </div>
              </motion.div>
            </div>

            {/* 5. Maintenance OS */}
            <div className="absolute left-[25%] top-[75%] -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/90 shadow-xl min-w-[170px] hover:border-amber-500/40 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)] transition-colors duration-300">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img src="/aura-maintenance.png" alt="Maintenance OS" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-slate-100 tracking-tight leading-none">Aura Maintenance OS</span>
                  <span className="text-[9px] text-slate-500">Mantenimiento y Activos</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Vertical Stack Diagram for Mobile/Tablet (lg hidden) */}
          <div className="block lg:hidden relative z-10 px-2 max-w-md mx-auto space-y-6">
            
            {/* Vertical trunk line */}
            <div className="absolute left-[34px] top-6 bottom-6 w-[2px] bg-slate-800" />
            <div className="absolute left-[34px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-teal-500 opacity-40" />

            {/* Central Hub equivalent on mobile (Header Node) */}
            <div className="relative flex items-center gap-4 pl-1">
              <div className="w-[66px] h-[66px] rounded-full bg-slate-900 border-2 border-cyan-500/40 flex items-center justify-center p-2.5 z-10 shadow-lg">
                <img src="/aura-favicon.png" alt="Aura Center" className="w-8 h-8 object-contain" />
              </div>
              <div className="bg-slate-900/60 border border-slate-800/80 p-3 rounded-xl flex-grow">
                <h4 className="text-sm font-extrabold text-white tracking-tight">Aura Ecosystem Hub</h4>
                <p className="text-[10px] text-cyan-400 font-mono uppercase">Eje Central de Datos</p>
              </div>
            </div>

            {/* Node 1: Control Center */}
            <div className="relative flex items-center gap-4 pl-3">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center overflow-hidden z-10 shadow-md">
                <img src="/aura-control-center.png" alt="Control Center" className="w-6 h-6 object-contain" />
              </div>
              <div className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-xl flex-grow space-y-1">
                <h5 className="text-xs font-bold text-white leading-none">Aura Control Center</h5>
                <p className="text-[10px] text-slate-400">Consola centralizada para auditar accesos, gestionar perfiles de tenants e infraestructuras en tiempo real.</p>
              </div>
            </div>

            {/* Node 2: HCM */}
            <div className="relative flex items-center gap-4 pl-3">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center overflow-hidden z-10 shadow-md">
                <img src="/aura-hcm.png" alt="Aura HCM" className="w-6 h-6 object-contain" />
              </div>
              <div className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-xl flex-grow space-y-1">
                <h5 className="text-xs font-bold text-white leading-none">Aura HCM</h5>
                <p className="text-[10px] text-slate-400">Gestión de nóminas y personal. Conectado a Firma Electrónica para contrataciones automáticas.</p>
              </div>
            </div>

            {/* Node 3: Signature */}
            <div className="relative flex items-center gap-4 pl-3">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center overflow-hidden z-10 shadow-md">
                <img src="/aura-signature.png" alt="Aura Signature" className="w-6 h-6 object-contain" />
              </div>
              <div className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-xl flex-grow space-y-1">
                <h5 className="text-xs font-bold text-white leading-none">Aura Signature</h5>
                <p className="text-[10px] text-slate-400">Firma electrónica con validez legal. Agiliza flujos de aprobación laboral e inventarios de mantenimiento.</p>
              </div>
            </div>

            {/* Node 4: Intelligence */}
            <div className="relative flex items-center gap-4 pl-3">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center overflow-hidden z-10 shadow-md">
                <img src="/aura-intelligence.png" alt="Aura Intelligence" className="w-6 h-6 object-contain" />
              </div>
              <div className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-xl flex-grow space-y-1">
                <h5 className="text-xs font-bold text-white leading-none">Aura Intelligence</h5>
                <p className="text-[10px] text-slate-400">Analítica avanzada de IA. Extrae reportes de productividad de HCM y predice fallos de mantenimiento.</p>
              </div>
            </div>

            {/* Node 5: Maintenance OS */}
            <div className="relative flex items-center gap-4 pl-3">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center overflow-hidden z-10 shadow-md">
                <img src="/aura-maintenance.png" alt="Maintenance OS" className="w-6 h-6 object-contain" />
              </div>
              <div className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-xl flex-grow space-y-1">
                <h5 className="text-xs font-bold text-white leading-none">Aura Maintenance OS</h5>
                <p className="text-[10px] text-slate-400">Control operativo e inventarios físicos. Comunica incidencias directo a los operarios asignados en HCM.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        {/* Why Aura Comparison Block */}
        <div className="space-y-10 pt-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
              ¿Por qué Aura?
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Analiza cómo Aura transforma el caos operativo provocado por sistemas aislados en un flujo de información perfectamente conectado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional Systems */}
            <div className="p-6 md:p-8 rounded-2xl border border-red-950/20 bg-slate-950/20 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-red-900/40" />
              <h4 className="text-lg font-bold text-slate-300 mb-6 flex items-center gap-2">
                <ShieldAlert size={18} className="text-red-500/80" />
                Sistemas Tradicionales
              </h4>
              
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <span className="text-red-500 text-sm flex-shrink-0 pt-0.5">❌</span>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-300">Información fragmentada</h5>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-light mt-0.5">
                      Los datos viven aislados en hojas de cálculo y bases de datos inconexas de diferentes departamentos.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 text-sm flex-shrink-0 pt-0.5">❌</span>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-300">Procesos manuales</h5>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-light mt-0.5">
                      Redacción lenta de contratos, emails redundantes para recabar firmas y reportes manuales periódicos.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 text-sm flex-shrink-0 pt-0.5">❌</span>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-300">Múltiples proveedores</h5>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-light mt-0.5">
                      Demasiados contratos de software, interfaces visuales diferentes y costos de integración elevados.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Aura Ecosystem */}
            <div className="p-6 md:p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-slate-950 to-slate-900/20 backdrop-blur-sm relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-500 to-blue-500" />
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle size={18} className="text-cyan-400" />
                Aura Ecosystem
              </h4>
              
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <span className="text-cyan-400 text-sm flex-shrink-0 pt-0.5">✅</span>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-200">Plataforma integrada</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-light mt-0.5">
                      HCM, firmas, mantenimiento e IA comparten el mismo motor seguro de datos corporativos.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 text-sm flex-shrink-0 pt-0.5">✅</span>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-200">Información conectada</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-light mt-0.5">
                      La contratación y alta de un empleado en HCM dispara flujos automáticos de firma de contrato y accesos.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 text-sm flex-shrink-0 pt-0.5">✅</span>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-200">Automatización</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-light mt-0.5">
                      Notificaciones en tiempo real, alertas de vencimiento automáticas y reportes operativos inmediatos.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 text-sm flex-shrink-0 pt-0.5">✅</span>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-200">Visión centralizada</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-light mt-0.5">
                      Una consola de mando global para supervisar métricas clave, administrar costos e inspeccionar logs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EcosystemArchitectureDiagram;
