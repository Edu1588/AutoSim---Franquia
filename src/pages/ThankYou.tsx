import React, { useEffect } from "react";
import { CheckCircle2, Clock, MessageSquare, ArrowRight, ShieldCheck, PhoneCall, Sparkles, Building2 } from "lucide-react";
import { Link, useLocation } from "wouter";
import Breadcrumbs from "@/components/Breadcrumbs";
import AutosimLogo from "@/components/AutosimLogo";
import { WHATSAPP_LINK, WHATSAPP_FORMATTED, WhatsAppIcon } from "@/components/WhatsAppFloatingButton";

export default function ThankYou() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Window title & meta for conversion page
    document.title = "Obrigado! Inscrição Recebida — Autosim Franquia";

    // Track conversion event for Google Tag Manager / Meta Pixel / Google Ads
    if (typeof window !== "undefined") {
      try {
        const win = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
        win.dataLayer = win.dataLayer || [];
        win.dataLayer.push({
          event: "generate_lead",
          conversion_category: "Franquia Autosim",
          conversion_label: "Projeto 10 Qualificacao",
          timestamp: new Date().toISOString(),
        });
      } catch (err) {
        console.error("Analytics track error", err);
      }
    }
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
              Voltar ao site
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

      {/* Main Container */}
      <main className="container py-10 md:py-16 flex-1 flex flex-col items-center justify-center max-w-4xl relative">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#f26522]/15 to-[#25D366]/10 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Breadcrumb */}
        <div className="w-full mb-8 flex justify-center sm:justify-start">
          <Breadcrumbs
            items={[
              { label: "Expansão de Franquia", href: "/" },
              { label: "Inscrição Confirmada", current: true },
            ]}
          />
        </div>

        {/* Success Card */}
        <div className="w-full bg-white/[0.04] border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Top orange accent line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#f26522] via-[#25D366] to-[#f26522]" />

          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#25D366]/25 rounded-full animate-ping pointer-events-none" />
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#25D366]/20 border-2 border-[#25D366] flex items-center justify-center text-[#25D366] shadow-[0_0_30px_rgba(37,211,102,0.4)]">
                <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14" />
              </div>
            </div>
          </div>

          {/* Headlines */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              <span>Inscrição Confirmada • Projeto 10</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-['Space_Grotesk'] text-white m-0 mb-3">
              Obrigado! Recebemos seu interesse na franquia <span className="text-[#f26522]">Autosim</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed m-0">
              Parabéns por dar o primeiro passo para operar 4 fontes de receita no maior mercado automotivo do Brasil.
            </p>
          </div>

          {/* RESPONSE TIME PROMISE BOX (Promessa de tempo de resposta visível) */}
          <div className="bg-[#25D366]/10 border-2 border-[#25D366]/40 rounded-2xl p-5 sm:p-6 mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#25D366] text-[#090d26] flex items-center justify-center shrink-0 shadow-lg">
              <Clock className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <h2 className="text-base sm:text-lg font-bold text-white m-0">
                  Promessa de Tempo de Resposta:
                </h2>
                <span className="px-2 py-0.5 rounded bg-[#25D366] text-[#090d26] text-xs font-black uppercase">
                  Até 15 Minutos
                </span>
              </div>
              <p className="text-sm text-slate-300 m-0 leading-relaxed">
                Nossa equipe de expansão da matriz em <strong>Campinas/SP</strong> já foi notificada. Em horário comercial (segunda a sexta, das 08h às 18h), nosso especialista entrará em contato em até <strong>15 minutos</strong> para validar a reserva territorial.
              </p>
            </div>
          </div>

          {/* NEXT STEPS 1-2-3 */}
          <div className="mb-10">
            <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4 text-center sm:text-left">
              O QUE ACONTECE AGORA:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4.5">
                <div className="w-7 h-7 rounded-lg bg-[#f26522]/20 text-[#f26522] font-bold text-sm flex items-center justify-center mb-2.5 font-['Space_Grotesk']">
                  01
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Análise de Território</h4>
                <p className="text-xs text-slate-400 leading-relaxed m-0">
                  Verificação imediata da disponibilidade da sua praça de interesse para garantir exclusividade geográfica.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4.5">
                <div className="w-7 h-7 rounded-lg bg-[#f26522]/20 text-[#f26522] font-bold text-sm flex items-center justify-center mb-2.5 font-['Space_Grotesk']">
                  02
                </div>
                <h4 className="text-sm font-bold text-white mb-1">DRE e Plano Financeiro</h4>
                <p className="text-xs text-slate-400 leading-relaxed m-0">
                  Envio do material executivo com projeções reais de faturamento dos 4 pilares e retorno em 7 a 12 meses.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4.5">
                <div className="w-7 h-7 rounded-lg bg-[#f26522]/20 text-[#f26522] font-bold text-sm flex items-center justify-center mb-2.5 font-['Space_Grotesk']">
                  03
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Reunião com a Diretoria</h4>
                <p className="text-xs text-slate-400 leading-relaxed m-0">
                  Alinhamento direto com o time de expansão para tirar dúvidas sobre taxa de franquia e implantação da loja.
                </p>
              </div>
            </div>
          </div>

          {/* ACCELERATE ON WHATSAPP CTA BOX */}
          <div className="bg-gradient-to-r from-emerald-950/40 via-emerald-900/30 to-emerald-950/40 border border-emerald-500/30 rounded-2xl p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#25D366] block mb-1">
                Prefere atendimento imediato?
              </span>
              <h4 className="text-lg font-bold text-white m-0 mb-1">
                Acelere sua qualificação no WhatsApp
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 m-0">
                Converse agora com o diretor de expansão e receba o dossiê executivo da franquia.
              </p>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#090d26] hover:text-black font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 shrink-0"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#090d26]" fill="#090d26" />
              <span>Chamar no WhatsApp agora</span>
            </a>
          </div>

          {/* Bottom Back Button */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <span>Voltar para a página inicial</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-500 bg-[#060919]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Autosim Tecnologia e Franchising Ltda. Todos os direitos reservados.</span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/politica-de-privacidade" className="hover:text-slate-300 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/" className="hover:text-slate-300 transition-colors">
              Página Principal
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
