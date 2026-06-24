'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeConfig {
  speed?: number;
  direction?: 'left' | 'right';
  slowOnHover?: boolean;
  hoverSpeedMultiplier?: number;
  gap?: string;
}

interface MarqueeProps {
  children: React.ReactNode;
  config?: MarqueeConfig;
  className?: string;
}

export const Marquee = ({ children, config = {}, className }: MarqueeProps) => {
  const { speed = 20, direction = 'left', slowOnHover = true, hoverSpeedMultiplier = 2, gap = '3rem' } = config;
  const [hovered, setHovered] = React.useState(false);
  const innerRef = React.useRef<HTMLDivElement>(null);
  const xRef = React.useRef(0);
  const rafRef = React.useRef<number>(0);
  const lastTimeRef = React.useRef(0);

  const currentSpeed = hovered && slowOnHover ? speed * hoverSpeedMultiplier : speed;

  React.useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    lastTimeRef.current = 0;
    let running = true;

    const animate = (time: number) => {
      if (!running) return;

      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      const totalDistance = inner.scrollWidth / 2;
      const pxPerSec = totalDistance / currentSpeed;

      xRef.current += pxPerSec * delta;

      if (xRef.current >= totalDistance) {
        xRef.current -= totalDistance;
      }

      const translateX = direction === 'right' ? xRef.current - totalDistance : -xRef.current;

      inner.style.transform = `translateX(${translateX}px)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, [currentSpeed, direction]);

  return (
    <div className={cn('overflow-hidden', className)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div ref={innerRef} className={cn('flex w-max will-change-transform')} style={{ gap }}>
        {children}
        {children}
      </div>
    </div>
  );
};
