import React from "react";

interface IconProps {
  className?: string;
}

// ==================== ORIGINAL / PROPRIETARY SOFTWARE ICONS ====================

/** Microsoft Office / 365 Logo */
export function MicrosoftOfficeIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#EB3C00" fillOpacity="0.1" />
      <path d="M28 8L38 12V36L28 40V8Z" fill="#E03C11" />
      <path d="M28 14L18 17V31L28 34V14Z" fill="#F25325" />
      <path d="M18 19L10 21V27L18 29V19Z" fill="#FE6B35" />
      <path d="M28 8L18 17H28V8Z" fill="#C52800" />
      <path d="M28 34H18L28 40V34Z" fill="#A42000" />
    </svg>
  );
}

/** Adobe Photoshop Icon */
export function PhotoshopIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#001E36" />
      <text
        x="13"
        y="32"
        fill="#31A8FF"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="22"
        fontWeight="800"
      >
        Ps
      </text>
    </svg>
  );
}

/** Adobe Premiere Pro Icon */
export function PremiereIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#00005B" />
      <text
        x="13"
        y="32"
        fill="#9999FF"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="22"
        fontWeight="800"
      >
        Pr
      </text>
    </svg>
  );
}

/** Adobe Illustrator Icon */
export function IllustratorIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#330000" />
      <text
        x="15"
        y="32"
        fill="#FF9A00"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="22"
        fontWeight="800"
      >
        Ai
      </text>
    </svg>
  );
}

/** Google Chrome Logo */
export function ChromeIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#FFFFFF" />
      {/* Red segment */}
      <path d="M24 4C31.5 4 37.9 8.1 41.3 14.2L24 14.2C18.6 14.2 14.2 18.6 14.2 24L4.8 24C4.3 24 4 23.6 4.1 23.2C6.1 12.1 14.5 4 24 4Z" fill="#EA4335" />
      {/* Green segment */}
      <path d="M41.3 14.2C43 17.1 44 20.4 44 24C44 35 35 44 24 44L24 33.8C29.4 33.8 33.8 29.4 33.8 24C33.8 20.4 31.8 17.2 28.8 15.5L41.3 14.2Z" fill="#34A853" />
      {/* Yellow segment */}
      <path d="M4 24C4 35 13 44 24 44L33.8 27.2C32.1 24.3 28.9 22.4 25.2 22.4L14.2 22.4L4.8 24C4.3 24 4 24 4 24Z" fill="#FBBC05" />
      {/* Inner White + Blue circle */}
      <circle cx="24" cy="24" r="10" fill="#FFFFFF" />
      <circle cx="24" cy="24" r="7.5" fill="#4285F4" />
    </svg>
  );
}

/** Spotify Logo */
export function SpotifyIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#1DB954" />
      <path
        d="M34.8 30.6C34.4 31.3 33.5 31.5 32.8 31.1C27.2 27.7 20.1 26.9 11.8 28.8C11 29 10.3 28.5 10.1 27.7C9.9 26.9 10.4 26.2 11.2 26C20.3 23.9 28.1 24.8 34.3 28.6C35 29 35.2 29.9 34.8 30.6ZM37.7 25C37.2 25.8 36.1 26.1 35.3 25.6C28.9 21.7 19.1 20.5 11.5 22.8C10.6 23.1 9.6 22.6 9.3 21.7C9 20.8 9.5 19.8 10.4 19.5C19.1 16.9 29.9 18.2 37.1 22.6C37.9 23.1 38.2 24.2 37.7 25ZM38 19.1C30.3 14.5 17.6 14.1 10.3 16.3C9.1 16.7 7.8 16 7.4 14.8C7 13.6 7.7 12.3 8.9 11.9C17.4 9.3 31.4 9.8 40.2 15C41.3 15.7 41.6 17.1 41 18.2C40.3 19.2 39 19.6 38 19.1Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/** Microsoft Outlook Logo */
