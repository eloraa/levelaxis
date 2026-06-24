import * as React from 'react';
import { Button } from './button';
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ArrowButton = ({ children, className }: { children?: React.ReactNode; className?: { root?: string; icon?: string } }) => {
  return (
    <Button size="lg" className={cn('h-11 text-sm bg-primary-600 px-1.5 font-semibold group overflow-hidden hover:bg-secondary-500 focus:bg-secondary-500', className?.root)}>
      <div className="px-2 relative flex flex-col">
        <span className="translate-y-0 will-change-transform transition-transform group-hover:-translate-y-[calc(100%+1rem)]">{children}</span>
        <span className="absolute translate-y-[calc(100%+1rem)] will-change-transform transition-transform group-hover:translate-y-0">{children}</span>
      </div>
      <div className={cn('size-8 flex items-center justify-center bg-white relative overflow-hidden text-foreground', className?.icon)}>
        <ArrowRightIcon className="h-5 md:size-6 will-change-transform transition-transform group-hover:translate-x-full" />
        <ArrowUpRightIcon className="h-5 md:size-6 absolute will-change-transform transition-transform -translate-x-full group-hover:translate-x-0" />
      </div>
    </Button>
  );
};
