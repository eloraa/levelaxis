import { BlockchainIcon, CloudIcon, CustomSoftwareIcon, DevOpsIcon, GenAIIcon, MVPIcon } from '../ui/icons';

export const OurServices = () => {
  return (
    <section className="bg-secondary-500 py-12 md:py-28">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-primary-600 font-semibold max-md:text-sm">Our Services</p>
          <h1 className="text-2xl md:text-5xl font-semibold mt-3 leading-[120%] text-white">Comprehensive Digital Solutions For Modern Enterprises</h1>
          <p className="text-sm mt-5 text-[#ECEDEE]">
            LevelAxis is an AI technology company helping enterprises modernize their operations through intelligent software, automation, and data-driven solutions. We turn emerging technologies into
            practical tools that deliver real value.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              label: 'GenAI',
              description: 'Harness the power of generative AI to transform your business.',
              icon: GenAIIcon,
            },
            {
              label: 'DevOps',
              description: 'Streamline your development and operations with our expert DevOps services.',
              icon: DevOpsIcon,
            },
            {
              label: 'MVP',
              description: 'Bring your ideas to life quickly with our Minimum Viable Product development',
              icon: MVPIcon,
            },
            {
              label: 'Cloud Solution',
              description: 'Leverage the cloud to scale your business with our cloud solutions',
              icon: CloudIcon,
            },
            {
              label: 'Blockchain',
              description: 'Secure, transparent, and decentralized solutions for your business.',
              icon: BlockchainIcon,
            },
            {
              label: 'Custom Software',
              description: 'Tailor-made software solutions to meet your unique buisness needs',
              icon: CustomSoftwareIcon,
            },
          ].map((service, index) => (
            <div className="py-10 px-6 bg-secondary-700 hover:bg-primary-700 transition-colors" key={index}>
              <div>
                <service.icon className="size-12 text-white" />
              </div>
              <div>
                <h1 className="text-white mt-5 font-semibold md:text-xl">{service.label}</h1>
                <p className="text-[#ECEDEE] mt-3 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
