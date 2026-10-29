import { motion } from 'framer-motion';
import { Compass, TrendingUp, MessagesSquare, ArrowUpRight } from 'lucide-react';

type Product = {
  name: string;
  tagline: string;
  description: string;
  details: string;
  accent: 'violet' | 'emerald' | 'amber';
  icon: React.ReactNode;
};

const products: Product[] = [
  {
    name: 'Aura Discovery',
    tagline: 'Encuentra oportunidades donde otros ven datos.',
    description: 'Solución de inteligencia comercial en desarrollo, concebida para investigar mercados, identificar organizaciones y construir una visión más clara de los clientes potenciales.',
    details: 'Su propuesta contempla fuentes empresariales públicas, como DENUE de INEGI, segmentación de prospectos y un CRM comercial independiente de los controles internos de Aura Nexus.',
    accent: 'violet',
    icon: <Compass size={22} />,
  },
  {
    name: 'Aura Growth',
    tagline: 'De cada oportunidad a una estrategia de crecimiento.',
    description: 'Plataforma comercial en desarrollo para organizar la captación de clientes, estructurar campañas y dar seguimiento a las actividades de crecimiento de una organización.',
    details: 'La visión incluye coordinación de contactos, oportunidades y acciones comerciales; sus integraciones y funciones se validarán antes de ofrecerse al público.',
    accent: 'emerald',
    icon: <TrendingUp size={22} />,
  },
  {
    name: 'Aura Consultor',
    tagline: 'Inteligencia para analizar, decidir y avanzar.',
    description: 'Asistencia empresarial con inteligencia artificial en desarrollo, orientada a facilitar el análisis de información, explorar alternativas y preparar recomendaciones.',
    details: 'El diseño contempla privacidad, autorización explícita y controles estrictos de consumo de servicios tecnológicos. No implica consultas automáticas ni capacidades ya liberadas.',
    accent: 'amber',
    icon: <MessagesSquare size={22} />,
  },
];

const palette = {
  violet: { halo: 'from-violet-500/25 via-indigo-500/10 to-transparent', stroke: '#a78bfa', strong: '#67e8f9', label: 'text-violet-300', border: 'hover:border-violet-400/40' },
  emerald: { halo: 'from-emerald-500/25 via-teal-500/10 to-transparent', stroke: '#34d399', strong: '#67e8f9', label: 'text-emerald-300', border: 'hover:border-emerald-400/40' },
  amber: { halo: 'from-amber-500/20 via-violet-500/10 to-transparent', stroke: '#fbbf24', strong: '#c4b5fd', label: 'text-amber-300', border: 'hover:border-amber-400/40' },
};

