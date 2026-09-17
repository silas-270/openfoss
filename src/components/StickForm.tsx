"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { DISTROS, type Distro, type Variant } from "@/data/distros";
import { DistroLogo } from "@/components/DistroLogos";
import { Tux } from "@/components/Tux";

const STEPS = [
  { id: "system", label: "1. System wählen" },
  { id: "address", label: "2. Lieferadresse" },
  { id: "review", label: "3. Bestätigen" },
] as const;

type Address = {
  name: string;
  street: string;
  zip: string;
  city: string;
  extra?: string;
};

const EMPTY: Address = { name: "", street: "", zip: "", city: "", extra: "" };

const DISTRO_BADGES: Record<string, string> = {
  mint: "🌟 Empfohlen für Einsteiger",
  ubuntu: "🌍 Weltweiter Standard",
  fedora: "⚡ Aktuellste Software",
  debian: "🛡️ Maximale Stabilität",
};

export function StickForm() {
  const params = useSearchParams();
  const initialDistro =
    DISTROS.find((d) => d.id === params.get("distro"))?.id ?? DISTROS[0].id;

  const [step, setStep] = useState(0);
  const [distroId, setDistroId] = useState(initialDistro);
  const [variantId, setVariantId] = useState(
    DISTROS.find((d) => d.id === initialDistro)!.variants[0].id,
  );
  const [address, setAddress] = useState<Address>(EMPTY);
  const [sent, setSent] = useState(false);

  const distro = DISTROS.find((d) => d.id === distroId) ?? DISTROS[0];
  const variant = distro.variants.find((v) => v.id === variantId) ?? distro.variants[0];
  const addressComplete =
    address.name.trim() !== "" &&
    address.street.trim() !== "" &&
    address.zip.trim() !== "" &&
    address.city.trim() !== "";

  function selectDistro(d: Distro) {
    setDistroId(d.id);
    setVariantId(d.variants[0].id);
  }

  function update(key: keyof Address, value: string) {
    setAddress((prev) => ({ ...prev, [key]: value }));
  }

  if (sent) {
    return (
      <div className="card card-lift overflow-hidden border-primary/30 p-8 sm:p-12 text-center">
        <div className="mx-auto flex size-20 items-center justify-center rounded-3xl bg-primary-soft text-primary shadow-inner">
          <svg
            viewBox="0 0 24 24"
            className="size-10 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3.5 py-1 text-xs font-bold text-primary">
          Bestellung erfolgreich eingegangen
        </span>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Dein Linux-Stick ist unterwegs!
        </h2>

        <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-muted">
          Wir bespielen deinen 16 GB USB-Stick mit <strong className="text-ink">{distro.name}</strong> und schicken ihn zusammen mit der gedruckten Anleitung auf den Weg zu dir.
        </p>

        {/* Timeline */}
        <div className="mt-10 rounded-2xl border border-border bg-surface-2 p-6 text-left">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted">
            Wie geht es jetzt weiter?
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="flex gap-3">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-ink">
                1
              </span>
              <div>
                <strong className="block text-sm font-semibold text-ink">Bespielen</strong>
                <span className="text-xs text-muted">Stick wird bootfähig eingerichtet</span>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-ink">
                2
              </span>
              <div>
                <strong className="block text-sm font-semibold text-ink">Postversand</strong>
                <span className="text-xs text-muted">In 3–5 Werktagen im Briefkasten</span>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-ink">
                3
              </span>
              <div>
                <strong className="block text-sm font-semibold text-ink">Ausprobieren</strong>
                <span className="text-xs text-muted">Einstecken & risikofrei testen</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/wissen" className="btn btn-primary btn-lg">
            Schon mal den Fahrplan lesen →
          </Link>
          <Link href="/umstieg" className="btn btn-ghost btn-lg">
            Programme entdecken
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="card card-lift overflow-hidden border-border bg-surface shadow-xl">
      {/* Step Navigation Bar */}
      <ol className="flex border-b border-border bg-surface-2/80 text-center">
        {STEPS.map((s, i) => {
          const isCurrent = i === step;
          const isDone = i < step;

          return (
            <li key={s.id} className="flex-1">
              <button
                type="button"
                onClick={() => (isDone ? setStep(i) : undefined)}
                className={`flex w-full items-center justify-center gap-2 px-3 py-4 text-xs font-semibold sm:text-sm transition-colors ${
                  isCurrent
                    ? "border-b-2 border-primary bg-surface text-primary"
                    : isDone
                    ? "cursor-pointer text-ink hover:bg-surface-2"
                    : "text-muted opacity-60"
                }`}
              >
                <span
                  className={`grid size-6 place-items-center rounded-full text-xs font-bold transition-all ${
                    isCurrent
                      ? "bg-primary text-primary-ink"
                      : isDone
                      ? "bg-primary-soft text-primary"
                      : "bg-border text-muted"
                  }`}
                >
                  {isDone ? "✓" : i + 1}
                </span>
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="p-6 sm:p-8">
        {/* Step 0: Distribution Selection */}
        {step === 0 && (
          <div className="step-in space-y-6">
            <div>
              <span className="eyebrow text-primary">Schritt 1 von 3</span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                Welches Linux-System möchtest du ausprobieren?
              </h2>
              <p className="mt-1.5 text-sm text-muted">
                Keine Sorge: Du kannst Linux komplett vom Stick ausprobieren, ohne etwas auf deinem Computer zu verändern.
              </p>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2">
              {DISTROS.map((d) => {
                const isSelected = d.id === distroId;
                const badge = DISTRO_BADGES[d.id];

                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => selectDistro(d)}
                    className={`relative flex flex-col justify-between rounded-2xl border p-5 text-left transition-all ${
                      isSelected
                        ? "border-primary bg-primary-soft/40 ring-2 ring-primary/20 shadow-md"
                        : "border-border bg-surface hover:border-primary/50 hover:bg-surface-2/60"
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <DistroLogo id={d.id} className="size-11" />
                          <div>
                            <span className="block text-lg font-bold tracking-tight text-ink">
                              {d.name}
                            </span>
                            <span className="text-xs text-muted">Version {d.version}</span>
                          </div>
                        </div>

                        {isSelected && (
                          <span className="grid size-6 place-items-center rounded-full bg-primary text-primary-ink text-xs font-bold">
                            ✓
                          </span>
                        )}
                      </div>

                      {badge && (
                        <div className="mt-3">
                          <span className="inline-block rounded-md bg-surface-2 px-2 py-0.5 text-xs font-medium text-ink">
                            {badge}
                          </span>
                        </div>
                      )}

                      <p className="mt-2.5 text-xs leading-relaxed text-muted">
                        {d.blurb}
                      </p>
                    </div>

                    <div className="mt-4 border-t border-border/60 pt-3">
                      <span className="text-xs font-semibold text-primary">
                        {d.tagline}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Variants Selector */}
            {distro.variants.length > 1 && (
              <div className="rounded-xl border border-border bg-surface-2 p-4">
                <span className="block text-xs font-bold uppercase tracking-wider text-muted">
                  Edition für {distro.name} wählen:
                </span>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {distro.variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVariantId(v.id)}
                      className={`rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors ${
                        v.id === variantId
                          ? "border-primary bg-primary text-primary-ink shadow-sm"
                          : "border-border bg-surface text-ink hover:bg-surface-2"
                      }`}
                    >
                      {v.label} ({v.desktop})
                      <span className="ml-1.5 opacity-75 font-normal">· {v.note}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Helper guidance */}
            <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface-2/60 p-4 text-xs text-muted">
              <div className="flex items-center gap-2.5">
                <span className="text-base">💡</span>
                <span>
                  Unsicher? Beantworte 3 kurze Fragen in unserem{" "}
                  <Link href="/#finder" className="font-semibold text-primary underline underline-offset-2">
                    System-Finder
                  </Link>
                  .
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Step 1: Address Input */}
        {step === 1 && (
          <div className="step-in space-y-6">
            <div>
              <span className="eyebrow text-primary">Schritt 2 von 3</span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                Wohin dürfen wir den Umschlag schicken?
              </h2>
              <p className="mt-1.5 text-sm text-muted">
                Wir versenden kostenfrei per Briefpost. Nach dem Versand löschen wir deine Adressdaten vollständig.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink">
                  Vor- und Nachname *
                </span>
                <input
                  className="field"
                  placeholder="z. B. Alex Müller"
                  value={address.name}
                  onChange={(e) => update("name", e.target.value)}
                  autoComplete="name"
                  required
                />
              </label>

              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink">
                  Straße und Hausnummer *
                </span>
                <input
                  className="field"
                  placeholder="z. B. Lindenallee 42"
                  value={address.street}
                  onChange={(e) => update("street", e.target.value)}
                  autoComplete="street-address"
                  required
                />
              </label>

              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">
                  Adresszusatz / c/o (optional)
                </span>
                <input
                  className="field"
                  placeholder="z. B. Hinterhaus, 3. Stock"
                  value={address.extra || ""}
                  onChange={(e) => update("extra", e.target.value)}
                />
              </label>

              <label>
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink">
                  Postleitzahl *
                </span>
                <input
                  className="field"
                  placeholder="z. B. 10115"
                  value={address.zip}
                  onChange={(e) => update("zip", e.target.value)}
                  autoComplete="postal-code"
                  inputMode="numeric"
                  required
                />
              </label>

              <label>
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink">
                  Wohnort *
                </span>
                <input
                  className="field"
                  placeholder="z. B. Berlin"
                  value={address.city}
                  onChange={(e) => update("city", e.target.value)}
                  autoComplete="address-level2"
                  required
                />
              </label>
            </div>

            {/* Privacy Box */}
            <div className="flex items-start gap-3 rounded-xl border border-primary/30 bg-primary-soft/40 p-4 text-xs text-ink">
              <span className="text-lg">🔒</span>
              <p className="leading-relaxed">
                <strong className="font-semibold">Datenschutz-Garantie:</strong> Deine Adresse wird ausschließlich für den Ausdruck des Versandetiketts verwendet und nach dem Postversand rückstandslos aus unserem System gelöscht. Keine Werbemails, kein Tracking.
              </p>
            </div>
          </div>
        )}

        {/* Step 2: Confirmation / Review */}
        {step === 2 && (
          <div className="step-in space-y-6">
            <div>
              <span className="eyebrow text-primary">Schritt 3 von 3</span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                Passt alles so?
              </h2>
              <p className="mt-1.5 text-sm text-muted">
                Überprüfe deine Angaben, bevor wir den Brief fertig machen.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-surface-2/50">
              {/* Selected System Preview */}
              <div className="flex items-center justify-between border-b border-border p-5">
                <div className="flex items-center gap-3.5">
                  <DistroLogo id={distro.id} className="size-12" />
                  <div>
                    <span className="block text-base font-bold text-ink">
                      {distro.name}
                    </span>
                    <span className="text-xs text-muted">
                      Edition: {variant.label} ({variant.desktop})
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="text-xs font-semibold text-primary hover:underline cursor-pointer"
                >
                  Ändern
                </button>
              </div>

              {/* Package Content */}
              <div className="border-b border-border p-5">
                <span className="block text-xs font-bold uppercase tracking-wider text-muted">
                  Im Umschlag enthalten:
                </span>
                <ul className="mt-2.5 space-y-1.5 text-xs text-ink">
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>1x bootfähiger 16 GB USB 3.0 Stick mit {distro.name}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>1x gedruckte Schritt-für-Schritt-Anleitung & Boot-Tasten-Guide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>1x OpenFoss Tastaturkürzel-Spickzettel</span>
                  </li>
                </ul>
              </div>

              {/* Address Preview */}
              <div className="flex items-start justify-between border-b border-border p-5">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-muted">
                    Lieferadresse:
                  </span>
                  <div className="mt-1.5 text-sm font-medium text-ink">
                    <p className="font-bold">{address.name}</p>
                    <p>{address.street}</p>
                    {address.extra && <p className="text-muted">{address.extra}</p>}
                    <p>
                      {address.zip} {address.city}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-primary hover:underline cursor-pointer"
                >
                  Ändern
                </button>
              </div>

              {/* Pricing breakdown */}
              <div className="flex items-center justify-between bg-primary-soft/30 p-5">
                <div>
                  <span className="block text-sm font-bold text-ink">Gesamtsumme</span>
                  <span className="text-xs text-muted">Inklusive Stick & Versand</span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-extrabold text-primary">0,00 €</span>
                  <span className="block text-[11px] font-semibold text-primary">
                    100 % kostenlos
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-surface-2/60 p-4 text-xs text-muted">
              ℹ️ Der Versand erfolgt per Deutsche Post Kompaktbrief. Eine Rücksendung ist nicht erforderlich – der Stick gehört dauerhaft dir.
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between gap-4 border-t border-border bg-surface-2/60 px-6 py-4 sm:px-8">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className="btn btn-ghost"
          style={step === 0 ? { opacity: 0.4, pointerEvents: "none" } : undefined}
        >
          ← Zurück
        </button>

        {step < 2 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            className="btn btn-primary"
            style={
              step === 1 && !addressComplete
                ? { opacity: 0.45, pointerEvents: "none" }
                : undefined
            }
          >
            Weiter →
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setSent(true)}
            className="btn btn-primary btn-lg shadow-lg shadow-primary/20"
          >
            Kostenlosen Stick anfordern 🚀
          </button>
        )}
      </div>
    </div>
  );
}
