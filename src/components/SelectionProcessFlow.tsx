import React, { useEffect, useState } from "react";
import {
  Handshake,
  FileEdit,
  MessageSquare,
  FileCheck2,
  Gauge,
  FileSignature,
  CreditCard,
  MapPin,
  Rocket,
  Users,
} from "lucide-react";
import AutosimLogo from "./AutosimLogo";

interface StepItem {
  id: number;
  title: string;
  icon: typeof Handshake;
  bg: "orange" | "navy";
}

const STEPS: StepItem[] = [
  {
    id: 1,
    title: "Primeiro\ncontato",
    icon: Handshake,
    bg: "orange",
  },
  {
    id: 2,
    title: "Preenchimento\nda Ficha de\nPré-Qualificação",
    icon: FileEdit,
    bg: "navy",
  },
  {
    id: 3,
    title: "Aprovação Ficha\nCadastro",
    icon: MessageSquare,
    bg: "orange",
  },
  {
    id: 4,
    title: "Assinatura\nda COF",
    icon: FileCheck2,
    bg: "navy",
  },
  {
    id: 5,
    title: "Experiência Autosim\n(Visita loja)",
    icon: Gauge,
    bg: "orange",
  },
  {
    id: 6,
    title: "Assinatura\nPré-Contrato\nmínimo após 10 dias\nCOF",
    icon: FileSignature,
    bg: "orange",
  },
  {
    id: 7,
    title: "Pagamento da\nTaxa de Franquia",
    icon: CreditCard,
    bg: "navy",
  },
  {
    id: 8,
    title: "Aprovação do\nPonto Comercial",
    icon: MapPin,
    bg: "orange",
  },
  {
    id: 9,
    title: "Início da\nImplantação:\nAgendamentos\nprocessos internos",
    icon: Rocket,
    bg: "navy",
  },
  {
    id: 10,
    title: "Treinamentos\npara equipes e\nfranqueados",
    icon: Users,
    bg: "orange",
  },
];

