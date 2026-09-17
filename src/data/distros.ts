// Direktlinks auf die Live-ISOs, zuletzt geprüft am 2026-09-17.
// Versionsnummern und Spiegelserver ändern sich mit jedem Release – vor dem
// Launch braucht das einen Job, der die Links regelmäßig nachzieht.

export type Variant = {
  id: string;
  label: string;
  desktop: string;
  note: string;
  sizeGb: number;
  isoUrl: string;
  torrentUrl?: string;
  /** Zorin veröffentlicht keine stabile Direkt-URL – hier führt der Knopf auf die Projektseite. */
  viaProjectPage?: boolean;
};

export type Distro = {
  id: string;
  name: string;
  tagline: string;
  blurb: string;
  version: string;
  released: string;
  base: string;
  support: string;
  recommended?: boolean;
  strengths: string[];
  watchOut: string;
  homepage: string;
  checksumUrl: string;
  variants: Variant[];
  scores: Record<string, number>;
};

export const DISTROS: Distro[] = [
  {
    id: "mint",
    name: "Linux Mint",
    tagline: "Der sanfteste Umstieg von Windows",
    blurb:
      "Startmenü unten links, Taskleiste, Dateimanager – alles liegt da, wo man es erwartet. Mint gilt seit Jahren als die freundlichste Distribution für Umsteigerinnen und Umsteiger.",
    version: "22.3",
    released: "Januar 2026",
    base: "Ubuntu LTS",
    support: "Updates bis 2029",
    recommended: true,
    strengths: [
      "Vertraute Oberfläche mit Startmenü",
      "Treiber-Verwaltung mit einem Klick",
      "Timeshift-Backups von Anfang an",
    ],
    watchOut: "Neue Software-Versionen kommen etwas später als bei anderen Distributionen.",
    homepage: "https://linuxmint.com",
    checksumUrl: "https://mirrors.edge.kernel.org/linuxmint/stable/22.3/sha256sum.txt",
    variants: [
      {
        id: "cinnamon",
        label: "Cinnamon",
        desktop: "Cinnamon",
        note: "Die Standardwahl – modern und vertraut",
        sizeGb: 3.0,
        isoUrl:
          "https://mirrors.edge.kernel.org/linuxmint/stable/22.3/linuxmint-22.3-cinnamon-64bit.iso",
        torrentUrl:
          "https://mirrors.edge.kernel.org/linuxmint/stable/22.3/linuxmint-22.3-cinnamon-64bit.iso.torrent",
      },
    ],
    scores: {
      "exp-low": 3,
      "exp-mid": 2,
      "exp-high": 0,
      "age-old": 2,
      "age-mid": 3,
      "age-new": 1,
      "want-familiar": 3,
      "want-stable": 2,
      "want-fresh": 0,
    },
  },
  {
    id: "ubuntu",
    name: "Ubuntu",
    tagline: "Die bekannteste Distribution überhaupt",
    blurb:
      "Wenn im Internet eine Linux-Anleitung steht, ist sie meistens für Ubuntu geschrieben. Das macht die Fehlersuche im Zweifel deutlich einfacher.",
    version: "24.04.4 LTS „Noble Numbat“",
    released: "Februar 2026",
    base: "Debian",
    support: "Updates bis 2029",
    recommended: true,
    strengths: [
      "Riesige Community, Anleitungen für alles",
      "Beste Hardware-Unterstützung bei neuen Geräten",
      "Hersteller liefern Software oft direkt für Ubuntu",
    ],
    watchOut: "Die Oberfläche (GNOME) sieht anders aus als Windows – ein paar Tage Umgewöhnung.",
    homepage: "https://ubuntu.com",
    checksumUrl: "https://releases.ubuntu.com/24.04/SHA256SUMS",
    variants: [
      {
        id: "desktop",
        label: "Desktop",
        desktop: "GNOME",
        note: "Die Standardausgabe mit allem Nötigen",
        sizeGb: 5.9,
        isoUrl: "https://releases.ubuntu.com/24.04/ubuntu-24.04.4-desktop-amd64.iso",
        torrentUrl: "https://releases.ubuntu.com/24.04/ubuntu-24.04.4-desktop-amd64.iso.torrent",
      },
    ],
    scores: {
      "exp-low": 2,
      "exp-mid": 3,
      "exp-high": 1,
      "age-old": 0,
      "age-mid": 2,
      "age-new": 3,
      "want-familiar": 1,
      "want-stable": 2,
      "want-fresh": 2,
    },
  },
  {
    id: "fedora",
    name: "Fedora Workstation",
    tagline: "Immer die aktuelle Software",
    blurb:
      "Fedora bringt neue Versionen von Kernel und Programmen sehr schnell. Gut, wenn die Hardware brandneu ist – und wenn zweimal im Jahr ein größeres Update in Ordnung geht.",
    version: "44",
    released: "April 2026",
    base: "eigenständig (Red Hat)",
    support: "rund 13 Monate pro Version",
    strengths: [
      "Neueste Treiber und Kernel",
      "Sehr sauberes, unverändertes GNOME",
      "Starker Fokus auf freie Software",
    ],
    watchOut: "Codecs für manche Videoformate muss man einmalig nachinstallieren.",
    homepage: "https://fedoraproject.org/workstation/",
    checksumUrl: "https://fedoraproject.org/security/",
    variants: [
      {
        id: "workstation",
        label: "Workstation",
        desktop: "GNOME",
        note: "Die Standardausgabe von Fedora",
        sizeGb: 2.4,
        isoUrl:
          "https://download.fedoraproject.org/pub/fedora/linux/releases/44/Workstation/x86_64/iso/Fedora-Workstation-Live-44-1.7.x86_64.iso",
      },
    ],
    scores: {
      "exp-low": 0,
      "exp-mid": 1,
      "exp-high": 3,
      "age-old": 0,
      "age-mid": 1,
      "age-new": 3,
      "want-familiar": 0,
      "want-stable": 0,
      "want-fresh": 3,
    },
  },
  {
    id: "debian",
    name: "Debian",
    tagline: "Läuft und läuft und läuft",
    blurb:
      "Die Grundlage vieler anderer Distributionen. Debian ändert selten etwas – ideal für Geräte, die einfach jahrelang unauffällig funktionieren sollen.",
    version: "13 „Trixie“",
    released: "August 2025",
    base: "eigenständig",
    support: "rund 5 Jahre",
    strengths: [
      "Extrem stabil und genügsam",
      "Komplett von einer Community getragen",
      "Perfekt für ältere Rechner",
    ],
    watchOut: "Bei WLAN-Chips kann die Ersteinrichtung etwas Handarbeit brauchen.",
    homepage: "https://www.debian.org",
    checksumUrl: "https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA256SUMS",
    variants: [
      {
        id: "gnome",
        label: "GNOME",
        desktop: "GNOME",
        note: "Moderne Standardoberfläche",
        sizeGb: 3.7,
        isoUrl:
          "https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-13.7.0-amd64-gnome.iso",
      },
    ],
    scores: {
      "exp-low": 0,
      "exp-mid": 1,
      "exp-high": 3,
      "age-old": 3,
      "age-mid": 2,
      "age-new": 1,
      "want-familiar": 1,
      "want-stable": 3,
      "want-fresh": 0,
    },
  },
];

