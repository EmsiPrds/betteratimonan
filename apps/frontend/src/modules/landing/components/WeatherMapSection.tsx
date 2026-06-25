import { WeatherCard } from './WeatherCard';
import { MapPlaceholder } from './MapPlaceholder';

export function WeatherMapSection() {
  return (
    <section className="bg-background section-padding">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Weather and Map of Atimonan
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <WeatherCard />
          <MapPlaceholder />
        </div>
      </div>
    </section>
  );
}
