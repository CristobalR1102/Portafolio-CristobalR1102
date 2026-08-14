import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-mask pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-panel/60 px-3 py-1 text-xs font-mono text-slate-400 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Disponible para proyectos freelance
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-50 leading-[1.1] max-w-3xl">
          Hola, soy <span className="text-gradient">Cristóbal Alcavil</span>
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-2xl">
          {profile.role}, fundador de <span className="text-slate-100 font-medium">FaroStudios</span>. Diseño,
          desarrollo y despliego productos web reales para negocios, desde el frontend hasta la infraestructura en la nube.
        </p>

        <p className="mt-3 text-sm font-mono text-slate-500 max-w-2xl">
          {profile.education} · {profile.location}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-ink font-semibold px-6 py-3 text-sm hover:bg-accent/90 transition-colors"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-slate-200 hover:border-accent/50 hover:text-accent transition-colors"
          >
            Contactar
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition-colors px-2"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
