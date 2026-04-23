# SUTE Cocina SPA (Next.js + Vercel)

Sitio one-page premium para **SUTE Cocina**, desarrollado con Next.js (App Router), TypeScript y Tailwind CSS.

## Stack

- Next.js 15+
- TypeScript
- Tailwind CSS
- App Router
- next/image para optimización de imágenes
- lucide-react para iconografía

## Estructura

```bash
app/
  layout.tsx
  page.tsx
  globals.css
components/
  Navbar.tsx
  HeroSection.tsx
  ServicesSection.tsx
  ValuesSection.tsx
  GallerySection.tsx
  AboutSection.tsx
  QuoteSection.tsx
  TestimonialsSection.tsx
  FinalCtaSection.tsx
  Footer.tsx
lib/
  content.ts
public/
  sute/
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Deploy en Vercel

1. Subí este repositorio a GitHub/GitLab/Bitbucket.
2. En Vercel, importá el proyecto.
3. Framework: **Next.js** (auto-detect).
4. Build Command: `npm run build`.
5. Output: automático para Next.js.
6. Deploy.

## Reemplazo de imágenes placeholder

Actualmente el sitio usa imágenes placeholder en:

- `public/sute/sute-hero.svg`
- `public/sute/sute-01.svg` ... `public/sute/sute-08.svg`

Para usar material real de Instagram o assets propios:

1. Exportá/descargá imágenes en formato `.jpg` o `.webp`.
2. Copialas dentro de `public/sute/` (ej. `mesa-01.jpg`, `evento-02.jpg`).
3. Actualizá rutas en:
   - `lib/content.ts` (`services` y `galleryImages`)
   - `components/HeroSection.tsx` (imagen principal)
   - `components/AboutSection.tsx` (imagen de apoyo)
4. Ajustá `alt` descriptivos para SEO/accesibilidad.

## Conectar el formulario de cotización a backend/email

El formulario (`components/QuoteSection.tsx`) hoy tiene submit mock con validación client-side.

Opciones para producción:

### Opción A: API Route en Next.js + servicio de email

1. Crear `app/api/quote/route.ts`.
2. Recibir payload del formulario con `POST`.
3. Validar datos en servidor.
4. Enviar email con Resend, SendGrid o nodemailer.
5. Cambiar `onSubmit` para hacer `fetch('/api/quote', { method: 'POST' ... })`.

### Opción B: Integración con CRM/Form backend

1. Apuntar el `onSubmit` a Webhook (HubSpot, Make, Zapier, etc.).
2. Guardar lead y disparar confirmación automática.
3. Mantener estados de éxito/error en UI.

## Notas de contenido

- Algunos datos de contacto están en modo **placeholder** y marcados como tales.
- Reemplazar número de WhatsApp, email y textos finales antes de publicar.
