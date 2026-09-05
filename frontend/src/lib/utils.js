/**
 * Utility function to conditionally join classNames together.
 */
export function cn(...inputs) {
  return inputs.flat().filter(Boolean).join(' ');
}
