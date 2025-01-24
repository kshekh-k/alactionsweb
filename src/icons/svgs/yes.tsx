


import React from 'react';
type IconProps = {
    className?: string; // Optional Tailwind or custom classes
};
const Yes: React.FC<IconProps> = ({ className }) => {
    return (
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" className={className}>
        <path d="M1.2345 5.9635L4.95325 9.68225L12.3907 1.7135" stroke="#00DA21" stroke-width="1.9375" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        

    );
};

export default Yes;
