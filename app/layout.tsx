import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const serif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap'
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'SUTE Cocina | Catering para eventos',
  description:
    'Servicio de catering para eventos sociales y corporativos. Propuestas gastronómicas personalizadas, presentación cuidada y experiencias memorables.',
  openGraph: {
    title: 'SUTE Cocina | Catering para eventos',
    description:
      'Servicio de catering para eventos sociales y corporativos. Propuestas gastronómicas personalizadas, presentación cuidada y experiencias memorables.',
    type: 'website',
    locale: 'es_AR'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${serif.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
