import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ExecutiveAnalysis = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    'Validando información...',
    'Analizando perfil corporativo...',
    'Preparando tu diagnóstico...',
    'Personalizando tu experiencia...',
    'Creando acceso seguro...'
  ];

  useEffect(() => {
    // Cycle messages while in this state
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8">
      <div className="relative w-24 h-24">
        {/* Spinner rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-t-2 border-r-2 border-cyan-500 opacity-80"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full border-b-2 border-l-2 border-blue-500 opacity-60"
        />
        <div className="absolute inset-4 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 rounded-full bg-cyan-400"
          />
        </div>
      </div>
      
      <div className="h-8">
        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-lg text-slate-300 font-medium"
        >
          {messages[messageIndex]}
        </motion.p>
      </div>
    </div>
  );
};

export default ExecutiveAnalysis;
