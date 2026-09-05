import React, { useState, createContext, useContext } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const AccordionContext = createContext({ openValue: null, toggle: () => {} });

export const Accordion = ({ type = 'single', collapsible = true, className, children }) => {
  const [openValue, setOpenValue] = useState(null);
  const toggle = (val) => {
    setOpenValue((prev) => (prev === val ? null : val));
  };
  return (
    <AccordionContext.Provider value={{ openValue, toggle }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({ value, className, children }) => {
  return (
    <div data-value={value} className={cn('border-b border-neutral-200 dark:border-neutral-800', className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { itemValue: value }) : child
      )}
    </div>
  );
};

export const AccordionTrigger = ({ itemValue, className, children, ...props }) => {
  const { openValue, toggle } = useContext(AccordionContext);
  const isOpen = openValue === itemValue;

  return (
    <button
      type="button"
      onClick={() => toggle(itemValue)}
      className={cn(
        'flex w-full items-center justify-between py-3 text-sm font-medium transition-all hover:no-underline text-left text-neutral-900 dark:text-neutral-50 cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn('h-4 w-4 shrink-0 transition-transform duration-200 text-neutral-400', isOpen && 'rotate-180')}
      />
    </button>
  );
};

export const AccordionContent = ({ itemValue, className, children }) => {
  const { openValue } = useContext(AccordionContext);
  const isOpen = openValue === itemValue;

  if (!isOpen) return null;

  return <div className={cn('pb-4 text-sm animate-in fade-in-50', className)}>{children}</div>;
};
