import { Play } from 'lucide-react';
import { SearchCard } from './SearchCard';

export function HeroSection() {

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex flex-col bg-gray-50">
      {/* Plain Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-primary-50/30" />

      {/* Main Content */}
      <div className="section-container relative flex-1 flex items-center pt-12 pb-10 lg:pt-16 lg:pb-12">
        <div className="flex flex-col items-center gap-10 w-full text-center">
          {/* Heading & Description */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Welcome to</span>
              <br />
              <span className="text-primary-700">BetterAtimonan.org</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Access public information, monitor government projects, explore municipal data, and stay informed about the initiatives shaping the future of Atimonan, Quezon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/transparency"
                className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg
                           hover:bg-primary-800 transition-all duration-200 shadow-lg shadow-primary-700/25
                           inline-flex items-center justify-center gap-2"
              >
                Explore Services
              </a>
              <a
                href="/about"
                className="bg-white text-foreground px-8 py-4 rounded-lg font-semibold text-lg
                           hover:bg-gray-50 transition-all duration-200 border border-gray-200
                           inline-flex items-center justify-center gap-2 shadow-sm"
              >
                <Play className="w-5 h-5 text-primary-700" fill="currentColor" />
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
