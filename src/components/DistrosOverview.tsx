"use client";

import { useState } from "react";
import type { Distro } from "@/data/distros";
import { DistroGridCard, DistroModal } from "@/components/DistroInteractiveGrid";

export function DistrosOverview({
  beginnerDistros,
  advancedDistros,
}: {
  beginnerDistros: Distro[];
  advancedDistros: Distro[];
}) {
  const [selectedDistro, setSelectedDistro] = useState<Distro | null>(null);

  return (
    <>
      {/* Sektion 1: Einsteiger */}
      <section className="mb-14">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-ink">
          Einsteiger
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {beginnerDistros.map((d) => (
            <DistroGridCard
              key={d.id}
              distro={d}
              onOpenModal={(distro) => setSelectedDistro(distro)}
            />
          ))}
        </div>
      </section>

      {/* Sektion 2: Fortgeschritten */}
      <section className="mb-14">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-ink">
          Fortgeschritten
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {advancedDistros.map((d) => (
            <DistroGridCard
              key={d.id}
              distro={d}
              onOpenModal={(distro) => setSelectedDistro(distro)}
            />
          ))}
        </div>
      </section>

      {/* Detail-Modal */}
      <DistroModal
        distro={selectedDistro}
        onClose={() => setSelectedDistro(null)}
      />
    </>
  );
}
