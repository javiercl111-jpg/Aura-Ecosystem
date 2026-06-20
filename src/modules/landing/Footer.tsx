import { Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4 md:px-8 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand column */}
        <div className="space-y-4 col-span-1 md:col-span-2">
          <div className="flex items-center gap-3">
            <img 
              src="/aura-logo-oficial.png" 
              alt="Aura Ecosystem" 
              className="h-[32px] md:h-[36px] w-auto object-contain" 
            />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-200">Aura Ecosystem</h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Personas. Operaciones. Documentos. Inteligencia.
            </p>
          </div>
          <div className="pt-2 text-xs">
            <span className="text-slate-500">Contacto: </span>
            <a href="mailto:admin@auranexus.io" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
              admin@auranexus.io
            </a>
          </div>
        </div>

        {/* Modules column */}
        <div className="space-y-3">
          <h5 className="font-semibold text-slate-200 uppercase tracking-wider text-xs">Módulos</h5>
          <ul className="space-y-2 text-slate-500 text-xs">
            <li><a href="#modules-section" className="hover:text-cyan-400 transition-colors">Aura HCM</a></li>
            <li><a href="#modules-section" className="hover:text-cyan-400 transition-colors">Aura Signature</a></li>
            <li><a href="#modules-section" className="hover:text-cyan-400 transition-colors">Aura Intelligence</a></li>
            <li><a href="#modules-section" className="hover:text-cyan-400 transition-colors">Aura Maintenance OS</a></li>
            <li><a href="#modules-section" className="hover:text-cyan-400 transition-colors">Aura Control Center</a></li>
          </ul>
        </div>

        {/* Legal & Security column */}
        <div className="space-y-3">
          <h5 className="font-semibold text-slate-200 uppercase tracking-wider text-xs">Cumplimiento</h5>
          <ul className="space-y-2 text-slate-500 text-xs">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Términos del Servicio</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Seguridad de Datos</a></li>
            <li className="flex items-center gap-1.5 pt-1 text-cyan-500/80">
              <Shield size={12} />
              <span>ISO 27001 Compliant</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
        <p>© {currentYear} Aura. Todos los derechos reservados.</p>
        <p className="flex items-center gap-1">
          <span>Diseñado para alto rendimiento operativo y financiero</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