export function OutlookIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#0078D4" fillOpacity="0.1" />
      <path d="M12 12H36V36H12V12Z" fill="#0078D4" />
      <path d="M12 12L24 22L36 12H12Z" fill="#28A8EA" />
      <rect x="8" y="16" width="18" height="18" rx="4" fill="#005A9E" />
      <text
        x="13"
        y="30"
        fill="#FFFFFF"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="14"
        fontWeight="bold"
      >
        O
      </text>
    </svg>
  );
}

/** Microsoft Teams / WhatsApp / Communication Icon */
export function TeamsIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#5059C9" />
      <circle cx="34" cy="18" r="4.5" fill="#FFFFFF" fillOpacity="0.85" />
      <path d="M28 26C28 23.8 30.5 22.5 34 22.5C37.5 22.5 40 23.8 40 26V28H28V26Z" fill="#FFFFFF" fillOpacity="0.85" />
      <rect x="8" y="14" width="20" height="20" rx="4" fill="#3B44B1" />
      <text
        x="13"
        y="29"
        fill="#FFFFFF"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="16"
        fontWeight="bold"
      >
        T
      </text>
    </svg>
  );
}

/** WhatsApp Icon */
export function WhatsAppIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#25D366" />
      <path
        d="M24 10C16.3 10 10 16.3 10 24C10 26.6 10.7 29.1 12 31.2L10 38L17.1 36.1C19.1 37.2 21.5 37.9 24 37.9C31.7 37.9 38 31.7 38 24C38 16.3 31.7 10 24 10ZM31.1 29.4C30.8 30.2 29.6 30.8 28.7 31C28.1 31.1 27.3 31.2 24.6 30.1C21.1 28.7 18.9 25.1 18.7 24.9C18.6 24.7 17.2 22.8 17.2 20.9C17.2 19 18.2 18 18.5 17.6C18.8 17.2 19.3 17.1 19.7 17.1C19.8 17.1 20 17.1 20.1 17.1C20.5 17.1 20.7 17.2 20.9 17.6C21.2 18.3 21.9 20 22 20.2C22.1 20.4 22.1 20.6 22 20.8C21.9 21 21.7 21.2 21.5 21.4C21.4 21.5 21.2 21.7 21 21.9C20.8 22.1 20.6 22.3 20.8 22.7C21.1 23.1 22 24.6 23.3 25.8C25 27.3 26.4 27.8 26.8 28C27.2 28.2 27.5 28.1 27.7 27.9C28 27.6 28.3 27.1 28.7 26.6C28.9 26.2 29.3 26.3 29.6 26.4C30 26.5 32 27.5 32.4 27.7C32.8 27.9 33.1 28 33.2 28.2C33.3 28.4 33.3 29 32.9 29.8L31.1 29.4Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/** OneDrive / Cloud Storage */
export function OneDriveIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#0078D4" fillOpacity="0.1" />
      <path
        d="M27 18C25.5 18 24.2 18.7 23.3 19.7C22.1 17.4 19.7 16 17 16C12.6 16 9 19.6 9 24C9 24.4 9 24.8 9.1 25.2C6.8 26.2 5 28.4 5 31C5 34.3 7.7 37 11 37H35C38.9 37 42 33.9 42 30C42 26.4 39.3 23.4 35.8 23C35.1 20.1 32.3 18 29 18H27Z"
        fill="#0078D4"
      />
    </svg>
  );
}

/** Windows Defender / Antivirus */
export function DefenderIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#0078D4" fillOpacity="0.1" />
      <path
        d="M24 9L11 14.5V23.5C11 31.8 16.5 39.5 24 41.5C31.5 39.5 37 31.8 37 23.5V14.5L24 9Z"
        fill="#0078D4"
      />
      <path d="M21.5 27.5L16.5 22.5L18.5 20.5L21.5 23.5L29.5 15.5L31.5 17.5L21.5 27.5Z" fill="#FFFFFF" />
    </svg>
  );
}

// ==================== LINUX / OPEN SOURCE ALTERNATIVE ICONS ====================

