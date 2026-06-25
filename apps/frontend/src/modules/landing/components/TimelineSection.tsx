import { Landmark, BookOpen } from 'lucide-react';
import { timeline, facts } from '../data/mock-data';

const factIconMap: Record<string, React.ReactNode> = {
  Landmark: <Landmark className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
};

export function TimelineSection() {
  return (
    <section className="bg-white section-padding">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Brief History of Atimonan
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-100" />

              <div className="space-y-8">
                {timeline.map((event, index) => (
                  <div key={event.id} className="relative flex gap-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    {/* Dot */}
                    <div className="relative z-10 w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-white text-xs font-bold">{event.year.slice(0, 4)}</span>
                    </div>

                    {/* Content */}
                    <div className="card p-4 flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{event.title}</h3>
                      <p className="text-sm text-gray-500">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Facts */}
          <div className="space-y-5">
            {facts.map((fact) => (
              <div key={fact.id} className="card p-5 border-l-4 border-l-secondary-600">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-secondary-50 rounded-lg flex items-center justify-center text-secondary-600 flex-shrink-0">
                    {factIconMap[fact.icon]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm">
                      {fact.title}
                    </h4>
                    <p className="text-sm text-gray-500">{fact.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
