import React from "react";
import {
  AUTOSIM_PATHS,
  AUTOSIM_VIEWBOX,
  AUTOSIM_MATRIX_OUTER,
  AUTOSIM_MATRIX_INNER,
  AUTOSIM_NEEDLE_PIVOT,
} from "./autosimLogoPaths";

interface AutosimLogoProps {
  className?: string;
  light?: boolean;
  height?: number | string;
  needleAngle?: number;
}

/**
 * Authentic Autosim Brand Logo (Vector SVG)
 * Composed from the official master artwork:
 * - "AUT" in white (or dark on light backgrounds)
 * - "O" speedometer instrument gauge (white dial + orange needle)
 * - "SIM" in signature Autosim orange (#f05926)
 */
export default function AutosimLogo({
  className = "",
  light = true,
  height = 36,
  needleAngle = 0,
}: AutosimLogoProps) {
  const autoColor = light ? "#ffffff" : "#0d1436";
  const simColor = "#f05926";

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      style={{ height: typeof height === "number" ? `${height}px` : height }}
    >
      <svg
        viewBox={AUTOSIM_VIEWBOX}
        style={{
          height: "100%",
          width: "auto",
          display: "block",
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
          overflow: "visible",
        }}
        aria-label="Autosim"
        role="img"
      >
        <g transform={AUTOSIM_MATRIX_OUTER}>
          <g transform={AUTOSIM_MATRIX_INNER}>
            {/* 'A' */}
            <path d={AUTOSIM_PATHS.A} fill={autoColor} />
            {/* 'U' */}
            <path d={AUTOSIM_PATHS.U} fill={autoColor} />
            {/* 'T' */}
            <path d={AUTOSIM_PATHS.T} fill={autoColor} />

            {/* 'O' - Speedometer Outer Dial Ring */}
            <path d={AUTOSIM_PATHS.O_dial} fill={autoColor} />

            {/* 'O' - Speedometer Needle (Rotatable around calibrated center pivot) */}
            <g
              transform={`rotate(${needleAngle}, ${AUTOSIM_NEEDLE_PIVOT.x}, ${AUTOSIM_NEEDLE_PIVOT.y})`}
              style={{
                transformOrigin: `${AUTOSIM_NEEDLE_PIVOT.x}px ${AUTOSIM_NEEDLE_PIVOT.y}px`,
                transition: "transform 60ms cubic-bezier(0.15, 0.85, 0.35, 1.2)",
              }}
            >
              <path d={AUTOSIM_PATHS.O_needle} fill={simColor} />
            </g>

            {/* 'S' */}
            <path d={AUTOSIM_PATHS.S} fill={simColor} />
            {/* 'I' */}
            <path d={AUTOSIM_PATHS.I} fill={simColor} />
            {/* 'M' */}
            <path d={AUTOSIM_PATHS.M} fill={simColor} />
          </g>
        </g>
      </svg>
    </div>
  );
}
