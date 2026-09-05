import React from 'react';
import { cn } from '@/lib/utils';

export const Badge = ({ className, variant = 'default', children, ...props }) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold transition-colors',
        variant === 'default' && 'bg-primary text-white',
        variant === 'secondary' && 'bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200',
        variant === 'outline' && 'border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
