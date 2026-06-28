import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Flame, Shield, AlertTriangle, Building2 } from 'lucide-react';

const hotlines = [
  { label: 'Police', number: '0927 400 8033', icon: Shield },
  { label: 'MSWDO', number: '0916 284 0885', icon: AlertTriangle },
  { label: 'Fire', number: '0936 062 0305', icon: Flame },
  { label: 'DILG', number: '0906 188 066', icon: Building2 },
  { label: 'MDRRMO', number: '0926 383 3744', icon: AlertTriangle },
  { label: 'RZIMC', number: '0906 819 5589', icon: Phone },
];

export function EmergencyMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items for seamless loop
  const items = [...hotlines, ...hotlines];

  useEffect(() => {
    if (containerRef.current) {
      // Measure half the content (one full set of hotlines)
      setContentWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div
      className="bg-orange-600 text-white text-xs py-1.5 overflow-hidden relative"
      role="marquee"
      aria-label="Emergency hotline numbers"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        ref={containerRef}
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{
          x: [0, -contentWidth],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          },
        }}
        style={{
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
        whileHover={{ animationPlayState: 'paused' }}
      >
        {items.map((hotline, index) => {
          const Icon = hotline.icon;
          return (
            <a
              key={`${hotline.label}-${index}`}
              href={`tel:${hotline.number.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-1.5 hover:text-orange-200 transition-colors"
              aria-label={`Call ${hotline.label}: ${hotline.number}`}
            >
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-orange-700">
                <Icon className="w-2.5 h-2.5" />
              </span>
              <span className="font-semibold">{hotline.label}:</span>
              <span>{hotline.number}</span>
            </a>
          );
        })}
      </motion.div>
    </div>
  );
}
