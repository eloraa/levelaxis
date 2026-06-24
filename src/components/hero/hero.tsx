import Image from 'next/image';
import banner1img from './banner1.jpg';
import banner2img from './banner2.jpg';
import banner3img from './banner3.jpg';
import { PlusIcon } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="container py-18 mt-18">
      <div className="flex items-center justify-center">
        <div className="text-center md:max-w-3xl mx-auto">
          <h1 className="font-bold text-2xl md:text-6xl text-secondary-500 leading-[130%]">Engineering Intelligent Technology For The Future</h1>
          <p className="max-md:text-xs mt-3 md:mt-6">
            LevelAxis is a global technology partner delivering AI-powered solutions, custom software, and digital transformation strategies that help businesses innovate faster and operate smarter.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Right */}
          <div className="grid gap-5">
            <div className="h-50 lg:h-86">
              <Image src={banner1img} alt="Banner Image" className="size-full object-cover" />
            </div>
            <div className="flex gap-5 h-40 md:h-52">
              <div className="size-full bg-secondary-500 p-4 text-white flex flex-col justify-between">
                <div className="flex items-center">
                  <h1 className="font-medium text-3xl md:text-5xl">
                    50<span className="sr-only">+</span>
                  </h1>
                  <PlusIcon className="size-10" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-medium text-xs md:text-sm">Successful Projects</p>
                </div>
              </div>
              <div className="size-full bg-primary-600 p-4 text-white flex flex-col justify-between">
                <div>
                  <p className="font-medium text-xs md:text-sm">Industries Served</p>
                </div>
                <div className="flex items-center">
                  <h1 className="font-medium text-3xl md:text-5xl">
                    10<span className="sr-only">+</span>
                  </h1>
                  <PlusIcon className="size-10" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>
          {/* Middle */}
          <div className="max-lg:h-50">
            <Image src={banner2img} alt="Banner Image" className="size-full object-cover" />
          </div>
          {/* Left */}
          <div className="grid gap-5">
            <div className="flex gap-5 h-40 md:h-52">
              <div className="size-full bg-primary-600 p-4 text-white flex flex-col justify-between">
                <div className="flex items-center">
                  <h1 className="font-medium text-3xl md:text-5xl">
                    20<span className="sr-only">+</span>
                  </h1>
                  <PlusIcon className="size-10" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-medium text-xs md:text-sm">Technology Experts</p>
                </div>
              </div>
              <div className="size-full bg-secondary-500 p-4 text-white flex flex-col justify-between">
                <div>
                  <p className="font-medium text-xs md:text-sm">Client Satisfaction</p>
                </div>
                <div className="flex items-center">
                  <h1 className="font-medium text-3xl md:text-5xl">99%</h1>
                </div>
              </div>
            </div>
            <div className="h-50 lg:h-86">
              <Image src={banner1img} alt="Banner Image" className="size-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
