import Image from 'next/image';
import person1img from './person1.jpg';
import person2img from './person2.png';
import person3img from './person3.jpg';
import person4img from './person4.jpg';
import { ArrowButton } from '../ui/arrow-button';
import { Button } from '../ui/button';

export const CtaSection = () => {
  return (
    <section className="bg-primary-700 py-12 md:py-28">
      <div className="container">
        <div className="flex justify-center">
          <div className="flex justify-between gap-20 max-md:hidden">
            <div>
              <Image src={person1img} alt="Person 1" className="size-20 min-w-20 rounded-full object-cover" />
            </div>
            <div className="mt-auto">
              <Image src={person2img} alt="Person 2" className="size-20 min-w-20 rounded-full object-cover" />
            </div>
          </div>
          <div className="w-full">
            <div className="max-w-3xl text-center w-full">
              <h1 className="text-2xl md:text-5xl font-semibold mt-3 leading-[120%] text-white">Let's Build The Future Of Technology Together</h1>
              <p className="text-sm mt-5 text-[#ECEDEE] max-w-lg mx-auto">Partner with LevelAxis to transform ideas into scalable, intelligent, and impactful digital solutions.</p>
            </div>
            <div className="flex items-center justify-center gap-5 mt-10">
              <ArrowButton
                className={{
                  root: 'bg-white hover:bg-white text-primary-600',
                  icon: 'bg-primary-600 text-white [&>svg]:size-5 [&>svg]:first:group-hover:translate-x-[calc(100%+1rem)] [&>svg]:last:-translate-x-[calc(100%+1rem)] [&>svg]:last:group-hover:translate-x-0',
                }}
              >
                Start Your Project
              </ArrowButton>
              <Button variant="outline" className="h-11 text-white border-white bg-transparent px-5 text-sm font-semibold">
                Talk To Our Experts
              </Button>
            </div>
          </div>
          <div className="flex justify-between gap-20 max-md:hidden">
            <div className="mt-auto">
              <Image src={person1img} alt="Person 3" className="size-20 min-w-20 rounded-full object-cover" />
            </div>
            <div>
              <Image src={person2img} alt="Person 4" className="size-20 min-w-20 rounded-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
