import { motion } from 'framer-motion';
import { Building2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ExecutiveCorporateWelcome = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-md w-full bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-10 text-center shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600" />
      
      <div className="mx-auto w-16 h-16 bg-blue-900/30 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
        <Building2 className="text-blue-400" size={32} />
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-4">Atención Corporativa Especializada</h2>
      
      <p className="text-slate-400 leading-relaxed mb-8">
        Detectamos que tu organización puede requerir un acompañamiento corporativo. Puedes continuar con el diagnóstico y nuestro equipo revisará la mejor forma de atenderte de manera personalizada.
      </p>
      
      <button
        onClick={() => navigate('/')}
        className="w-full px-6 py-4 rounded-xl font-medium text-slate-950 bg-white hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
      >
        Volver a inicio
        <ArrowRight size={18} />
      </button>
    </motion.div>
  );
};

export default ExecutiveCorporateWelcome;
