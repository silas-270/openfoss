"use client";

import Link from "next/link";
import { useState } from "react";
import { DISTROS, FINDER_QUESTIONS } from "@/data/distros";
import { DistroLogo } from "@/components/DistroLogos";

const TOTAL = FINDER_QUESTIONS.length;

export function DistroFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const done = step >= TOTAL;
  const question = done ? null : FINDER_QUESTIONS[step];

  const ranked = DISTROS.map((d) => ({
    distro: d,
    score: Object.values(answers).reduce((sum, a) => sum + (d.scores[a] ?? 0), 0),
  })).sort((a, b) => b.score - a.score);

  function choose(questionId: string, optionId: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    setStep((s) => s + 1);
  }

  function restart() {
    setAnswers({});
    setStep(0);
  }

  const topDistro = ranked[0]?.distro;
  const topVariant = topDistro?.variants?.[0];

  return (
    <section id="finder" className="card card-lift scroll-mt-24 overflow-hidden">
      <div className="h-1 bg-surface-2">
        <div
          className="h-full bg-primary transition-[width] duration-500 ease-out"
          style={{ width: `${((done ? TOTAL : step + 1) / TOTAL) * 100}%` }}
        />
      </div>

      <div className="px-6 pt-8 sm:px-10 sm:pt-10">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Wir finden dein Linux
        </h2>
        <p className="mt-2 text-muted">
          {done
            ? "Das passt zu deinen Antworten."
            : "Drei Fragen. Danach haben wir einen Vorschlag für dich."}
        </p>
      </div>

      {question ? (
        <div key={step} className="step-in px-6 pb-8 pt-7 sm:px-10 sm:pb-10">
          <p className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.12em] text-primary">
            Frage {step + 1} von {TOTAL}
          </p>

          <h3 className="mt-1.5 text-lg font-semibold text-ink sm:text-xl">
            {question.question}
          </h3>

          <div className="mt-5 space-y-2.5">
            {question.options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => choose(question.id, opt.id)}
                className="group flex w-full items-center gap-4 rounded-xl border border-border bg-surface px-5 py-4 text-left transition-colors hover:border-primary hover:bg-primary-soft"
              >
                <span className="min-w-0 flex-1">
                  <span className="block font-medium text-ink">{opt.label}</span>
                  <span className="block text-sm text-muted">{opt.hint}</span>
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14m0 0-5-5m5 5-5 5" />
                </svg>
              </button>
            ))}
          </div>

          {step > 0 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="mt-6 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              ← Zurück
            </button>
          ) : null}
        </div>
      ) : topDistro ? (
        <div className="step-in px-6 pb-8 pt-7 sm:px-10 sm:pb-10">
          <div className="flex items-center gap-5 rounded-xl border border-border bg-surface-2 p-5">
            <div className="shrink-0 drop-shadow-md">
              <DistroLogo id={topDistro.id} className="size-14" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
                Unser Vorschlag für dich
              </p>
              <p className="mt-1 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {topDistro.name}
              </p>
              <p className="mt-0.5 text-sm text-muted">{topDistro.tagline}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={topVariant?.isoUrl || `/distros#${topDistro.id}`}
              className="btn btn-primary btn-lg"
              {...(topVariant && !topVariant.viaProjectPage ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
            >
              <svg viewBox="0 0 20 20" className="size-5 shrink-0" fill="currentColor">
                <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.69L6.3 8.49a.75.75 0 0 0-1.1 1.02l4.25 4.5a.75.75 0 0 0 1.1 0l4.25-4.5a.75.75 0 1 0-1.1-1.02l-2.95 2.95V2.75Z" />
                <path d="M3.5 14.75a.75.75 0 0 1 .75.75 1.5 1.5 0 0 0 1.5 1.5h8.5a1.5 1.5 0 0 0 1.5-1.5.75.75 0 0 1 1.5 0 3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3 .75.75 0 0 1 .75-.75Z" />
              </svg>
              <span>
                {topVariant?.sizeGb
                  ? `Direkt herunterladen (${topVariant.sizeGb} GB)`
                  : "Direkt herunterladen"}
              </span>
            </a>
            <Link href={`/distros#${topDistro.id}`} className="btn btn-ghost btn-lg">
              Details & weitere Editionen
            </Link>
          </div>

          <p className="mt-6 text-sm text-muted">
            Ebenfalls eine gute Wahl: {ranked[1]?.distro?.name}.{" "}
            <button
              type="button"
              onClick={restart}
              className="font-medium text-primary underline underline-offset-2 cursor-pointer"
            >
              Nochmal von vorn
            </button>
          </p>
        </div>
      ) : null}
    </section>
  );
}
