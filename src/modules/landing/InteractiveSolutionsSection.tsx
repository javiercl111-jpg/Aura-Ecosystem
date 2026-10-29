import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, CalendarClock, Wrench, Users } from 'lucide-react';

const solutions = [
  {
    id: 'personas',
    icon: Users,
    label: 'Personas y RRHH',
    title: 'Aura HCM',
    subtitle: 'Organiza la gestión de personal',
    description: 'Explora el enfoque de Aura HCM para la administración de personal, asistencia y jornadas. Las funciones continúan en desarrollo y validación; solicita información sobre el alcance disponible.',
    image: '/Logo%20Aura%20HCM%20oficial.png',
    path: '/aura-hcm',
    points: ['Administración de personal', 'Control de asistencia y jornadas', 'Enfoque para equipos de RRHH en México'],
  },
  {
    id: 'asistencia',
    icon: CalendarClock,
    label: 'Asistencia y jornadas',
    title: 'Aura HCM',
    subtitle: 'Da visibilidad al control de asistencia',
    description: 'Conoce cómo se está desarrollando el control de asistencia y la organización de jornadas. La disponibilidad comercial depende de las pruebas y validaciones pendientes.',
    image: '/Logo%20Aura%20HCM%20oficial.png',
    path: '/aura-hcm',
    points: ['Registro y consulta de marcajes', 'Organización de jornadas', 'Validación de capacidades por versión'],
  },
  {
    id: 'activos',
    icon: Wrench,
    label: 'Mantenimiento de activos',
    title: 'Aura Maintenance OS',
    subtitle: 'Evoluciona la organización del mantenimiento',
    description: 'Descubre la propuesta de Aura Maintenance OS para organizar activos, tareas preventivas y correctivas y seguimiento de incidencias. Sus capacidades están sujetas a validación.',
    image: '/aura-maintenance.png',
    path: '/aura-maintenance-os',
    points: ['Organización de activos', 'Planificación del mantenimiento', 'Seguimiento de incidencias'],
  },
  {
    id: 'instalaciones',
    icon: Building2,
    label: 'Operación de instalaciones',
    title: 'Aura Maintenance OS',
    subtitle: 'Conecta instalaciones y mantenimiento',
    description: 'Explora una propuesta para coordinar mantenimiento de instalaciones y equipos en entornos empresariales e inmobiliarios, sin asumir integraciones o funciones aún no acreditadas.',
    image: '/aura-maintenance.png',
    path: '/aura-maintenance-os',
    points: ['Instalaciones y equipos', 'Actividades preventivas', 'Seguimiento operativo'],
  },
] as const;

const InteractiveSolutionsSection = () => {
  const [activeId, setActiveId] = useState<(typeof solutions)[number]['id']>('personas');
  const resultRef = useRef<HTMLElement>(null);

  const selectSolution = (id: (typeof solutions)[number]['id']) => {
    setActiveId(id);
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches) {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.requestAnimationFrame(() => {
        resultRef.current?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
      });
    }
  };
  const current = solutions.find((solution) => solution.id === activeId) ?? solutions[0];

  return (
    <section id="explora-soluciones" aria-labelledby="explora-soluciones-title" className="relative overflow-hidden border-t border-slate-800 bg-[#061326] px-4 py-24 md:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,rgba(8,145,178,.13),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-300">Explora por necesidad</span>
          <h2 id="explora-soluciones-title" className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">Descubre lo que Aura puede hacer por tu empresa</h2>
          <p className="mt-5 text-base leading-7 text-slate-300">Selecciona un reto empresarial para conocer la solución relacionada. Esta guía es informativa y no implica disponibilidad comercial de funciones en desarrollo.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
          <div role="group" aria-label="Necesidad empresarial" className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {solutions.map(({ id, icon: Icon, label }) => {
              const selected = id === activeId;
              return (
                <button key={id} type="button" aria-pressed={selected} onClick={() => selectSolution(id)}
                  className={`flex min-h-16 items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${selected ? 'border-cyan-400/70 bg-cyan-400/10 text-white' : 'border-slate-700 bg-slate-900/70 text-slate-300 hover:border-cyan-400/40 hover:text-white'}`}>
                  <Icon aria-hidden="true" size={24} className={selected ? 'shrink-0 text-cyan-300' : 'shrink-0 text-slate-400'} />
                  <span className="flex-1 font-semibold">{label}</span>
                  <ArrowRight size={18} aria-hidden="true" className={selected ? 'text-cyan-300' : 'text-slate-500'} />
                </button>
              );
            })}
          </div>
          <article ref={resultRef} aria-live="polite" aria-atomic="true" className="scroll-mt-24 relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-[#0d2440] via-[#0b1930] to-[#07101f] p-6 md:p-10">
            <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,1fr)_150px]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Solución relacionada · En desarrollo</p>
                <h3 className="mt-3 text-3xl font-bold text-white">{current.title}</h3>
                <p className="mt-2 text-lg font-medium text-cyan-200">{current.subtitle}</p>
              </div>
              <img src={current.image} alt={`Logotipo de ${current.title}`} loading="lazy" decoding="async" className="mx-auto max-h-36 w-full max-w-[150px] object-contain" />
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300">{current.description}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {current.points.map(point => <li key={point} className="flex gap-3 text-sm text-slate-200"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />{point}</li>)}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={current.path} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Conocer la solución <ArrowRight size={18} aria-hidden="true" /></Link>
              <a href={current.title === "Aura HCM" ? "/?interes=Personas#contacto" : "/?interes=Operaciones#contacto"} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-500 px-5 py-3 font-semibold text-white transition-colors hover:border-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Solicitar información</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSolutionsSection;
