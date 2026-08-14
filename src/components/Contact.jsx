import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contacto" className="py-28 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-mask pointer-events-none opacity-60" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="section-heading justify-center flex">Contacto</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-50">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="mt-4 text-slate-400 max-w-xl mx-auto">
          Ya sea una app web, un bot con IA o infraestructura en la nube para tu negocio, hablemos y lo llevamos
          a producción.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent text-ink font-semibold px-6 py-3 text-sm hover:bg-accent/90 transition-colors"
          >
            Escríbeme
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-slate-200 hover:border-accent/50 hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-slate-200 hover:border-accent/50 hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
