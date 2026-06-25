import { Users, MapPin, Award, Map } from 'lucide-react';
import { stats } from '../data/mock-data';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  Map: <Map className="w-6 h-6" />,
};

export function StatsSection() {
  return (
    <section className="bg-white section-padding border-t border-gray-100">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Atimonan at a Glance
          </h2>
          <p className="text-gray-600">Key facts about our municipality</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="card p-6 text-center animate-fade-in"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-800">
                {iconMap[stat.icon]}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary-800 mb-1">
                {stat.value}
                {stat.suffix && (
                  <span className="text-lg font-medium text-primary-400">
                    {' '}
                    {stat.suffix}
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
