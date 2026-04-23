import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20">
      <div className="section-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative h-[360px] overflow-hidden rounded-3xl border border-black/5 shadow-soft sm:h-[420px]">
          <Image src="/sute/sute-05.svg" alt="Equipo y montaje de SUTE Cocina" fill className="object-cover" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Nosotros</p>
          <h2 className="section-title mt-3" style={{ fontFamily: 'var(--font-serif)' }}>
            Sabor, estética y calidez en cada detalle
          </h2>
          <p className="mt-6 leading-relaxed text-espresso/80">
            SUTE Cocina nace de la pasión por compartir momentos a través de la comida, combinando sabor, estética y calidez en
            cada evento. Trabajamos con una mirada artesanal y contemporánea para que cada menú cuente una historia.
          </p>
          <p className="mt-4 leading-relaxed text-espresso/80">
            Desde reuniones íntimas hasta celebraciones de gran escala, acompañamos a nuestros clientes para construir experiencias
            memorables con atención cercana y profesional.
          </p>
        </div>
      </div>
    </section>
  );
}
