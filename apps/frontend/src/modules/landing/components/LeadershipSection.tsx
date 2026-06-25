import { Mail, Phone, ExternalLink, User } from 'lucide-react';
import { leadership } from '../data/mock-data';

export function LeadershipSection() {
  return (
    <section className="bg-white section-padding">
      <div className="section-container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Municipal Leadership
          </h2>
          <a href="/officials" className="text-primary-800 font-medium text-sm hover:underline flex items-center gap-1">
            View All Officials <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {leadership.map((leader) => (
            <div key={leader.id} className="card p-6 text-center">
              {/* Photo Placeholder */}
              <div className="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-primary-300" />
              </div>

              <span className="inline-block px-3 py-1 bg-primary-50 text-primary-800 text-xs font-semibold rounded-full mb-3">
                {leader.position}
              </span>

              <h3 className="text-lg font-bold text-foreground mb-3">{leader.name}</h3>

              <div className="space-y-2 text-sm text-gray-500">
                <a
                  href={`mailto:${leader.email}`}
                  className="flex items-center justify-center gap-2 hover:text-primary-800 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {leader.email}
                </a>
                <a
                  href={`tel:${leader.phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center justify-center gap-2 hover:text-primary-800 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {leader.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
