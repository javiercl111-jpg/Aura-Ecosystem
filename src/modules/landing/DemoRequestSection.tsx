import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  Briefcase,
  Check,
  Mail,
  MessageSquare,
  Phone,
  User,
  Users,
} from "lucide-react";

import { createWebsiteOrganization } from "../../services/leadService";
import type { ConsultingPriority } from "../../types/lead";

const modulesList = [
  { id: "Personas", name: "Personas / Aura HCM", logoUrl: "/aura-hcm.png" },
  {
    id: "Operaciones",
    name: "Operaciones / Aura Maintenance OS",
    logoUrl: "/aura-maintenance.png",
  },
  {
    id: "Documentos",
    name: "Documentos / Aura Signature",
    logoUrl: "/aura-signature.png",
  },
  {
    id: "Dirección",
    name: "Dirección / Aura Intelligence",
    logoUrl: "/aura-intelligence.png",
  },
  {
    id: "Ecosistema completo",
    name: "Ecosistema completo",
    logoUrl: "/aura-logo-oficial.png",
  },
];

const getPriority = (companySize: string, phone: string): ConsultingPriority => {
  if (companySize === "201-500" || companySize === "500+") return "HIGH";
  if (phone.trim()) return "MEDIUM";
  return "LOW";
};

const getRecommendedNextStep = (
  mainChallenge: string,
  interestAreas: string[],
): string => {
  const normalized = `${mainChallenge} ${interestAreas.join(" ")}`.toLowerCase();

  if (normalized.includes("operaciones") || normalized.includes("mantenimiento")) {
    return "Iniciar diagnóstico con Aura Maintenance OS.";
  }

  if (normalized.includes("documentos") || normalized.includes("firma")) {
    return "Iniciar diagnóstico con Aura Signature.";
  }

  if (normalized.includes("personas") || normalized.includes("rh")) {
    return "Iniciar diagnóstico con Aura HCM.";
  }

  if (normalized.includes("dirección") || normalized.includes("decisiones")) {
    return "Iniciar diagnóstico con Aura Intelligence.";
  }

  return "Iniciar con video institucional y llamada de descubrimiento.";
};

