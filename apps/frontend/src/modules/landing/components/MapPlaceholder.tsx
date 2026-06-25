import { MapPin } from 'lucide-react';

export function MapPlaceholder() {
  return (
    <div className="card overflow-hidden h-full min-h-[300px] relative">
      {/* Placeholder map background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary-800 mx-auto mb-3" />
            <p className="text-sm font-medium text-gray-600">Atimonan, Quezon</p>
            <p className="text-xs text-gray-400 mt-1">Interactive Map — Leaflet Integration Coming Soon</p>
          </div>
        </div>

        {/* Decorative elements to simulate map */}
        <div className="absolute top-4 right-4 text-xs text-gray-400">
          © OpenStreetMap contributors
        </div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
            <path d="M0 150 Q100 100 200 150 T400 150" stroke="#1E40AF" strokeWidth="1" />
            <path d="M0 180 Q150 130 300 180 T400 160" stroke="#059669" strokeWidth="0.5" />
            <circle cx="200" cy="150" r="4" fill="#1E40AF" />
          </svg>
        </div>
      </div>
    </div>
  );
}