export default function SelectionProcessFlow() {
  const [activeStep, setActiveStep] = useState(1);

  // Synchronized step cycling with the animated progress line
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= 10 ? 1 : prev + 1));
    }, 1400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
      {/* Top Brand Banner matching the reference image */}
      <div className="bg-[#f26522] px-8 py-6 md:py-8 text-white">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide font-sans m-0 leading-tight">
          Processo de Seleção<br />
          de Franquia Autosim
        </h3>
      </div>

      {/* Canvas Area */}
      <div className="relative p-6 sm:p-8 md:p-12 bg-white overflow-hidden">
        {/* Subtle dot pattern in the center area matching reference */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#10173f 1.5px, transparent 1.5px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* DESKTOP SERPENTINE FLOW (Horizontal 2 Rows) */}
        <div className="hidden lg:block relative z-10 max-w-5xl mx-auto">
          {/* SVG Connecting Track with Animated Progress Line */}
          <div className="relative w-full h-[360px]">
            <svg
              viewBox="0 0 1000 360"
              className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="flowPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f26522" stopOpacity="0" />
                  <stop offset="50%" stopColor="#f26522" stopOpacity="1" />
                  <stop offset="90%" stopColor="#ff9458" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                </linearGradient>

                <filter id="flowGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Base Static Track Line (Starting at top-left, going into Step 1, through row 1, looping down to row 2, and into Autosim logo) */}
              <path
                id="mainFlowPath"
                d="M 60,30 L 60,110 L 920,110 C 975,110 975,250 920,250 L 60,250"
                fill="none"
                stroke="#0d1436"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* 2. Animated Progress Beam traveling continuously along the track */}
              <path
                d="M 60,30 L 60,110 L 920,110 C 975,110 975,250 920,250 L 60,250"
                fill="none"
                stroke="url(#flowPulseGradient)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="220 2000"
                filter="url(#flowGlow)"
                style={{
                  animation: "flowProgressSweep 4.5s linear infinite",
                }}
              />
            </svg>

            {/* Custom Keyframe animation for the progress line */}
            <style>{`
              @keyframes flowProgressSweep {
                0% {
                  stroke-dashoffset: 2220;
                }
                100% {
                  stroke-dashoffset: 0;
                }
              }
            `}</style>

            {/* Row 1 Nodes (Steps 1 to 5) - Centers at y=110px */}
            <div
              className="absolute left-0 right-0 top-0 grid grid-cols-6 gap-2 items-center"
              style={{ height: "180px" }}
            >
              {/* Col 0: Empty spacer where the incoming downward line starts */}
              <div />

              {/* Steps 1 to 5 */}
              {STEPS.slice(0, 5).map((step) => {
                const Icon = step.icon;
                const isActive = activeStep === step.id;
                const isOrange = step.bg === "orange";

                return (
                  <div key={step.id} className="flex flex-col items-center text-center">
                    {/* Step Title above the circle */}
                    <div className="h-14 flex items-end justify-center mb-2 px-1">
                      <span
                        className={`text-[12px] font-bold leading-tight whitespace-pre-line transition-colors duration-300 ${
                          isActive ? "text-[#f26522] scale-105" : "text-slate-900"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>

                    {/* Step Circle */}
                    <div className="relative">
                      {isActive && (
                        <span className="absolute -inset-2 rounded-full bg-[#f26522]/30 animate-ping pointer-events-none" />
                      )}
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300 ${
                          isActive
                            ? "scale-110 ring-4 ring-[#f26522]/40 shadow-lg shadow-orange-500/30"
                            : ""
                        } ${
                          isOrange
                            ? "bg-gradient-to-br from-[#f26522] to-[#d94f11]"
                            : "bg-[#0d1436]"
                        }`}
                      >
                        <Icon size={24} strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Row 2 Nodes (Autosim Logo in Col 0, then Steps 10 down to 6) - Centers at y=250px */}
            <div
              className="absolute left-0 right-0 bottom-0 grid grid-cols-6 gap-2 items-start"
              style={{ height: "170px" }}
            >
              {/* Col 0: AUTOSIM Brand Logo receiving the final line */}
              <div className="flex flex-col items-center justify-start pt-1">
                <div className="w-14 h-14 flex items-center justify-center">
                  <AutosimLogo height={24} light={false} />
                </div>
              </div>

              {/* Col 1: Step 10 */}
              {/* Col 2: Step 9 */}
              {/* Col 3: Step 8 */}
              {/* Col 4: Step 7 */}
              {/* Col 5: Step 6 */}
              {[STEPS[9], STEPS[8], STEPS[7], STEPS[6], STEPS[5]].map((step) => {
                const Icon = step.icon;
                const isActive = activeStep === step.id;
                const isOrange = step.bg === "orange";

                return (
                  <div key={step.id} className="flex flex-col items-center text-center">
                    {/* Step Circle */}
                    <div className="relative mb-2">
                      {isActive && (
                        <span className="absolute -inset-2 rounded-full bg-[#f26522]/30 animate-ping pointer-events-none" />
                      )}
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300 ${
                          isActive
                            ? "scale-110 ring-4 ring-[#f26522]/40 shadow-lg shadow-orange-500/30"
                            : ""
                        } ${
                          isOrange
                            ? "bg-gradient-to-br from-[#f26522] to-[#d94f11]"
                            : "bg-[#0d1436]"
                        }`}
                      >
                        <Icon size={24} strokeWidth={2} />
                      </div>
                    </div>

                    {/* Step Title below the circle */}
                    <div className="flex items-start justify-center px-1">
                      <span
                        className={`text-[12px] font-bold leading-tight whitespace-pre-line transition-colors duration-300 ${
                          isActive ? "text-[#f26522] scale-105" : "text-slate-900"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET RESPONSIVE FLOW (Vertical with animated line) */}
        <div className="lg:hidden relative">
          <div className="relative pl-6 space-y-5 before:absolute before:left-[35px] before:top-4 before:bottom-4 before:w-1 before:bg-[#0d1436]">
            {/* Animated progress overlay line on mobile */}
            <div
              className="absolute left-[35px] top-4 w-1 bg-[#f26522] transition-all duration-700 pointer-events-none"
              style={{
                height: `${(activeStep / 10) * 92}%`,
                boxShadow: "0 0 8px #f26522",
              }}
            />

            {STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              const isOrange = step.bg === "orange";

              return (
                <div
                  key={step.id}
                  className={`relative flex items-center gap-4 p-3 rounded-2xl transition-all ${
                    isActive ? "bg-orange-50/60 ring-1 ring-[#f26522]/30" : ""
                  }`}
                >
                  <div className="relative z-10 flex-shrink-0">
                    {isActive && (
                      <span className="absolute -inset-1.5 rounded-full bg-[#f26522]/30 animate-ping pointer-events-none" />
                    )}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md ${
                        isActive ? "scale-105" : ""
                      } ${
                        isOrange
                          ? "bg-gradient-to-br from-[#f26522] to-[#d94f11]"
                          : "bg-[#0d1436]"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-[#f26522] uppercase tracking-wider block">
                      Etapa 0{step.id}
                    </span>
                    <h4
                      className={`text-sm font-bold leading-snug m-0 ${
                        isActive ? "text-[#f26522]" : "text-slate-900"
                      }`}
                    >
                      {step.title.replace(/\n/g, " ")}
                    </h4>
                  </div>
                </div>
              );
            })}

            {/* Mobile final Autosim Logo point */}
            <div className="relative flex items-center gap-4 p-3 pt-4">
              <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-[#0d1436] flex items-center justify-center flex-shrink-0">
                <span className="w-3 h-3 rounded-full bg-[#f26522] animate-pulse" />
              </div>
              <div>
                <AutosimLogo height={22} light={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
