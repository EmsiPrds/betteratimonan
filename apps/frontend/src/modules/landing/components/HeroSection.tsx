import { Users, MapPin, Award, Map, Play } from 'lucide-react';
import { SearchCard } from './SearchCard';

const heroStats = [
  { icon: Users, value: '45,231', label: 'Population' },
  { icon: MapPin, value: '38', label: 'Barangays' },
  { icon: Award, value: '4th Class', label: 'Municipality Class' },
  { icon: Map, value: '160.45 km²', label: 'Land Area' },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex flex-col">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-atimonan.jpg"
          alt="Aerial view of Atimonan, Quezon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/30" />
      </div>

      {/* Main Content */}
      <div className="section-container relative flex-1 flex items-center py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
          {/* Left Side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Welcome to</span>
              <br />
              <span className="text-primary-700">BetterAtimonan.org</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Access government services, information, transparency records, and public resources
              for the people of Atimonan, Quezon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

          {/* Right Side - Search Card */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <SearchCard />
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="relative mt-auto">
        <div className="section-container pb-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-6 md:px-10 md:py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center text-primary-700 flex-shrink-0">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