const DemoRequestSection = () => {
  const [formData, setFormData] = useState({
    contactName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: "",
    companySize: "51-200",
    mainChallenge: "",
    notes: "",
  });

  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleArea = (area: string) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((item) => item !== area) : [...prev, area],
    );
  };

  const validateForm = () => {
    const tempErrors: string[] = [];

    if (!formData.contactName.trim()) tempErrors.push("El nombre completo es requerido.");
    if (!formData.companyName.trim()) tempErrors.push("La empresa es requerida.");
    if (!formData.email.trim()) {
      tempErrors.push("El correo electrónico es requerido.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      tempErrors.push("El correo electrónico no tiene un formato válido.");
    }

    if (!formData.mainChallenge.trim()) {
      tempErrors.push("Cuéntanos brevemente el principal reto de tu organización.");
    }

    if (selectedAreas.length === 0) {
      tempErrors.push("Selecciona al menos un área de interés.");
    }

    setErrors(tempErrors);
    return tempErrors.length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors([]);
    setSuccess(false);

    try {
      await createWebsiteOrganization({
        companyName: formData.companyName.trim(),
        contactName: formData.contactName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        industry: formData.industry.trim(),
        companySize: formData.companySize,
        mainChallenge: formData.mainChallenge.trim(),
        interestAreas: selectedAreas,
        notes: formData.notes.trim(),
        source: "auranexus.io",
        stage: "DISCOVERY",
        priority: getPriority(formData.companySize, formData.phone),
        recommendedNextStep: getRecommendedNextStep(
          formData.mainChallenge,
          selectedAreas,
        ),
      });

      setFormData({
        contactName: "",
        companyName: "",
        email: "",
        phone: "",
        industry: "",
        companySize: "51-200",
        mainChallenge: "",
        notes: "",
      });
      setSelectedAreas([]);
      setSuccess(true);
    } catch (error) {
      console.error(error);
      setErrors([
        "No pudimos registrar tu solicitud en este momento. Inténtalo nuevamente.",
      ]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-slate-900 bg-slate-950 px-4 py-24 md:px-8"
    >
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-500/5 blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-5">
          <span className="block text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Business Discovery
          </span>

          <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-100 md:text-5xl">
            Comienza con un diagnóstico Aura.
          </h3>

          <p className="text-base font-light leading-relaxed text-slate-400">
            Cuéntanos qué necesita tu organización. Un consultor Aura revisará tu
            solicitud y preparará una conversación enfocada en tus retos reales,
            no en una demostración genérica.
          </p>

          <div className="space-y-4 border-t border-slate-900 pt-4 text-sm text-slate-400">
            {[
              "Diagnóstico inicial sin compromiso.",
              "Recomendación consultiva del ecosistema Aura.",
              "Sin acceso automático a precios, demos internas o información sensible.",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 text-xs font-bold text-cyan-400">
                  ✓
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/15 p-6 shadow-2xl backdrop-blur-md md:p-8">
            <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                    <User size={13} className="text-slate-500" />
                    Nombre completo <span className="text-cyan-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    placeholder="Juan Pérez"
                    className="w-full rounded-lg border border-slate-800 bg-slate-950/60 p-2.5 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                    <Briefcase size={13} className="text-slate-500" />
                    Empresa <span className="text-cyan-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Empresa S.A."
                    className="w-full rounded-lg border border-slate-800 bg-slate-950/60 p-2.5 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                    <Mail size={13} className="text-slate-500" />
                    Correo electrónico <span className="text-cyan-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="juan@empresa.com"
                    className="w-full rounded-lg border border-slate-800 bg-slate-950/60 p-2.5 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                    <Phone size={13} className="text-slate-500" />
                    WhatsApp / teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+52 442 000 0000"
                    className="w-full rounded-lg border border-slate-800 bg-slate-950/60 p-2.5 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                    <Briefcase size={13} className="text-slate-500" />
                    Sector / industria
                  </label>
                  <input
                    type="text"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    placeholder="Hotel, manufactura, servicios..."
                    className="w-full rounded-lg border border-slate-800 bg-slate-950/60 p-2.5 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                    <Users size={13} className="text-slate-500" />
                    Tamaño aproximado
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full cursor-pointer appearance-none rounded-lg border border-slate-800 bg-slate-950/60 p-2.5 text-sm text-slate-200 outline-none transition-all focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30"
                  >
                    <option value="1-10">1 - 10 colaboradores</option>
                    <option value="11-50">11 - 50 colaboradores</option>
                    <option value="51-200">51 - 200 colaboradores</option>
                    <option value="201-500">201 - 500 colaboradores</option>
                    <option value="500+">Más de 500 colaboradores</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300">
                  Área donde buscas mejorar <span className="text-cyan-500">*</span>
                </label>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                  {modulesList.map((item) => {
                    const isSelected = selectedAreas.includes(item.id);

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleArea(item.id)}
                        className={[
                          "flex items-center gap-2 rounded-xl border p-2.5 text-left transition-all",
                          isSelected
                            ? "border-cyan-500/40 bg-cyan-500/5 text-white"
                            : "border-slate-800/80 bg-slate-950/40 text-slate-400 hover:border-slate-700",
                        ].join(" ")}
                      >
                        <div
                          className={[
                            "flex h-4 w-4 shrink-0 items-center justify-center rounded border",
                            isSelected
                              ? "border-cyan-500 bg-cyan-500 text-slate-950"
                              : "border-slate-700 bg-slate-950",
                          ].join(" ")}
                        >
                          {isSelected && <Check size={10} strokeWidth={4} />}
                        </div>

                        <div className="h-5 w-5 shrink-0 overflow-hidden rounded">
                          <img
                            src={item.logoUrl}
                            alt={item.name}
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <span className="text-[10px] font-semibold md:text-xs">
                          {item.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                  <MessageSquare size={13} className="text-slate-500" />
                  Principal reto <span className="text-cyan-500">*</span>
                </label>
                <textarea
                  name="mainChallenge"
                  value={formData.mainChallenge}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Ej: necesitamos mejorar la asistencia, controlar mantenimiento o digitalizar firmas..."
                  className="w-full resize-none rounded-lg border border-slate-800 bg-slate-950/60 p-2.5 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Objetivo a 12 meses
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="¿Qué te gustaría mejorar en tu organización durante el próximo año?"
                  className="w-full resize-none rounded-lg border border-slate-800 bg-slate-950/60 p-2.5 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30"
                />
              </div>

              <AnimatePresence>
                {errors.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-400"
                  >
                    <div className="mb-1 flex items-center gap-1.5 font-bold">
                      <AlertCircle size={14} />
                      <span>Por favor corrige lo siguiente:</span>
                    </div>
                    <ul className="list-disc space-y-0.5 pl-4 font-light">
                      {errors.map((error) => (
                        <li key={error}>{error}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="overflow-hidden rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3 text-xs text-emerald-400"
                  >
                    <div className="flex items-center gap-1.5 font-bold">
                      <Check size={14} />
                      <span>Solicitud recibida.</span>
                    </div>
                    <p className="mt-1 pl-5 font-light">
                      Un consultor Aura revisará tu diagnóstico y te contactará.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_4px_20px_rgba(6,182,212,0.15)] transition-all hover:from-cyan-300 hover:to-blue-400 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Enviando..." : "Solicitar diagnóstico"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoRequestSection;