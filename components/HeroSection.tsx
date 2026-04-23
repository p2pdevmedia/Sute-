import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="inicio" className="section-container grid gap-8 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div>
        <p className="mb-4 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-clay">
          Catering premium para eventos
        </p>
        <h1 className="max-w-2xl text-4xl leading-tight sm:text-5xl lg:text-6xl" style={{ fontFamily: 'var(--font-serif)' }}>
          Catering para eventos que se recuerdan
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-espresso/80 sm:text-lg">
          Creamos experiencias gastronómicas para celebraciones sociales, eventos corporativos y encuentros especiales.
        </p>
        <p className="mt-4 max-w-xl text-sm text-espresso/70">
          Propuestas personalizadas, cocina de autor y atención integral para tu evento.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#servicios" className="rounded-full bg-espresso px-6 py-3 text-sm font-semibold text-cream transition hover:bg-espresso/90">
            Ver servicios
          </a>
          <a href="#cotizacion" className="rounded-full border border-espresso/20 bg-white px-6 py-3 text-sm font-semibold transition hover:border-espresso/50">
            Pedir cotización
          </a>
        </div>
      </div>

      <div className="relative h-[440px] overflow-hidden rounded-3xl border border-black/5 shadow-soft sm:h-[520px]">
        <Image
          src="/sute/sute-hero.svg"
          alt="Mesa de catering elegante de SUTE Cocina"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