/** LibreOffice Logo */
export function LibreOfficeIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#18A303" fillOpacity="0.12" />
      {/* Document shape */}
      <path d="M12 8C12 6.9 12.9 6 14 6H26L36 16V40C36 41.1 35.1 42 34 42H14C12.9 42 12 41.1 12 40V8Z" fill="#18A303" />
      {/* Fold corner */}
      <path d="M26 6L36 16H28C26.9 16 26 15.1 26 14V6Z" fill="#75D600" />
      {/* Content lines */}
      <rect x="18" y="22" width="12" height="2.5" rx="1" fill="#FFFFFF" />
      <rect x="18" y="27.5" width="12" height="2.5" rx="1" fill="#FFFFFF" />
      <rect x="18" y="33" width="7" height="2.5" rx="1" fill="#FFFFFF" />
    </svg>
  );
}

/** OnlyOffice Logo */
export function OnlyOfficeIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#444444" />
      <rect x="11" y="11" width="11" height="11" rx="2" fill="#FF6F3D" />
      <rect x="26" y="11" width="11" height="11" rx="2" fill="#4B9CF5" />
      <rect x="11" y="26" width="11" height="11" rx="2" fill="#88D148" />
      <rect x="26" y="26" width="11" height="11" rx="2" fill="#FBB03B" />
    </svg>
  );
}

/** GIMP Logo */
export function GimpIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#60594D" fillOpacity="0.15" />
      {/* Wilber head */}
      <path
        d="M34 26C33 26 31.5 25.5 30.5 24.5C28.8 28.7 24 32 18.5 32C12.5 32 8 27.5 8 21.5C8 15.5 13 11 19 11C23 11 26.5 13 28.5 16C31 16.5 33 18 34 20C35 22 35 25 34 26Z"
        fill="#665D53"
      />
      {/* Eye */}
      <circle cx="21" cy="19" r="2.5" fill="#FFFFFF" />
      <circle cx="21.5" cy="19" r="1.5" fill="#1C1815" />
      <circle cx="29" cy="20" r="2" fill="#FFFFFF" />
      <circle cx="29.5" cy="20" r="1.2" fill="#1C1815" />
      {/* Nose */}
      <ellipse cx="26" cy="24" rx="2.5" ry="1.8" fill="#1C1815" />
      {/* Brush handle */}
      <path d="M38 10L33 15L35 17L40 12L38 10Z" fill="#C29B38" />
    </svg>
  );
}

/** Mozilla Firefox Logo */
export function FirefoxIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#FF7139" fillOpacity="0.12" />
      {/* Inner globe */}
      <circle cx="24" cy="24" r="14" fill="#3B44B1" />
      {/* Outer flame / Fox */}
      <path
        d="M39 17C38 13.5 35 10 32 8.5C32.5 11 31.5 13.5 30 14.5C28 10 23.5 7.5 19 9C15 10.5 12 14.5 11 19C10 24 12 29 16 32.5C14.5 31 14 29 14.5 27C15.5 29.5 18 31.5 21 32C19 30 18.5 27.5 19.5 25C21 28 24 29.5 27.5 29C29.5 28.5 31 27 32 25C33 22.5 32.5 20.5 31.5 19C34 20.5 36 23.5 36 27C36 33.5 30.5 39 24 39C17 39 11 34 9.5 27C8.5 34 14 41 22 41C32 41 40 33 40 23C40 21 39.5 19 39 17Z"
        fill="#FF7139"
      />
      <path
        d="M37 20C35.5 17.5 33 15 30 14.5C28 15.5 29 17.5 29 19C29 21.5 27 23.5 24.5 23.5C22 23.5 20 21.5 20 19C17.5 22 17 26 18.5 29C21 31 24.5 31 27.5 29C32 26 34 22 37 20Z"
        fill="#FFBD14"
      />
    </svg>
  );
}

