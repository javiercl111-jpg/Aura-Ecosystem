import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ShieldCheck, Building2, User, Mail, MapPin } from 'lucide-react';
import { useIntake } from '../context/IntakeContext';

const InputField = ({ label, icon: Icon, field, type = 'text', optional = false, input, updateInput, errors }: any) => (
  <div className="space-y-1">
    <label className="text-sm text-slate-400 pl-1">{label} {optional && <span className="text-slate-600">(Opcional)</span>}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon size={18} className="text-slate-500" />
      </div>
      <input
        type={type}
        value={input[field] as string || ''}
        onChange={(e) => updateInput({ [field]: e.target.value })}
        className={`w-full pl-10 pr-4 py-3 bg-slate-900/50 border ${errors[field] ? 'border-red-500/50' : 'border-slate-800'} rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all`}
      />
    </div>
    {errors[field] && <p className="text-xs text-red-400 pl-1">{errors[field]}</p>}
  </div>
);

const IntakeExperience = () => {
  const { input, updateInput, submitIntake, advisorResolution } = useIntake();
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!input.companyName) newErrors.companyName = 'Requerido';
    if (!input.contactName) newErrors.contactName = 'Requerido';
    if (!input.email) newErrors.email = 'Requerido';
    else if (!/^\S+@\S+\.\S+$/.test(input.email)) newErrors.email = 'Correo inválido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!input.state) newErrors.state = 'Requerido';
    if (!input.city) newErrors.city = 'Requerido';
    if (!input.employeeRange) newErrors.employeeRange = 'Requerido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateConsents = () => {
    const newErrors: Record<string, string> = {};
    if (!input.privacyConsent) newErrors.privacyConsent = 'Debes aceptar las políticas de privacidad';
    if (!input.diagnosticDeliveryConsent) newErrors.diagnosticDeliveryConsent = 'Requerido para entregar el diagnóstico';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const handleSubmit = () => {
    if (validateConsents()) {
      // Hardcode policy version for now as we don't have a CMS
      updateInput({ policyVersion: '1.0' });
      submitIntake();
    }
  };

  // InputField was moved outside the component

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-lg mx-auto bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
    >
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

      {advisorResolution?.advisorDisplayName && (
        <div className="mb-8 p-4 bg-cyan-950/30 border border-cyan-900/50 rounded-2xl flex items-start gap-4">
          <div className="p-2 bg-cyan-900/50 rounded-full text-cyan-400 mt-1">
            <User size={18} />
          </div>
          <p className="text-sm text-cyan-100/80 leading-relaxed">
            <strong className="text-cyan-400 font-medium">{advisorResolution.advisorDisplayName}</strong> nos pidió acompañarte en este diagnóstico ejecutivo. Solo necesitamos algunos datos para personalizar tu Radiografía Empresarial.
          </p>
        </div>
      )}

      {!advisorResolution?.advisorDisplayName && (
        <div className="mb-8 text-center space-y-2">
          <h2 className="text-2xl font-bold text-white tracking-tight">Antes de comenzar</h2>
          <p className="text-sm text-slate-400">
            Permítenos conocer algunos datos para personalizar tu diagnóstico. Nos tomará menos de un minuto.
          </p>
        </div>
      )}

      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-4"
            >
              <InputField label="Nombre de la Empresa" icon={Building2} field="companyName" input={input} updateInput={updateInput} errors={errors} />
              <InputField label="Tu Nombre" icon={User} field="contactName" input={input} updateInput={updateInput} errors={errors} />
              <InputField label="Correo Corporativo" icon={Mail} field="email" type="email" input={input} updateInput={updateInput} errors={errors} />
              <InputField label="Cargo" icon={User} field="jobTitle" input={input} updateInput={updateInput} errors={errors} />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-4"
            >
              <InputField label="Teléfono" icon={Mail} field="phone" optional input={input} updateInput={updateInput} errors={errors} />
              <div className="grid grid-cols-2 gap-4">
                <InputField label="Estado" icon={MapPin} field="state" input={input} updateInput={updateInput} errors={errors} />
                <InputField label="Municipio o Ciudad" icon={MapPin} field="city" input={input} updateInput={updateInput} errors={errors} />
              </div>
              
              <div className="space-y-1">
                <label className="text-sm text-slate-400 pl-1">Rango de colaboradores</label>
                <select
                  value={input.employeeRange || ''}
                  onChange={(e) => updateInput({ employeeRange: e.target.value })}
                  className={`w-full px-4 py-3 bg-slate-900/50 border ${errors.employeeRange ? 'border-red-500/50' : 'border-slate-800'} rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all appearance-none`}
                >
                  <option value="" disabled className="text-slate-500">Selecciona una opción</option>
                  <option value="1-10">1 a 10</option>
                  <option value="11-50">11 a 50</option>
                  <option value="51-200">51 a 200</option>
                  <option value="201-500">201 a 500</option>
                  <option value="501+">Más de 500</option>
                </select>
                {errors.employeeRange && <p className="text-xs text-red-400 pl-1">{errors.employeeRange}</p>}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <ShieldCheck className="text-cyan-400 shrink-0" size={24} />
                <p className="text-xs text-slate-300">Tus datos están protegidos y serán utilizados únicamente para generar tu diagnóstico.</p>
              </div>

              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-0.5">
                    <input 
                      type="checkbox" 
                      className="peer appearance-none w-5 h-5 border border-slate-600 rounded cursor-pointer checked:bg-cyan-500 checked:border-cyan-500 transition-colors"
                      checked={!!input.privacyConsent}
                      onChange={(e) => updateInput({ privacyConsent: e.target.checked })}
                    />
                    <div className="absolute pointer-events-none opacity-0 peer-checked:opacity-100 text-slate-950">
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.00001 7.80005L1.20001 5.00005L0.266678 5.93338L4.00001 9.66672L12 1.66672L11.0667 0.733383L4.00001 7.80005Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="text-slate-200">Acepto las <a href="#" className="text-cyan-400 hover:underline">Políticas de Privacidad</a></span>
                    {errors.privacyConsent && <p className="text-xs text-red-400 mt-1">{errors.privacyConsent}</p>}
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-0.5">
                    <input 
                      type="checkbox" 
                      className="peer appearance-none w-5 h-5 border border-slate-600 rounded cursor-pointer checked:bg-cyan-500 checked:border-cyan-500 transition-colors"
                      checked={!!input.diagnosticDeliveryConsent}
                      onChange={(e) => updateInput({ diagnosticDeliveryConsent: e.target.checked })}
                    />
                    <div className="absolute pointer-events-none opacity-0 peer-checked:opacity-100 text-slate-950">
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.00001 7.80005L1.20001 5.00005L0.266678 5.93338L4.00001 9.66672L12 1.66672L11.0667 0.733383L4.00001 7.80005Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="text-slate-200">Acepto que me envíen mi Radiografía Empresarial</span>
                    {errors.diagnosticDeliveryConsent && <p className="text-xs text-red-400 mt-1">{errors.diagnosticDeliveryConsent}</p>}
                  </div>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-0.5">
                    <input 
                      type="checkbox" 
                      className="peer appearance-none w-5 h-5 border border-slate-600 rounded cursor-pointer checked:bg-cyan-500 checked:border-cyan-500 transition-colors"
                      checked={!!input.followUpConsent}
                      onChange={(e) => updateInput({ followUpConsent: e.target.checked })}
                    />
                    <div className="absolute pointer-events-none opacity-0 peer-checked:opacity-100 text-slate-950">
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.00001 7.80005L1.20001 5.00005L0.266678 5.93338L4.00001 9.66672L12 1.66672L11.0667 0.733383L4.00001 7.80005Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm text-slate-300 pt-0.5">Deseo recibir seguimiento de un asesor especializado <span className="text-slate-500">(Opcional)</span></span>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-0.5">
                    <input 
                      type="checkbox" 
                      className="peer appearance-none w-5 h-5 border border-slate-600 rounded cursor-pointer checked:bg-cyan-500 checked:border-cyan-500 transition-colors"
                      checked={!!input.marketingConsent}
                      onChange={(e) => updateInput({ marketingConsent: e.target.checked })}
                    />
                    <div className="absolute pointer-events-none opacity-0 peer-checked:opacity-100 text-slate-950">
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.00001 7.80005L1.20001 5.00005L0.266678 5.93338L4.00001 9.66672L12 1.66672L11.0667 0.733383L4.00001 7.80005Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm text-slate-300 pt-0.5">Deseo recibir información sobre novedades y eventos <span className="text-slate-500">(Opcional)</span></span>
                </label>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-between items-center">
        {step > 1 ? (
          <button 
            onClick={() => setStep(s => s - 1)}
            className="p-3 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
        ) : <div />}
        
        {step < 3 ? (
          <button
            onClick={handleNext}
            className="px-6 py-3 rounded-xl font-medium text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-2"
          >
            Siguiente
            <ArrowRight size={16} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-6 py-3 rounded-xl font-medium text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          >
            Comenzar mi Diagnóstico Ejecutivo
          </button>
        )}
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 flex justify-center gap-2">
        {[1, 2, 3].map(i => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-cyan-500' : i < step ? 'w-4 bg-slate-600' : 'w-4 bg-slate-800'}`} 
          />
        ))}
      </div>
    </motion.div>
  );
};

export default IntakeExperience;
