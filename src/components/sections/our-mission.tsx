import Image from 'next/image';

import mission1img from './mission1.jpg';
import mission2img from './mission2.jpg';

export const OurMission = () => {
  return (
    <section className="container py-12 md:py-28">
      <div className="grid md:grid-cols-2 gap-16 md:gap-26">
        <div>
          <div>
            <p className="text-primary-600 font-semibold max-md:text-sm">Our Mission</p>
            <h1 className="text-secondary-500 text-2xl md:text-5xl font-semibold mt-3 leading-[120%]">Creating Technology That Creates Impact</h1>
            <p className="text-sm mt-5 text-gray-600">
              Our mission is to empower businesses through intelligent, scalable, and human-centered technology solutions that improve efficiency and unlock new possibilities.
            </p>
          </div>
          <div className="mt-10">
            <div className="h-82">
              <Image src={mission1img} className="size-full object-cover object-top" alt="Our Mission" />
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-col">
          <div className="mb-10">
            <div className="h-82">
              <Image src={mission2img} className="size-full object-cover object-top" alt="Our Mission" />
            </div>
          </div>
          <div>
            <p className="text-primary-600 font-semibold max-md:text-sm">Our Vision</p>
            <h1 className="text-secondary-500 text-2xl md:text-5xl font-semibold mt-3 leading-[120%]">Building A Smarter Digital Future</h1>
            <p className="text-sm mt-5 text-gray-600">We envision a future where AI and advanced technologies seamlessly enhance the way organizations work, innovate, and grow.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
