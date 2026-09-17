import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>OpenFoss – kostenlos, werbefrei, quelloffen. Prototyp.</p>
        <div className="flex gap-5">
          <Link href="/wissen" className="hover:text-ink">
            Erste Schritte
          </Link>
          <Link href="/" className="hover:text-ink">
            Impressum
          </Link>
          <Link href="/" className="hover:text-ink">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
