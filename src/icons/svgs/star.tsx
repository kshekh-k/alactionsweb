import React from 'react';
type IconProps = {
  className?: string; // Optional Tailwind or custom classes
};
const Staricon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg viewBox='0 0 58 58' fill='currentColor' className={className}>
      <path
        id='path'
        d='M29 44.12L11.95 53.66L15.76 34.5L1.42 21.24L20.81 18.94L29 1.2L37.18 18.94L56.58 21.24L42.24 34.5L46.04 53.66L29 44.12Z'
        fillRule='nonzero'
      />
    </svg>
  );
};

export default Staricon;
