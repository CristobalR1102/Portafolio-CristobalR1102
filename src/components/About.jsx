import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <p className="section-heading">Sobre mí</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-50">De la idea a producción</h2>
        </div>
        <div className="md:col-span-2 text-slate-300 leading-relaxed space-y-4 text-base">
          <p>
            Soy estudiante de Ingeniería en Informática en <span className="text-slate-100">DuocUC Alameda</span>,
            cursando 6° semestre, y cofundador de{' '}
            <a
              href={profile.farostudios}
              target="_blank"
              rel="noreferrer"
              className="text-slate-100 hover:text-accent transition-colors"
            >
              FaroStudios
            </a>
            , donde desde 2026 desarrollo soluciones web para negocios locales en Santiago de principio a fin:
            diseño, desarrollo, despliegue y soporte.
          </p>
          <p>
            Me muevo cómodo tanto en el frontend con React y TailwindCSS como en el backend con Node.js y
            Spring Boot, y disfruto especialmente llevar esos proyectos a infraestructura real: contenedores con
            Docker, orquestación con Kubernetes en AWS EKS, y pipelines de CI/CD automatizados con GitHub Actions.
          </p>
          <p>
            Últimamente he combinado desarrollo web con integraciones de IA, como bots de atención por WhatsApp
            con la API de OpenAI, para automatizar procesos de negocios reales.
          </p>
        </div>
      </div>
    </section>
  )
}
