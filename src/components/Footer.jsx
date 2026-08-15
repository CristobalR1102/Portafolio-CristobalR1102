import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
        <p>
          © {new Date().getFullYear()} {profile.fullName} ·{' '}
          <a href={profile.farostudios} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            FaroStudios
          </a>
        </p>
        <p>Hecho con React + Tailwind</p>
      </div>
    </footer>
  )
}
