import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Briefcase, User, Phone, Users, MessageSquare, Check, AlertCircle } from 'lucide-react';

const DemoRequestSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    employees: '1-10',
    message: '',
  });

  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  const modulesList = [
    { id: 'hcm', name: 'Aura HCM', logoUrl: '/aura-hcm.png' },
    { id: 'signature', name: 'Aura Signature', logoUrl: '/aura-signature.png' },
    { id: 'intelligence', name: 'Aura Intelligence', logoUrl: '/aura-intelligence.png' },
    { id: 'maintenance', name: 'Aura Maintenance OS', logoUrl: '/aura-maintenance.png' },
    { id: 'control', name: 'Aura Control Center', logoUrl: '/aura-control-center.png' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleModule = (moduleName: string) => {
    setSelectedModules((prev) => 
      prev.includes(moduleName)
        ? prev.filter((item) => item !== moduleName)
        : [...prev, moduleName]
    );
  };

  const validateForm = () => {
    const tempErrors: string[] = [];
    if (!formData.name.trim()) tempErrors.push('El nombre completo es requerido.');
    if (!formData.company.trim()) tempErrors.push('La empresa es requerida.');
    
    if (!formData.email.trim()) {
      tempErrors.push('El correo electrónico es requerido.');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        tempErrors.push('El correo electrónico no tiene un formato válido.');
      }
    }
    
    if (selectedModules.length === 0) {
      tempErrors.push('Debes seleccionar al menos un módulo de interés.');
    }

    setErrors(tempErrors);
    return tempErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const subject = `Solicitud de demo Aura Ecosystem - ${formData.company}`;
      const body = `Nombre: ${formData.name}
Empresa: ${formData.company}
Correo: ${formData.email}
Teléfono: ${formData.phone || 'No especificado'}
Número de empleados: ${formData.employees}
Módulos de interés: ${selectedModules.join(', ')}
Mensaje: ${formData.message || 'No especificado'}`;

      const mailtoUrl = `mailto:admin@auranexus.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
      
      setSuccess(true);
      setErrors([]);
    }
  };

  return (
    <section id="contacto" className="py-24 px-4 md:px-8 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-0 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Copy */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest block">
            Demo Request Center
          </span>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            Prueba Aura de primera mano.
          </h3>
          <p className="text-base text-slate-400 font-light leading-relaxed">
            Completa el formulario y selecciona los módulos que despiertan tu interés. Al presionar enviar, se redactará de forma automática tu correo oficial de contacto para procesar tu solicitud con nuestro equipo.
          </p>

          <div className="space-y-4 pt-4 border-t border-slate-900 text-sm text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">✓</div>
              <span>Presentación personalizada del flujo operativo.</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">✓</div>
              <span>Evaluación de integraciones en tus flujos de trabajo actuales.</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">✓</div>
              <span>Sin compromisos iniciales ni costos de instalación.</span>
            </div>
          </div>
        </div>

        {/* Right Side Form Card */}
        <div className="lg:col-span-7">
          <div className="p-6 md:p-8 rounded-2xl border border-slate-800/80 bg-slate-900/15 backdrop-blur-md relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Row: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <User size={13} className="text-slate-500" />
                    Nombre Completo <span className="text-cyan-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Juan Pérez"
                    className="w-full bg-slate-950/60 border border-slate-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 text-slate-200 placeholder-slate-600 rounded-lg p-2.5 text-sm transition-all outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Briefcase size={13} className="text-slate-500" />
                    Empresa <span className="text-cyan-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Empresa S.A."
                    className="w-full bg-slate-950/60 border border-slate-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 text-slate-200 placeholder-slate-600 rounded-lg p-2.5 text-sm transition-all outline-none"
                  />
                </div>
              </div>

              {/* Form Row: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Mail size={13} className="text-slate-500" />
                    Correo Electrónico <span className="text-cyan-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="juan@empresa.com"
                    className="w-full bg-slate-950/60 border border-slate-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 text-slate-200 placeholder-slate-600 rounded-lg p-2.5 text-sm transition-all outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Phone size={13} className="text-slate-500" />
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+56 9 1234 5678"
                    className="w-full bg-slate-950/60 border border-slate-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 text-slate-200 placeholder-slate-600 rounded-lg p-2.5 text-sm transition-all outline-none"
                  />
                </div>
              </div>

              {/* Employees select */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Users size={13} className="text-slate-500" />
                  Número aproximado de empleados
                </label>
                <select
                  name="employees"
                  value={formData.employees}
                  onChange={handleInputChange}
                  className="w-full bg-slate-950/60 border border-slate-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 text-slate-200 rounded-lg p-2.5 text-sm transition-all outline-none appearance-none cursor-pointer"
                >
                  <option value="1-10">1 - 10 empleados</option>
                  <option value="11-50">11 - 50 empleados</option>
                  <option value="51-200">51 - 200 empleados</option>
                  <option value="201-500">201 - 500 empleados</option>
                  <option value="500+">Más de 500 empleados</option>
                </select>
              </div>

              {/* Module Checkbox Group */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Módulos de interés <span className="text-cyan-500">*</span> (Selecciona al menos uno)
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {modulesList.map((m) => {
                    const isSelected = selectedModules.includes(m.name);
                    return (
                      <div 
                        key={m.id}
                        onClick={() => toggleModule(m.name)}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer select-none transition-all duration-200 ${
                          isSelected 
                            ? 'bg-cyan-500/5 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.05)]' 
                            : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-all ${
                          isSelected 
                            ? 'border-cyan-500 bg-cyan-500 text-slate-950' 
                            : 'border-slate-700 bg-slate-950'
                        }`}>
                          {isSelected && <Check size={10} strokeWidth={4} />}
                        </div>
                        <div className="w-5 h-5 rounded overflow-hidden flex-shrink-0">
                          <img src={m.logoUrl} alt={m.name} className="max-h-full max-w-full object-contain" />
                        </div>
                        <span className={`text-[10px] md:text-xs font-semibold ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                          {m.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Message Description */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <MessageSquare size={13} className="text-slate-500" />
                  Cuéntanos brevemente qué estás buscando
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Ej: Necesitamos automatizar la firma de contratos de nuestro equipo y coordinar el mantenimiento de equipos..."
                  className="w-full bg-slate-950/60 border border-slate-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 text-slate-200 placeholder-slate-600 rounded-lg p-2.5 text-sm transition-all outline-none resize-none"
                />
              </div>

              {/* Error messages panel inside form */}
              <AnimatePresence>
                {errors.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs space-y-1 overflow-hidden"
                  >
                    <div className="flex items-center gap-1.5 font-bold mb-1">
                      <AlertCircle size={14} />
                      <span>Por favor corrige los siguientes campos:</span>
                    </div>
                    <ul className="list-disc pl-4 space-y-0.5 font-light">
                      {errors.map((err, i) => (
                        <li key={i}>{err}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Success panel inside form */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs overflow-hidden"
                  >
                    <div className="flex items-center gap-1.5 font-bold">
                      <Check size={14} />
                      <span>¡Solicitud redactada! Se ha abierto tu cliente de correo.</span>
                    </div>
                    <p className="font-light mt-1 pl-5">
                      Envía el correo generado a admin@auranexus.io para completar el contacto.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit CTA button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(6,182,212,0.15)] flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                Enviar Solicitud
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DemoRequestSection;
