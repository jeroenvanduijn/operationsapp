import HeroSection from '@/components/home/HeroSection';
import PainSection from '@/components/home/USPSection';
import SystemSection from '@/components/home/FeaturesSection';
import FlowHighlightSection from '@/components/home/FlowHighlightSection';
import PulseHighlightSection from '@/components/home/PulseHighlightSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import PricingPreview from '@/components/home/SetupSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PainSection />
      <SystemSection />
      <FlowHighlightSection />
      <PulseHighlightSection />
      <TestimonialsSection />
      <PricingPreview />
      <CTASection />
    </div>
  );
}
