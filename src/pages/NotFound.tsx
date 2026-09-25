import React, { useEffect } from "react";
import { AlertCircle, Home, ArrowRight, Gauge, HelpCircle, Building2, PhoneCall } from "lucide-react";
import { Link, useLocation } from "wouter";
import Breadcrumbs from "@/components/Breadcrumbs";
import AutosimLogo from "@/components/AutosimLogo";
import { WHATSAPP_LINK, WHATSAPP_FORMATTED, WhatsAppIcon } from "@/components/WhatsAppFloatingButton";

export default function NotFound() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "404 — Página não encontrada | Autosim Franquia";
  }, []);

  return (
    <div className="min-h-screen bg-[#090d26] text-white flex flex-col justify-between selection:bg-[#f26522] selection:text-white">
      {/* Top Navbar */}
      <header className="border-b border-white/10 bg-[#090d26]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center">
            <AutosimLogo height={34} />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs sm:text-sm text-slate-300 hover:text-[#f26522] transition-colors"
            >
              Ir para o Início
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-bold hover:bg-[#25D366] hover:text-white transition-all"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>{WHATSAPP_FORMATTED}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main 404 Container */}
      <main className="container py-12 md:py-20 flex-1 flex flex-col items-center justify-center max-w-3xl relative">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#f26522]/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="w-full mb-8 flex justify-center sm:justify-start">
          <Breadcrumbs
            items={[
              { label: "Erro 404", current: true },
            ]}
          />
        </div>

        <div className="w-full bg-white/[0.04] border border-white/10 rounded-3xl p-8 sm:p-12 text-center backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Top orange accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f26522] via-orange-400 to-[#f26522]" />

          {/* Speedometer alert visual */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#f26522]/20 rounded-full animate-ping pointer-events-none" />
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#f26522]/30 to-[#f26522]/10 border border-[#f26522]/40 flex items-center justify-center text-[#f26522] shadow-[0_0_30px_rgba(242,101,34,0.3)]">
                <Gauge className="w-10 h-10 text-[#f26522]" />
              </div>
            </div>
          </div>

          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-slate-300 font-mono text-xs font-bold uppercase tracking-widest mb-3">
            Código 404 • Rota Inexistente
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold font-['Space_Grotesk'] text-white m-0 mb-3 tracking-tight">
            Ops! Essa rota saiu da pista
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8">
            O endereço que você tentou acessar não existe, foi alterado ou está temporariamente indisponível.
          </p>

          {/* Quick links to core areas */}
          <div className="mb-8 text-left">
            <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-3 text-center sm:text-left">
              Para onde deseja navegar?
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/#modelo"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-xs font-semibold text-slate-200 group"
              >
                <span>O Modelo: 4 Pilares da Franquia</span>
                <ArrowRight size={14} className="text-[#f26522] transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/#como-funciona"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-xs font-semibold text-slate-200 group"
              >
                <span>Como Funciona o Processo</span>
                <ArrowRight size={14} className="text-[#f26522] transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/#investimento"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-xs font-semibold text-slate-200 group"
              >
                <span>Faixa de Investimento (Projeto 10)</span>
                <ArrowRight size={14} className="text-[#f26522] transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/#faq"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-xs font-semibold text-slate-200 group"
              >
                <span>Perguntas Frequentes (FAQ)</span>
                <ArrowRight size={14} className="text-[#f26522] transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#f26522] hover:bg-[#ff7330] text-white px-7 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-orange-500/25 cursor-pointer w-full sm:w-auto"
            >
              <Home className="w-4 h-4" />
              <span>Voltar ao início</span>
            </Link>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#090d26] font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/20 w-full sm:w-auto"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#090d26]" fill="#090d26" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-500 bg-[#060919]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Autosim Tecnologia e Franchising Ltda.</span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="hover:text-slate-300 transition-colors">
              Página Principal
            </Link>
            <Link href="/politica-de-privacidade" className="hover:text-slate-300 transition-colors">
              Privacidade
            </Link>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="text-slate-400">
              Desenvolvido por{" "}
              <a
                href="https://www.outgrid.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-300 hover:text-[#f26522] transition-colors underline underline-offset-2 decoration-slate-600 hover:decoration-[#f26522]"
              >
                Outgrid
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
