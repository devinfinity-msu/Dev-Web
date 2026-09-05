import React from 'react';
import { cn } from '@/lib/utils';

export const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-50 cursor-pointer',
          variant === 'default' && 'bg-primary text-white hover:bg-primary-hover shadow-sm',
          variant === 'outline' && 'border border-neutral-300 dark:border-neutral-800 bg-transparent text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800',
          variant === 'ghost' && 'bg-transparent text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800',
          variant === 'secondary' && 'bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-800',
          size === 'default' && 'h-9 px-4 py-2 text-sm rounded-full',
          size === 'sm' && 'h-7 px-3 text-xs rounded-full',
          size === 'lg' && 'h-11 px-6 text-base rounded-full',
          size === 'icon' && 'h-9 w-9 p-0 rounded-full',
          size === 'icon-lg' && 'h-10 w-10 p-0 rounded-full',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
