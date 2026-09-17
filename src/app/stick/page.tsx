import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { StickForm } from "@/components/StickForm";
import { Tux } from "@/components/Tux";

export const metadata: Metadata = {
  title: "Kostenloser USB-Stick per Post – OpenFoss",
  description:
    "Ein fertiger, bootfähiger USB-Stick mit Linux und eine gedruckte Schritt-für-Schritt-Anleitung. 100 % kostenlos per Briefpost.",
};

const BENEFITS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Plug & Play",
    text: "Einfach anstecken, PC starten und Linux direkt live ausprobieren.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "100 % Ohne Risiko",
    text: "Deine Festplatte und Windows/macOS bleiben völlig unverändert.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="18" height="4" rx="1" />
        <path d="M12 8v13" />
        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
      </svg>
    ),
    title: "Dauerhaft deins",
    text: "Kein Rückversand nötig. Der 16 GB USB-Stick gehört nach Erhalt dir.",
  },
];

const STICK_FAQ = [
  {
    q: "Muss ich mein bisheriges Windows oder macOS löschen?",
    a: "Nein, auf keinen Fall! Der Stick enthält ein sogenanntes Live-System. Es lädt sich beim Einschalten komplett in den Arbeitsspeicher. Deine Festplatte, privaten Fotos und Dokumente bleiben absolut unangetastet. Wenn du den Stick abziehst und neustartest, ist alles exakt wie gewohnt.",
  },
  {
    q: "Kostet der USB-Stick oder das Porto wirklich nichts?",
    a: "Ja, garantiert 0,00 €. OpenFoss ist eine gemeinnützige Bildungsinitiative. USB-Stick, das Bespielen, die Broschüre und der Briefversand werden vollständig über Spenden und Fördermittel finanziert.",
  },
  {
    q: "Muss ich den Stick nach dem Testen zurückschicken?",
    a: "Nein. Der USB-Stick gehört dir! Du kannst ihn dauerhaft als Rettungsstick aufbewahren, für eigene Dateien formatieren oder an Freunde und Familie weitergeben.",
  },
  {
    q: "Wie starte ich meinen Computer vom USB-Stick?",
    a: "Ganz einfach: Stecke den Stick bei ausgeschaltetem Computer ein, schalte ihn an und drücke direkt mehrmals die Boot-Menü-Taste (meist F12, F8, F11 oder Esc). Ein handlicher Spickzettel für alle bekannten PC-Hersteller liegt dem Brief in gedruckter Form bei!",
  },
  {
    q: "Was passiert mit meinen Adressdaten?",
    a: "Wir speichern keine Profile. Deine Adresse wird nur für die Frankierung und den Versand des Briefs genutzt und anschließend automatisch und vollständig aus unserer Datenbank gelöscht.",
  },
];

export default function StickPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Glow Background */}
      <div className="hero-glow border-b border-border/60">
        <div className="mx-auto max-w-4xl px-4 pb-12 pt-14 sm:px-6 sm:pt-20">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-primary">
                📬 Kostenloser Postversand
              </span>
              <h1 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-5xl sm:leading-[1.1]">
                Dein Linux-Stick direkt in den Briefkasten.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Ein bootfähiger 16 GB USB-Stick mit deinem Wunschsystem und gedruckter Anleitung. 
                Kein Download, kein Brenner nötig – einfach einstecken und ausprobieren.
              </p>
            </div>

            <div className="relative mx-auto w-28 shrink-0 sm:w-36 md:mx-0">
              <div className="absolute inset-0 rounded-full bg-tux-halo blur-sm" />
              <Tux className="relative w-full drop-shadow-lg" />
            </div>
          </div>

          {/* Value Highlights */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-3 rounded-2xl border border-border bg-surface/80 p-4 backdrop-blur shadow-sm"
              >
                <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary-soft">
                  {b.icon}
                </div>
                <div>
                  <h2 className="text-sm font-bold text-ink">{b.title}</h2>
                  <p className="mt-0.5 text-xs text-muted leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Suspense
          fallback={
            <div className="card grid min-h-96 place-items-center p-8 text-center text-sm text-muted">
              <div className="size-8 animate-spin rounded-full border-2 border-primary border-t-transparent mb-3" />
              Bestellformular wird geladen …
            </div>
          }
        >
          <StickForm />
        </Suspense>
      </div>

      {/* FAQ Section */}
      <section className="mx-auto max-w-3xl px-4 pb-20 pt-8 sm:px-6">
        <div className="mb-6 text-center">
          <span className="eyebrow text-primary">Gut zu wissen</span>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Häufige Fragen zum Stick
          </h2>
          <p className="mt-1.5 text-sm text-muted">
            Alles, was du vor der Bestellung wissen möchtest.
          </p>
        </div>

        <div className="space-y-3">
          {STICK_FAQ.map((item) => (
            <details
              key={item.q}
              className="card group px-5 py-4 transition-colors hover:border-primary/40 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-ink sm:text-base">
                {item.q}
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 shrink-0 text-muted transition-transform group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-surface-2 p-6 text-center">
          <p className="text-sm font-medium text-ink">
            Du möchtest lieber sofort starten und hast bereits einen USB-Stick zu Hause?
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link href="/distros" className="btn btn-ghost btn-sm">
              ISOs direkt herunterladen
            </Link>
            <Link href="/wissen" className="btn btn-primary btn-sm">
              Schritt-für-Schritt-Anleitung ansehen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
