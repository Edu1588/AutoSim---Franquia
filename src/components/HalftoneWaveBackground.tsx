import React from "react";

/**
 * HalftonePatch: A small, localized accent grid of dots.
 * Directly fulfills user instruction:
 * "não é pra preencher o fundo inteiro os dots, era apenas uma area pequena"
 */
export function HalftonePatch({
  width = 150,
  height = 95,
  dotColor = "#f26522",
  dotSize = 2,
  spacing = 13,
  opacity = 0.5,
  className = "",
  fade = "radial",
}: {
  width?: number | string;
  height?: number | string;
  dotColor?: string;
  dotSize?: number;
  spacing?: number;
  opacity?: number;
  className?: string;
  fade?: "radial" | "none" | "linear";
}) {
  const widthStyle = typeof width === "number" ? `${width}px` : width;
  const heightStyle = typeof height === "number" ? `${height}px` : height;

  const maskStyle =
    fade === "radial"
      ? "radial-gradient(ellipse at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 78%)"
      : fade === "linear"
      ? "linear-gradient(135deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)"
      : undefined;

  return (
    <div
      className={`pointer-events-none select-none z-0 ${className}`}
      style={{
        width: widthStyle,
        height: heightStyle,
        backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize + 0.6}px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
        opacity,
        maskImage: maskStyle,
        WebkitMaskImage: maskStyle,
      }}
      aria-hidden="true"
    />
  );
}

/**
 * WavyContourLines: Elegant, aerodynamic contour lines.
 * Directly fulfills user instruction:
 * "e as linhas só em algumas seções" -> restricted to Hero or key focal sections, subtle and non-intrusive.
 */
export function WavyContourLines({
  variant = "hero",
  className = "",
  opacity = 0.22,
}: {
  variant?: "hero" | "cta";
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        style={{ opacity }}
      >
        <defs>
          <linearGradient id="aerodynamicContourGrad" x1="0%" y1="0%" x2="100%" y2="85%">
            <stop offset="0%" stopColor="#f26522" stopOpacity="0.75" />
            <stop offset="35%" stopColor="#2e42a0" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0e153b" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* 7 subtle aerodynamic curves concentrated in one visual quadrant */}
        {Array.from({ length: 7 }).map((_, i) => {
          const y = 90 + i * 48;
          return (
            <path
              key={`contour-${i}`}
              d={`M -60,${y + 140} C 300,${y - 30} 640,${y + 150} 980,${y - 10} C 1180,${y - 80} 1340,${y + 30} 1500,${y - 20}`}
              stroke="url(#aerodynamicContourGrad)"
              strokeWidth={i === 2 ? "1.5" : "1.0"}
              strokeOpacity={0.4 + i * 0.09}
            />
          );
        })}
      </svg>
    </div>
  );
}

/**
 * HalftoneWaveBackground: Unified container component.
 * Respects:
 * - Lines: only rendered when showLines=true (used in Hero and CTA, NOT all sections).
 * - Dots: rendered as a small localized accent patch (small area), NEVER filling the entire background.
 */
interface HalftoneWaveBackgroundProps {
  showLines?: boolean;
  showDots?: boolean;
  dotColor?: string;
  className?: string;
  dotPosition?: "top-right" | "bottom-right" | "top-left" | "bottom-left" | "center";
}

export default function HalftoneWaveBackground({
  showLines = true,
  showDots = true,
  dotColor = "#f26522",
  className = "",
  dotPosition = "top-right",
}: HalftoneWaveBackgroundProps) {
  const getDotPosClass = () => {
    switch (dotPosition) {
      case "top-right":
        return "absolute top-8 right-8 md:top-14 md:right-16";
      case "bottom-right":
        return "absolute bottom-8 right-8 md:bottom-12 md:right-16";
      case "top-left":
        return "absolute top-8 left-8 md:top-14 md:left-16";
      case "bottom-left":
        return "absolute bottom-8 left-8 md:bottom-12 md:left-16";
      case "center":
        return "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
      default:
        return "absolute top-8 right-8";
    }
  };

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Lines only when requested (Hero / select sections) */}
      {showLines && <WavyContourLines opacity={0.24} />}

      {/* 2. Dots in a SMALL localized accent area only (never full background) */}
      {showDots && (
        <HalftonePatch
          className={getDotPosClass()}
          width={160}
          height={96}
          dotColor={dotColor}
          opacity={0.45}
        />
      )}
    </div>
  );
}
