import { HeroScroller } from '@/components/hero-scroller/hero-scroller';
import { Hero } from '@/components/hero/hero';
import { CtaSection } from '@/components/sections/cta-section';
import { OurMission } from '@/components/sections/our-mission';
import { OurServices } from '@/components/sections/our-services';
import { OurStory } from '@/components/sections/our-story';
import { OurValues } from '@/components/sections/our-values';
import { WhyChooseUs } from '@/components/sections/why-choose-us';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-white">
        <HeroScroller />
        <OurStory />
      </div>
      <OurValues />
      <OurMission />
      <OurServices />
      <WhyChooseUs />
      <CtaSection />
    </main>
  );
}
// Forcing the page to render statically at build time, as we do not have any dynamic data.
export const dynamic = 'force-static';
