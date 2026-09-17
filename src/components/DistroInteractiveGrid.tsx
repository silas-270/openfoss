"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Distro, Variant } from "@/data/distros";
import { DistroLogo, DistroWatermark } from "./DistroLogos";

export type DistroTheme = {
  brandColor: string;
  cardBgLight: string;
  cardBgDark: string;
  cardBorder: string;
  cardHoverBorder: string;
  watermarkColor: string;
  btnPrimary: string;
};

export const DISTRO_THEMES: Record<string, DistroTheme> = {
  mint: {
    brandColor: "#87CF3E",
    cardBgLight: "bg-emerald-50/40",
    cardBgDark: "dark:bg-[#0c1a13]",
    cardBorder: "border-emerald-200/60 dark:border-emerald-900/40",
    cardHoverBorder: "hover:border-emerald-500 dark:hover:border-emerald-400 hover:shadow-[0_16px_35px_-10px_rgba(135,207,62,0.35)]",
    watermarkColor: "text-emerald-500/10 dark:text-emerald-400/8",
    btnPrimary: "bg-[#71b333] hover:bg-[#5f972b] text-white shadow-emerald-700/20",
  },
  ubuntu: {
    brandColor: "#E95420",
    cardBgLight: "bg-orange-50/40",
    cardBgDark: "dark:bg-[#1a0f0b]",
    cardBorder: "border-orange-200/60 dark:border-orange-900/40",
    cardHoverBorder: "hover:border-orange-500 dark:hover:border-orange-400 hover:shadow-[0_16px_35px_-10px_rgba(233,84,32,0.35)]",
    watermarkColor: "text-orange-500/10 dark:text-orange-400/8",
    btnPrimary: "bg-[#E95420] hover:bg-[#cf4312] text-white shadow-orange-700/20",
  },
  fedora: {
    brandColor: "#51A2DA",
    cardBgLight: "bg-sky-50/40",
    cardBgDark: "dark:bg-[#0c1622]",
    cardBorder: "border-sky-200/60 dark:border-sky-900/40",
    cardHoverBorder: "hover:border-sky-500 dark:hover:border-sky-400 hover:shadow-[0_16px_35px_-10px_rgba(81,162,218,0.35)]",
    watermarkColor: "text-sky-500/10 dark:text-sky-400/8",
    btnPrimary: "bg-[#294172] hover:bg-[#1d3158] dark:bg-[#3c6eb4] dark:hover:bg-[#315b96] text-white shadow-sky-900/20",
  },
  debian: {
    brandColor: "#D70A53",
    cardBgLight: "bg-rose-50/40",
    cardBgDark: "dark:bg-[#1b0b12]",
    cardBorder: "border-rose-200/60 dark:border-rose-900/40",
    cardHoverBorder: "hover:border-rose-500 dark:hover:border-rose-400 hover:shadow-[0_16px_35px_-10px_rgba(215,10,83,0.35)]",
    watermarkColor: "text-rose-500/10 dark:text-rose-400/8",
    btnPrimary: "bg-[#D70A53] hover:bg-[#b50845] text-white shadow-rose-900/20",
  },
};

export function DistroGridCard({
  distro,
  onOpenModal,
}: {
  distro: Distro;
  onOpenModal: (distro: Distro) => void;
}) {
  const theme = DISTRO_THEMES[distro.id];

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpenModal(distro)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenModal(distro);
        }
      }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-7 sm:p-8 transition-all duration-300 cursor-pointer ${theme.cardBgLight} ${theme.cardBgDark} ${theme.cardBorder} ${theme.cardHoverBorder} hover:-translate-y-1.5`}
    >
      {/* Künstlerisches SVG-Wasserzeichen im Hintergrund */}
      <div className={`absolute -right-6 -bottom-6 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${theme.watermarkColor}`}>
        <DistroWatermark id={distro.id} className="size-48 sm:size-56" />
      </div>

      {/* Header mit prominentem Logo & Tagline */}
      <div className="relative z-10 flex items-center gap-4 sm:gap-5">
        <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
          <DistroLogo id={distro.id} className="size-16 sm:size-18 shadow-md rounded-2xl" />
        </div>
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-ink">
            {distro.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-muted">
            {distro.tagline}
          </p>
        </div>
      </div>

      {/* Button / Call to Action */}
      <div className="relative z-10 mt-8 pt-5 border-t border-border/40 flex items-center justify-between">
        <span className="text-xs font-semibold text-muted">
          ISO · {distro.variants[0].sizeGb.toFixed(1)} GB
        </span>

        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-ink group-hover:translate-x-1 transition-transform">
          Auswählen & Download
          <svg className="size-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export function DistroModal({
  distro,
  onClose,
}: {
  distro: Distro | null;
  onClose: () => void;
}) {
  const [selectedVariantId, setSelectedVariantId] = useState<string>("");

  useEffect(() => {
    if (distro) {
      setSelectedVariantId(distro.variants[0].id);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [distro]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!distro) return null;

  const theme = DISTRO_THEMES[distro.id];
  const selectedVariant: Variant =
    distro.variants.find((v) => v.id === selectedVariantId) ?? distro.variants[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Minimalistisches Modal */}
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl animate-in zoom-in-95 duration-150">
        {/* Schließen Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Schließen"
          className="absolute right-4 top-4 z-20 grid size-9 place-items-center rounded-full bg-surface-2 text-muted hover:text-ink transition-colors cursor-pointer"
        >
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-7 sm:p-8">
          {/* Header mit großem Logo & Tagline */}
          <div className="flex items-center gap-4">
            <DistroLogo id={distro.id} className="size-16 shrink-0 shadow-lg rounded-2xl" />
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-ink">
                {distro.name}
              </h2>
              <p className="text-sm font-medium text-muted">
                {distro.tagline}
              </p>
            </div>
          </div>

          {/* Varianten-Auswahl bei Bedarf */}
          {distro.variants.length > 1 && (
            <div className="mt-6">
              <label className="text-xs font-bold uppercase tracking-wider text-muted block mb-2">
                Edition wählen
              </label>
              <div className="grid grid-cols-2 gap-2">
                {distro.variants.map((v) => {
                  const active = v.id === selectedVariant.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariantId(v.id)}
                      className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                        active
                          ? "border-primary bg-primary-soft text-primary ring-1 ring-primary font-semibold"
                          : "border-border bg-surface hover:bg-surface-2 text-ink text-sm"
                      }`}
                    >
                      <div className="text-sm font-semibold">{v.label}</div>
                      <div className="text-xs text-muted mt-0.5">{v.note}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Download Action */}
          <div className="mt-8 space-y-3">
            <a
              href={selectedVariant.isoUrl}
              target={selectedVariant.viaProjectPage ? "_blank" : undefined}
              rel="noreferrer"
              className={`btn w-full py-3.5 text-base font-bold shadow-lg ${theme.btnPrimary}`}
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Datei herunterladen ({selectedVariant.sizeGb.toFixed(1)} GB)</span>
            </a>

            <div className="flex items-center justify-between gap-3 pt-2">
              <Link
                href={`/stick?distro=${distro.id}`}
                className="text-xs text-muted hover:text-ink transition-colors underline"
              >
                Stick per Post bestellen
              </Link>
              <a
                href={distro.homepage}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-muted hover:text-ink transition-colors"
              >
                Offizielle Projektseite →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
