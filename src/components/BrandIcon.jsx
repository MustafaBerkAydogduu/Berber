import React from 'react';

export default function BrandIcon({ size = 36, className = "" }) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-xl bg-gradient-to-br from-noir-800 via-noir-850 to-noir-900 border border-amber/30 p-1.5 flex items-center justify-center shadow-md group-hover:border-amber/60 group-hover:shadow-[0_0_15px_rgba(229,197,120,0.25)] transition-all duration-300 ${className}`}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Scissor Blades Crossing */}
        <path
          d="M11 11 L29 29 M29 11 L11 29"
          stroke="#E5C578"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        
        {/* Pivot Center */}
        <circle cx="20" cy="20" r="2.2" fill="#0D0E11" stroke="#E5C578" strokeWidth="1.6" />
        
        {/* Scissor Finger Loops (Symmetric) */}
        <circle cx="11" cy="32" r="4.2" stroke="#E5C578" strokeWidth="1.8" fill="none" />
        <circle cx="29" cy="32" r="4.2" stroke="#E5C578" strokeWidth="1.8" fill="none" />
        
        {/* Mini Gold Star (Symmetric Top Center) */}
        <path
          d="M20 3 L21.3 6.3 L24.8 6.6 L22.2 9 L23 12.4 L20 10.7 L17 12.4 L17.8 9 L15.2 6.6 L18.7 6.3 Z"
          fill="#E5C578"
        />
      </svg>
    </div>
  );
}
