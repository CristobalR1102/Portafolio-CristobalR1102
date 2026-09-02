import { demos } from '../data/portfolio'

function DemoRow({ demo, reverse }) {
  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div className={reverse ? 'md:order-2' : ''}>
        <a href={demo.url} target="_blank" rel="noreferrer" className="block group">
          <img
            src={demo.image}
            alt={`Captura del sitio ${demo.title}`}
            loading="lazy"
            className="w-full max-w-sm mx-auto rounded-2xl border border-dashed border-border shadow-2xl shadow-black/40 group-hover:border-accent/40 transition-colors"
          />
        </a>
      </div>

      <div className={reverse ? 'md:order-1' : ''}>
        <span className="text-xs font-mono uppercase tracking-wide text-slate-500 bg-white/5 rounded-full px-2.5 py-1">
          Demo · Negocio ficticio
        </span>

        <div className="mt-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-50">{demo.title}</h3>
            <p className="text-sm text-accent2 mt-1">{demo.subtitle}</p>
          </div>
          <a
            href={demo.url}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 text-xs font-mono text-slate-400 border border-border rounded-full px-3 py-1 hover:text-accent hover:border-accent/50 transition-colors"
          >
            Ver demo ↗
          </a>
        </div>

        <p className="mt-4 text-sm text-slate-300 leading-relaxed">{demo.description}</p>

        <ul className="mt-4 space-y-1.5">
          {demo.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-slate-400">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {demo.stack.map((s) => (
            <span key={s} className="text-xs font-mono text-slate-400 bg-white/5 rounded-md px-2 py-1">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Demos() {
  return (
    <section id="demos" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-heading">Demos</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-50">Conceptos que armé para mostrar lo que puedo hacer</h2>
        <p className="mt-4 text-slate-400 max-w-2xl">
          Sitios de práctica, sin cliente real detrás todavía. El negocio, los productos y las reseñas son
          inventados — están pensados para mostrar el tipo de web que puedo construir para el tuyo.
        </p>

        <div className="mt-16 space-y-20">
          {demos.map((d, i) => (
            <DemoRow key={d.title} demo={d} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
