'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Flame, Menu, X } from 'lucide-react';
import { navItems } from '@/lib/content';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/95 backdrop-blur">
      <div className="section-container flex h-20 items-center justify-between">
        <Link
          href="#inicio"
          className="flex items-center gap-3 text-xl font-semibold tracking-wide"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          <span className="sute-logo-icon" aria-hidden="true">
            <span className="sute-logo-fire-glow" />
            <Flame className="sute-logo-fire" size={20} strokeWidth={2.2} />
          </span>
          <span>SUTE Cocina</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-espresso/80 transition hover:text-espresso">
              {item.label}
            </a>
          ))}
          <a
            href="#cotizacion"
            className="rounded-full bg-espresso px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-espresso/90"
          >
            Pedir cotización
          </a>
        </nav>

        <button
          aria-label="Abrir menú"
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-cream px-4 pb-5 pt-3 md:hidden" aria-label="Menú móvil">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cotizacion"
              className="mt-2 rounded-full bg-espresso px-4 py-2 text-center text-sm font-semibold text-cream"
              onClick={() => setOpen(false)}
            >
              Pedir cotización
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
