export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.1}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.75" y="10.25" width="16.5" height="10.5" rx="2.5" />
      <path d="M7.75 10.25V7a4.25 4.25 0 0 1 8.5 0v3.25" />
      <path d="M12 14.5v2" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-ink">
        <LogoMark className="size-5" />
      </span>
      <span className="text-[1.0625rem] font-bold tracking-tight text-ink">
        Open<span className="text-primary">Foss</span>
      </span>
    </span>
  );
}
