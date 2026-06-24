'use client';

import Link from 'next/link';
import { Logo } from '../ui/logo';
import { Button } from '../ui/button';
import { ArrowRightIcon, ArrowUpRightIcon, ChevronDownIcon } from 'lucide-react';
import { links } from '@/constant';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { ArrowButton } from '../ui/arrow-button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn('h-18 fixed inset-x-0 top-0 transition-all duration-300 bg-white border-b border-b-secondary-50 z-30', !isScrolled && 'bg-transparent border-transparent')}>
      <div className="h-full flex items-center justify-between container">
        <div>
          <Link href="/">
            <Logo className="h-8 md:h-10 text-primary-600" />
          </Link>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 max-lg:hidden">
          <div>
            <ul className="flex items-center gap-4">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-black font-medium flex gap-1 items-center group py-2 relative before:content-[''] before:absolute before:bottom-0 before:h-0.5 before:bg-primary-600 before:inset-x-0 before:scale-x-0 before:origin-left before:will-change-transform before:transition-transform hover:before:scale-x-100"
                  >
                    {link.label}
                    {link.submenu && <ChevronDownIcon className="size-4 group-hover:translate-y-px will-change-transform transition-transform" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <ArrowButton>Book a Call</ArrowButton>
        </div>
      </div>
    </header>
  );
};
