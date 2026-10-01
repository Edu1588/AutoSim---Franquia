import React from "react";
import {
  TrendingUp,
  Clock,
  MapPin,
  Award,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Layers,
  Users,
  Quote,
  Building2,
  Sparkles,
} from "lucide-react";

interface CaseItem {
  id: string;
  name: string;
  role: string;
  location: string;
  operationTime: string;
  roiTime: string;
  monthlyRevenue: string;
  revenueLabel: string;
  primaryPillar: string;
  quote: string;
  tags: string[];
}

const cases: CaseItem[] = [
  {
    id: "campinas",
    name: "Ricardo M.",
    role: "Franqueado Autosim Taquaral",
    location: "Campinas / SP",
    operationTime: "14 meses de operação",
    roiTime: "8 meses",
    monthlyRevenue: "R$ 480.000",
    revenueLabel: "Faturamento médio mensal",
    primaryPillar: "Express + Financiamentos",
    quote:
      "O balcão Express gera caixa imediato todos os dias, enquanto os financiamentos bancários alavancam a margem operacional. Não precisei de estoque próprio para atingir o faturamento projetado.",
    tags: ["Sem estoque próprio", "Caixa diário", "Mesa de crédito ativa"],
  },
  {
    id: "ribeirao",
    name: "Juliana S. & Marcelo T.",
    role: "Franqueados Autosim Ribeirão",
    location: "Ribeirão Preto / SP",
    operationTime: "10 meses de operação",
    roiTime: "9 meses",
    monthlyRevenue: "R$ 390.000",
    revenueLabel: "Faturamento médio mensal",
    primaryPillar: "Autosim Site + Matriz",
    quote:
      "A captação de clientes pelo Autosim Site e a assessoria jurídica da matriz deram toda a segurança. Em menos de 10 meses já estamos planejando abrir nossa segunda unidade na região.",
    tags: ["2ª unidade em vista", "Captação digital", "Suporte jurídico"],
  },
  {
    id: "sorocaba",
    name: "André L.",
    role: "Franqueado Autosim Sorocaba",
    location: "Sorocaba / SP",
    operationTime: "18 meses de operação",
    roiTime: "7 meses",
    monthlyRevenue: "R$ 560.000",
    revenueLabel: "Faturamento médio mensal",
    primaryPillar: "Mesa de Repasse (Loja)",
    quote:
      "A mesa de repasse de lojistas é um divisor de águas. O giro de veículos é muito rápido e a marca tem autoridade imediata com o consumidor final.",
    tags: ["Giro rápido de estoque", "Rede de lojistas", "Alta rentabilidade"],
  },
];

