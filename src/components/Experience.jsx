import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-heading">Trayectoria</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-50">Experiencia y formación</h2>

        <div className="mt-12 relative border-l border-border pl-8 space-y-12 max-w-2xl">
          {experience.map((item) => (
            <div key={item.title} className="relative">
              <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-accent shadow-[0_0_0_4px_rgba(34,211,238,0.15)]" />
              <p className="text-xs font-mono text-slate-500">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-100">
                {item.title} <span className="text-accent2 font-normal">— {item.org}</span>
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
