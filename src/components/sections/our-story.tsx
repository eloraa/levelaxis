import Image from 'next/image';
import { ArrowButton } from '../ui/arrow-button';
import storyimg from './story.jpg';

export const OurStory = () => {
  return (
    <section className="container pb-20 pt-16">
      <div className="grid md:grid-cols-2 gap-6 md:gap-26">
        <div className="size-full max-md:h-80 relative">
          <div className="size-full pb-[23px]">
            <Image src={storyimg} alt="Our story" className="size-full object-cover" />
          </div>

          <div className="absolute bottom-0 right-0 flex items-end">
            <div className="border-12 border-t-primary-800 border-r-primary-800 border-transparent"></div>
            <div className="px-6 py-8 w-48 text-center bg-primary-600">
              <p className="leading-[160%] text-white font-bold">Expert Technology Specialists</p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p className="text-primary-600 font-semibold max-md:text-sm">Our Story</p>
            <h1 className="text-secondary-500 text-2xl lg:text-3xl xl:text-4xl font-semibold mt-3">From Vision To Innovation</h1>
            <p className="text-sm mt-5 text-gray-600">
              LevelAxis was built with a mission to bridge the gap between advanced technology and real business challenges. What started as a vision to create impactful digital solutions has evolved
              into a trusted technology partner delivering AI, software, and automation solutions across industries.
            </p>
          </div>
          <div className="mt-10">
            <ul className="grid gap-6">
              {[
                {
                  label: '2023 — The Beginning',
                  description: 'Started our journey with a vision to transform businesses through technology.',
                },
                {
                  label: '2024 — Expanding Expertise',
                  description: 'Built a team of AI engineers, software developers, and digital strategists.',
                },
                {
                  label: '2025 — Driving Global Innovation',
                  description: 'Helping organizations worldwide adopt intelligent and scalable solutions.',
                },
              ].map((story, index) => (
                <li key={index} className="flex gap-5">
                  <div className="border border-black size-8 mt-1.5 min-w-8">
                    <div className="size-full rounded-full bg-primary-600 -mt-1.5 -ml-1.5"></div>
                  </div>
                  <div>
                    <h1 className="font-semibold text-lg">{story.label}</h1>
                    <p className="text-gray-600 mt-2.5 text-sm">{story.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-14">
            <ArrowButton>Contact Us</ArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
};