export default function SuccessCasesSection() {
  return (
    <section className="section-padding bg-[#090d26] text-white relative overflow-hidden" id="cases">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#f26522]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Heading: Highlighted "Cases de Sucesso" with clean line-break */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#f26522] text-xs font-extrabold uppercase tracking-wider mb-5">
            <Award size={15} />
            <span>Validação de Mercado</span>
          </div>

          <h2 className="tracking-tight text-white m-0 mb-4 font-['Space_Grotesk']">
            <span className="block text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#f26522] leading-none mb-3">
              Cases de Sucesso
            </span>
            <span className="block text-xl sm:text-2xl lg:text-3xl font-bold text-slate-100 font-sans leading-snug">
              Resultados reais de quem já opera o ecossistema Autosim
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto m-0 font-normal">
            Histórias, métricas financeiras e prazos de retorno comprovados por franqueados que aplicam as 4 fontes de receita no mercado automotivo.
          </p>
        </div>

        {/* Highlight Stats Bar - Improved Hierarchy with Clear Icons & Context */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {/* Stat 1: Payback */}
          <div className="bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 rounded-2xl p-5 transition-all duration-300 backdrop-blur-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f26522]/20 border border-[#f26522]/40 text-[#f26522] flex items-center justify-center flex-shrink-0">
              <Clock size={22} />
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-[#f26522] leading-tight">
                7 a 12 meses
              </span>
              <span className="block text-xs font-bold text-white uppercase tracking-wider mt-0.5">
                Prazo Médio de Retorno
              </span>
              <span className="block text-[11px] text-slate-400 mt-1">
                Payback acelerado sem custos de estoque
              </span>
            </div>
          </div>

          {/* Stat 2: Satisfaction */}
          <div className="bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 rounded-2xl p-5 transition-all duration-300 backdrop-blur-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Users size={22} />
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-white leading-tight">
                98.4%
              </span>
              <span className="block text-xs font-bold text-white uppercase tracking-wider mt-0.5">
                Satisfação na Rede
              </span>
              <span className="block text-[11px] text-slate-400 mt-1">
                Aprovação da operação e metodologia
              </span>
            </div>
          </div>

          {/* Stat 3: 4 Sources */}
          <div className="bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 rounded-2xl p-5 transition-all duration-300 backdrop-blur-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f26522]/20 border border-[#f26522]/40 text-[#f26522] flex items-center justify-center flex-shrink-0">
              <Layers size={22} />
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-[#f26522] leading-tight">
                4 em 1
              </span>
              <span className="block text-xs font-bold text-white uppercase tracking-wider mt-0.5">
                Fontes de Faturamento
              </span>
              <span className="block text-[11px] text-slate-400 mt-1">
                Express, Site, Financiamento e Loja
              </span>
            </div>
          </div>

          {/* Stat 4: Support */}
          <div className="bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 rounded-2xl p-5 transition-all duration-300 backdrop-blur-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-white leading-tight">
                100%
              </span>
              <span className="block text-xs font-bold text-white uppercase tracking-wider mt-0.5">
                Suporte da Matriz
              </span>
              <span className="block text-[11px] text-slate-400 mt-1">
                Jurídico, implantação, mesa bancária e marketing
              </span>
            </div>
          </div>
        </div>

        {/* 3 Case Cards - Redesigned UI/UX with High Financial Clarity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-[#f26522]/60 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/15 hover:-translate-y-1.5 backdrop-blur-md group"
            >
              <div>
                {/* 1. Header: Location & Operating Tenure */}
                <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#f26522]" />
                    <span className="text-sm font-bold text-white tracking-tight">{item.location}</span>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/10 text-slate-300 border border-white/10">
                    {item.operationTime}
                  </span>
                </div>

                {/* 2. Key Financial Card (The Hero Metric of each Franchisee) */}
                <div className="bg-[#060919]/90 border border-white/15 rounded-2xl p-4 mb-5 shadow-inner">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {item.revenueLabel}
                  </span>

                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
                      {item.monthlyRevenue}
                      <span className="text-xs font-semibold text-slate-400 font-sans ml-1">/ mês</span>
                    </span>

                    <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-lg border border-[#25D366]/30">
                      <Clock size={12} className="shrink-0" /> ROI {item.roiTime}
                    </span>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Pilar acelerador:</span>
                    <span className="font-semibold text-[#f26522]">{item.primaryPillar}</span>
                  </div>
                </div>

                {/* 3. Real Franchisee Quote */}
                <div className="relative mb-5 bg-white/[0.02] p-3.5 rounded-xl border border-white/5">
                  <Quote size={20} className="text-[#f26522]/40 mb-1" />
                  <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed m-0">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* 4. Footer: Franqueado identity and capability tags */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f26522] to-[#d94f11] text-white flex items-center justify-center font-bold text-sm shadow-md shadow-orange-500/25 flex-shrink-0">
                    {item.name.slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white m-0 flex items-center gap-1.5">
                      {item.name}
                      <CheckCircle2 size={13} className="text-[#25D366]" />
                    </h4>
                    <span className="text-[11px] text-slate-400 block">{item.role}</span>
                  </div>
                </div>

                {/* Distinct Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/[0.08] via-white/[0.03] to-white/[0.08] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-[#25D366]">
              <Sparkles size={16} />
              <span>TERRITÓRIOS EXCLUSIVOS DISPONÍVEIS NO PROJETO 10</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white m-0">
              Quer ser o próximo case de sucesso na sua cidade?
            </h3>
            <p className="text-sm text-slate-300 m-0 max-w-xl font-normal">
              Os primeiros 10 franqueados contam com benefícios prioritários de taxa de franquia e escolha de praça exclusiva.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full md:w-auto shrink-0">
            <a
              href="#qualificacao"
              className="inline-flex items-center justify-center gap-2 bg-[#f26522] hover:bg-[#ff7330] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-orange-500/25 w-full sm:w-auto text-center"
            >
              <span>Garantir meu território</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#qualificacao"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3.5 rounded-xl font-semibold text-sm transition-all border border-white/15 w-full sm:w-auto text-center"
            >
              <span>Simular investimento</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
