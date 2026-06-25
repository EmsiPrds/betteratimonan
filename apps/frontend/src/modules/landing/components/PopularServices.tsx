import { services } from '../data/mock-data';
import { ServiceCardComponent } from './ServiceCard';

export function PopularServices() {
  return (
    <section className="bg-background section-padding">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Popular Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quick access to frequently used transparency features and public information.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <ServiceCardComponent key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
