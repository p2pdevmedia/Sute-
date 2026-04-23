import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ValuesSection } from '@/components/ValuesSection';
import { GallerySection } from '@/components/GallerySection';
import { AboutSection } from '@/components/AboutSection';
import { QuoteSection } from '@/components/QuoteSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FinalCtaSection } from '@/components/FinalCtaSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ValuesSection />
        <GallerySection />
        <AboutSection />
        <QuoteSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
