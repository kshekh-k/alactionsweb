import React from 'react';
type IconProps = {
  className?: string; // Optional Tailwind or custom classes
};
const Quoteicon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      viewBox='0 0 69.8772 59.9854'
      fill='currentColor'
      className={className}
    >
      <path
        id='path'
        d='M69.86 59.94C69.61 59.95 69.36 59.98 69.12 59.98L39.99 59.98C39.97 59.75 39.95 59.6 39.95 59.44C39.95 49.3 39.78 39.16 40.03 29.02C40.28 18.78 44.97 10.76 53.37 4.98C58.15 1.7 63.52 0.09 69.33 0C69.51 0 69.69 0.02 69.87 0.03L69.87 10.01C68.9 10.07 67.91 10.05 66.95 10.19C65.94 10.35 64.94 10.57 63.96 10.88C62.98 11.18 62.03 11.56 61.11 12.01C60.18 12.46 59.3 12.99 58.46 13.57C57.62 14.16 56.82 14.81 56.08 15.52C55.34 16.23 54.66 17 54.03 17.82C53.41 18.63 52.85 19.49 52.36 20.4C51.87 21.3 51.45 22.24 51.1 23.21C50.75 24.17 50.48 25.16 50.28 26.17C50.04 27.4 49.99 28.67 49.84 29.98L69.86 29.98L69.86 59.94Z'
        fillRule='nonzero'
      />
      <path
        id='path'
        d='M10.01 29.97L29.9 29.97L29.9 59.91L0.04 59.91L0.04 59.1C0.04 49.52 -0.08 39.92 0.07 30.33C0.28 17.29 6.46 7.99 18.18 2.41C21.59 0.78 26.62 -0.16 29.89 0.02L29.89 9.94C23.19 10.17 17.74 12.91 13.74 18.38C11.25 21.79 10.08 25.65 10.01 29.97Z'
        fillRule='nonzero'
      />
    </svg>
  );
};

export default Quoteicon;
