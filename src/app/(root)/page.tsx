import { HeroScroller } from '@/components/hero-scroller/hero-scroller';
import { Hero } from '@/components/hero/hero';
import { OurStory } from '@/components/sections/our-story';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-white">
        <HeroScroller />
        <OurStory />
      </div>
    </main>
  );
}
