import React, { useState, createContext, useContext } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

const SheetContext = createContext({ open: false, setOpen: () => {} });

export const Sheet = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
};

export const SheetTrigger = ({ asChild, children }) => {
  const { setOpen } = useContext(SheetContext);
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: (e) => {
        children.props.onClick?.(e);
        setOpen(true);
      },
    });
  }
  return (
    <button onClick={() => setOpen(true)} className="cursor-pointer">
      {children}
    </button>
  );
};

export const SheetContent = ({ side = 'right', className, children }) => {
  const { open, setOpen } = useContext(SheetContext);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={() => setOpen(false)}
      />
      {/* Off-canvas Sheet Drawer */}
      <div
        className={cn(
          'fixed inset-y-0 right-0 z-[1001] h-full w-[320px] bg-white dark:bg-neutral-950 p-6 shadow-2xl transition-transform duration-300 border-l border-neutral-200 dark:border-neutral-800 overflow-y-auto flex flex-col',
          className
        )}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-full p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Close menu"
        >
          <X className="size-5" />
        </button>
        {children}
      </div>
    </div>
  );
};
