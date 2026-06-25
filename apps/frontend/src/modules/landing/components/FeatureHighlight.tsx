import { Shield, Eye, Users } from 'lucide-react';

export function FeatureHighlight() {
  return (
    <section className="bg-white section-padding">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left - Illustration Placeholder */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="bg-primary-50 rounded-2xl p-8 flex flex-col items-center gap-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary-800" />
                  </div>
                  <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center">
                    <Eye className="w-8 h-8 text-secondary-600" />
                  </div>
                  <div className="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-accent-600" />
                  </div>
                </div>
                <div className="w-full space-y-3">
                  <div className="h-3 bg-primary-100 rounded-full w-full" />
                  <div className="h-3 bg-primary-100 rounded-full w-4/5" />
                  <div className="h-3 bg-primary-100 rounded-full w-3/5" />
                </div>
                <div className="grid grid-cols-2 gap-3 w-full">
                  <div className="h-20 bg-white rounded-lg border border-primary-100" />
                  <div className="h-20 bg-white rounded-lg border border-primary-100" />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Enhancing Transparency and Public Services in Atimonan
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-lg mx-auto lg:mx-0">
              No hidden information. No complicated reports. Just accessible public data for every
              citizen.
            </p>
            <ul className="text-gray-600 space-y-2 mb-8 text-left max-w-lg mx-auto lg:mx-0">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-600 mt-2 flex-shrink-0" />
                We believe in transparency and public accountability
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-600 mt-2 flex-shrink-0" />
                Everyone has the right to know, right to inspect, and right to participate
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-600 mt-2 flex-shrink-0" />
                Free access to data, documents, ordinances, projects, and public records
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/open-data" className="btn-secondary inline-flex items-center justify-center">
                Explore Data
              </a>
              <a href="/about" className="btn-outline inline-flex items-center justify-center">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