export const FINDER_QUESTIONS = [
  {
    id: "exp",
    question: "Wie vertraut bist du mit Computern?",
    options: [
      { id: "exp-low", label: "Ich nutze sie, mehr nicht", hint: "Browser, Office, Fotos" },
      { id: "exp-mid", label: "Ich helfe anderen ab und zu", hint: "Programme installieren geht" },
      { id: "exp-high", label: "Ich schrecke vor nichts zurück", hint: "Terminal ist kein Problem" },
    ],
  },
  {
    id: "age",
    question: "Wie alt ist das Gerät, auf dem Linux laufen soll?",
    options: [
      { id: "age-old", label: "Älter als 8 Jahre", hint: "Soll wieder flott werden" },
      { id: "age-mid", label: "3 bis 8 Jahre", hint: "Läuft noch gut" },
      { id: "age-new", label: "Ziemlich neu", hint: "Gekauft in den letzten 2 Jahren" },
    ],
  },
  {
    id: "want",
    question: "Was ist dir am wichtigsten?",
    options: [
      { id: "want-familiar", label: "Es soll sich vertraut anfühlen", hint: "Möglichst wie bisher" },
      { id: "want-stable", label: "Ruhe haben", hint: "Einmal einrichten, jahrelang nutzen" },
      { id: "want-fresh", label: "Immer das Neueste", hint: "Aktuelle Software und Treiber" },
    ],
  },
];
