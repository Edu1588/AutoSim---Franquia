import { useState, useEffect, useRef } from "react";
import type { FormEvent, ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Banknote,
  Check,
  ChevronDown,
  CircleDollarSign,
  Handshake,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  Store,
  TrendingUp,
  Users,
  X,
  Zap,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "motion/react";
import Lenis from "lenis";
import gsap from "gsap";
import InstitucionalVideoSection from "@/components/InstitucionalVideoSection";
import ComoFuncionaProcesso from "@/components/ComoFuncionaProcesso";
import SuccessCasesSection from "@/components/SuccessCasesSection";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { HalftonePatch, WavyContourLines } from "@/components/HalftoneWaveBackground";
import SpeedometerLoader from "@/components/SpeedometerLoader";
import AutosimLogo from "@/components/AutosimLogo";
import WhatsAppFloatingButton, {
  WhatsAppIcon,
  WHATSAPP_LINK,
  WHATSAPP_FORMATTED,
} from "@/components/WhatsAppFloatingButton";

interface PillarItem {
  number: string;
  icon: typeof Zap;
  title: string;
  description: string;
  accent: string;
  image: string;
}

const pillars: PillarItem[] = [
  {
    number: "01",
    icon: Zap,
    title: "Autosim Express",
    description: "Compra rápida de veículos com receita imediata no balcão.",
    accent: "orange",
    image: "https://res.cloudinary.com/ifuatk2z/image/upload/v1790279816/autosim1.png",
  },
  {
    number: "02",
    icon: Network,
    title: "Autosim Site",
    description: "Intermediação de compra e venda online entre pessoas físicas e lojas parceiras.",
    accent: "blue",
    image: "https://res.cloudinary.com/ifuatk2z/image/upload/v1790279816/autosim2.png",
  },
  {
    number: "03",
    icon: Banknote,
    title: "Financiamentos",
    description: "Mais de 12 bancos parceiros para financiar ou refinanciar.",
    accent: "orange",
    image: "https://res.cloudinary.com/ifuatk2z/image/upload/v1790279816/autosim3.png",
  },
  {
    number: "04",
    icon: Store,
    title: "Autosim Loja",
    description: "Mesa de negócios entre lojistas para repasse e reposição de estoque.",
    accent: "blue",
    image: "https://res.cloudinary.com/ifuatk2z/image/upload/v1790279816/autosim4.png",
  },
];

const faqs = [
  {
    question: "R$ 100 a 250 mil é um valor com alto potencial. Por que investir nesse patamar?",
    answer:
      "Você não está comprando uma loja comum, mas adquirindo quatro fontes de receita operando ao mesmo tempo (Express, Site, Financiamentos e Loja), num mercado nacional em expansão.",
  },
  {
    question: "Como funciona o respaldo da rede Autosim?",
    answer:
      "A matriz opera em Campinas com equipe própria de expansão, implantação e suporte jurídico completo. O franqueado tem acompanhamento especializado em cada etapa.",
  },
  {
    question: "É vantajoso ingressar na fase inicial da rede?",
    answer:
      "O Projeto 10 foi criado exatamente para quem busca ingressar na formação da rede: os primeiros franqueados conquistam os territórios mais estratégicos antes da fase de expansão exponencial.",
  },
  {
    question: "Não possuo histórico no ramo automotivo. Consigo operar com sucesso?",
    answer:
      "Sim. O franqueado gerencia o negócio com metodologia consolidada, treinamento continuado e equipe operacional de implantação, sem necessidade de ser especialista prévio em automóveis.",
  },
  {
    question: "Qual é a segurança quanto à estabilidade do faturamento?",
    answer:
      "O modelo combina receita imediata no balcão (Express), intermediação digital (Site), originação de financiamento e repasse entre lojistas, reduzindo a dependência de uma única frente de vendas.",
  },
];

function SectionEyebrow({
  children,
  light = false,
  dotColor = "orange",
  pulsing = false,
}: {
  children: ReactNode;
  light?: boolean;
  dotColor?: "orange" | "green";
  pulsing?: boolean;
}) {
  return (
    <div className={`section-eyebrow ${light ? "section-eyebrow--light" : ""}`}>
      {dotColor === "green" ? (
        <span className="relative flex h-2.5 w-2.5 items-center justify-center shrink-0 mr-1">
          {pulsing && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          )}
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366] shadow-[0_0_10px_#25D366]" />
        </span>
      ) : (
        <span className="w-2 h-2 rounded-full bg-[#f26522] shadow-[0_0_8px_#f26522] inline-block" />
      )}
      <span>{children}</span>
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ArrowUpRight size={17} />;
}

// 3D Tilt Card with Motion.dev for smooth microinteraction
function PillarTiltCard({
  number,
  icon: Icon,
  title,
  description,
  accent,
  image,
}: PillarItem) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-(y / rect.height) * 8);
    setRotateY((x / rect.width) * 8);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.article
      className={`pillar-card pillar-card--${accent} relative overflow-hidden group flex flex-col justify-between`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", damping: 22, stiffness: 220 }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
    >
      <div>
        {/* Pillar visual image */}
        <div className="pillar-card__image-wrap relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200/80 shadow-sm group-hover:shadow-md transition-shadow">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        <div className="pillar-card__top">
          <span className="pillar-card__number">{number}</span>
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
              accent === "orange"
                ? "bg-orange-50 text-[#f26522] group-hover:bg-[#f26522] group-hover:text-white"
                : "bg-slate-100 text-[#0a0e27] group-hover:bg-[#0a0e27] group-hover:text-white"
            }`}
          >
            <Icon size={18} strokeWidth={2} />
          </div>
        </div>
        <div className="pillar-card__content">
          <h3 className="!mt-3 !mb-2 text-xl font-bold text-[#0a0e27]">{title}</h3>
          <p className="text-sm text-slate-600 leading-relaxed m-0">{description}</p>
        </div>
      </div>

      <div className="pillar-card__footer pt-3 mt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs font-semibold text-[#f26522]">
          Pilar {number}
        </span>
        <span className="pillar-card__arrow">
          <ArrowUpRightIcon />
        </span>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const [, setLocation] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [showLoader, setShowLoader] = useState(true);

  const lenisRef = useRef<Lenis | null>(null);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const stat10Ref = useRef<HTMLSpanElement>(null);
  const stat100Ref = useRef<HTMLSpanElement>(null);
  const stat12Ref = useRef<HTMLSpanElement>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // GSAP Counter animations on Stats section view
  useEffect(() => {
    const section = statsSectionRef.current;
    if (!section) return;

    let animated = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            animated = true;

            if (stat10Ref.current) {
              const obj = { val: 0 };
              gsap.to(obj, {
                val: 10,
                duration: 1.8,
                ease: "power2.out",
                onUpdate: () => {
                  if (stat10Ref.current) {
                    stat10Ref.current.textContent = Math.round(obj.val).toString();
                  }
                },
              });
            }

            if (stat100Ref.current) {
              const obj = { val: 0 };
              gsap.to(obj, {
                val: 100,
                duration: 2.2,
                ease: "power2.out",
                onUpdate: () => {
                  if (stat100Ref.current) {
                    stat100Ref.current.textContent = Math.round(obj.val).toString();
                  }
                },
              });
            }

            if (stat12Ref.current) {
              const obj = { val: 0 };
              gsap.to(obj, {
                val: 12,
                duration: 1.6,
                ease: "power2.out",
                onUpdate: () => {
                  if (stat12Ref.current) {
                    stat12Ref.current.textContent = Math.round(obj.val).toString();
                  }
                },
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, targetId: string) {
    e.preventDefault();
    setMenuOpen(false);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(targetId, { offset: -30, duration: 1.2 });
    } else {
      const el = document.querySelector(targetId);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const capital = String(data.get("capital") ?? "");
    const experience = String(data.get("experience") ?? "");

    if (!name || !phone || !capital || !experience) {
      setFormError("Preencha todos os campos para continuar.");
      return;
    }
    setFormError("");
    setSubmitted(true);
    // Smooth redirect to Thank You page for conversion pixel tracking
    setTimeout(() => {
      setLocation(`/obrigado?name=${encodeURIComponent(name)}`);
    }, 700);
  }

  return (
    <div className="site-shell relative">
      {/* 1. SPEEDOMETER LOADING SCREEN WITH GAUGE 'O' ANIMATION */}
      {showLoader && (
        <SpeedometerLoader onComplete={() => setShowLoader(false)} />
      )}

      {/* HEADER WITH OFFICIAL AUTOSIM LOGO */}
      <header className="site-header">
        <div className="container site-header__inner">
          <a
            className="brand-link flex items-center"
            href="#top"
            onClick={(e) => handleAnchorClick(e, "#top")}
          >
            <AutosimLogo height={34} />
          </a>

          <nav
            className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
            aria-label="Navegação principal"
          >
            <a href="#modelo" onClick={(e) => handleAnchorClick(e, "#modelo")}>
              O modelo
            </a>
            <a href="#como-funciona" onClick={(e) => handleAnchorClick(e, "#como-funciona")}>
              Como funciona
            </a>
            <a href="#cases" onClick={(e) => handleAnchorClick(e, "#cases")}>
              Cases
            </a>
            <a href="#investimento" onClick={(e) => handleAnchorClick(e, "#investimento")}>
              Investimento
            </a>
            <a href="#faq" onClick={(e) => handleAnchorClick(e, "#faq")}>
              FAQ
            </a>
            <a
              className="nav-cta"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              title={`Fale conosco pelo WhatsApp ${WHATSAPP_FORMATTED} - Quero saber mais`}
            >
              <WhatsAppIcon className="w-4 h-4 text-white shrink-0" fill="#ffffff" />
              <span>Quero saber mais</span>
            </a>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        {/* HERO SECTION WITH CUSTOM BACKGROUND IMAGE */}
        <section className="hero-section relative overflow-hidden">
          {/* High-definition, razor-sharp background image */}
          <img
            src="https://res.cloudinary.com/ifuatk2z/image/upload/v1790272216/65621cff-68cd-469b-8da9-94a5ab97449d.png"
            alt="Franquia Autosim"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0"
            loading="eager"
            decoding="async"
          />

          {/* Smooth contrast gradient on the left side ensuring text readability while leaving center & right 100% sharp and clean */}
          <div
            className="absolute inset-0 z-[1] pointer-events-none hidden md:block"
            style={{
              background:
                "linear-gradient(90deg, #070b1e 0%, rgba(7, 11, 30, 0.96) 26%, rgba(7, 11, 30, 0.82) 42%, rgba(7, 11, 30, 0.42) 60%, rgba(7, 11, 30, 0.08) 78%, transparent 90%)",
            }}
          />
          {/* Mobile top-down gradient for readability on small screens */}
          <div
            className="absolute inset-0 z-[1] pointer-events-none md:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(7, 11, 30, 0.96) 0%, rgba(7, 11, 30, 0.85) 55%, rgba(7, 11, 30, 0.35) 85%, transparent 100%)",
            }}
          />

          <div className="container hero-section__inner relative z-10">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              <SectionEyebrow light dotColor="green" pulsing>Franquia Autosim Projeto 10</SectionEyebrow>
              <h1>
                Uma franquia com <br />
                <em className="whitespace-nowrap">4 fontes de receita</em> <br />
                no maior mercado de compra e venda de veículos do Brasil
              </h1>
              <p className="hero-copy__lead">
                Express, Site, Financiamentos e Loja reunidos em uma única operação, com suporte completo da franqueadora do início à operação.
              </p>

              <div className="hero-bullets">
                <span><Check size={15} /> 4 fontes de receita</span>
                <span><Check size={15} /> Suporte completo da franqueadora</span>
                <span><Check size={15} /> Modelo validado em expansão nacional</span>
              </div>

              <div className="hero-actions">
                <a
                  className="button button--primary"
                  href="#qualificacao"
                  onClick={(e) => handleAnchorClick(e, "#qualificacao")}
                >
                  Simular investimento <ArrowUpRightIcon />
                </a>
                <a
                  className="button button--ghost"
                  href="#faq"
                  onClick={(e) => handleAnchorClick(e, "#faq")}
                >
                  Ver perguntas frequentes <ArrowDownRight size={16} />
                </a>
              </div>

              <div className="hero-note flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-300">
                  <ShieldCheck size={15} className="text-[#f26522]" /> Candidaturas avaliadas por região e perfil
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#25D366] font-semibold bg-[#25D366]/10 px-2.5 py-1 rounded-full border border-[#25D366]/30">
                  <Clock size={13} /> Resposta garantida em até 15 minutos
                </span>
              </div>
            </motion.div>
          </div>

          <div className="hero-scroll">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f26522] animate-bounce mr-1 inline-block" />
            <span>Deslize para explorar</span>
          </div>
        </section>

        {/* OPPORTUNITY STRIP */}
        <section className="opportunity-strip" aria-label="Destaques do modelo">
          <div className="container opportunity-strip__inner">
            <div className="opportunity-strip__intro">
              <span className="w-3 h-3 rounded-full bg-white/30 mr-3 inline-block" />
              <span>
                Uma única operação.<br />
                <strong>Mais possibilidades de receita.</strong>
              </span>
            </div>
            <div className="opportunity-strip__items">
              <span><TrendingUp size={18} /> Mercado em expansão</span>
              <span><Users size={18} /> Suporte especializado</span>
              <span><Handshake size={18} /> Rede nacional</span>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="problem-section section-padding relative overflow-hidden">

          <div className="container problem-section__grid relative z-10">
            <div className="problem-section__visual relative">
              <span className="problem-section__giant">01</span>
              <div className="problem-section__quote">
                <span className="quote-mark">“</span>
                <p>Negócio de receita única trava quando o mercado esfria.</p>
              </div>
              <div className="problem-section__bars">
                <span /><span /><span /><span /><span />
              </div>
            </div>

            <div className="problem-section__copy">
              <SectionEyebrow>O problema</SectionEyebrow>
              <h2>Negócio de receita única trava quando o mercado esfria</h2>
              <p>
                Empreender sozinho é caro, arriscado e sem suporte. A maioria das franquias entrega uma única forma de faturar e perde tração assim que o cenário econômico oscila.
              </p>
              <p>
                A Autosim nasceu para resolver isso de forma estruturada: uma operação com quatro motores de receita rodando em sinergia constante, em um mercado automotivo de alta liquidez.
              </p>
              <div className="inline-highlight">
                <CircleDollarSign size={22} />
                <span>
                  <strong>Uma estrutura pensada para reduzir a dependência</strong> de uma única frente de vendas.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS SECTION WITH 3D MOTION TILT CARDS */}
        <section className="pillars-section section-padding" id="modelo">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <SectionEyebrow>O modelo Autosim</SectionEyebrow>
                <h2>4 pilares em <em>uma só</em> unidade franqueada</h2>
              </div>
              <p>
                Um ecossistema de compra, venda, crédito e relacionamento que trabalha junto para transformar oportunidade em negócio.
              </p>
            </div>

            <div className="pillar-grid">
              {pillars.map((pillar) => (
                <PillarTiltCard key={pillar.number} {...pillar} />
              ))}
            </div>

            <div className="pillars-bottom">
              <span className="w-2 h-2 rounded-full bg-[#f26522] inline-block mr-2" />
              <span>Receita diversificada com operação conectada</span>
              <span className="w-2 h-2 rounded-full bg-[#f26522] inline-block ml-2" />
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA O PROCESSO & FLUXO ANIMADO DE SELEÇÃO */}
        <ComoFuncionaProcesso />

        {/* PROOF SECTION WITH GSAP DYNAMIC COUNTERS */}
        <section className="proof-section section-padding" ref={statsSectionRef}>
          <div className="container">
            <div className="section-heading">
              <SectionEyebrow>Expansão da rede</SectionEyebrow>
              <h2>Um projeto <em>nacional</em> de expansão</h2>
              <p>
                Matriz em Campinas (SP), com equipe de expansão, implantação, suporte jurídico e de marketing dedicados a cada unidade.
              </p>
            </div>

            <div className="stats-grid">
              <div className="stat-card stat-card--featured">
                <span className="stat-card__value">
                  <span ref={stat10Ref}>10</span>
                </span>
                <span className="stat-card__label">Projeto 10: kick-off de sucesso</span>
                <span className="stat-card__corner">Fase 01</span>
              </div>
              <div className="stat-card">
                <span className="stat-card__value">
                  <span ref={stat100Ref}>100</span>
                  <span>+</span>
                </span>
                <span className="stat-card__label">unidades no plano de expansão</span>
              </div>
              <div className="stat-card">
                <span className="stat-card__value">
                  <span ref={stat12Ref}>12</span>
                  <span>+</span>
                </span>
                <span className="stat-card__label">bancos parceiros de financiamento</span>
              </div>
              <div className="stat-card">
                <span className="stat-card__value stat-card__value--text">BR</span>
                <span className="stat-card__label">projeto com presença nacional</span>
              </div>
            </div>
          </div>
        </section>

        {/* INSTITUTIONAL VIDEO PRESENTATION (2 COLUMNS) */}
        <InstitucionalVideoSection />

        {/* SUCCESS CASES SECTION (CAMPINAS, RIBEIRAO PRETO, SOROCABA) */}
        <SuccessCasesSection />

        {/* OFFER & QUALIFICATION FORM */}
        <section className="offer-section section-padding" id="investimento">
          <div className="container offer-section__grid">
            <div className="offer-copy">
              <SectionEyebrow>O seu próximo negócio</SectionEyebrow>
              <h2>Um negócio com capital e retorno em <em>múltiplas frentes</em></h2>
              <p>
                O investimento posiciona você dentro de uma estrutura validada, replicável e pronta para operar com suporte qualificado.
              </p>

              <ul className="offer-list">
                <li><Check size={17} /> 4 fontes de receita na mesma estrutura</li>
                <li><Check size={17} /> Suporte completo da franqueadora</li>
                <li><Check size={17} /> Território em fase de expansão prioritária</li>
                <li><Check size={17} /> Formatação e expertise replicáveis</li>
              </ul>

              <div className="offer-quote">
                <span>“</span>
                <p>O melhor momento para escolher território é antes da expansão exponencial.</p>
              </div>
            </div>

            <div className="qualification-card" id="qualificacao">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="qualification-card__header">
                      <span className="qualification-card__eyebrow">Simule sua unidade</span>
                      <h3>Investimento inicial</h3>
                      <div className="qualification-card__price">
                        R$ 100 mil a R$ 250 mil
                      </div>
                      <p>Responda 4 perguntas. O time de expansão entra em contato com o próximo passo.</p>
                      <div className="flex items-center gap-1.5 text-xs text-[#25D366] font-semibold mt-2.5 pt-2 border-t border-slate-100">
                        <Clock size={13} />
                        <span>Tempo de resposta garantido: até 15 minutos</span>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="qualification-form">
                      <label>
                        Nome completo
                        <input name="name" type="text" placeholder="Como podemos chamar você?" required />
                      </label>

                      <label>
                        Telefone / WhatsApp
                        <input name="phone" type="tel" placeholder="(00) 00000-0000" required />
                      </label>

                      <fieldset>
                        <legend>Você tem capital disponível a partir de R$ 100 mil?</legend>
                        <label className="radio-option">
                          <input type="radio" name="capital" value="available" required />
                          <span>Sim, tenho disponível</span>
                        </label>
                        <label className="radio-option">
                          <input type="radio" name="capital" value="raising" />
                          <span>Em captação / organizando</span>
                        </label>
                        <label className="radio-option">
                          <input type="radio" name="capital" value="not-yet" />
                          <span>Não, ainda não</span>
                        </label>
                      </fieldset>

                      <fieldset>
                        <legend>Já teve negócio próprio ou experiência no varejo automotivo?</legend>
                        <div className="radio-inline">
                          <label className="radio-option">
                            <input type="radio" name="experience" value="yes" required />
                            <span>Sim</span>
                          </label>
                          <label className="radio-option">
                            <input type="radio" name="experience" value="no" />
                            <span>Não</span>
                          </label>
                        </div>
                      </fieldset>

                      {formError && <p className="form-error" role="alert">{formError}</p>}

                      <button className="button button--primary button--full cursor-pointer" type="submit">
                        Quero simular meu investimento <ArrowRight size={17} />
                      </button>

                      <small className="form-privacy flex items-center justify-between text-[11px] text-slate-500 mt-3 flex-wrap gap-2">
                        <span className="flex items-center gap-1">
                          <ShieldCheck size={13} className="text-[#25D366]" /> Seus dados ficam protegidos (LGPD).
                        </span>
                        <Link href="/politica-de-privacidade" className="text-slate-500 hover:text-[#f26522] underline underline-offset-2">
                          Política de Privacidade
                        </Link>
                      </small>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    className="qualification-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="success-icon">
                      <Check size={28} />
                    </div>
                    <span className="qualification-card__eyebrow">Candidatura recebida</span>
                    <h3>O próximo passo começa agora.</h3>
                    <p>
                      Obrigado pelo interesse na Autosim. Redirecionando para a confirmação da sua inscrição...
                    </p>
                    <Link
                      className="button button--dark"
                      href="/obrigado"
                    >
                      Ver detalhes da confirmação <ArrowUpRightIcon />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="faq-section section-padding" id="faq">
          <div className="container faq-section__grid">
            <div className="faq-intro">
              <SectionEyebrow>Perguntas frequentes</SectionEyebrow>
              <h2>Antes de dar o <em>próximo passo</em></h2>
              <p>As respostas para as dúvidas mais comuns de quem está avaliando entrar na rede Autosim.</p>
              <a
                href="#qualificacao"
                className="text-link"
                onClick={(e) => handleAnchorClick(e, "#qualificacao")}
              >
                Ainda tem dúvidas? Fale com o time <ArrowRight size={16} />
              </a>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details className="faq-item" key={faq.question} open={index === 0}>
                  <summary>
                    {faq.question}
                    <ChevronDown size={18} />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="final-cta-section section-padding relative overflow-hidden">
          {/* Subtle contour lines accent */}
          <WavyContourLines opacity={0.16} />
          {/* Small localized halftone dot accent in corner */}
          <HalftonePatch
            className="absolute bottom-6 left-8"
            width={140}
            height={80}
            dotColor="#f26522"
            opacity={0.35}
          />

          <div className="container final-cta relative z-10">
            <SectionEyebrow light>Projeto 10 Autosim</SectionEyebrow>
            <h2>
              Converse com o time de expansão e <em>simule sua unidade</em>
            </h2>
            <p>Vagas prioritárias do Projeto 10 limitadas por região geográfica.</p>

            <a
              className="button button--primary button--large"
              href="#qualificacao"
              onClick={(e) => handleAnchorClick(e, "#qualificacao")}
            >
              Quero simular meu investimento <ArrowUpRightIcon />
            </a>

            <span className="final-cta__urgency">
              <span className="status-dot" /> Território em fase de expansão prioritária com candidaturas avaliadas por ordem de chegada.
            </span>
          </div>
        </section>
      </main>

      {/* FOOTER WITH OFFICIAL AUTOSIM LOGO & STRUCTURED NAVIGATION */}
      <footer className="site-footer bg-[#060919] border-t border-white/10 pt-12 pb-24 lg:pb-12 text-slate-400">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-white/10">
            {/* Col 1: Brand & Slogan */}
            <div className="md:col-span-2 space-y-3">
              <AutosimLogo height={32} light />
              <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed m-0">
                Uma franquia com 4 fontes de receita no maior mercado de compra e venda de veículos do Brasil. Inovação para comprar, facilidade para vender.
              </p>
              <div className="text-xs text-slate-400 pt-1">
                <span>Matriz e Diretoria de Expansão: Campinas / SP • Brasil</span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <span className="block text-xs uppercase tracking-wider text-white font-bold mb-3 font-['Space_Grotesk']">
                Navegação
              </span>
              <ul className="space-y-2 text-xs list-none p-0 m-0">
                <li>
                  <a href="#modelo" onClick={(e) => handleAnchorClick(e, "#modelo")} className="hover:text-[#f26522] transition-colors">
                    O modelo (4 Pilares)
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" onClick={(e) => handleAnchorClick(e, "#como-funciona")} className="hover:text-[#f26522] transition-colors">
                    Como funciona o processo
                  </a>
                </li>
                <li>
                  <a href="#cases" onClick={(e) => handleAnchorClick(e, "#cases")} className="hover:text-[#f26522] transition-colors">
                    Cases de sucesso
                  </a>
                </li>
                <li>
                  <a href="#investimento" onClick={(e) => handleAnchorClick(e, "#investimento")} className="hover:text-[#f26522] transition-colors">
                    Investimento Projeto 10
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={(e) => handleAnchorClick(e, "#faq")} className="hover:text-[#f26522] transition-colors">
                    Perguntas frequentes (FAQ)
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Direct Contact & Legal */}
            <div>
              <span className="block text-xs uppercase tracking-wider text-white font-bold mb-3 font-['Space_Grotesk']">
                Atendimento & Legal
              </span>
              <ul className="space-y-2 text-xs list-none p-0 m-0">
                <li>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:text-[#20bd5a] font-semibold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" fill="currentColor" />
                    <span>{WHATSAPP_FORMATTED}</span>
                  </a>
                </li>
                <li>
                  <span className="text-[11px] text-emerald-400 block">
                    ⏱️ Resposta média: 15 minutos
                  </span>
                </li>
                <li className="pt-2">
                  <Link href="/politica-de-privacidade" className="hover:text-[#f26522] transition-colors underline underline-offset-2">
                    Política de Privacidade (LGPD)
                  </Link>
                </li>
                <li>
                  <Link href="/obrigado" className="hover:text-slate-300 transition-colors">
                    Página de Confirmação
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <span>© {new Date().getFullYear()} Autosim Tecnologia e Franchising Ltda. CNPJ regulamentado sob as leis do Brasil.</span>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <span>Campinas — SP • Projeto 10 Expansão Nacional</span>
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
        </div>
      </footer>

      {/* MOBILE STICKY BOTTOM CTA (CONVERSION) */}
      <MobileStickyCTA
        onScrollToForm={() => {
          if (lenisRef.current) {
            lenisRef.current.scrollTo("#investimento", { offset: -30, duration: 1.2 });
          } else {
            const el = document.getElementById("investimento");
            el?.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />

      {/* FIXED WHATSAPP BUTTON */}
      <WhatsAppFloatingButton />
    </div>
  );
}
