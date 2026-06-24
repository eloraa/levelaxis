import { Fragment } from 'react/jsx-runtime';
import { StarIcon } from '../ui/icons';
import { Marquee } from '../ui/marquee';
import Link from 'next/link';

export const HeroScroller = () => {
  return (
    <div className="flex items-center h-60 mt-16 overflow-hidden">
      <div className="flex relative h-24 w-full">
        <div className="absolute h-full w-[calc(100%+2rem)] bg-primary-600 -rotate-3 -mx-4"></div>
        <div className="h-full w-[calc(100%+2rem)] bg-secondary-500 relative z-1 flex items-center rotate-3 -mx-4">
          <Marquee config={{ speed: 60 }}>
            <div className="flex items-center gap-6 py-2 h-full text-white">
              {Array.from({ length: 6 }).map((_, i) => (
                <Fragment key={i}>
                  <Link href="#" className="text-5xl font-semibold uppercase">
                    Let's Talk
                  </Link>
                  <span>
                    <StarIcon className="size-11" />
                  </span>
                </Fragment>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};
