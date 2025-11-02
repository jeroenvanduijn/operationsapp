import Link from 'next/link';
import HeroSection from '@/components/home/HeroSection';
import USPSection from '@/components/home/USPSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import SetupSection from '@/components/home/SetupSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <USPSection />
      <FeaturesSection />
      <TestimonialsSection />
      <SetupSection />
      <CTASection />
    </div>
  );
}
