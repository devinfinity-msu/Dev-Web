import React, { useState, createContext, useContext, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const NavMenuContext = createContext({
  activeItem: null,
  setActiveItem: () => {},
});

export const NavigationMenu = ({ className, children }) => {
  const [activeItem, setActiveItem] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveItem(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <NavMenuContext.Provider value={{ activeItem, setActiveItem }}>
      <div ref={menuRef} className={cn('relative z-50 flex items-center justify-center', className)}>
        {children}
      </div>
    </NavMenuContext.Provider>
  );
};

export const NavigationMenuList = ({ className, children }) => {
  return <div className={cn('flex items-center gap-1 list-none m-0 p-0', className)}>{children}</div>;
};

export const NavigationMenuItem = ({ children, className }) => {
  return <div className={cn('relative', className)}>{children}</div>;
};

export const NavigationMenuTrigger = ({ className, children, ...props }) => {
  const { activeItem, setActiveItem } = useContext(NavMenuContext);
  const isOpen = activeItem === 'solutions';

  return (
    <button
      type="button"
      onClick={() => setActiveItem(isOpen ? null : 'solutions')}
      className={cn(
        'inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all rounded-full cursor-pointer select-none',
        className
      )}
      data-state={isOpen ? 'open' : 'closed'}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn('h-3.5 w-3.5 transition-transform duration-200 opacity-70', isOpen && 'rotate-180')}
      />
    </button>
  );
};

export const NavigationMenuContent = ({ className, children }) => {
  const { activeItem } = useContext(NavMenuContext);
  const isOpen = activeItem === 'solutions';

  if (!isOpen) return null;

  return (
    <div
      data-slot="navigation-menu-viewport"
      className={cn(
        'absolute top-full left-1/2 -translate-x-1/2 mt-4 z-[999] rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-2xl transition-all duration-300 ease-in-out animate-in fade-in zoom-in-95',
        className
      )}
    >
      {children}
    </div>
  );
};

export const NavigationMenuLink = ({ className, children, asChild, href, onClick, ...props }) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn('inline-flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-full', className, children.props.className),
      onClick: (e) => {
        children.props.onClick?.(e);
        onClick?.(e);
      },
      ...props
    });
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn('inline-flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-full', className)}
      {...props}
    >
      {children}
    </a>
  );
};
