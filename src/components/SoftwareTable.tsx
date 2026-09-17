"use client";

import { useMemo, useState } from "react";
import { SWAPS } from "@/data/software";

const LEVEL_LABEL: Record<string, { text: string; className: string }> = {
  direkt: { text: "Direkter Ersatz", className: "bg-primary-soft text-primary" },
  gewoehnung: { text: "Kurze Eingewöhnung", className: "bg-accent-soft text-accent" },
  web: { text: "Läuft im Browser", className: "bg-surface-2 text-muted" },
};

export function SoftwareTable() {
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SWAPS;
    return SWAPS.filter(
      (s) =>
        s.from.toLowerCase().includes(q) || s.to.some((t) => t.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <div>
      <div className="relative">
        <svg
          viewBox="0 0 20 20"
          className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted"
          fill="currentColor"
        >
          <path d="M8.5 3a5.5 5.5 0 1 1-3.4 9.8l-2.4 2.5a1 1 0 0 1-1.4-1.4l2.4-2.5A5.5 5.5 0 0 1 8.5 3Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Zum Beispiel Photoshop"
          className="field py-3.5 pl-10"
          aria-label="Programm suchen"
        />
      </div>

      <ul className="card mt-4 divide-y divide-[var(--border)]">
        {rows.map((s) => {
          const level = LEVEL_LABEL[s.level];
          return (
            <li key={s.from} className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5 px-5 py-4">
              <span className="font-semibold text-ink">{s.from}</span>
              <svg viewBox="0 0 24 24" className="size-3.5 shrink-0 self-center text-muted" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m0 0-5-5m5 5-5 5" />
              </svg>
              <span className="text-ink">{s.to.join(", ")}</span>
              <span
                className={`ml-auto shrink-0 self-center whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${level.className}`}
              >
                {level.text}
              </span>
            </li>
          );
        })}
        {rows.length === 0 ? (
          <li className="px-5 py-12 text-center text-sm text-muted">
            Dazu haben wir noch keinen Eintrag.
          </li>
        ) : null}
      </ul>
    </div>
  );
}
