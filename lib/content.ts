import { CakeSlice, ConciergeBell, Sparkles, Users } from 'lucide-react';

export const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#cotizacion', label: 'Cotización' },
  { href: '#contacto', label: 'Contacto' }
];

export const services = [
  {
    title: 'Eventos sociales',
    description:
      'Propuestas gastronómicas para casamientos, cumpleaños y celebraciones íntimas con una puesta cuidada.',
    bullets: ['Menús estacionales', 'Servicio en mesa o estilo buffet', 'Opciones vegetarianas y sin TACC'],
    image: '/sute/sute-01.svg'
  },
  {
    title: 'Eventos corporativos',
    description:
      'Soluciones ágiles y elegantes para lanzamientos, reuniones ejecutivas y experiencias de marca.',
    bullets: ['Coffee breaks premium', 'Finger food para networking', 'Logística para grandes equipos'],
    image: '/sute/sute-02.svg'
  },
  {
    title: 'Mesas dulces y catering especial',
    description:
      'Detalles irresistibles para destacar tu evento con estética artesanal y sabores memorables.',
    bullets: ['Pastelería de autor', 'Estaciones temáticas', 'Presentación personalizada'],
    image: '/sute/sute-03.svg'
  },
  {
    title: 'Propuestas personalizadas',
    description:
      'Diseñamos cada servicio a medida, con acompañamiento cercano desde la idea inicial hasta el final.',
    bullets: ['Degustación previa', 'Planificación integral', 'Adaptación por presupuesto y estilo'],
    image: '/sute/sute-04.svg'
  }
];

export const values = [
  {
    title: 'Cocina de calidad',
    text: 'Ingredientes frescos, técnica y sabor en cada plato.',
    icon: Sparkles
  },
  {
    title: 'Presentación cuidada',
    text: 'Montajes estéticos que elevan la experiencia visual.',
    icon: CakeSlice
  },
  {
    title: 'Propuestas a medida',
    text: 'Cada evento tiene identidad propia y menú personalizado.',
    icon: Users
  },
  {
    title: 'Atención integral',
    text: 'Acompañamos todo el proceso con detalle y calidez.',
    icon: ConciergeBell
  }
];

export const galleryImages = [
  '/sute/sute-01.svg',
  '/sute/sute-02.svg',
  '/sute/sute-03.svg',
  '/sute/sute-04.svg',
  '/sute/sute-05.svg',
  '/sute/sute-06.svg',
  '/sute/sute-07.svg',
  '/sute/sute-08.svg'
];

export const testimonials = [
  {
    quote:
      'SUTE Cocina logró que nuestro casamiento se sienta único. La comida fue impecable y todos quedaron fascinados.',
    author: 'Marina y Tomás',
    detail: 'Evento social · 140 invitados'
  },
  {
    quote:
      'Necesitábamos una propuesta corporativa sofisticada y resolvieron todo con una organización excelente.',
    author: 'Equipo de Marketing, Estudio Norte',
    detail: 'Evento corporativo · 90 invitados'
  },
  {
    quote:
      'La mesa dulce fue una obra de arte. Sabor, estética y atención en cada detalle.',
    author: 'Valentina R.',
    detail: 'Cumpleaños de 30 · 60 invitados'
  }
];
