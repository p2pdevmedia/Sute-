import { navItems } from '@/lib/content';

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-black/5 bg-white/70 py-12">
      <div className="section-container grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
            SUTE Cocina
          </p>
          <p className="mt-3 max-w-xs text-sm text-espresso/75">
            Catering para eventos sociales y corporativos con propuestas gastronómicas de autor.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-espresso/60">Enlaces rápidos</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-espresso/80 hover:text-espresso">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-espresso/60">Contacto</h3>
          <ul className="mt-3 space-y-2 text-sm text-espresso/80">
            <li>Tel/WhatsApp: +54 9 2972 53-1170</li>
            <li>Email: hola@sutecocina.com (placeholder)</li>
            <li>
              Instagram:{' '}
              <a href="https://www.instagram.com/sute_cocina/" target="_blank" rel="noreferrer" className="underline">
                @sute_cocina
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="section-container mt-10 text-xs text-espresso/60">
        © {new Date().getFullYear()} SUTE Cocina. Todos los derechos reservados.
      </p>
    </footer>
  );
}
