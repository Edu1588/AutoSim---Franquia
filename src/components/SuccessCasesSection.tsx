import React from "react";
import { TrendingUp, Clock, MapPin, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "./WhatsAppFloatingButton";

interface CaseItem {
  id: string;
  name: string;
  location: string;
  operationTime: string;
  roiTime: string;
  monthlyRevenue: string;
  quote: string;
  pills: string[];
}

const cases: CaseItem[] = [
  {
    id: "campinas",
    name: "Ricardo M.",
    location: "Campinas / SP (Unidade Taquaral)",
    operationTime: "14 meses de operação",
    roiTime: "8 meses",
    monthlyRevenue: "R$ 480.000 / mês",
    quote:
      "O balcão Express gera caixa imediato todos os dias, enquanto os financiamentos bancários alavancam a margem operacional. Não precisei de estoque próprio para atingir o faturamento projetado.",
    pills: ["Express + Financiamentos", "ROI em 8 meses", "Operação Consolidada"],
  },
  {
    id: "ribeirao",
    name: "Juliana S. & Marcelo T.",
    location: "Ribeirão Preto / SP",
    operationTime: "10 meses de operação",
    roiTime: "9 meses",
    monthlyRevenue: "R$ 390.000 / mês",
    quote:
      "A captação de clientes pelo Autosim Site e a assessoria jurídica da matriz deram toda a segurança. Em menos de 10 meses já estamos planejando abrir nossa segunda unidade na região.",
    pills: ["Autosim Site", "Suporte Matriz Campinas", "Expansão para 2ª loja"],
  },
  {
    id: "sorocaba",
    name: "André L.",
    location: "Sorocaba / SP",
    operationTime: "18 meses de operação",
    roiTime: "7 meses",
    monthlyRevenue: "R$ 560.000 / mês",
    quote:
      "A mesa de repasse de lojistas (Autosim Loja) é um divisor de águas. O giro de veículos é muito rápido e a marca tem autoridade imediata com o consumidor final.",
    pills: ["Autosim Loja", "Mesa de Repasse", "Recorde de Margem"],
  },
];

export default function SuccessCasesSection() {
  return (
    <section className="section-padding bg-[#090d26] text-white relative overflow-hidden" id="cases">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#f26522]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#f26522] text-xs font-bold uppercase tracking-wider mb-4">
            <Award size={14} />
            <span>Validação de Mercado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white m-0 mb-4 font-['Space_Grotesk']">
            Cases de Sucesso: Resultados de quem já opera o modelo <span className="text-[#f26522]">Autosim</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed m-0">
            Conheça as histórias e métricas reais de franqueados que aplicaram a metodologia de 4 fontes de receita em suas regiões.
          </p>
        </div>

        {/* Highlight Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-[#f26522]">7 a 12</span>
            <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Meses para Retorno (ROI)</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white">98.4%</span>
            <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Satisfação dos Franqueados</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-[#f26522]">4 em 1</span>
            <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Fontes de Faturamento</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white">100%</span>
            <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Suporte Jurídico e Operacional</span>
          </div>
        </div>

        {/* 3 Cases Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((item) => (
            <div
              key={item.id}
              className="bg-white/[0.04] border border-white/10 hover:border-[#f26522]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1 backdrop-blur-sm group"
            >
              <div>
                {/* Header location */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                    <MapPin size={14} className="text-[#f26522]" />
                    <span>{item.location}</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-slate-300 font-mono">
                    {item.operationTime}
                  </span>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 mb-1">
                      <Clock size={12} className="text-[#f26522]" />
                      <span>Retorno (ROI)</span>
                    </div>
                    <span className="text-lg font-bold font-['Space_Grotesk'] text-[#25D366]">
                      {item.roiTime}
                    </span>
                  </div>

                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 mb-1">
                      <TrendingUp size={12} className="text-[#f26522]" />
                      <span>Volume Médio</span>
                    </div>
                    <span className="text-base sm:text-lg font-bold font-['Space_Grotesk'] text-white">
                      {item.monthlyRevenue}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-5">
                  <span className="text-3xl text-[#f26522]/30 font-serif leading-none select-none absolute -top-3 -left-1">“</span>
                  <p className="text-slate-300 text-sm italic leading-relaxed pl-3 border-l-2 border-[#f26522]/40 m-0">
                    {item.quote}
                  </p>
                </div>
              </div>

              <div>
                {/* Author & Pills */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#f26522]/20 border border-[#f26522]/40 flex items-center justify-center text-xs font-bold text-[#f26522]">
                      {item.name.slice(0, 2)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white m-0">{item.name}</h4>
                      <span className="text-[11px] text-slate-400">Franqueado Autosim</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {item.pills.map((pill, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-white/[0.06] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-[#25D366]">
              <CheckCircle2 size={16} />
              <span>TERRITÓRIOS EXCLUSIVOS DISPONÍVEIS NO PROJETO 10</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white m-0">
              Quer ser o próximo case de sucesso na sua cidade?
            </h3>
            <p className="text-sm text-slate-300 m-0 max-w-xl">
              Os primeiros 10 franqueados contam com benefícios prioritários de taxa de franquia e escolha territorial.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-[#f26522] hover:bg-[#ff7330] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-orange-500/20"
            >
              <span>Garantir meu território</span>
              <ArrowRight size={16} />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3.5 rounded-xl font-semibold text-sm transition-all border border-white/15"
            >
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
