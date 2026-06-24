import Link from 'next/link';
import { ArrowButton } from '../ui/arrow-button';
import { Logo } from '../ui/logo';
import { BehanceIcon, DribbleIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, XIcon } from '../ui/social-icons';

export const Footer = () => {
  return (
    <footer className="bg-secondary-500">
      <div className="container">
        <div className="flex max-md:flex-col max-lg:flex-wrap gap-20 py-12 md:py-20">
          <div>
            <div>
              <Logo className="h-12 text-primary-600" />
              <h1 className="text-lg font-semibold leading-[120%] text-white mt-10">Unlock The Power Of Intelligent Innovation!</h1>
            </div>
            <div className="mt-6">
              <ArrowButton className={{ root: 'hover:bg-primary-700' }}>Let's Talk</ArrowButton>
            </div>
          </div>

          <div className="grid gap-10">
            <div>
              <h1 className="text-lg font-semibold leading-[120%] text-white">Contact</h1>

              <ul className="grid gap-2 mt-5 text-[#C5C7CA] text-sm">
                <li>
                  <a href="tel:+123-456-789">+123-456-789</a>
                </li>
                <li>
                  <a href="mailto:info@example.com">info@example.com</a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-lg font-semibold leading-[120%] text-white">Address</h1>

              <ul className="grid gap-2 mt-5 text-[#C5C7CA] text-sm">
                <li>
                  <p>Eastern Trade Center, 56 Purana Paltan Line, Dhaka 1000</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-10">
            <div>
              <h1 className="text-lg font-semibold leading-[120%] text-white">Services</h1>

              <ul className="grid gap-2 mt-5 text-[#C5C7CA] text-sm">
                {[
                  {
                    label: 'GenAI',
                  },
                  {
                    label: 'DevOps',
                  },
                  {
                    label: 'MVP',
                  },
                  {
                    label: 'Cloud Solution',
                  },
                  {
                    label: 'Blockchain',
                  },
                  {
                    label: 'Custom Software',
                  },
                ].map((service, index) => (
                  <li key={index}>
                    <Link href="#" className="truncate">
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-10">
            <div>
              <h1 className="text-lg font-semibold leading-[120%] text-white">Industries</h1>

              <ul className="grid gap-2 mt-5 text-[#C5C7CA] text-sm">
                {[
                  {
                    label: 'Banking & Financial',
                  },
                  {
                    label: 'Data Analyst',
                  },
                  {
                    label: 'Healthcare',
                  },
                  {
                    label: 'Logistics',
                  },
                ].map((indrusty, index) => (
                  <li key={index}>
                    <Link href="#" className="truncate">
                      {indrusty.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-10">
            <div>
              <h1 className="text-lg font-semibold leading-[120%] text-white">Resources</h1>

              <ul className="grid gap-2 mt-5 text-[#C5C7CA] text-sm">
                {[
                  {
                    label: 'Blog',
                  },
                  {
                    label: 'Case Studies',
                  },
                  {
                    label: 'Job Openings',
                  },
                ].map((resource, index) => (
                  <li key={index}>
                    <Link href="#" className="truncate">
                      {resource.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-t-secondary-400 mt-20">
          <div className="flex items-center justify-between text-[#C5C7CA]">
            <p className="text-sm">© 2026 LevelAxis. All rights reserved.</p>
            <div>
              <ul className="flex items-center gap-5">
                {[
                  {
                    label: 'Facebook',
                    href: '#',
                    icon: FacebookIcon,
                  },
                  {
                    label: 'LinkedIn',
                    href: '#',
                    icon: LinkedInIcon,
                  },
                  {
                    label: 'X/Twitter',
                    href: '#',
                    icon: XIcon,
                  },
                  {
                    label: 'Instagram',
                    href: '#',
                    icon: InstagramIcon,
                  },
                  {
                    label: 'GithubIcon',
                    href: '#',
                    icon: GithubIcon,
                  },
                  {
                    label: 'Dribble',
                    href: '#',
                    icon: DribbleIcon,
                  },
                  {
                    label: 'Behance',
                    href: '#',
                    icon: BehanceIcon,
                  },
                ].map((social, index) => (
                  <li key={index}>
                    <a href={social.href}>
                      <span className="sr-only">{social.label}</span>
                      {<social.icon className="size-5" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
