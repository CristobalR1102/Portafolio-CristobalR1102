import { demos } from '../data/portfolio'

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

        <div className={`mt-12 grid gap-6 ${demos.length > 1 ? 'md:grid-cols-2' : 'max-w-xl'}`}>
          {demos.map((demo) => (
            <article
              key={demo.title}
              className="rounded-2xl border border-dashed border-border bg-panel/30 p-7 hover:border-accent/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wide text-slate-500 bg-white/5 rounded-full px-2.5 py-1">
                    Demo · Negocio ficticio
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-slate-50">{demo.title}</h3>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