/** Thunderbird Logo */
export function ThunderbirdIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#0A84FF" fillOpacity="0.12" />
      {/* Letter envelope */}
      <rect x="10" y="16" width="28" height="18" rx="3" fill="#FFFFFF" stroke="#0A84FF" strokeWidth="2.5" />
      <path d="M11 17L24 27L37 17" stroke="#0A84FF" strokeWidth="2.5" strokeLinecap="round" />
      {/* Blue thunderbird wrap */}
      <path
        d="M24 7C14.5 7 7 14.5 7 24C7 28.5 8.7 32.6 11.5 35.6L14 31C13 29 12.5 26.5 12.5 24C12.5 17.5 17.5 12.5 24 12.5C30.5 12.5 35.5 17.5 35.5 24C35.5 26.5 35 29 34 31L36.5 35.6C39.3 32.6 41 28.5 41 24C41 14.5 33.5 7 24 7Z"
        fill="#0060DF"
      />
    </svg>
  );
}

/** VLC Media Player Logo */
export function VlcIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#FF8800" fillOpacity="0.12" />
      {/* Base ellipse */}
      <ellipse cx="24" cy="38" rx="15" ry="4" fill="#E65100" />
      {/* Cone body */}
      <path d="M21 9L13 36C13 37.5 18 39 24 39C30 39 35 37.5 35 36L27 9H21Z" fill="#FF8800" />
      {/* White stripe 1 */}
      <path d="M19.3 16L17.5 22C19.5 23 21.7 23.5 24 23.5C26.3 23.5 28.5 23 30.5 22L28.7 16C27.2 16.7 25.6 17 24 17C22.4 17 20.8 16.7 19.3 16Z" fill="#FFFFFF" />
      {/* White stripe 2 */}
      <path d="M16 27L14.2 33C17 34.5 20.4 35.2 24 35.2C27.6 35.2 31 34.5 33.8 33L32 27C29.6 28.2 26.9 28.8 24 28.8C21.1 28.8 18.4 28.2 16 27Z" fill="#FFFFFF" />
    </svg>
  );
}

/** DaVinci Resolve Logo */
export function DaVinciResolveIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#1C1C1E" />
      {/* 3 Color Petals */}
      <path d="M24 10C24 10 29 18 25 22C21 26 15 21 15 21C15 21 19 13 24 10Z" fill="#FF3B30" />
      <path d="M36 27C36 27 28 29 26 24C24 19 30 15 30 15C30 15 36 21 36 27Z" fill="#007AFF" />
      <path d="M18 35C18 35 18 27 23 27C28 27 28 35 28 35C28 35 22 38 18 35Z" fill="#FFCC00" />
      <circle cx="24" cy="24" r="3.5" fill="#FFFFFF" />
    </svg>
  );
}

/** Nextcloud Logo */
export function NextcloudIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#0082C9" />
      <circle cx="24" cy="24" r="8" stroke="#FFFFFF" strokeWidth="3" />
      <circle cx="11" cy="24" r="4.5" stroke="#FFFFFF" strokeWidth="2.5" />
      <circle cx="37" cy="24" r="4.5" stroke="#FFFFFF" strokeWidth="2.5" />
    </svg>
  );
}

/** Signal Messenger Logo */
export function SignalIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#3A76F0" />
      <path
        d="M24 10C15.7 10 9 16.3 9 24C9 27.2 10.1 30.1 12 32.5L10.5 38.5L17 37C19.1 37.7 21.5 38 24 38C32.3 38 39 31.7 39 24C39 16.3 32.3 10 24 10Z"
        fill="#FFFFFF"
      />
      <circle cx="24" cy="24" r="8" fill="#3A76F0" />
      <circle cx="24" cy="24" r="4" fill="#FFFFFF" />
    </svg>
  );
}

