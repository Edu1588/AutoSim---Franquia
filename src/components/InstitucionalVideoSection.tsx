import React from "react";
import { Building2, Landmark, Laptop, CheckCircle2, ArrowRight } from "lucide-react";
import HeroVideoPlayer from "./HeroVideoPlayer";

export default function InstitucionalVideoSection() {
  return (
    <section className="section-padding bg-[#090d26] text-white relative overflow-hidden" id="apresentacao">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#f26522]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Column 1: Contextual Institutional Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider mb-4 w-fit border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#f26522]" />
              Apresentação da Rede
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] m-0 mb-5 font-sans">
              A força de um modelo que está <em className="text-[#f26522] not-italic">transformando</em> o mercado automotivo
            </h2>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed m-0 mb-8 font-normal">
              Assista à apresentação executiva e conheça a matriz em Campinas (SP), a infraestrutura de apoio, a tecnologia operacional e o modelo com quatro fontes integradas de receita.
            </p>

            {/* Value Highlights */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#f26522]/20 text-[#f26522] flex items-center justify-center flex-shrink-0">
                  <Building2 size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white m-0">Matriz & Loja Modelo em Campinas</h4>
                  <p className="text-xs text-white/60 m-0 mt-0.5 leading-relaxed">
                    Equipe multidisciplinar de expansão, suporte jurídico, marketing e implantação à sua disposição.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center flex-shrink-0">
                  <Landmark size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white m-0">Mesa de Crédito & +12 Bancos Integrados</h4>
                  <p className="text-xs text-white/60 m-0 mt-0.5 leading-relaxed">
                    Aprovação ágil de financiamentos e refinanciamentos com taxas competitivas e retorno imediato.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#f26522]/20 text-[#f26522] flex items-center justify-center flex-shrink-0">
                  <Laptop size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white m-0">Tecnologia & Métodos Replicáveis</h4>
                  <p className="text-xs text-white/60 m-0 mt-0.5 leading-relaxed">
                    Software próprio para precificação segura, fluxo de atendimento e conexão entre lojistas parceiros.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
              <a
                href="#qualificacao"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#f26522] hover:bg-[#d94f11] text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/25 w-full sm:w-auto text-center max-w-md"
              >
                Simular investimento na rede <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: The Video Player */}
          <div className="lg:col-span-6 relative">
            <HeroVideoPlayer className="shadow-2xl shadow-black/80" />
          </div>
        </div>
      </div>
    </section>
  );
}
