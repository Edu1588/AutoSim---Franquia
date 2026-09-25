import React from "react";
import { Shield, Clock, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import SelectionProcessFlow from "./SelectionProcessFlow";

const SHOWROOM_IMG_URL =
  "https://autosim.com.br/lovable-uploads/19df796f-87a8-47e9-9b77-6e6256991ade.png";

interface FeatureCardProps {
  icon: typeof Shield;
  iconColor: "navy" | "orange";
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, iconColor, title, description }: FeatureCardProps) {
  const isNavy = iconColor === "navy";

  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 group">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 ${
          isNavy
            ? "text-[#0a0e27] bg-slate-100/90 border border-slate-200/80"
            : "text-[#f26522] bg-orange-50/80 border border-orange-100"
        }`}
      >
        <Icon size={24} strokeWidth={1.8} />
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-bold text-slate-900 m-0 mb-1 tracking-tight font-sans">
          {title}
        </h3>
        <p className="text-sm text-slate-500 m-0 leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ComoFuncionaProcesso() {
  return (
    <section className="section-padding bg-[#f8f9fc] relative overflow-hidden" id="como-funciona">
      <div className="container relative z-10">
        {/* Top 2-Column Section matching the user's reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 md:mb-20">
          {/* Column 1: Official Autosim Store Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
              <img
                src={SHOWROOM_IMG_URL}
                alt="Showroom e Loja Autosim"
                className="w-full h-full min-h-[380px] md:min-h-[460px] object-cover object-center transform transition-transform duration-700 group-hover:scale-103"
                loading="lazy"
              />
            </div>

            {/* Subtle background glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#f26522]/10 to-orange-500/5 rounded-3xl blur-2xl -z-10 pointer-events-none" />
          </div>

          {/* Column 2: Como Funciona o Processo */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0a0e27] tracking-tight m-0 mb-4 font-sans">
                Como Funciona o <span className="text-[#f26522]">Processo</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl m-0 font-normal">
                A Autosim Express revoluciona a forma de vender veículos, oferecendo uma solução completa que elimina as preocupações tradicionais dos vendedores.
              </p>
            </div>

            {/* 3 Feature Cards */}
            <div className="space-y-4">
              <FeatureCard
                icon={Shield}
                iconColor="navy"
                title="Segurança Total"
                description="Eliminamos riscos de golpes e valores inadequados"
              />

              <FeatureCard
                icon={Clock}
                iconColor="orange"
                title="Rapidez"
                description="Sem burocracia, reparos ou financiamentos complexos"
              />

              <FeatureCard
                icon={Users}
                iconColor="navy"
                title="Atendimento Humanizado"
                description="Equipe especializada e atendimento personalizado"
              />
            </div>
          </div>
        </div>

        {/* Bottom: Animated Selection Flow (Processo de Seleção de Franquia Autosim) */}
        <div className="mt-8">
          <SelectionProcessFlow />
        </div>
      </div>
    </section>
  );
}
