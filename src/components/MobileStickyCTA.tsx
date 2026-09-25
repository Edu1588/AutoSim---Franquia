import React from "react";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { WHATSAPP_LINK, WhatsAppIcon } from "./WhatsAppFloatingButton";

interface MobileStickyCTAProps {
  onScrollToForm?: () => void;
}

export default function MobileStickyCTA({ onScrollToForm }: MobileStickyCTAProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onScrollToForm) {
      onScrollToForm();
    } else {
      const el = document.getElementById("contato");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <aside
      aria-label="Ações rápidas mobile"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090d26]/95 backdrop-blur-lg border-t border-white/15 px-3.5 py-2.5 shadow-[0_-10px_25px_rgba(0,0,0,0.4)] print:hidden transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-2.5 max-w-lg mx-auto">
        {/* Left response guarantee micro-pill */}
        <div className="flex flex-col justify-center min-w-0 pr-1">
          <div className="flex items-center gap-1 text-[11px] font-bold text-[#25D366] leading-none mb-0.5">
            <Clock size={11} className="shrink-0" />
            <span className="truncate">Resposta em 15 min</span>
          </div>
          <span className="text-[10px] text-slate-300 leading-none truncate">
            Projeto 10 • Territórios SP
          </span>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Direct WhatsApp fast button */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shrink-0 shadow-md active:scale-95 transition-transform"
            aria-label="Falar no WhatsApp com Autosim agora"
            title="Falar no WhatsApp"
          >
            <WhatsAppIcon className="w-5 h-5 text-white" fill="#ffffff" />
          </a>

          {/* Primary Form CTA Button */}
          <a
            href="#contato"
            onClick={handleClick}
            className="inline-flex items-center gap-1.5 bg-[#f26522] hover:bg-[#ff7330] active:scale-95 text-white px-3.5 py-2.5 rounded-xl font-bold text-xs shadow-lg shadow-orange-500/25 transition-all text-center tracking-tight"
          >
            <span>Quero ser Franqueado</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </aside>
  );
}
