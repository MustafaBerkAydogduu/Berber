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
        {/* Scissor Blades */}
        <path
          d="M8 8 L24 26 M24 8 L8 26"
          stroke="#E5C578"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Pivot Center */}
        <circle cx="16" cy="17" r="2.2" fill="#0D0E11" stroke="#E5C578" strokeWidth="1.6" />
        {/* Scissor Finger Loops */}
        <circle cx="7" cy="30" r="4.2" stroke="#E5C578" strokeWidth="1.8" fill="none" />
        <circle cx="25" cy="30" r="4.2" stroke="#E5C578" strokeWidth="1.8" fill="none" />
        {/* Mini Gold Star */}
        <path
          d="M16 2 L17.2 5.2 L20.5 5.5 L18 7.8 L18.8 11 L16 9.4 L13.2 11 L14 7.8 L11.5 5.5 L14.8 5.2 Z"
          fill="#E5C578"
        />
      </svg>
    </div>
  );
}
