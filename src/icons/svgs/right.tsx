import React from "react";
type IconProps = {
  className?: string; // Optional Tailwind or custom classes
};
const Righticon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
    >
      <path
        d="M8.99996 0.666504C4.41663 0.666504 0.666626 4.4165 0.666626 8.99984C0.666626 13.5832 4.41663 17.3332 8.99996 17.3332C13.5833 17.3332 17.3333 13.5832 17.3333 8.99984C17.3333 4.4165 13.5833 0.666504 8.99996 0.666504ZM8.99996 15.6665C5.32496 15.6665 2.33329 12.6748 2.33329 8.99984C2.33329 5.32484 5.32496 2.33317 8.99996 2.33317C12.675 2.33317 15.6666 5.32484 15.6666 8.99984C15.6666 12.6748 12.675 15.6665 8.99996 15.6665ZM12.825 5.3165L7.33329 10.8082L5.17496 8.65817L3.99996 9.83317L7.33329 13.1665L14 6.49984L12.825 5.3165Z"
        fill="#FFCC85"
      />
    </svg>
  );
};

export default Righticon;
