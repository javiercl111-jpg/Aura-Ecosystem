import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Lock } from 'lucide-react';
import { useIntake } from '../context/IntakeContext';

const ExecutiveWelcome = () => {
  const { result } = useIntake();

  useEffect(() => {
    // Redirigir de manera segura después de mostrar el mensaje de éxito
    if (result?.discoveryUrl) {
      const timer = setTimeout(() => {
        window.location.href = result.discoveryUrl!;
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-md w-full bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-10 text-center shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500" />
      
      <div className="mx-auto w-16 h-16 bg-emerald-900/30 border border-emerald-500/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
        <CheckCircle2 className="text-emerald-400" size={32} />
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-2">Diagnóstico Preparado</h2>
      
      <p className="text-slate-400 leading-relaxed mb-6">
        Hemos creado tu espacio seguro de manera exitosa. Te estamos redirigiendo a Aura Discovery.
      </p>

      <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium bg-slate-950/50 py-2 px-4 rounded-full inline-flex">
        <Lock size={14} className="text-emerald-500" />
        Conexión segura establecida
      </div>
    </motion.div>
  );
};

export default ExecutiveWelcome;
