import { values } from '@/lib/content';

export function ValuesSection() {
  return (
    <section className="py-20">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Por qué elegirnos</p>
          <h2 className="section-title mt-3" style={{ fontFamily: 'var(--font-serif)' }}>
            Experiencias gastronómicas con identidad
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article key={value.title} className="card-surface p-6">
                <Icon className="h-8 w-8 text-clay" aria-hidden="true" />
                <h3 className="mt-4 text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-espresso/75">{value.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
