import React from 'react';
type IconProps = {
  className?: string; // Optional Tailwind or custom classes
};
const Globeicon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      viewBox='0 0 58.0454 57.6388'
      fill='currentColor'
      className={className}
    >
      <path
        id='path'
        d='M0 31.73L15.97 31.73C16.49 41.27 19.56 50.12 24.5 57.63C11.48 55.61 1.31 44.97 0 31.73ZM0 25.9C1.31 12.66 11.48 2.02 24.5 0C19.56 7.51 16.49 16.36 15.97 25.9L0 25.9ZM58.04 25.9L42.06 25.9C41.54 16.36 38.48 7.51 33.53 0C46.55 2.02 56.73 12.66 58.04 25.9ZM58.04 31.73C56.73 44.97 46.55 55.61 33.53 57.63C38.48 50.12 41.54 41.27 42.06 31.73L58.04 31.73ZM21.82 31.73L36.22 31.73C35.72 39.85 33.14 47.4 29.02 53.87C24.89 47.4 22.32 39.85 21.82 31.73ZM21.82 25.9C22.32 17.78 24.89 10.23 29.02 3.76C33.14 10.23 35.72 17.78 36.22 25.9L21.82 25.9Z'
        fillRule='nonzero'
      />
    </svg>
  );
};

export default Globeicon;
