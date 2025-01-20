import React from 'react';
type IconProps = {
  className?: string; // Optional Tailwind or custom classes
};
const Badgeicon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      viewBox='0 0 37.3333 50.4397'
      fill='currentColor'
      className={className}
    >
      <path
        id='path'
        d='M30.33 33.23L30.33 49.27C30.33 49.91 29.81 50.43 29.16 50.43C28.95 50.43 28.74 50.38 28.56 50.27L18.66 44.33L8.76 50.27C8.21 50.6 7.49 50.42 7.16 49.87C7.05 49.69 7 49.48 7 49.27L7 33.23C2.73 29.81 0 24.56 0 18.66C0 8.35 8.35 0 18.66 0C28.97 0 37.33 8.35 37.33 18.66C37.33 24.56 34.6 29.81 30.33 33.23ZM18.66 32.66C26.39 32.66 32.66 26.39 32.66 18.66C32.66 10.93 26.39 4.66 18.66 4.66C10.93 4.66 4.66 10.93 4.66 18.66C4.66 26.39 10.93 32.66 18.66 32.66ZM18.66 28C13.51 28 9.33 23.82 9.33 18.66C9.33 13.51 13.51 9.33 18.66 9.33C23.82 9.33 28 13.51 28 18.66C28 23.82 23.82 28 18.66 28Z'
        fillRule='nonzero'
      />
    </svg>
  );
};

export default Badgeicon;
