import type { Metadata } from "next";
import { SoftwareHighlights } from "@/components/SoftwareHighlights";

export const metadata: Metadata = {
  title: "Programme & Alternativen beim Umstieg auf Linux | OpenFoss",
  description:
    "Finde sofort den passenden Ersatz für Microsoft Office, Photoshop, Outlook und mehr unter Linux.",
};

export default function UmstiegPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <h1 className="sr-only">Deine Programme unter Linux</h1>
      <SoftwareHighlights />
    </div>
  );
}
