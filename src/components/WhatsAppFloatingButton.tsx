import React, { useState } from "react";

export function WhatsAppIcon({
  className = "w-6 h-6",
  fill = "currentColor",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export const WHATSAPP_NUMBER = "1931148042";
export const WHATSAPP_FORMATTED = "(19) 3114-8042";
export const WHATSAPP_LINK =
  "https://wa.me/551931148042?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20franquia%20Autosim.";

export default function WhatsAppFloatingButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-20 sm:bottom-20 lg:bottom-6 right-4 sm:right-6 z-50 flex items-center select-none print:hidden">
      {/* Main Floating Action Button: Circular icon at rest, expands horizontally on hover */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className="group relative flex items-center bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:p-4 rounded-full shadow-xl hover:shadow-2xl hover:shadow-emerald-500/40 transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-out cursor-pointer no-underline border border-emerald-400/40"
        aria-label={`Falar no WhatsApp com Autosim: ${WHATSAPP_FORMATTED} - Quero saber mais`}
        title={`WhatsApp Autosim: ${WHATSAPP_FORMATTED} - Quero saber mais`}
      >
        {/* Subtle radar pulsing ripple behind circular icon */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />

        {/* WhatsApp Icon */}
        <div className="relative flex items-center justify-center shrink-0 w-7 h-7 sm:w-8 sm:h-8">
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-sm" fill="#ffffff" />
          {/* Online active status indicator badge */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white border-2 border-[#25D366]" />
          </span>
        </div>

        {/* Expandable text & phone on hover */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out flex flex-col whitespace-nowrap ${
            isHovered
              ? "max-w-[280px] opacity-100 ml-3 mr-2"
              : "max-w-0 opacity-0 ml-0 mr-0 group-hover:max-w-[280px] group-hover:opacity-100 group-hover:ml-3 group-hover:mr-2"
          }`}
        >
          <span className="text-sm font-bold tracking-tight leading-snug text-white drop-shadow-sm">
            Quero saber mais
          </span>
          <span className="text-[11px] text-emerald-100 font-semibold tracking-wide leading-none opacity-95">
            {WHATSAPP_FORMATTED}
          </span>
        </div>
      </a>
    </div>
  );
}
