import { HeroScroller } from '@/components/hero-scroller/hero-scroller';
import { Hero } from '@/components/hero/hero';
import { OurMission } from '@/components/sections/our-mission';
import { OurStory } from '@/components/sections/our-story';
import { OurValues } from '@/components/sections/our-values';

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
    </main>
  );
}
