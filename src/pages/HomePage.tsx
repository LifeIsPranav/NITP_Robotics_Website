import { HeroSection2 } from '@/components/home2/HeroSection2';
import { BrandStripSection2 } from '@/components/home2/BrandStripSection2';
import { ValuePropsSection2 } from '@/components/home2/ValuePropsSection2';
import { MetricsSection2 } from '@/components/home2/MetricsSection2';
import { ProjectsShowcaseSection2 } from '@/components/home2/ProjectsShowcaseSection2';
import { ProcessSection2 } from '@/components/home2/ProcessSection2';
import { EventsSpotlightSection2 } from '@/components/home2/EventsSpotlightSection2';
import { TestimonialsSection2 } from '@/components/home2/TestimonialsSection2';
import { FAQSection2 } from '@/components/home2/FAQSection2';
import { CTASection2 } from '@/components/home2/CTASection2';

export function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection2 />
      <BrandStripSection2 />
      <ValuePropsSection2 />
      <MetricsSection2 />
      <ProjectsShowcaseSection2 />
      <ProcessSection2 />
      <EventsSpotlightSection2 />
      <TestimonialsSection2 />
      <FAQSection2 />
      <CTASection2 />
    </div>
  );
}
