import { Phone } from 'lucide-react';

interface Hotline {
  label: string;
  shortLabel: string;
  numbers: string[];
  /** Path to logo image — swap in the real asset when ready */
  logoSrc?: string;
}

const hotlines: Hotline[] = [
  {
    label: 'MDRRMO Atimonan',
    shortLabel: 'MDRRMO',
    numbers: ['0908-983-2111', '(042) 316-6525'],
    logoSrc: '/images/mdrrmo.jpg',
  },
  {
    label: 'PNP Atimonan',
    shortLabel: 'PNP',
    numbers: ['166', '0909-931-0955'],
    logoSrc: '/images/pnp atimonan.jpg',
  },
  {
    label: 'BFP Atimonan',
    shortLabel: 'BFP',
    numbers: ['165', '0933-437-7327', '(042) 731-3074'],
    logoSrc: '/images/atimonan fire station.jpg',
  },
  {
    label: 'TMU Atimonan',
    shortLabel: 'TMU',
    numbers: ['0998-918-1960', '(042) 316-7000'],
    logoSrc: '/images/tmu atimonan.jpg',
  },
  {
    label: 'Coast Guard Sub-Station Atimonan',
    shortLabel: 'Coast Guard',
    numbers: ['0999-451-9595'],
    logoSrc: '/images/atimonan coast guard.jpg',
  },
  {
    label: 'MSWDO Atimonan',
    shortLabel: 'MSWDO',
    numbers: ['0951-164-7710'],
    logoSrc: '/images/mswdo.jpg',
  },
  {
    label: 'Tourism Atimonan',
    shortLabel: 'Tourism',
    numbers: ['316-7573', '0915-690-7490'],
    logoSrc: '/images/tourism.jpg',
  },
  {
    label: 'PRIO Atimonan',
    shortLabel: 'PRIO',
    numbers: ['316-7573', '0970-479-0366'],
    logoSrc: '/images/prio.jpg',
  },
  {
    label: 'QPHN-Doña Marta Hospital',
    shortLabel: 'Doña Marta Hospital',
    numbers: ['042-797-5786', '09670465624'],
    logoSrc: '/images/dona martha.jpg',
  },
  {
    label: 'NSDA Hospital',
    shortLabel: 'NSDA Hospital',
    numbers: ['316-5390', '0950-170-3650'],
    logoSrc: '/images/nsda.png',
  },
  {
    label: 'Quezelco',
    shortLabel: 'Quezelco',
    numbers: ['316-5412', '0939-296-4474'],
    logoSrc: '/images/quezelco.png',
  },
  {
    label: 'Atimonan Feeder Port',
    shortLabel: 'Feeder Port',
    numbers: ['316-6757', '0928-696-8230'],
    logoSrc: '/images/feeder port.png',
  },
  {
    label: 'Land Transport Terminal',
    shortLabel: 'Transport Terminal',
    numbers: ['316-7258', '0917-138-7141'],
    logoSrc: undefined, // no logo file found — add one to /public/images/ when available
  },
];

// Duplicate for seamless loop — translateX(-50%) lands on exact repeat
const items = [...hotlines, ...hotlines];

/** Logo placeholder shown until the real asset is provided */
function LogoPlaceholder({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-700 shrink-0 text-[8px] font-bold leading-none select-none"
      aria-hidden="true"
      title={`${label} logo`}
    >
      {label.charAt(0)}
    </span>
  );
}

export function EmergencyMarquee() {
  return (
    <div
      className="bg-orange-600 text-white text-xs py-1.5 overflow-hidden relative"
      role="marquee"
      aria-label="Emergency hotline numbers"
    >
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 60s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-track">
        {items.map((hotline, index) => (
          <span
            key={`${hotline.label}-${index}`}
            className="inline-flex items-center gap-1.5 px-5 shrink-0 border-r border-orange-500"
          >
            {/* Logo — swap logoSrc when assets are ready */}
            {hotline.logoSrc ? (
              <img
                src={hotline.logoSrc}
                alt={`${hotline.label} logo`}
                className="w-5 h-5 rounded-full object-contain shrink-0"
              />
            ) : (
              <LogoPlaceholder label={hotline.shortLabel} />
            )}

            {/* Agency name */}
            <span className="font-semibold whitespace-nowrap">{hotline.shortLabel}:</span>

            {/* All numbers for this agency */}
            {hotline.numbers.map((num, ni) => (
              <a
                key={ni}
                href={`tel:${num.replace(/[\s()]/g, '')}`}
                className="whitespace-nowrap hover:text-orange-200 transition-colors inline-flex items-center gap-1"
                aria-label={`Call ${hotline.label}: ${num}`}
              >
                {ni > 0 && <span className="text-orange-400 mx-0.5">/</span>}
                <Phone className="w-2.5 h-2.5 opacity-70" />
                {num}
              </a>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
