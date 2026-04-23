export function FinalCtaSection() {
  return (
    <section className="py-20">
      <div className="section-container">
        <div className="rounded-3xl bg-espresso px-6 py-14 text-center text-cream sm:px-10">
          <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: 'var(--font-serif)' }}>
            Contanos tu idea y armamos una propuesta a medida.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#cotizacion" className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-espresso">
              Solicitar cotización
            </a>
            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold text-cream"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
