import { HeroScroller } from '@/components/hero-scroller/hero-scroller';
import { Hero } from '@/components/hero/hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroScroller />
    </main>
  );
}
