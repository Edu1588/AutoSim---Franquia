import React from "react";

interface BrazilMapIconProps {
  className?: string;
  size?: number;
}

export default function BrazilMapIcon({ className = "", size = 48 }: BrazilMapIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-label="Mapa do Brasil - Presença Nacional"
    >
      <defs>
        <linearGradient id="brGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f26522" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#d94f11" stopOpacity="0.75" />
        </linearGradient>
        <filter id="brGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Brazil Continental Outline (Simplified High-Fidelity Silhouette) */}
      <path
        d="M 36,12
           C 43,10 54,12 60,16
           C 66,20 74,21 80,24
           C 87,27 92,34 90,40
           C 88,45 83,48 81,54
           C 79,60 76,68 70,74
           C 66,78 61,86 56,92
           C 53,95 49,93 47,88
           C 45,82 48,76 46,71
           C 43,65 37,63 33,59
           C 28,55 21,56 16,51
           C 12,47 11,41 14,35
           C 16,30 22,28 26,24
           C 30,20 32,14 36,12 Z"
        fill="url(#brGradient)"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:scale-105 origin-center"
      />

      {/* Internal Grid Lines representing Network Connectivity */}
      <path
        d="M 28,34 L 52,38 L 74,32 M 52,38 L 62,62 L 52,82 M 36,52 L 62,62"
        stroke="#ffffff"
        strokeWidth="0.75"
        strokeDasharray="1.5 2"
        strokeOpacity="0.65"
      />

      {/* Coverage Hub Dots */}
      {/* North / Manaus */}
      <circle cx="34" cy="28" r="2" fill="#ffffff" />
      {/* Northeast / Salvador - Recife */}
      <circle cx="76" cy="36" r="2" fill="#ffffff" />
      {/* Central-West / Brasília */}
      <circle cx="56" cy="50" r="2.2" fill="#ffffff" />
      {/* South / Curitiba - POA */}
      <circle cx="52" cy="80" r="2" fill="#ffffff" />

      {/* Matriz Highlight: Campinas / SP (Beacon Pin) */}
      <g transform="translate(60, 64)">
        <circle cx="0" cy="0" r="6" fill="#f26522" opacity="0.4" className="animate-ping" />
        <circle cx="0" cy="0" r="3.5" fill="#ffffff" filter="url(#brGlow)" />
        <circle cx="0" cy="0" r="1.8" fill="#f26522" />
      </g>
    </svg>
  );
}
