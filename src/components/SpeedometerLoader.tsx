import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  AUTOSIM_PATHS,
  AUTOSIM_VIEWBOX,
  AUTOSIM_MATRIX_OUTER,
  AUTOSIM_MATRIX_INNER,
  AUTOSIM_NEEDLE_PIVOT,
} from "./autosimLogoPaths";

interface SpeedometerLoaderProps {
  onComplete?: () => void;
}

export default function SpeedometerLoader({ onComplete }: SpeedometerLoaderProps) {
  const [isDone, setIsDone] = useState(false);
  const [needleAngle, setNeedleAngle] = useState(-135);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 2200; // 2.2s loading

    let animFrame: number;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);

      // Smooth percentage 0% to 100%
      setPercent(Math.min(100, Math.floor(t * 100)));

      // Realistic speedometer rev-up curve (starts at idle ~ -135deg, sweeps up to +35deg)
      // With a natural sporty acceleration curve
      let angle = -135;
      if (t < 0.35) {
        // First pull (idle to mid)
        const p = t / 0.35;
        const ease = p * p * (3 - 2 * p);
        angle = -135 + ease * 95; // reaches -40
      } else if (t < 0.5) {
        // Gear shift dip
        const p = (t - 0.35) / 0.15;
        angle = -40 - Math.sin(p * Math.PI) * 15;
      } else if (t < 0.85) {
        // Second full pull (sweeping to max)
        const p = (t - 0.5) / 0.35;
        const ease = Math.sin((p * Math.PI) / 2);
        angle = -40 + ease * 75; // reaches +35
      } else {
        // Slight rev flutter at top speed
        const p = (t - 0.85) / 0.15;
        angle = 35 + Math.sin(p * Math.PI * 4) * 3;
      }

      setNeedleAngle(angle);

      if (t < 1) {
        animFrame = requestAnimationFrame(animate);
      } else {
        setPercent(100);
        setTimeout(() => {
          setIsDone(true);
          onComplete?.();
        }, 300);
      }
    };

    animFrame = requestAnimationFrame(animate);

    return () => {
      if (animFrame) cancelAnimationFrame(animFrame);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#070b1e] select-none"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          {/* Subtle soft central glow behind the O */}
          <div className="absolute w-72 h-72 rounded-full bg-[#f05926]/15 blur-3xl pointer-events-none" />

          {/* Just the pure authentic SVG Logo with rotating speedometer O and percentage */}
          <div className="relative z-10 w-full max-w-lg px-8 flex flex-col items-center">
            <svg
              viewBox={AUTOSIM_VIEWBOX}
              className="w-full h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] overflow-visible"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
                overflow: "visible",
              }}
              role="img"
              aria-label="Autosim"
            >
              <defs>
                <linearGradient id="loaderNeedleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff7a43" />
                  <stop offset="100%" stopColor="#f05926" />
                </linearGradient>
              </defs>

              <g transform={AUTOSIM_MATRIX_OUTER}>
                <g transform={AUTOSIM_MATRIX_INNER}>
                  {/* 'A' */}
                  <path d={AUTOSIM_PATHS.A} fill="white" />
                  {/* 'U' */}
                  <path d={AUTOSIM_PATHS.U} fill="white" />
                  {/* 'T' */}
                  <path d={AUTOSIM_PATHS.T} fill="white" />

                  {/* 'O' - Speedometer Dial Ring */}
                  <path d={AUTOSIM_PATHS.O_dial} fill="white" />

                  {/* 'O' - Rotating Speedometer Needle */}
                  <g
                    transform={`rotate(${needleAngle}, ${AUTOSIM_NEEDLE_PIVOT.x}, ${AUTOSIM_NEEDLE_PIVOT.y})`}
                  >
                    <path d={AUTOSIM_PATHS.O_needle} fill="url(#loaderNeedleGrad)" />
                  </g>

                  {/* 'S' */}
                  <path d={AUTOSIM_PATHS.S} fill="#f05926" />
                  {/* 'I' */}
                  <path d={AUTOSIM_PATHS.I} fill="#f05926" />
                  {/* 'M' */}
                  <path d={AUTOSIM_PATHS.M} fill="#f05926" />
                </g>
              </g>
            </svg>

            {/* Percentage animation 0% to 100% in a small thin font */}
            <div className="mt-7 text-center">
              <span className="text-white/60 font-extralight text-xs tracking-[0.25em] tabular-nums select-none font-sans">
                {percent}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
