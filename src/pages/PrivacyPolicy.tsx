import React, { useEffect } from "react";
import { Shield, Lock, FileText, Mail, Phone, ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Breadcrumbs from "@/components/Breadcrumbs";
import AutosimLogo from "@/components/AutosimLogo";
import { WHATSAPP_LINK, WHATSAPP_FORMATTED } from "@/components/WhatsAppFloatingButton";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Política de Privacidade e LGPD — Autosim Franquia";
    window.scrollTo(0, 0);
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
              className="inline-flex items-center gap-1 text-xs sm:text-sm text-slate-300 hover:text-[#f26522] transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Voltar ao site</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="container py-10 md:py-16 flex-1 max-w-4xl">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Institucional", href: "/" },
              { label: "Política de Privacidade", current: true },
            ]}
          />
        </div>

        <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-md shadow-2xl">
          {/* Header */}
          <div className="border-b border-white/10 pb-8 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#f26522] text-xs font-bold uppercase tracking-wider mb-4">
              <Shield size={14} />
              <span>Conformidade com a LGPD (Lei nº 13.709/2018)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-['Space_Grotesk'] text-white m-0 mb-3">
              Política de Privacidade e Proteção de Dados
            </h1>
            <p className="text-slate-400 text-sm m-0">
              Última atualização: Setembro de 2026 • Autosim Tecnologia e Franchising Ltda.
            </p>
          </div>

          {/* Policy Text Content */}
          <div className="space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2 font-['Space_Grotesk']">
                <span className="text-[#f26522]">1.</span> Identificação da Franqueadora
              </h2>
              <p>
                A <strong>Autosim Tecnologia e Franchising Ltda.</strong> ("Autosim", "Franqueadora" ou "nós"), com sede corporativa em Campinas/SP, valoriza a privacidade, a transparência e a segurança de todos os candidatos, potenciais franqueados, parceiros comerciais e visitantes do nosso site oficial.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2 font-['Space_Grotesk']">
                <span className="text-[#f26522]">2.</span> Dados Coletados e Finalidade
              </h2>
              <p className="mb-3">
                Ao preencher nossos formulários de qualificação para o <strong>Projeto 10 (Expansão de Franquia)</strong> ou interagir por meio de nossos canais oficiais de WhatsApp e telefone, podemos coletar as seguintes categorias de dados:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Dados Cadastrais de Contato:</strong> Nome completo, número de telefone com DDD (WhatsApp), endereço de e-mail e cidade/estado de residência ou interesse.</li>
                <li><strong>Dados de Perfil de Investimento:</strong> Faixa de capital disponível para investimento na franquia, nível de experiência prévia nos setores automotivo, comercial ou de gestão.</li>
                <li><strong>Dados de Navegação Técnica:</strong> Endereço IP, data e hora de acesso, tipo de dispositivo e navegador (para garantia de segurança da informação e prevenção a fraudes).</li>
              </ul>
              <p className="mt-3">
                <strong>Finalidade Exclusiva:</strong> Esses dados são utilizados exclusivamente para avaliar a compatibilidade territorial com o plano de expansão, enviar a Circular de Oferta de Franquia (COF), demonstrativos de resultado do negócio e realizar contato direto pela nossa diretoria de expansão.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2 font-['Space_Grotesk']">
                <span className="text-[#f26522]">3.</span> Base Legal para o Tratamento (Art. 7º da LGPD)
              </h2>
              <p>
                O tratamento dos dados de candidatos a franqueados fundamenta-se nas seguintes bases legais estabelecidas pela Lei Geral de Proteção de Dados (Lei nº 13.709/2018):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300 mt-2">
                <li><strong>Art. 7º, V:</strong> Execução de procedimentos preliminares relacionados a contrato do qual seja parte o titular, a pedido do titular dos dados (análise prévia de candidatura à franquia).</li>
                <li><strong>Art. 7º, I:</strong> Consentimento livre, expresso e informado fornecido pelo candidato ao enviar seus dados no formulário.</li>
                <li><strong>Art. 7º, IX:</strong> Legítimo interesse da Franqueadora em responder às solicitações enviadas e aprimorar a experiência dos usuários.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2 font-['Space_Grotesk']">
                <span className="text-[#f26522]">4.</span> Compartilhamento e Sigilo de Informações
              </h2>
              <p>
                A Autosim <strong>não comercializa, não aluga e não cede</strong> seus dados pessoais a terceiros para fins de marketing. O compartilhamento é estritamente restrito a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300 mt-2">
                <li>Equipe interna e diretoria de expansão da rede Autosim.</li>
                <li>Plataformas tecnológicas seguras de hospedagem e CRM com criptografia ponta a ponta em conformidade com as normas ISO 27001.</li>
                <li>Autoridades judiciais ou órgãos reguladores competentes, mediante ordem judicial ou determinação legal expressa.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2 font-['Space_Grotesk']">
                <span className="text-[#f26522]">5.</span> Direitos do Titular de Dados
              </h2>
              <p className="mb-3">
                Conforme o Artigo 18 da LGPD, você possui direito total de, a qualquer momento e mediante requisição gratuita:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-white font-bold block mb-1">Confirmar e Acessar</span>
                  <span className="text-xs text-slate-400">Confirmar a existência do tratamento e obter cópia dos seus dados.</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-white font-bold block mb-1">Corrigir ou Atualizar</span>
                  <span className="text-xs text-slate-400">Solicitar retificação de dados incompletos, inexatos ou desatualizados.</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-white font-bold block mb-1">Eliminação e Revogação</span>
                  <span className="text-xs text-slate-400">Revogar consentimento ou solicitar a exclusão de dados não mais necessários.</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-white font-bold block mb-1">Informações sobre Uso</span>
                  <span className="text-xs text-slate-400">Saber com quais entidades públicas ou privadas compartilhamos dados.</span>
                </div>
              </div>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2 font-['Space_Grotesk']">
                <Mail size={18} className="text-[#f26522]" />
                <span>6. Encarregado pelo Tratamento de Dados (DPO) e Contato</span>
              </h2>
              <p className="text-slate-300 text-sm mb-4">
                Para exercer qualquer um de seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato diretamente com o nosso canal de privacidade:
              </p>
              <div className="space-y-2 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <strong className="text-white">E-mail:</strong>
                  <span className="text-[#f26522]">privacidade@autosim.com.br</span>
                </div>
                <div className="flex items-center gap-2">
                  <strong className="text-white">Telefone/WhatsApp:</strong>
                  <span>{WHATSAPP_FORMATTED}</span>
                </div>
                <div className="flex items-center gap-2">
                  <strong className="text-white">Sede:</strong>
                  <span>Campinas — Estado de São Paulo, Brasil</span>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#f26522] hover:bg-[#ff7330] text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-orange-500/20"
            >
              <ArrowLeft size={16} />
              <span>Voltar para a Página Principal</span>
            </Link>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Falar com o time de expansão no WhatsApp →
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-500 bg-[#060919]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Autosim Tecnologia e Franchising Ltda. CNPJ regulamentado sob as Leis do Brasil.</span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="hover:text-slate-300 transition-colors">
              Página Principal
            </Link>
            <Link href="/obrigado" className="hover:text-slate-300 transition-colors">
              Página de Confirmação
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
