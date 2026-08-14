import { skillGroups } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-heading">Stack</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-50">Tecnologías que manejo</h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-panel/50 p-5 hover:border-accent/40 transition-colors"
            >
              <h3 className="text-sm font-mono uppercase tracking-wide text-accent2 mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-slate-300 bg-white/5 border border-white/10 rounded-md px-2.5 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
