import Link from "next/link";
import { DistroFinder } from "@/components/DistroFinder";
import { Tux } from "@/components/Tux";

// Platzhalter-Zahlen. Vor einer echten Präsentation gegen belegbare Quellen prüfen.
const FACTS = [
  { k: "88 %", v: "der Apps geben Daten an Dritte weiter", source: "Universität Oxford, 2021" },
  { k: "2 von 3", v: "surfen ohne jeden Schutz", source: "Statista Digital Market Insights" },
  { k: "1.000+", v: "Datenhändler verkaufen deine Profile", source: "Bundesdatenschutzbeauftragte" },
];

const STEPS = [
  {
    time: "2 Minuten",
    title: "Drei Fragen",
    text: "Wir suchen das passende System für dich aus.",
    icon: (
      <>
        <path d="M4 6h1" />
        <path d="M9 6h11" />
        <path d="M4 12h1" />
        <path d="M9 12h11" />
        <path d="M4 18h1" />
        <path d="M9 18h11" />
      </>
    ),
  },
  {
    time: "5 Werktage",
    title: "Brief öffnen",
    text: "Stick und gedruckte Anleitung liegen im Kasten.",
    icon: (
      <>
        <rect x="3" y="6" width="18" height="13" rx="2.5" />
        <path d="m3.5 8 8.5 5.5L20.5 8" />
      </>
    ),
  },
  {
    time: "Ein Nachmittag",
    title: "Ausprobieren",
    text: "Läuft vom Stick. Deine Festplatte bleibt unberührt.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2.5" />
        <path d="M12 16v4" />
        <path d="M8 20h8" />
      </>
    ),
  },
  {
    time: "Deine Sache",
    title: "Behalten – oder nicht",
    text: "Gefällt es nicht, ziehst du den Stick wieder ab.",
    icon: <path d="M12 20.3 4.9 13.2a4.6 4.6 0 0 1 6.4-6.6l.7.7.7-.7a4.6 4.6 0 0 1 6.4 6.6Z" />,
  },
];

const FAQ = [
  {
    q: "Muss ich Windows dafür löschen?",
    a: "Nein. Linux läuft vom Stick, ohne etwas auf deiner Festplatte zu verändern. Nach einem Neustart ist alles wie vorher.",
  },
  {
    q: "Gehen meine Dateien verloren?",
    a: "Beim Ausprobieren nicht. Erst wenn du dich für eine Installation entscheidest, fragt dich das System ausdrücklich, was passieren soll.",
  },
  {
    q: "Was kostet das?",
    a: "Nichts. Stick, Porto und Anleitung übernehmen wir. Eine Spende liegt bei dir.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero und Quiz teilen sich eine Fläche – das Quiz schiebt sich von unten hinein. */}
      <div className="hero-glow relative">
        <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 lg:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
            <div className="text-center lg:text-left">
              <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                Der erste Schritt zum Datenschutz.
                <span className="block text-primary">Wir gehen ihn mit dir.</span>
              </h1>

              <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                <Link href="#finder" className="btn btn-primary btn-lg">
                  Passendes System finden
                </Link>
                <Link href="/stick" className="btn btn-ghost btn-lg">
                  Stick per Post bestellen
                </Link>
              </div>
            </div>

            <div className="relative order-first mx-auto w-36 lg:order-none lg:w-64">
              <div className="absolute inset-x-0 bottom-0 aspect-square rounded-full bg-tux-halo" />
              <Tux className="relative w-full px-2 drop-shadow-xl" />
            </div>
          </div>

          <dl className="mt-16 grid gap-8 border-t border-border pt-10 sm:grid-cols-3 lg:mt-20">
            {FACTS.map((f) => (
              <div key={f.k} className="text-center lg:text-left">
                <dt className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">{f.k}</dt>
                <dd className="mt-1.5 text-sm font-medium leading-snug text-ink">{f.v}</dd>
                <dd className="mt-1 text-xs text-muted">{f.source}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="mx-auto max-w-5xl px-4 pb-px pt-16 sm:px-6">
          <div className="-mb-24">
            <DistroFinder />
          </div>
        </div>
      </div>

      {/* Schritte: eine durchgehende Linie statt vier lose Spalten. */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-5xl px-4 pb-20 pt-40 sm:px-6">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className={`flex flex-col rounded-2xl border p-6 transition-colors ${
                  i === 0
                    ? "border-primary/40 bg-primary-soft"
                    : "border-border bg-bg hover:border-primary/40"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-ink">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.9}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {s.icon}
                    </svg>
                  </span>
                  <span className="text-2xl font-bold tracking-tight text-border">
                    0{i + 1}
                  </span>
                </div>

                <span className="mt-5 block text-xs font-bold uppercase tracking-[0.12em] text-primary">
                  {s.time}
                </span>
                <h2 className="mt-1 text-lg font-bold tracking-tight text-ink">{s.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Abschluss: FAQ und die persönliche Notiz stehen nebeneinander, nicht gestapelt. */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Tux className="w-24" />
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-ink">
              Noch Fragen? Verständlich.
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="card group px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-ink">
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
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
