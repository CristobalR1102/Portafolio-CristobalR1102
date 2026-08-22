export const profile = {
  name: 'Cristóbal Alcavil',
  fullName: 'Cristóbal Renato Alcavil Avendaño',
  role: 'Desarrollador Web Full Stack',
  tagline: 'Construyo productos web de punta a punta y los llevo a producción en la nube.',
  location: 'Santiago, Chile',
  education: 'Ingeniería en Informática — DuocUC Alameda (6° semestre)',
  company: 'Cofundador de FaroStudios',
  github: 'https://github.com/CristobalR1102',
  linkedin: 'https://www.linkedin.com/in/calcavil2005/',
  farostudios: 'https://farostudios.cl',
  email: 'cristobalrenato.2005@gmail.com',
}

export const services = [
  {
    title: 'Web de presentación',
    description:
      'Sitio institucional para que tu negocio tenga presencia online: quiénes son, qué ofrecen, ubicación y botón de contacto directo por WhatsApp.',
    includes: ['Diseño a medida y responsive', 'Dominio y hosting configurados', 'Botón de contacto por WhatsApp', 'Optimizado para carga rápida'],
  },
  {
    title: 'Tienda / Pedidos online',
    description:
      'Como Bazzi Chicken: catálogo o menú dinámico, carrito de compras, checkout por WhatsApp y panel admin para que tú mismo gestiones productos e imágenes.',
    includes: ['Catálogo o menú dinámico', 'Checkout integrado con WhatsApp', 'Panel admin con CRUD', 'Lógica de horario abierto/cerrado'],
    featured: true,
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Vite', 'TailwindCSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST API'],
  },
  {
    title: 'Bases de datos',
    skills: ['Supabase'],
  },
  {
    title: 'Deploy & DevOps',
    skills: ['Vercel', 'Railway', 'Docker', 'GitHub Actions', 'Nginx'],
  },
  {
    title: 'Herramientas',
    skills: ['Git', 'GitHub', 'VS Code', 'Bash', 'PowerShell'],
  },
]

export const projects = [
  {
    title: 'Bazzi Chicken',
    subtitle: 'App de pedidos online para restaurante',
    url: 'https://bazzichicken.cl',
    description:
      'Plataforma de pedidos para un restaurante real: menú dinámico, carrito de compras, checkout integrado con WhatsApp, panel admin con CRUD de productos e imágenes, y lógica de apertura/cierre automática según horario.',
    stack: ['React', 'Vite', 'TailwindCSS', 'Supabase', 'Vercel'],
    highlights: [
      'Menú dinámico gestionado desde panel admin',
      'Checkout directo por WhatsApp',
      'CRUD de productos con imágenes',
      'Lógica de negocio abierto/cerrado en tiempo real',
    ],
  },
]

export const experience = [
  {
    period: '2024 — Presente',
    title: 'Ingeniería en Informática',
    org: 'DuocUC Alameda',
    description: 'Actualmente cursando 6° semestre, profundizando en desarrollo de software y arquitectura web.',
  },
  {
    period: '2026 — Presente',
    title: 'Cofundador',
    org: 'FaroStudios',
    description:
      'Desarrollo web freelance para negocios locales en Santiago, Chile. Gestión de ciclo completo: diseño de producto, desarrollo, despliegue en la nube y soporte post-entrega.',
  },
]
