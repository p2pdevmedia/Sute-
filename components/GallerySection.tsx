'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '@/lib/content';

export function GallerySection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="galeria" className="bg-white/60 py-20">
      <div className="section-container">
        <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)' }}>
          Galería SUTE Cocina
        </h2>
        <p className="mt-4 max-w-2xl text-espresso/75">
          Una selección visual de platos, estaciones y ambientaciones. Reemplazá estas imágenes por fotos reales de Instagram en
          <code className="mx-1 rounded bg-sand/70 px-1 py-0.5">/public/sute/</code> cuando estén disponibles.
        </p>

        <div className="mt-10 columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setSelected(img)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-black/5"
              aria-label={`Ver imagen ${i + 1} en tamaño completo`}
            >
              <Image
                src={img}
                alt={`Detalle de catering SUTE Cocina ${i + 1}`}
                width={800}
                height={1000}
                className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white p-2"
            onClick={() => setSelected(null)}
            aria-label="Cerrar imagen"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
            <Image src={selected} alt="Imagen ampliada de catering" fill className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
