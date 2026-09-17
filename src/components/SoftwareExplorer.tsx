"use client";

import { useState, useMemo } from "react";
import { SWAPS, CATEGORIES, type Swap } from "@/data/software";
import { AppIcon } from "@/components/SoftwareIcons";

const LEVEL_BADGE = {
  direkt: {
    label: "1:1 Ersatz",
    className: "bg-primary-soft text-primary border-primary/20",
    description: "Funktioniert sofort wie gewohnt",
  },
  gewoehnung: {
    label: "Kurze Eingewöhnung",
    className: "bg-accent-soft text-accent border-accent/20",
    description: "Ähnliche Funktionen, andere Menüs",
  },
  web: {
    label: "Läuft im Browser",
    className: "bg-surface-2 text-muted border-border",
    description: "Keine Installation nötig",
  },
} as const;

const QUICK_SEARCH_TAGS = [
  "Office",
  "Photoshop",
  "Chrome",
  "Spotify",
  "Outlook",
  "Teams",
  "Defender",
];

export function SoftwareExplorer() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Beliebt");

  const isSearching = query.trim().length > 0;

  // Filter logic
  const filteredSwaps = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (q) {
      return SWAPS.filter((s) => {
        const matchFrom = s.from.toLowerCase().includes(q);
        const matchTo = s.to.some((t) => t.toLowerCase().includes(q));
        const matchNote = s.note.toLowerCase().includes(q);
        const matchCategory = s.category.toLowerCase().includes(q);
        const matchKeywords = s.keywords?.some((k) => k.toLowerCase().includes(q));
        return matchFrom || matchTo || matchNote || matchCategory || matchKeywords;
      });
    }

    if (selectedCategory === "Beliebt") {
      return SWAPS.filter((s) => s.featured);
    }

    if (selectedCategory === "Alle") {
      return SWAPS;
    }

    return SWAPS.filter((s) => s.category === selectedCategory);
  }, [query, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Search Input & Quick Tags */}
      <div className="card border-border/80 bg-surface p-4 sm:p-6 shadow-sm">
        <label htmlFor="software-search" className="block text-sm font-semibold text-ink mb-2">
          Such nach deinen Programmen:
        </label>
        <div className="relative">
          <svg
            viewBox="0 0 20 20"
            className="pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-muted"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8.5 3a5.5 5.5 0 1 1-3.4 9.8l-2.4 2.5a1 1 0 0 1-1.4-1.4l2.4-2.5A5.5 5.5 0 0 1 8.5 3Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
          </svg>

          <input
            id="software-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="z.B. Word, Photoshop, Outlook, Spotify, Zoom, CAD..."
            className="field py-3.5 pl-11 pr-10 text-base shadow-inner focus:ring-2 focus:ring-primary/20"
          />

          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted hover:text-ink hover:bg-surface-2"
              aria-label="Suche zurücksetzen"
            >
              <svg viewBox="0 0 20 20" className="size-4" fill="currentColor">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </button>
          )}
        </div>

        {/* Quick Suggestion Pills */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-muted font-medium mr-1">Oft gesucht:</span>
          {QUICK_SEARCH_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => {
                setQuery(tag);
              }}
              className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-ink transition-colors hover:border-primary/50 hover:bg-primary-soft hover:text-primary cursor-pointer font-medium"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Category Tabs (only shown when not actively typing search query) */}
      {!isSearching && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold tracking-tight text-ink">
                {selectedCategory === "Beliebt" ? "Die bekanntesten Programme" : `Kategorie: ${selectedCategory}`}
              </span>
              <span className="rounded-full bg-surface-2 px-2.5 py-0.5 text-xs font-semibold text-muted">
                {filteredSwaps.length} Einträge
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedCategory("Beliebt")}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                  selectedCategory === "Beliebt"
                    ? "bg-primary text-primary-ink shadow-sm"
                    : "bg-surface text-muted hover:bg-surface-2 hover:text-ink border border-border"
                }`}
              >
                ★ Beliebteste
              </button>

              {CATEGORIES.filter((c) => c !== "Alle").map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-ink shadow-sm"
                      : "bg-surface text-muted hover:bg-surface-2 hover:text-ink border border-border"
                  }`}
                >
                  {cat}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setSelectedCategory("Alle")}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                  selectedCategory === "Alle"
                    ? "bg-primary text-primary-ink shadow-sm"
                    : "bg-surface text-muted hover:bg-surface-2 hover:text-ink border border-border"
                }`}
              >
                Alle anzeigen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Active Search Result Header */}
      {isSearching && (
        <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
          <p className="text-sm font-semibold text-ink">
            {filteredSwaps.length === 1
              ? `1 Treffer für „${query}“`
              : `${filteredSwaps.length} Treffer für „${query}“`}
          </p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="text-xs font-semibold text-primary hover:underline"
          >
            Zurück zur Kuratauswahl
          </button>
        </div>
      )}

      {/* Program Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
        {filteredSwaps.map((item) => (
          <SoftwareCard key={item.id || item.from} swap={item} />
        ))}
      </div>

      {/* Empty Search State */}
      {filteredSwaps.length === 0 && (
        <div className="card rounded-2xl border-dashed border-2 border-border p-10 text-center">
          <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-surface-2 text-muted mb-3">
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-ink">Keinen direkten Eintrag für „{query}“ gefunden</h3>
          <p className="mt-2 text-sm text-muted max-w-md mx-auto">
            Viele spezialisierte Windows-Programme lassen sich auch über <strong className="text-ink">Bottles / Wine</strong> direkt starten oder besitzen moderne Web-Versionen.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setQuery("")}
              className="btn btn-ghost text-xs py-2 px-3"
            >
              Suche zurücksetzen
            </button>
            <a
              href="https://alternativeto.net"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-xs py-2 px-3"
            >
              AlternativeTo.net durchsuchen ↗
            </a>
          </div>
        </div>
      )}

      {/* Reassurance Footer Banner */}
      <div className="card rounded-2xl bg-primary-soft/40 border-primary/20 p-5 sm:p-6 text-ink">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-base text-ink">
              Fehlt ein Programm, das du täglich nutzt?
            </h3>
            <p className="mt-1 text-sm text-muted">
              Fast jede Windows-Anwendung hat ein passendes Pendant oder läuft direkt im Browser.
            </p>
          </div>
          <a
            href="https://github.com/silas270/openfoss/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost border-primary/30 text-xs font-semibold whitespace-nowrap"
          >
            Programm vorschlagen ↗
          </a>
        </div>
      </div>
    </div>
  );
}

/** Individual Transition Card */
function SoftwareCard({ swap }: { swap: Swap }) {
  const badge = LEVEL_BADGE[swap.level];

  return (
    <div className="card group flex flex-col justify-between overflow-hidden border-border transition-all duration-200 hover:border-primary/40 hover:shadow-md">
      <div className="p-5">
        {/* Top bar: Category + Level badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
            {swap.category}
          </span>
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${badge.className}`}
          >
            {badge.label}
          </span>
        </div>

        {/* Transition Visual: Known Program -> Linux Alternative */}
        <div className="grid grid-cols-[1fr_auto_1.2fr] items-center gap-3">
          {/* Left: Original / Familiar App */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="shrink-0 drop-shadow-sm">
              <AppIcon name={swap.from} className="size-10 rounded-xl" />
            </div>
            <div className="min-w-0">
              <span className="block text-[11px] font-medium text-muted truncate">
                Gewohnt
              </span>
              <span className="block text-sm font-bold text-ink leading-tight truncate" title={swap.from}>
                {swap.from}
              </span>
            </div>
          </div>

          {/* Center: Direction Arrow */}
          <div className="flex flex-col items-center px-1 text-muted group-hover:text-primary transition-colors">
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14m0 0-4-4m4 4-4 4" />
            </svg>
          </div>

          {/* Right: Linux Alternative App */}
          <div className="flex items-center gap-3 min-w-0 bg-surface-2/60 rounded-xl p-2 border border-border/50">
            <div className="shrink-0 drop-shadow-sm">
              <AppIcon name={swap.to[0]} className="size-9 rounded-lg" />
            </div>
            <div className="min-w-0">
              <span className="block text-[11px] font-semibold text-primary truncate">
                Unter Linux
              </span>
              <span className="block text-sm font-bold text-ink leading-tight truncate" title={swap.to.join(", ")}>
                {swap.to[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Secondary alternatives (if more than 1) */}
        {swap.to.length > 1 && (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-muted">
            <span className="font-medium">Auch möglich:</span>
            <div className="flex flex-wrap gap-1">
              {swap.to.slice(1).map((alt) => (
                <span
                  key={alt}
                  className="rounded-md bg-surface-2 px-1.5 py-0.5 font-medium text-ink text-[11px]"
                >
                  {alt}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Explanation Note */}
        <p className="mt-3.5 text-xs leading-relaxed text-muted border-t border-border/60 pt-3">
          {swap.note}
        </p>
      </div>
    </div>
  );
}
