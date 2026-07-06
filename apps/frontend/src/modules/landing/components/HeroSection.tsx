import { Play } from 'lucide-react';
import { SearchCard } from './SearchCard';

export function HeroSection() {

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex flex-col" style={{ backgroundColor: '#003696' }}>
      {/* Brand Blue Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, #003696, #003696, #00184d)' }} />

      {/* Main Content */}
      <div className="section-container relative flex-1 flex items-center pt-12 pb-10 lg:pt-16 lg:pb-12">
        <div className="flex flex-col items-center gap-10 w-full text-center">
          {/* Heading & Description */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Welcome to</span>
              <br />
              <span style={{ color: '#f2c91d' }}>BetterAtimonan.org</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Access public information, monitor government projects, explore municipal data, and stay informed about the initiatives shaping the future of Atimonan, Quezon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/transparency"
                className="text-white px-8 py-4 rounded-lg font-semibold text-lg
                           transition-all duration-200 shadow-lg
                           inline-flex items-center justify-center gap-2"
                style={{ backgroundColor: '#ea580c' }}
              >
                Explore Services
              </a>
              <a
                href="/about"
                className="text-white px-8 py-4 rounded-lg font-semibold text-lg
                           transition-all duration-200 border border-white/30
                           inline-flex items-center justify-center gap-2 shadow-sm"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <Play className="w-5 h-5" style={{ color: '#f2c91d' }} fill="currentColor" />
                Learn More
              </a>
            </div>
          </div>

          {/* Search Card - full width bar below */}
          <div className="w-full">
            <SearchCard />
          </div>
        </div>
      </div>
    </section>
  );
}
