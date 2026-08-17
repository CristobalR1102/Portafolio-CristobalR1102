import { services } from '../data/portfolio'

export default function Services() {
  return (
    <section id="servicios" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-heading">Servicios</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-50">¿Qué puedo hacer por tu negocio?</h2>
        <p className="mt-4 text-slate-400 max-w-2xl">
          Proyectos reales, ya en producción, para negocios locales. Cada web se adapta a lo que tu negocio
          necesita hoy.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-2xl border p-7 flex flex-col transition-colors ${
                service.featured
                  ? 'border-accent/50 bg-accent/[0.06]'
                  : 'border-border bg-panel/50 hover:border-accent/40'
              }`}
            >
              {service.featured && (
                <span className="self-start mb-3 text-xs font-mono uppercase tracking-wide text-accent bg-accent/10 rounded-full px-2.5 py-1">
                  Más pedido
                </span>
              )}
              <h3 className="text-lg font-bold text-slate-50">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{service.description}</p>
              <ul className="mt-5 space-y-2 flex-1">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-slate-200 hover:border-accent/50 hover:text-accent transition-colors"
              >
                Cotizar este servicio
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
