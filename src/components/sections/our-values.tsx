import { CollaborationIcon, InnovationIcon, QualityIcon, SuccessValueIcon } from '../ui/icons';

export const OurValues = () => {
  return (
    <section className="bg-secondary-500 py-12 md:py-28">
      <div className="container">
        <div>
          <div className="text-center">
            <p className="text-primary-600 font-semibold max-md:text-sm">Our Values</p>
            <h1 className="text-2xl md:text-5xl font-semibold mt-3 text-white mx-auto max-w-xl leading-[120%]">The Principles Behind Everything We Build</h1>
          </div>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: 'Innovation First',
              description: 'We embrace emerging technologies and continuously explore better ways to solve.',
              icon: InnovationIcon,
            },
            {
              label: 'Customer Success',
              description: 'Our clients growth and success remain at the center of every decision we make.',
              icon: SuccessValueIcon,
            },
            {
              label: 'Excellence & Quality',
              description: 'We maintain the highest standards in engineering, security, and user experience.',
              icon: QualityIcon,
            },
            {
              label: 'Integrity & Collaboration',
              description: 'We build transparent partnerships based on trust, communication, and shared goals.',
              icon: CollaborationIcon,
            },
          ].map((values, index) => (
            <div className="flex items-center justify-center py-8 bg-secondary-700 px-5" key={index}>
              <div className="text-center flex flex-col items-center justify-center">
                <div>
                  <values.icon className="size-12 text-primary-600" />
                </div>
                <div>
                  <h1 className="text-white mt-5 font-semibold">{values.label}</h1>
                  <p className="text-[#C5C7CA] mt-3 text-sm">{values.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