/** VS Code Logo */
export function VsCodeIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#007ACC" fillOpacity="0.12" />
      <path
        d="M36.5 9.5L27 18.5L18 11.5L8.5 19V29L18 36.5L27 29.5L36.5 38.5C38 39.5 40 38.5 40 36.5V11.5C40 9.5 38 8.5 36.5 9.5Z"
        fill="#007ACC"
      />
      <path d="M27 18.5L8.5 33.5V29L20.5 20L27 18.5Z" fill="#005A9E" />
      <path d="M27 29.5L8.5 14.5V19L20.5 28L27 29.5Z" fill="#005A9E" />
      <path d="M27 18.5L36.5 9.5C37.5 8.5 39 9 39.5 10.5L27 24V18.5Z" fill="#1F9CF0" />
      <path d="M27 29.5L36.5 38.5C37.5 39.5 39 39 39.5 37.5L27 24V29.5Z" fill="#1F9CF0" />
    </svg>
  );
}

/** Generic App / Tool Fallback Icon */
export function GenericAppIcon({ name, className = "size-8" }: { name: string; className?: string }) {
  const initial = name ? name.charAt(0).toUpperCase() : "A";
  return (
    <div
      className={`grid place-items-center rounded-xl bg-surface-2 font-bold text-ink border border-border ${className}`}
    >
      <span>{initial}</span>
    </div>
  );
}

/** Master Icon Resolver */
export function AppIcon({ name, className = "size-8" }: { name: string; className?: string }) {
  const n = name.toLowerCase();

  // Microsoft Office / 365
  if (n.includes("office") || n.includes("word") || n.includes("excel") || n.includes("365")) {
    return <MicrosoftOfficeIcon className={className} />;
  }
  // LibreOffice
  if (n.includes("libreoffice")) {
    return <LibreOfficeIcon className={className} />;
  }
  // OnlyOffice
  if (n.includes("onlyoffice")) {
    return <OnlyOfficeIcon className={className} />;
  }
  // Photoshop
  if (n.includes("photoshop")) {
    return <PhotoshopIcon className={className} />;
  }
  // GIMP
  if (n.includes("gimp")) {
    return <GimpIcon className={className} />;
  }
  // Illustrator
  if (n.includes("illustrator")) {
    return <IllustratorIcon className={className} />;
  }
  // Premiere
  if (n.includes("premiere")) {
    return <PremiereIcon className={className} />;
  }
  // DaVinci Resolve
  if (n.includes("davinci") || n.includes("resolve")) {
    return <DaVinciResolveIcon className={className} />;
  }
  // Chrome
  if (n.includes("chrome") || n.includes("edge")) {
    return <ChromeIcon className={className} />;
  }
  // Firefox
  if (n.includes("firefox")) {
    return <FirefoxIcon className={className} />;
  }
  // Spotify
  if (n.includes("spotify")) {
    return <SpotifyIcon className={className} />;
  }
  // VLC
  if (n.includes("vlc") || n.includes("media player")) {
    return <VlcIcon className={className} />;
  }
  // Outlook
  if (n.includes("outlook")) {
    return <OutlookIcon className={className} />;
  }
  // Thunderbird
  if (n.includes("thunderbird")) {
    return <ThunderbirdIcon className={className} />;
  }
  // Teams
  if (n.includes("teams")) {
    return <TeamsIcon className={className} />;
  }
  // WhatsApp
  if (n.includes("whatsapp")) {
    return <WhatsAppIcon className={className} />;
  }
  // Signal
  if (n.includes("signal")) {
    return <SignalIcon className={className} />;
  }
  // OneDrive / Cloud
  if (n.includes("onedrive") || n.includes("google drive")) {
    return <OneDriveIcon className={className} />;
  }
  // Nextcloud
  if (n.includes("nextcloud")) {
    return <NextcloudIcon className={className} />;
  }
  // Defender / Security
  if (n.includes("defender") || n.includes("viren")) {
    return <DefenderIcon className={className} />;
  }
  // VS Code
  if (n.includes("vs code") || n.includes("visual studio") || n.includes("vscodium")) {
    return <VsCodeIcon className={className} />;
  }

  return <GenericAppIcon name={name} className={className} />;
}
