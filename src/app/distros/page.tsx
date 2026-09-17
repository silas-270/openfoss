import type { Metadata } from "next";
import Link from "next/link";
import { DISTROS } from "@/data/distros";
import { DistrosOverview } from "@/components/DistrosOverview";

export const metadata: Metadata = {
  title: "Linux-Distributionen – Die besten Systeme im Überblick | OpenFoss",
  description:
    "Fokussierte Auswahl der besten Linux-Distributionen für Einsteiger und Fortgeschrittene: Mint, Ubuntu, Fedora und Debian.",
};

export default function DistrosPage() {
  const beginnerDistros = [
    DISTROS.find((d) => d.id === "mint")!,
    DISTROS.find((d) => d.id === "ubuntu")!,
  ].filter(Boolean);

  const advancedDistros = [
    DISTROS.find((d) => d.id === "fedora")!,
    DISTROS.find((d) => d.id === "debian")!,
  ].filter(Boolean);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:py-14">
      {/* Grid Layout mit Modal-Interaktion */}
      <div>
        <DistrosOverview
          beginnerDistros={beginnerDistros}
          advancedDistros={advancedDistros}
        />
      </div>

      {/* Bottom navigation */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted">
        <p>
          Brauchst du Hilfe bei der Installation?
        </p>
        <Link href="/wissen" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
          Schritt-für-Schritt-Anleitung lesen
          <svg className="size-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
