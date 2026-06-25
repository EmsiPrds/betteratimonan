import { SearchCard } from './SearchCard';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary-800 via-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="section-container relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-12 md:py-16 lg:py-20">
          {/* Left Side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Welcome to{' '}
              <span className="text-accent-500">BetterAtimonan.org</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-200 mb-8 max-w-lg mx-auto lg:mx-0">
              Access government services, information, transparency records, and public resources
              for the people of Atimonan, Quezon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/transparency"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Explore Services
              </a>
              <a
                href="/about"
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold 
                           hover:bg-white/20 transition-all duration-200 border border-white/20
                           inline-flex items-center justify-center gap-2"
              >
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
    </section>
  );
}
