"use client";

import { useState } from "react";
import type { Distro } from "@/data/distros";

export function DistroCard({ distro }: { distro: Distro }) {
  const [variantId, setVariantId] = useState(distro.variants[0].id);
  const variant = distro.variants.find((v) => v.id === variantId) ?? distro.variants[0];

  return (
    <article id={distro.id} className="card scroll-mt-24 p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-lg font-bold tracking-tight text-ink">{distro.name}</h2>
          <p className="mt-0.5 text-sm text-muted">{distro.tagline}</p>
        </div>
        {distro.recommended ? (
          <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-bold text-accent">
            Für Einsteiger
          </span>
        ) : null}
      </div>

      {distro.variants.length > 1 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {distro.variants.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setVariantId(v.id)}
              className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
                v.id === variantId
                  ? "border-primary bg-primary-soft text-primary"
                  : "border-border bg-surface text-muted hover:text-ink"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      ) : null}

      <a
        href={variant.isoUrl}
        rel="noreferrer"
        target={variant.viaProjectPage ? "_blank" : undefined}
        className="btn btn-primary mt-5 w-full"
      >
        {variant.viaProjectPage
          ? "Download beim Projekt"
          : `Herunterladen · ${variant.sizeGb.toFixed(1)} GB`}
      </a>

      <p className="mt-3 text-xs text-muted">
        Version {distro.version}
        {variant.viaProjectPage
          ? " · Zorin veröffentlicht keine feste Direkt-Adresse"
          : null}
      </p>
    </article>
  );
}
