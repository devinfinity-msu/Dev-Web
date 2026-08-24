import React from 'react';

/**
 * Reusable Button Component
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'outline' | 'danger'} [props.variant='primary']
 * @param {'sm' | 'md' | 'lg'} [props.size='md']
 * @param {React.ReactNode} props.children
 * @param {Function} [props.onClick]
 * @param {string} [props.className]
 * @param {boolean} [props.disabled]
 * @param {'button' | 'submit' | 'reset'} [props.type='button']
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ...rest
}) => {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const variantClass = `btn-${variant}`;

  return (
    <button
      type={type}
      className={`btn ${variantClass} ${sizeClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
