import type { Metadata } from "next";
import { TrainRouteGuide } from "@/components/TrainRouteGuide";

export const metadata: Metadata = {
  title: "Fahrplan & Erste Schritte – OpenFoss",
  description: "Schritt für Schritt durch die wichtigsten Stationen für deinen Linux-Start.",
};

export default function WissenPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <TrainRouteGuide />
    </div>
  );
}
