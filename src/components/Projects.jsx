import { projects } from '../data/portfolio'

function ProjectCard({ project }) {
  return (
    <article className="group rounded-2xl border border-border bg-panel/50 p-7 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-50">{project.title}</h3>
          <p className="text-sm text-accent2 mt-1">{project.subtitle}</p>
        </div>
        {project.url && (
          <a
            href={`https://${project.url.replace(/^https?:\/\//, '')}`}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 text-xs font-mono text-slate-400 border border-border rounded-full px-3 py-1 hover:text-accent hover:border-accent/50 transition-colors"
          >
            Visitar ↗
          </a>
        )}
      </div>

      <p className="mt-4 text-sm text-slate-300 leading-relaxed">{project.description}</p>

      <ul className="mt-4 space-y-1.5">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-slate-400">
            <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className="text-xs font-mono text-slate-400 bg-white/5 rounded-md px-2 py-1">
            {s}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-heading">Proyectos</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-50">Cosas que he construido</h2>

        <div className={`mt-12 grid gap-6 ${projects.length > 1 ? 'md:grid-cols-2' : 'max-w-xl'}`}>
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
