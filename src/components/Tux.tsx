export function Tux({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 250" className={className} aria-hidden="true">
      <ellipse cx="74" cy="230" rx="27" ry="12" fill="var(--tux-beak)" transform="rotate(-15 74 230)" />
      <ellipse cx="126" cy="230" rx="27" ry="12" fill="var(--tux-beak)" transform="rotate(15 126 230)" />

      <ellipse cx="24" cy="156" rx="15" ry="40" fill="var(--tux-body)" transform="rotate(22 24 156)" />
      <ellipse cx="176" cy="156" rx="15" ry="40" fill="var(--tux-body)" transform="rotate(-22 176 156)" />

      <ellipse cx="100" cy="148" rx="71" ry="76" fill="var(--tux-body)" />
      <ellipse cx="100" cy="158" rx="51" ry="62" fill="var(--tux-belly)" />

      <ellipse cx="100" cy="60" rx="48" ry="47" fill="var(--tux-body)" />
      <ellipse cx="86" cy="54" rx="13" ry="17" fill="var(--tux-belly)" />
      <ellipse cx="114" cy="54" rx="13" ry="17" fill="var(--tux-belly)" />
      <circle cx="89" cy="58" r="6" fill="var(--tux-body)" />
      <circle cx="111" cy="58" r="6" fill="var(--tux-body)" />

      <path
        d="M100 66c-11 0-19 5-19 11s8 10 19 10 19-4 19-10-8-11-19-11Z"
        fill="var(--tux-beak)"
      />
      <path d="M82 77h36" stroke="var(--tux-beak-line)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
