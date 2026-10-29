import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Footer from '../landing/Footer';

const Layout = () => {
  const { hash, pathname } = useLocation();
  const isHCM = pathname === '/aura-hcm';
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => setShowBackToTop(window.scrollY > 450);
    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img 
              src={isHCM ? "/Logo%20Aura%20HCM%20oficial.png" : "/aura-logo-oficial.png"} 
              alt={isHCM ? "Aura HCM" : "Aura Nexus"} 
              className="h-[52px] md:h-[62px] lg:h-[72px] w-auto object-contain"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <Link to="/#inicio" className="hover:text-cyan-400 transition-colors">Inicio</Link>
            <a href="/#modulos" className="hover:text-cyan-400 transition-colors">Módulos</a>
            <a href="/#beneficios" className="hover:text-cyan-400 transition-colors">Beneficios</a>
            <a href="/#arquitectura" className="hover:text-cyan-400 transition-colors">Arquitectura</a>
          </nav>

          <div>
            <a
              href="/#contacto"
              className="inline-flex min-h-11 items-center justify-center px-3 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors"
            >
              Solicitar información
            </a>
          </div>
        </div>
        <nav aria-label="Navegación móvil" className="md:hidden mt-2 -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 text-xs text-slate-200 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {[["Inicio", "/#inicio"], ["Soluciones", "/#modulos"], ["Beneficios", "/#beneficios"], ["Arquitectura", "/#arquitectura"], ["Contacto", "/#contacto"]].map(([label, href]) => (
            <a key={label} href={href} className="shrink-0 rounded-full border border-slate-700/70 bg-slate-900/70 px-4 py-2.5 transition-colors hover:border-cyan-400/60 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">{label}</a>
          ))}
        </nav>
        <details className="group relative mt-2 md:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 [&::-webkit-details-marker]:hidden">
            <span>Ir a un módulo de Aura</span><span aria-hidden="true" className="transition-transform group-open:rotate-180">⌄</span>
          </summary>
          <nav aria-label="Seleccionar módulo Aura" className="absolute left-0 right-0 top-full z-50 mt-2 max-h-[65vh] overflow-y-auto rounded-2xl border border-cyan-400/25 bg-slate-950 p-2 shadow-2xl shadow-black/70">
            {[
              ['Aura HCM', '/aura-hcm'],
              ['Aura Maintenance OS', '/aura-maintenance-os'],
              ['Aura Signature', '/aura-signature'],
              ['Aura Intelligence', '/aura-intelligence'],
              ['Aura Control Center', '/aura-control-center'],
              ['Próximamente · Discovery, Growth y Consultor', '/#proximamente'],
              ['Aura Discovery · En desarrollo', '/#aura-discovery'],
              ['Aura Growth · En desarrollo', '/#aura-growth'],
              ['Aura Consultor · En desarrollo', '/#aura-consultor'],
            ].map(([name, href]) => (
              <a key={href} href={href} className="block min-h-11 rounded-lg px-4 py-3 text-sm text-slate-100 hover:bg-cyan-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">{name}</a>
            ))}
          </nav>
        </details>
      </header>

      {/* Main Content Render */}
      <main className="flex-grow pt-52 md:pt-32">
        <Outlet />
      </main>

      <Footer />
      {showBackToTop && (
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })} aria-label="Volver al inicio" title="Volver al inicio" className="fixed bottom-6 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-950/40 transition-colors hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 md:bottom-8 md:right-8">
          <ArrowUp size={22} aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default Layout;

