import { testimonials } from '@/lib/content';

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="section-container">
        <h2 className="section-title text-center" style={{ fontFamily: 'var(--font-serif)' }}>
          Lo que dicen nuestros clientes
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.author} className="card-surface p-6">
              <blockquote className="text-sm leading-relaxed text-espresso/80">“{item.quote}”</blockquote>
              <figcaption className="mt-5">
                <p className="text-sm font-semibold">{item.author}</p>
                <p className="text-xs text-espresso/65">{item.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
