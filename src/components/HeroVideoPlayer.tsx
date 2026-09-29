import React, { useState } from "react";
import { ExternalLink, Play, Sparkles } from "lucide-react";

interface HeroVideoPlayerProps {
  className?: string;
}

const INSTAGRAM_REEL_EMBED = "https://www.instagram.com/reel/DLICso5gtTI/embed/";
const INSTAGRAM_REEL_DIRECT = "https://www.instagram.com/reel/DLICso5gtTI/";

export default function HeroVideoPlayer({ className = "" }: HeroVideoPlayerProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden bg-[#060919] border border-white/15 shadow-2xl ${className}`}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d1436] border-b border-white/10 text-white z-10 relative">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#f26522] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
            Apresentação Oficial da Rede Autosim
          </span>
        </div>

        <a
          href={INSTAGRAM_REEL_DIRECT}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-[#f26522] hover:text-[#ff8a4c] font-semibold transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg border border-white/10"
          title="Assistir no Instagram"
        >
          <span>Instagram Oficial</span>
          <ExternalLink size={12} />
        </a>
      </div>

      {/* Video Container */}
      <div className="relative w-full aspect-[9/16] max-h-[620px] sm:max-h-[640px] mx-auto bg-black flex items-center justify-center overflow-hidden">
        {/* Loading placeholder skeleton while iframe initialises */}
        {!iframeLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#070b1e] text-white p-6 z-0">
            <div className="w-14 h-14 rounded-full bg-[#f26522]/20 border border-[#f26522]/40 flex items-center justify-center mb-3 animate-pulse">
              <Play size={24} className="text-[#f26522] ml-0.5" fill="currentColor" />
            </div>
            <p className="text-sm font-semibold text-slate-200 m-0">Carregando apresentação da franquia...</p>
            <span className="text-xs text-slate-400 mt-1">Conheça o modelo de 4 fontes de receita</span>
          </div>
        )}

        {/* The Official Instagram Reel Embed Player */}
        <iframe
          src={INSTAGRAM_REEL_EMBED}
          className="w-full h-full border-0 rounded-b-2xl relative z-10"
          allowFullScreen
          allow="autoplay; encrypted-media; picture-in-picture"
          scrolling="no"
          title="Vídeo Institucional da Franquia Autosim"
          onLoad={() => setIframeLoaded(true)}
        />
      </div>

      {/* Bottom Subtitle / Proof Bar */}
      <div className="px-4 py-2.5 bg-[#090d26] border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5 text-slate-300">
          <Sparkles size={13} className="text-[#f26522]" /> Matriz em Campinas (SP) & Modelo Validado
        </span>
        <a
          href="#qualificacao"
          className="text-[#f26522] hover:underline font-bold text-xs"
        >
          Simular unidade &rarr;
        </a>
      </div>
    </div>
  );
}
