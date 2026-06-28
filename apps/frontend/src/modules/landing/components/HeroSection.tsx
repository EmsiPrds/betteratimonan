import { useState, useEffect, useCallback } from 'react';
import { Users, MapPin, Award, Map, Play } from 'lucide-react';
import { SearchCard } from './SearchCard';

const heroImages = [
  '/images/hero-atimonan.jpg',
  '/images/465548670_9708499329164263_1736934277541672661_n.jpg',
  '/images/482246205_574803782264197_8568335410605310914_n.jpg',
  '/images/484806739_574794062265169_4172030730123442421_n.jpg',
  '/images/492480616_122199223778363572_8446508209609943248_n.jpg',
  '/images/515443897_24753107957624209_2363329454110972451_n.jpg',
  '/images/518997844_822237540372843_6842356026899090078_n.jpg',
  '/images/519710008_822237490372848_8620714494762811492_n.jpg',
  '/images/654416222_26031332556536347_3243145416363128106_n.jpg',
  '/images/75450176_2574557245970042_1258580586306469888_n.jpg',
  '/images/76647887_2574557155970051_6475496937771499520_n.jpg',
  '/images/DzwOJOlVsAAsrsr.jpg',
];

const heroStats = [
  { icon: Users, value: '45,231', label: 'Population' },
  { icon: MapPin, value: '38', label: 'Barangays' },
  { icon: Award, value: '4th Class', label: 'Municipality Class' },
  { icon: Map, value: '160.45 km²', label: 'Land Area' },
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageOrder] = useState(() => shuffleArray(heroImages));

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % imageOrder.length);
  }, [imageOrder.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 6000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex flex-col">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {imageOrder.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Atimonan, Quezon"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
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
