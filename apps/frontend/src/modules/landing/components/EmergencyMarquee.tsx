import { Phone, Flame, Shield, AlertTriangle, Building2 } from 'lucide-react';

const hotlines = [
  { label: 'Police', number: '0927 400 8033', icon: Shield },
  { label: 'MSWDO', number: '0916 284 0885', icon: AlertTriangle },
  { label: 'Fire', number: '0936 062 0305', icon: Flame },
  { label: 'DILG', number: '0906 188 066', icon: Building2 },
  { label: 'MDRRMO', number: '0926 383 3744', icon: AlertTriangle },
  { label: 'RZIMC', number: '0906 819 5589', icon: Phone },
];

// Duplicate so the second half is identical — translateX(-50%) lands on exact repeat
const items = [...hotlines, ...hotlines];

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
          animation: marquee-scroll 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-track">
        {items.map((hotline, index) => {
          const Icon = hotline.icon;
          return (
            <a
              key={`${hotline.label}-${index}`}
              href={`tel:${hotline.number.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-1.5 px-6 hover:text-orange-200 transition-colors shrink-0"
              aria-label={`Call ${hotline.label}: ${hotline.number}`}
            >
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-orange-700">
                <Icon className="w-2.5 h-2.5" />
              </span>
              <span className="font-semibold">{hotline.label}:</span>
              <span className="ml-1">{hotline.number}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
