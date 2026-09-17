"use client";

import { useState } from "react";
import { SWAPS, type Swap } from "@/data/software";
import { AppIcon } from "@/components/SoftwareIcons";

const HIGHLIGHT_IDS = ["office", "photoshop", "outlook", "teams-whatsapp"];

const THEMES: Record<string, string> = {
  office:
    "bg-amber-50/50 dark:bg-[#1a1408] border-amber-200/60 dark:border-amber-900/40 hover:border-amber-500 dark:hover:border-amber-400",
  photoshop:
    "bg-violet-50/50 dark:bg-[#140f22] border-violet-200/60 dark:border-violet-900/40 hover:border-violet-500 dark:hover:border-violet-400",
  outlook:
    "bg-sky-50/50 dark:bg-[#0c1622] border-sky-200/60 dark:border-sky-900/40 hover:border-sky-500 dark:hover:border-sky-400",
  "teams-whatsapp":
    "bg-emerald-50/50 dark:bg-[#0b1a13] border-emerald-200/60 dark:border-emerald-900/40 hover:border-emerald-500 dark:hover:border-emerald-400",
};

const LEVEL: Record<Swap["level"], { label: string; className: string }> = {
  direkt: { label: "1:1 Ersatz", className: "bg-primary-soft text-primary" },
  gewoehnung: { label: "Kurze Eingewöhnung", className: "bg-accent-soft text-accent" },
  web: { label: "Läuft im Browser", className: "bg-surface-2 text-muted" },
};

function Tile({ swap }: { swap: Swap }) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1.5 sm:p-8 ${THEMES[swap.id]}`}
    >
      <div className="flex items-center gap-5">
        <AppIcon
          name={swap.from}
          className="size-16 shrink-0 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="min-w-0">
          <h2 className="text-2xl font-bold tracking-tight text-ink">{swap.from}</h2>
          <p className="mt-1 text-sm leading-relaxed text-muted">{swap.note}</p>
        </div>
      </div>

      <div className="mt-7">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">Unter Linux</p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {swap.to.map((name) => (
            <span
              key={name}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/70 px-3 py-1.5 text-sm font-medium text-ink"
            >
              <AppIcon name={name} className="size-4" />
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between border-t border-border/40 pt-5">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-bold ${LEVEL[swap.level].className}`}
        >
          {LEVEL[swap.level].label}
        </span>
        <span className="text-xs font-semibold text-muted">{swap.category}</span>
      </div>
    </article>
  );
}

export function SoftwareHighlights() {
  const [query, setQuery] = useState("");

  const highlights = HIGHLIGHT_IDS.map((id) => SWAPS.find((s) => s.id === id)).filter(
    (s): s is Swap => Boolean(s),
  );

  const q = query.trim().toLowerCase();
  const results = q
    ? SWAPS.filter(
        (s) =>
          s.from.toLowerCase().includes(q) ||
          s.to.some((t) => t.toLowerCase().includes(q)) ||
          s.category.toLowerCase().includes(q) ||
          s.keywords?.some((k) => k.toLowerCase().includes(q)),
      )
    : [];

  return (
    <div>
      <div className="relative">
        <svg
          viewBox="0 0 20 20"
          className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-muted"
          fill="currentColor"
        >
          <path d="M8.5 3a5.5 5.5 0 1 1-3.4 9.8l-2.4 2.5a1 1 0 0 1-1.4-1.4l2.4-2.5A5.5 5.5 0 0 1 8.5 3Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Programm suchen – z. B. Excel, Premiere, OneDrive"
          aria-label="Programm suchen"
          className="field rounded-2xl py-4 pl-14 text-base"
        />
      </div>

      {!q ? (
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {highlights.map((swap) => (
            <Tile key={swap.id} swap={swap} />
          ))}
        </div>
      ) : (
        <ul className="card mt-5 divide-y divide-[var(--border)]">
          {results.map((s) => (
            <li key={s.id} className="flex flex-wrap items-center gap-x-4 gap-y-2 px-5 py-4">
              <AppIcon name={s.from} className="size-8 shrink-0" />
              <span className="font-semibold text-ink">{s.from}</span>
              <svg
                viewBox="0 0 24 24"
                className="size-4 shrink-0 text-muted"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14m0 0-5-5m5 5-5 5" />
              </svg>
              <span className="text-ink">{s.to.join(", ")}</span>
              <span
                className={`ml-auto shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${LEVEL[s.level].className}`}
              >
                {LEVEL[s.level].label}
              </span>
            </li>
          ))}
          {results.length === 0 ? (
            <li className="px-5 py-10 text-center text-sm text-muted">
              Dazu haben wir noch keinen Eintrag.
            </li>
          ) : null}
        </ul>
      )}
    </div>
  );
}
