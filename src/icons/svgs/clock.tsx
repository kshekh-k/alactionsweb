import React from 'react';
type IconProps = {
  className?: string; // Optional Tailwind or custom classes
};
const Clockicon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg viewBox='0 0 55 55' fill='currentColor' className={className}>
      <path
        id='path'
        d='M27.5 55C12.31 55 0 42.68 0 27.5C0 12.31 12.31 0 27.5 0C42.68 0 55 12.31 55 27.5C55 42.68 42.68 55 27.5 55ZM30.25 27.5L30.25 13.75L24.75 13.75L24.75 33L41.25 33L41.25 27.5L30.25 27.5Z'
        fillRule='nonzero'
      />
    </svg>
  );
};

export default Clockicon;
