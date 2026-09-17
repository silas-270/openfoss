"use client";

import { useState } from "react";

const STATIONS = [
  {
    id: "station-1",
    stationNumber: "01",
    name: "Der USB-Stick",
    subtitle: "Vorbereitung & Image schreiben",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="2" width="12" height="6" rx="1" />
        <rect x="4" y="8" width="16" height="14" rx="2" />
        <path d="M10 2v4M14 2v4M9 14v2M15 14v2" />
      </svg>
    ),
    content: (
      <div className="space-y-3">
        <p>
          Die heruntergeladene ISO-Datei wird nicht einfach auf den Stick kopiert, sondern mit einem Werkzeug direkt bootfähig geschrieben:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="rounded-xl border border-border bg-surface p-3.5">
            <span className="font-semibold text-ink block text-sm">Windows</span>
            <span className="text-xs text-muted mt-0.5 block">
              <strong className="text-ink">Rufus</strong> herunterladen, ISO wählen, Start klicken.
            </span>
          </div>
          <div className="rounded-xl border border-border bg-surface p-3.5">
            <span className="font-semibold text-ink block text-sm">macOS & Linux</span>
            <span className="text-xs text-muted mt-0.5 block">
              <strong className="text-ink">balenaEtcher</strong> verwenden (Flash from file → Flash!).
            </span>
          </div>
        </div>
        <p className="text-xs text-muted">
          ⚠️ Achtung: Alle vorherigen Daten auf dem USB-Stick werden dabei gelöscht.
        </p>
      </div>
    ),
  },
  {
    id: "station-2",
    stationNumber: "02",
    name: "Abfahrt ins Live-System",
    subtitle: "Starten vom Stick ohne Installation",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
        <line x1="12" y1="2" x2="12" y2="12" />
      </svg>
    ),
    content: (
      <div className="space-y-3">
        <p>
          Stick einstecken, Computer einschalten und sofort mehrmals die Boot-Menü-Taste drücken. Anschließend den USB-Stick auswählen:
        </p>
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          {[
            { brand: "Lenovo, Dell, Acer, Medion", key: "F12" },
            { brand: "HP", key: "F9 oder Esc" },
            { brand: "Asus", key: "Esc oder F8" },
            { brand: "MSI", key: "F11" },
            { brand: "Samsung", key: "Esc oder F10" },
          ].map((row, i) => (
            <div
              key={row.brand}
              className={`flex items-center justify-between gap-4 px-4 py-2 text-xs sm:text-sm ${
                i % 2 === 1 ? "bg-surface-2/60" : ""
              }`}
            >
              <span className="text-ink">{row.brand}</span>
              <kbd className="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-xs font-semibold text-ink">
                {row.key}
              </kbd>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted">
          Tipp: Falls Windows direkt startet, im BIOS/UEFI den Schnellstart (Fast Boot) deaktivieren.
        </p>
      </div>
    ),
  },
  {
    id: "station-3",
    stationNumber: "03",
    name: "Gefahrlose Rundfahrt",
    subtitle: "Deine Festplatte bleibt 100% unangetastet",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    content: (
      <div className="space-y-3">
        <p>
          Linux läuft vollständig im Arbeitsspeicher. Du kannst alles in Ruhe ausprobieren:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
          <div className="rounded-xl border border-border bg-surface p-3 text-center">
            <span className="block text-base">📶</span>
            <span className="text-xs font-medium text-ink mt-1 block">WLAN & Internet</span>
          </div>
          <div className="rounded-xl border border-border bg-surface p-3 text-center">
            <span className="block text-base">🖨️</span>
            <span className="text-xs font-medium text-ink mt-1 block">Drucker & Zubehör</span>
          </div>
          <div className="rounded-xl border border-border bg-surface p-3 text-center">
            <span className="block text-base">🎵</span>
            <span className="text-xs font-medium text-ink mt-1 block">Sound & Display</span>
          </div>
        </div>
        <p>
          Zieh den Stick einfach ab und starte neu – dein bisheriges Windows/macOS ist exakt wie zuvor.
        </p>
      </div>
    ),
  },
  {
    id: "station-4",
    stationNumber: "04",
    name: "Apps & Bordmittel",
    subtitle: "Programme installieren ohne Virengefahr",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    content: (
      <div className="space-y-3">
        <p>
          Unter Linux lädt man keine Installationsdateien von dubiosen Webseiten herunter. Stattdessen gibt es den vorinstallierten App-Store (<strong>Anwendungsverwaltung</strong>).
        </p>
        <p className="text-xs text-muted">
          Falls du das Terminal ausprobieren möchtest, reichen diese 3 Befehle für 99% aller Aufgaben:
        </p>
        <div className="space-y-2 rounded-xl border border-border bg-surface p-3.5 font-mono text-xs">
          <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-2">
            <span className="text-primary font-semibold">sudo apt install [app]</span>
            <span className="text-muted font-sans">Installieren</span>
          </div>
          <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-2">
            <span className="text-primary font-semibold">sudo apt update</span>
            <span className="text-muted font-sans">Updates suchen</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-primary font-semibold">sudo apt upgrade</span>
            <span className="text-muted font-sans">Alles aktualisieren</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "station-5",
    stationNumber: "05",
    name: "Hilfe & Schaffner",
    subtitle: "Freundliche Communitys bei Fragen",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    content: (
      <div className="space-y-3">
        <p>
          Wenn du mal nicht weiterkommst, gibt es hilfsbereite Foren mit geduldigen Menschen:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <a
            href="https://ubuntuusers.de"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface p-3.5 transition-colors hover:border-primary"
          >
            <div>
              <span className="block text-sm font-semibold text-ink">ubuntuusers.de</span>
              <span className="block text-xs text-muted">Größte deutschsprachige Community</span>
            </div>
            <span className="text-primary">↗</span>
          </a>
          <a
            href="https://forums.linuxmint.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface p-3.5 transition-colors hover:border-primary"
          >
            <div>
              <span className="block text-sm font-semibold text-ink">Linux Mint Forum</span>
              <span className="block text-xs text-muted">Sehr freundlich bei Anfängerfragen</span>
            </div>
            <span className="text-primary">↗</span>
          </a>
        </div>
      </div>
    ),
  },
];

export function TrainRouteGuide() {
  const [openStations, setOpenStations] = useState<Record<string, boolean>>({
    "station-1": true, // Startstation standardmäßig offen
  });

  const toggleStation = (id: string) => {
    setOpenStations((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="relative py-8">
      {/* Durchgehende Zug-Gleis-Linie */}
      <div className="absolute left-6 sm:left-8 top-12 bottom-12 w-1 bg-gradient-to-b from-primary via-emerald-500 to-primary/40 rounded-full" />

      <div className="space-y-6 sm:space-y-8">
        {STATIONS.map((station, index) => {
          const isOpen = Boolean(openStations[station.id]);
          const isLast = index === STATIONS.length - 1;

          return (
            <div key={station.id} className="relative flex items-start gap-4 sm:gap-6 group">
              {/* Haltestellen-Knotenpunkt (Bahnhofs-Icon) */}
              <button
                type="button"
                onClick={() => toggleStation(station.id)}
                aria-expanded={isOpen}
                className={`relative z-10 grid size-12 sm:size-16 shrink-0 place-items-center rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  isOpen
                    ? "border-primary bg-primary text-primary-ink shadow-lg shadow-primary/25 scale-105"
                    : "border-border bg-surface text-ink hover:border-primary/80 hover:bg-surface-2"
                }`}
              >
                <div className="flex flex-col items-center justify-center">
                  <span className="text-[0.65rem] sm:text-xs font-bold font-mono tracking-wider opacity-80">
                    {station.stationNumber}
                  </span>
                  <div className="mt-0.5">{station.icon}</div>
                </div>
              </button>

              {/* Haltestellen-Inhaltsbox */}
              <div className="flex-1 min-w-0">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleStation(station.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleStation(station.id);
                    }
                  }}
                  className={`rounded-2xl sm:rounded-3xl border p-5 sm:p-6 text-left transition-all duration-300 cursor-pointer ${
                    isOpen
                      ? "border-primary/40 bg-surface shadow-md"
                      : "border-border/80 bg-surface/60 hover:bg-surface hover:border-border hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-base sm:text-lg font-bold tracking-tight text-ink block">
                        {station.name}
                      </span>
                      <span className="text-xs sm:text-sm text-muted mt-0.5 block">
                        {station.subtitle}
                      </span>
                    </div>

                    <div
                      className={`grid size-8 shrink-0 place-items-center rounded-full bg-surface-2 text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary bg-primary-soft" : ""
                      }`}
                    >
                      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Ausklappbarer Inhalt */}
                  {isOpen && (
                    <div className="mt-5 pt-4 border-t border-border/60 text-sm leading-relaxed text-ink/90 animate-in fade-in-50 duration-200">
                      {station.content}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
