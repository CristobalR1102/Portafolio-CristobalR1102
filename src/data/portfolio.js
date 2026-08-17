export const profile = {
  name: 'Cristóbal Alcavil',
  fullName: 'Cristóbal Renato Alcavil Avendaño',
  role: 'Desarrollador Full Stack & Cloud',
  tagline: 'Construyo productos web de punta a punta y los llevo a producción en la nube.',
  location: 'Santiago, Chile',
  education: 'Ingeniería en Informática — DuocUC Alameda (6° semestre)',
  company: 'Cofundador de FaroStudios',
  github: 'https://github.com/CristobalR1102',
  linkedin: 'https://www.linkedin.com/in/calcavil2005/',
  farostudios: 'https://farostudios.cl',
  email: 'contacto@farostudios.cl',
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
  {
    title: 'Automatización con IA',
    description:
      'Bot de atención 24/7 por WhatsApp con IA: responde consultas, toma pedidos y atiende clientes fuera de horario, sin que tengas que estar pendiente todo el día.',
    includes: ['Bot conectado a tu número de WhatsApp', 'Respuestas con IA (OpenAI)', 'Contexto y datos guardados por negocio', 'Disponible 24/7'],
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Vite', 'TailwindCSS', 'JavaScript', 'Nginx'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Java', 'Spring Boot', 'Maven', 'REST API', 'Swagger / OpenAPI'],
  },
  {
    title: 'Bases de datos',
    skills: ['Supabase', 'MySQL', 'MariaDB', 'JDBC', 'Hibernate / JPA'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (VPC, EC2, EKS, ECR, NAT Gateway, IGW, ALB)', 'Kubernetes', 'Docker', 'Docker Compose', 'GitHub Actions', 'Vercel', 'Railway', 'CloudWatch', 'AWS CLI'],
  },
  {
    title: 'IA & Comunicaciones',
    skills: ['OpenAI API', 'Twilio'],
  },
  {
    title: 'Seguridad',
    skills: ['IAM Roles', 'GitHub Secrets', 'Security Groups', 'Mínimo privilegio'],
  },
  {
    title: 'Herramientas & metodología',
    skills: ['Git', 'GitHub', 'VS Code', 'Bash', 'PowerShell', 'DevOps', 'Microservicios', 'Lift & Shift'],
  },
  {
    title: 'Patrones de diseño',
    skills: ['Repository', 'Service Layer', 'Observer', 'Strategy'],
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
  {
    title: 'Bot de WhatsApp con IA',
    subtitle: 'Atención automatizada 24/7 para negocios locales',
    description:
      'Bot conversacional multi-tenant desplegado en un único servidor compartido, donde cada negocio se aísla por número de WhatsApp. Responde consultas, toma pedidos y atiende clientes fuera de horario usando IA generativa.',
    stack: ['Node.js', 'OpenAI API', 'Supabase', 'Railway', 'Twilio'],
    highlights: [
      'Arquitectura multi-tenant por número de WhatsApp',
      'Respuestas generadas con OpenAI API',
      'Persistencia y contexto por negocio en Supabase',
      'Despliegue continuo en Railway',
    ],
  },
  {
    title: 'Orquestación AWS EKS',
    subtitle: 'Cluster Kubernetes con 4 microservicios en producción',
    description:
      'Infraestructura cloud completa sobre AWS EKS: frontend, backend de ventas, backend de despachos y base de datos MySQL corriendo como microservicios independientes, con autoescalado y entrega continua.',
    stack: ['AWS EKS', 'Kubernetes', 'Docker', 'ECR', 'GitHub Actions', 'CloudWatch'],
    highlights: [
      'HPA (Horizontal Pod Autoscaler) para escalado automático',
      'Pipeline CI/CD con GitHub Actions',
      'Imágenes versionadas en Amazon ECR',
      'Logging y monitoreo centralizado con CloudWatch',
    ],
  },
]

export const academicProjects = [
  {
    title: 'Arquitectura de Microservicios',
    description:
      'Sistema académico compuesto por MS Pedidos, MS Productos y un BFF (Backend for Frontend) que orquesta las llamadas hacia un frontend en React. Aplicación de patrones de diseño para desacoplar lógica de negocio y acceso a datos.',
    stack: ['Node.js', 'Express', 'Axios', 'React', 'Vite', 'UUID', 'Morgan', 'CORS'],
    patterns: ['Repository', 'Service Layer', 'Observer', 'Strategy'],
  },
  {
    title: 'GreenBite',
    description:
      'Proyecto full-stack desarrollado en equipo (LexTech): frontend en React consumiendo una API REST en Spring Boot con persistencia en MySQL, cubierto con pruebas unitarias en JUnit e integraciones con Supabase.',
    stack: ['React', 'Spring Boot', 'MySQL', 'JUnit', 'Supabase'],
    patterns: [],
  },
]

export const experience = [
  {
    period: '2024 — Presente',
    title: 'Ingeniería en Informática',
    org: 'DuocUC Alameda',
    description: 'Actualmente cursando 6° semestre, profundizando en arquitectura de software, cloud y microservicios.',
  },
  {
    period: '2026 — Presente',
    title: 'Cofundador',
    org: 'FaroStudios',
    description:
      'Desarrollo web freelance para negocios locales en Santiago, Chile. Gestión de ciclo completo: diseño de producto, desarrollo, despliegue en la nube y soporte post-entrega.',
  },
]
