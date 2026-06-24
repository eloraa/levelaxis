import Image from 'next/image';
import { GenAIIcon, HandShakeIcon, QualityIcon, SecureIcon } from '../ui/icons';

import whychooseusimg from './why-choose-us.png';

export const WhyChooseUs = () => {
  return (
    <section className="bg-white py-12 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-26">
          <div className="max-lg:h-80">
            <div className="size-full relative">
              <div className="absolute inset-0 bg-secondary-500 -rotate-4" />
              <div className="size-full relative z-1">
                <Image src={whychooseusimg} alt="Why Choose Us" className="size-full object-cover" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="text-primary-600 font-semibold max-md:text-sm">Why Choose Us</p>
              <h1 className="text-secondary-500 text-2xl md:text-5xl font-semibold mt-3 leading-[120%]">Why Organizations Choose LevelAxis</h1>
              <p className="text-sm mt-5 text-gray-600">Combining AI innovation with enterprise-grade engineering.</p>
            </div>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {[
                {
                  label: 'Purpose-Driven AI',
                  description: 'AI designed around measurable business outcomes.',
                  icon: GenAIIcon,
                },
                {
                  label: 'Secure & Scalable',
                  description: 'Solutions built for reliability and future growth.',
                  icon: SecureIcon,
                },
                {
                  label: 'Industry Expertise',
                  description: 'Deep understanding across multiple sectors.',
                  icon: QualityIcon,
                },
                {
                  label: 'Long-Term Partnership',
                  description: 'Continuous support beyond deployment.',
                  icon: HandShakeIcon,
                },
              ].map((service, index) => (
                <div key={index}>
                  <div>
                    <service.icon className="size-10 text-primary-600" />
                  </div>
                  <div>
                    <h1 className="mt-5 font-semibold md:text-xl text-black">{service.label}</h1>
                    <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
