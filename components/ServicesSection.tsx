import Image from 'next/image';
import { services } from '@/lib/content';

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-white/60 py-20">
      <div className="section-container">
        <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)' }}>
          Servicios para cada tipo de evento
        </h2>
        <p className="mt-4 max-w-3xl text-espresso/75">
          Diseñamos propuestas gastronómicas según el estilo de tu celebración, combinando calidad culinaria, estética y organización.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="card-surface overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-2xl" style={{ fontFamily: 'var(--font-serif)' }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-espresso/80">{service.description}</p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-espresso/75 marker:text-clay">
                  {service.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="rounded-full border border-espresso/20 px-4 py-2 text-sm font-semibold transition hover:border-espresso/50 hover:bg-sand/40"
                >
                  Consultar
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
