import { useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Footer from '../landing/Footer';

const Layout = () => {
  const { hash, pathname } = useLocation();

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img 
              src="/aura-logo-oficial.png" 
              alt="Aura Ecosystem" 
              className="h-[32px] md:h-[38px] lg:h-[44px] w-auto object-contain"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <Link to="/#inicio" className="hover:text-cyan-400 transition-colors">Inicio</Link>
            <a href="/#modulos" className="hover:text-cyan-400 transition-colors">Módulos</a>
            <a href="/#beneficios" className="hover:text-cyan-400 transition-colors">Beneficios</a>
            <a href="/#arquitectura" className="hover:text-cyan-400 transition-colors">Arquitectura</a>
            <a href="/diagnostico" className="hover:text-cyan-400 transition-colors">Diagnóstico</a>
          </nav>

          <div>
            <a
              href="/diagnostico"
              className="px-5 py-2 rounded-xl font-medium text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors"
            >
              Realiza tu Diagnóstico
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Render */}
      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;