const ProductVisual = ({ product, index }: { product: Product; index: number }) => {
  const p = palette[product.accent];
  const id = `upcoming-${index}`;
  return (
    <div className="relative w-full min-h-[245px] md:min-h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-[#080e20]" role="img" aria-label={`Ilustración conceptual tecnológica de ${product.name}`}>
      <div className={`absolute inset-0 bg-gradient-radial bg-gradient-to-br ${p.halo}`} />
      <svg viewBox="0 0 560 330" className="relative w-full h-full min-h-[245px] md:min-h-[320px]" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <radialGradient id={`${id}-glow`}>
            <stop offset="0%" stopColor={p.stroke} stopOpacity=".4" />
            <stop offset="100%" stopColor={p.stroke} stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${id}-line`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor={p.stroke} stopOpacity=".15" />
            <stop offset="55%" stopColor={p.strong} stopOpacity=".9" />
            <stop offset="100%" stopColor={p.stroke} stopOpacity=".15" />
          </linearGradient>
        </defs>
        <circle cx="280" cy="166" r="157" fill={`url(#${id}-glow)`} />
        {[80, 116, 153].map((r) => <circle key={r} cx="280" cy="166" r={r} fill="none" stroke={p.stroke} strokeWidth="1" strokeOpacity=".25" strokeDasharray={r === 153 ? '5 9' : undefined}/>)}
        {Array.from({ length: 12 }, (_, i) => {
          const a = i * Math.PI / 6;
          const x = 280 + Math.cos(a) * 152, y = 166 + Math.sin(a) * 130;
          return <g key={i}><line x1="280" y1="166" x2={x} y2={y} stroke={`url(#${id}-line)`} strokeWidth="1.3"/><circle cx={x} cy={y} r={i % 3 === 0 ? '6' : '3.5'} fill={i % 2 ? p.stroke : p.strong}/></g>;
        })}
        {product.accent === 'violet' && <>
          <path d="M190 192L244 117L313 151L375 91M206 218L289 237L366 194" fill="none" stroke={p.strong} strokeWidth="2.5" strokeLinecap="round"/>
          {[ [190,192],[244,117],[313,151],[375,91],[206,218],[289,237],[366,194] ].map(([x,y], i) => <circle key={i} cx={x} cy={y} r="7" fill="#0c1630" stroke={p.strong} strokeWidth="2"/>)}
        </>}
        {product.accent === 'emerald' && <>
          {[ [205,193,39],[257,167,65],[309,131,101],[361,92,140] ].map(([x,y,h], i) => <rect key={i} x={x} y={y} width="35" height={h} rx="6" fill={p.stroke} fillOpacity={.18 + i * .11} stroke={p.stroke} strokeOpacity=".8"/>)}
          <path d="M200 202Q259 173 288 164T379 87" fill="none" stroke={p.strong} strokeWidth="4" strokeLinecap="round"/>
          <path d="M356 88L380 84L376 108" fill="none" stroke={p.strong} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </>}
        {product.accent === 'amber' && <>
          {[[-66,-28],[8,-44],[72,-5],[-39,52],[42,66]].map(([dx,dy], i) => <g key={i}><rect x={280+dx-27} y={166+dy-20} width="54" height="40" rx="9" fill="#0c1630" stroke={i===1?p.strong:p.stroke} strokeOpacity=".85"/><path d={`M${280+dx-11} ${166+dy}h22`} stroke={p.strong} strokeWidth="2" strokeLinecap="round"/></g>)}
          <circle cx="280" cy="166" r="13" fill={p.stroke} fillOpacity=".9"/>
        </>}
      </svg>
      <span className="absolute bottom-4 left-5 text-[10px] uppercase tracking-[0.25em] text-slate-300/70">Visión conceptual · En desarrollo</span>
    </div>
  );
};

const UpcomingSection = () => (
  <section id="proximamente" className="py-24 px-4 md:px-8 bg-slate-950 border-t border-slate-900 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">El futuro de Aura Nexus</span>
        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-100">Nuevas soluciones. Más posibilidades.</h2>
        <p className="mt-5 text-slate-400 leading-relaxed">Discovery, Growth y Consultor amplían nuestra visión de un ecosistema empresarial conectado. Conoce el propósito de estas tres soluciones que estamos desarrollando.</p>
      </div>
      <div className="space-y-10">
        {products.map((product, index) => (
          <motion.article id={['aura-discovery', 'aura-growth', 'aura-consultor'][index]} key={product.name} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .55 }}
            className={`scroll-mt-56 grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-12 items-center rounded-3xl border border-white/10 bg-white/[0.025] p-5 md:p-8 transition-colors ${palette[product.accent].border}`}>
            <div className={index % 2 ? 'lg:order-2' : ''}><ProductVisual product={product} index={index}/></div>
            <div className={index % 2 ? 'lg:order-1' : ''}>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className={`inline-flex p-3 rounded-xl bg-slate-900 border border-white/10 ${palette[product.accent].label}`}>{product.icon}</span>
                <span className="px-3 py-1 text-xs uppercase tracking-wider rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">En desarrollo</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">{product.name}</h3>
              <p className={`mt-3 text-lg font-medium ${palette[product.accent].label}`}>{product.tagline}</p>
              <p className="mt-5 text-slate-300 leading-relaxed">{product.description}</p>
              <p className="mt-4 text-slate-400 leading-relaxed text-sm">{product.details}</p>
              <p className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500">Próximamente · Información preliminar <ArrowUpRight size={14}/></p>
            </div>
          </motion.article>
        ))}
      </div>
      <p className="text-center text-xs text-slate-500 mt-10 max-w-3xl mx-auto">Estas soluciones no están disponibles para contratación. Su alcance, funcionalidades y fechas de lanzamiento están sujetos a desarrollo y validación. Las ilustraciones son conceptuales.</p>
    </div>
  </section>
);

export default UpcomingSection;
