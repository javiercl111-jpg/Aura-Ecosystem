import { ArrowUpRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  { label: 'Aura HCM', href: '/aura-hcm' },
  { label: 'Aura Maintenance OS', href: '/aura-maintenance' },
  { label: 'Aura Signature', href: '/aura-signature' },
  { label: 'Aura Intelligence', href: '/aura-intelligence' },
  { label: 'Aura Control Center', href: '/aura-control-center' },
];

const Footer = () => (
  <footer className="relative isolate overflow-hidden border-t border-cyan-300/10 bg-[#030b1a] px-5 pb-8 pt-16 text-sm text-slate-400 md:px-8">
    <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-48 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[110px]" />
    <div className="relative mx-auto max-w-7xl">
      <div className="mb-12 flex flex-col gap-6 rounded-[1.75rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/10 via-slate-900/80 to-indigo-500/10 p-7 shadow-2xl shadow-black/20 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">Aura Nexus · Ecosistema empresarial</p>
          <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">Tecnología conectada para impulsar tu operación.</h2>
          <p className="mt-3 max-w-xl leading-7 text-slate-300">Conoce nuestras soluciones y descubre cuál se adapta a las necesidades de tu organización.</p>
        </div>
        <a href="/#contacto" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
          Solicitar información <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
      <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4 lg:col-span-2">
          <Link to="/" aria-label="Aura Nexus · Inicio" className="inline-flex rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">
            <img src="/aura-logo-oficial.png" alt="Aura Nexus" className="h-[68px] w-auto object-contain" loading="lazy" />
          </Link>
          <p className="max-w-sm leading-7 text-slate-300">Personas. Operaciones. Documentos. Inteligencia.</p>
          <a href="mailto:admin@auranexus.io" className="inline-block font-medium text-cyan-300 underline-offset-4 hover:underline">admin@auranexus.io</a>
        </div>
        <nav aria-label="Productos Aura" className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-[.18em] text-slate-200">Explora Aura</h3>
          <ul className="space-y-3">
            {products.map(({label, href}) => (
              <li key={href}><Link className="inline-flex items-center gap-1.5 transition-colors hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300" to={href}>{label}<ArrowUpRight size={12} aria-hidden="true" /></Link></li>
            ))}
          </ul>
        </nav>
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-[.18em] text-slate-200">Información</h3>
          <p className="leading-7">Aviso de privacidad y términos del servicio: información pendiente de publicación.</p>
          <p className="flex items-start gap-2 leading-6 text-slate-400"><Shield size={16} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" /> Enfoque de seguridad y control sujeto a validación por producto.</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-3 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Aura Nexus. Todos los derechos reservados.</p>
        <a href="/#inicio" className="transition-colors hover:text-cyan-300">Volver al inicio ↑</a>
      </div>
    </div>
  </footer>
);

export default Footer;
