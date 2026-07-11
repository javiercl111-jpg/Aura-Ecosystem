import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ExecutiveReviewPending = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-md w-full bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-10 text-center shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600" />
      
      <div className="mx-auto w-16 h-16 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mb-6">
        <Clock className="text-slate-400" size={32} />
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-4">Validando Información</h2>
      
      <p className="text-slate-400 leading-relaxed mb-8">
        Estamos validando la información proporcionada para preparar correctamente tu diagnóstico. Nuestro equipo dará seguimiento en breve.
      </p>
      
      <button
        onClick={() => navigate('/')}
        className="w-full px-6 py-4 rounded-xl font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
      >
        Volver a inicio
        <ArrowRight size={18} />
      </button>
    </motion.div>
  );
};

export default ExecutiveReviewPending;
