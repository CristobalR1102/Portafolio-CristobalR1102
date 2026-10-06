import bazziChickenShot from '../assets/shots/bazzichicken.png'
import jardinDeRebecaShot from '../assets/shots/jardinderebeca.png'
import fogonCallejeroShot from '../assets/shots/fogoncallejero.png'
import cachapasMaracayShot from '../assets/shots/cachapasmaracay.png'

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
  instagram: 'https://www.instagram.com/developweb.cl/',
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
    skills: ['React', 'Next.js', 'Vite', 'TailwindCSS', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST API'],
  },
  {
    title: 'Bases de datos',
    skills: ['Supabase', 'PostgreSQL'],
  },
  {
    title: 'Deploy & DevOps',
    skills: ['Vercel', 'Cloudflare Workers', 'Railway', 'Docker', 'GitHub Actions', 'Nginx', 'cPanel'],
  },
  {
    title: 'Herramientas',
    skills: ['Git', 'GitHub', 'Playwright', 'VS Code', 'Bash', 'PowerShell'],
  },
]

export const projects = [
  {
    title: 'Cachapas Maracay',
    subtitle: 'E-commerce con pagos Webpay para restaurante con 3 sedes',
    url: 'https://cachapasmaracay.cl',
    image: cachapasMaracayShot,
    description:
      'Plataforma de pedidos online para un restaurante venezolano con 3 sedes en Chile, que antes recibía todo por WhatsApp: menú digital de 153 productos, pago en línea con Webpay Plus, delivery con precio automático según la ubicación del cliente y pantalla de cocina (KDS) con seguimiento del pedido en vivo. En producción con pagos reales.',
    stack: ['Next.js', 'Supabase', 'Webpay Plus', 'Cloudflare Workers', 'Leaflet', 'Playwright'],
    highlights: [
      'Pagos seguros: el monto siempre se recalcula en el servidor antes de cobrar',
      'Delivery cotizado por km de ruta real o por 43 zonas geográficas (punto en polígono)',
      'KDS multi-sede con roles, RLS en Postgres y seguimiento en tiempo real',
      'Auditoría de seguridad previa al lanzamiento y 350+ tests automatizados',
    ],
  },
  {
    title: 'Bazzi Chicken',
    subtitle: 'App de pedidos online para restaurante',
    url: 'https://bazzichicken.cl',
    image: bazziChickenShot,
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
  {
    title: 'Jardín de Rebeca',
    subtitle: 'Sitio y panel admin para bar-restaurante',
    url: 'https://jardinderebeca.cl',
    image: jardinDeRebecaShot,
    description:
      'Sitio completo para un bar-restaurante real, construido desde cero en HTML, CSS y JavaScript puro (sin frameworks ni build step): carta digital de 157 productos en 24 categorías, curación de más de 270 fotos del local, y un panel de administración con Supabase para que la clienta gestione fotos y precios sin depender de mí.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Supabase', 'Vercel', 'cPanel'],
    highlights: [
      'Carta digital de 157 productos en 24 categorías con HTML5 semántico',
      'Panel admin con Supabase: la clienta sube fotos y edita precios sin código',
      'Arquitectura resiliente: el sitio público sigue funcionando aunque falle el backend',
      'Deploy dual: Vercel (CI/CD) y hosting compartido tradicional vía cPanel',
    ],
  },
]

export const demos = [
  {
    title: 'Fogón Callejero',
    subtitle: 'Demo — comida rápida con carrito y checkout por WhatsApp',
    url: 'https://cristobal1102demo1.netlify.app',
    image: fogonCallejeroShot,
    description:
      'Demo de una web de pedidos para un local de comida rápida (negocio ficticio, todo el contenido es inventado): carta organizada por categorías, carrito de compras y pedido final que arma el mensaje y redirige a WhatsApp.',
    stack: ['React', 'Vite', 'TailwindCSS', 'Netlify'],
    highlights: [
      'Carta organizada por categorías',
      'Carrito de compras con resumen de pedido',
      'Checkout que arma el mensaje y redirige a WhatsApp',
      'Sección de ubicación, horarios y reseñas',
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
