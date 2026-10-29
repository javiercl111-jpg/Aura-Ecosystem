import { ArrowLeft, PenTool, ShieldCheck, History } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuraSignaturePage = () => {
  return (
    <section className="relative min-h-screen pt-12 pb-24 px-4 md:px-8 bg-slate-950 overflow-hidden flex flex-col justify-center">
      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12">
        {/* Back Link */}
        <Link to="/#modulos" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-cyan-400 transition-colors uppercase tracking-wider">
          <ArrowLeft size={14} />
          Volver al Ecosistema
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 border-b border-slate-900 pb-12">
          {/* Logo container */}
          <div className="flex items-center justify-center p-4 rounded-3xl bg-slate-900 border-2 border-slate-800 w-36 h-36 md:w-44 md:h-44 overflow-hidden shadow-2xl relative">
            <div className="absolute inset-1 rounded-3xl border border-teal-500/10 animate-pulse" />
            <img 
              src="/aura-signature.png" 
              alt="Aura Signature Logo" 
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider">
              Legal & Documental
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              Aura Signature
            </h1>
            <p className="text-lg md:text-xl text-cyan-400 font-light leading-relaxed">
              Firma electrónica avanzada y gestión documental legal.
            </p>
          </div>
        </div>

        {/* Visual de identidad de producto; no es una captura de software. */}
        <div className="relative isolate overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#06122b] p-6 shadow-[0_26px_80px_rgba(0,0,0,.35)] md:p-10">
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
          <div aria-hidden="true" className="absolute -right-24 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[75px]" />
          <div className="relative flex min-h-[270px] flex-col items-center justify-center gap-6 md:min-h-[360px] md:flex-row md:gap-14">
            <img src="/aura-signature.png" alt="Identidad visual de Aura Signature" loading="lazy" className="h-40 w-40 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,.5)] md:h-56 md:w-56" />
            <div className="max-w-md text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">Aura Nexus · Soluciones empresariales</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Aura Signature</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">Conoce la visión del producto y solicita información sobre sus capacidades verificadas y su estado de desarrollo.</p>
              <Link to="/#contacto" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl border border-cyan-500/40 px-5 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/10">Solicitar información</Link>
            </div>
          </div>
          <p className="relative mt-3 text-right text-[11px] text-slate-400">Imagen de identidad corporativa, no captura funcional.</p>
        </div>

        {/* Details & Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Description */}
          <div className="md:col-span-7 space-y-6 text-slate-400 leading-relaxed font-light text-sm md:text-base">
            <p>
              Aura Signature es la solución corporativa que revoluciona la gestión de acuerdos y la firma de documentos contractuales. A través de flujos automatizados y robustos estándares criptográficos, permite digitalizar de punta a punta los procesos de consentimiento con plena validez legal.
            </p>
            <p>
              Integrado nativamente con Aura HCM y el resto del ecosistema, facilita el envío masivo de contratos de trabajo, addendas, políticas internas y acuerdos comerciales con un seguimiento detallado en tiempo real de cada interviniente.
            </p>
          </div>

          {/* Right Column: Highlights List */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-3">
              Capacidades Clave
            </h3>
            
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <PenTool size={16} className="text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Firma Electrónica Avanzada</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Firmas biométricas y con certificado digital bajo regulaciones locales e internacionales.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <ShieldCheck size={16} className="text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Flujos Multi-rol y Plantillas</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Secuencias de aprobación dinámicas, firmas en paralelo e integraciones modulares.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <History size={16} className="text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Trazabilidad y Auditoría</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Generación automática de un Documento de Evidencias con sello de tiempo e integridad inmutable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Demo Banner */}
        <div className="p-8 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-950 to-slate-900/40 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            ¿Listo para digitalizar tus contratos y firmas legales?
          </h2>
          <p className="max-w-md mx-auto text-xs md:text-sm text-slate-400 font-light leading-relaxed">
            Solicita una presentación interactiva de Aura Signature y agiliza los acuerdos comerciales e internos de tu organización de forma segura.
          </p>
          <div>
            <a 
              href="/#contacto"
              className="inline-flex px-8 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-300 hover:to-cyan-400 active:scale-95 transition-all shadow-[0_4px_20px_rgba(20,184,166,0.15)] text-sm"
            >
              Solicitar Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AuraSignaturePage;
