import React from "react";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "wouter";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  theme?: "light" | "dark";
}

export default function Breadcrumbs({
  items,
  className = "",
  theme = "dark",
}: BreadcrumbsProps) {
  // Schema.org BreadcrumbList JSON-LD
  const schemaBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: typeof window !== "undefined" ? window.location.origin : "https://autosim.com.br",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(item.href
          ? {
              item:
                typeof window !== "undefined"
                  ? `${window.location.origin}${item.href}`
                  : `https://autosim.com.br${item.href}`,
            }
          : {}),
      })),
    ],
  };

  const isDark = theme === "dark";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center text-xs md:text-sm font-medium ${
          isDark ? "text-slate-400" : "text-slate-500"
        } ${className}`}
      >
        <ol className="flex items-center flex-wrap gap-1.5 list-none p-0 m-0">
          <li className="flex items-center">
            <Link
              href="/"
              className={`flex items-center gap-1 transition-colors ${
                isDark ? "hover:text-[#f26522] text-slate-300" : "hover:text-[#f26522] text-slate-600"
              }`}
            >
              <Home size={14} className="shrink-0" />
              <span>Início</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5">
                <ChevronRight
                  size={13}
                  className={`shrink-0 ${isDark ? "text-slate-600" : "text-slate-400"}`}
                />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className={`transition-colors ${
                      isDark
                        ? "hover:text-[#f26522] text-slate-300"
                        : "hover:text-[#f26522] text-slate-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
