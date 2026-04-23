'use client';

import { FormEvent, useState } from 'react';
import { PhoneCall } from 'lucide-react';

type FormValues = {
  nombre: string;
  email: string;
  telefono: string;
  tipoEvento: string;
  invitados: string;
  fecha: string;
  mensaje: string;
};

const initialState: FormValues = {
  nombre: '',
  email: '',
  telefono: '',
  tipoEvento: '',
  invitados: '',
  fecha: '',
  mensaje: ''
};

export function QuoteSection() {
  const [values, setValues] = useState<FormValues>(initialState);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const whatsappNumber = '5492972531170';

  const createWhatsAppMessage = (formValues: FormValues) => {
    const lines = [
      '¡Hola! Quiero solicitar información para mi evento.',
      '',
      `Nombre: ${formValues.nombre}`,
      `Email: ${formValues.email}`,
      `Teléfono: ${formValues.telefono.trim() || 'No indicado'}`,
      `Tipo de evento: ${formValues.tipoEvento}`,
      `Cantidad de invitados: ${formValues.invitados}`,
      `Fecha estimada: ${formValues.fecha}`,
      '',
      'Mensaje:',
      formValues.mensaje
    ];

    return encodeURIComponent(lines.join('\n'));
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const required = [values.nombre, values.email, values.tipoEvento, values.invitados, values.fecha, values.mensaje];

    if (required.some((field) => !field.trim()) || !values.email.includes('@')) {
      setStatus('error');
      return;
    }

    const message = createWhatsAppMessage(values);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setStatus('success');
    setValues(initialState);
  };

  return (
    <section id="cotizacion" className="bg-white/60 py-20">
      <div className="section-container grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)' }}>
            Solicitud de cotización
          </h2>
          <p className="mt-4 max-w-xl text-espresso/75">
            Contanos tu idea y te enviamos una propuesta personalizada. Este formulario está listo para integrarse con backend o
            servicio de email.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
          >
            <PhoneCall className="h-4 w-4" /> Escribir por WhatsApp
          </a>
        </div>

        <form onSubmit={onSubmit} className="card-surface grid gap-4 p-6" noValidate>
          <input className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" placeholder="Nombre" value={values.nombre} onChange={(e)=>setValues({...values,nombre:e.target.value})} />
          <input className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" type="email" placeholder="Email" value={values.email} onChange={(e)=>setValues({...values,email:e.target.value})} />
          <input className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" placeholder="Teléfono" value={values.telefono} onChange={(e)=>setValues({...values,telefono:e.target.value})} />
          <input className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" placeholder="Tipo de evento" value={values.tipoEvento} onChange={(e)=>setValues({...values,tipoEvento:e.target.value})} />
          <input className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" placeholder="Cantidad de invitados" value={values.invitados} onChange={(e)=>setValues({...values,invitados:e.target.value})} />
          <input className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" type="date" value={values.fecha} onChange={(e)=>setValues({...values,fecha:e.target.value})} />
          <textarea className="min-h-28 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" placeholder="Mensaje" value={values.mensaje} onChange={(e)=>setValues({...values,mensaje:e.target.value})} />

          <button type="submit" className="rounded-full bg-espresso px-5 py-3 text-sm font-semibold text-cream transition hover:bg-espresso/90">
            Solicitar información por WhatsApp
          </button>

          {status === 'success' && (
            <p className="text-sm font-medium text-olive">¡Listo! Abrimos WhatsApp con tu mensaje precargado.</p>
          )}
          {status === 'error' && <p className="text-sm font-medium text-red-700">Completá los campos obligatorios con datos válidos.</p>}
        </form>
      </div>
    </section>
  );
}
