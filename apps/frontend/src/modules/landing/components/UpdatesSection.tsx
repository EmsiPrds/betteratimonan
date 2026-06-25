import { Bell, FolderOpen, FileText, ExternalLink } from 'lucide-react';
import { updates } from '../data/mock-data';

const categoryConfig = {
  announcement: { icon: <Bell className="w-4 h-4" />, color: 'bg-accent-100 text-accent-700' },
  project: { icon: <FolderOpen className="w-4 h-4" />, color: 'bg-primary-100 text-primary-700' },
  ordinance: { icon: <FileText className="w-4 h-4" />, color: 'bg-secondary-100 text-secondary-700' },
};

export function UpdatesSection() {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="section-container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Latest Updates
          </h2>
          <a href="/updates" className="text-primary-800 font-medium text-sm hover:underline flex items-center gap-1">
            View All <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Recent Updates */}
          <div className="lg:col-span-3 space-y-4">
            {updates.map((update) => {
              const config = categoryConfig[update.category];
              return (
                <div key={update.id} className="card p-4 flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${config.color}`}>
                    {config.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground text-sm mb-1 truncate">
                      {update.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-1">{update.excerpt}</p>
                    <span className="text-xs text-gray-400">
                      {new Date(update.date).toLocaleDateString('en-PH', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Facebook Feed Placeholder */}
          <div className="lg:col-span-2">
            <div className="card p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">f</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">
                    Official Facebook Page
                  </p>
                  <p className="text-sm font-semibold text-foreground">LGU Atimonan - Quezon</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Real-time updates, straight from our page
                </p>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="h-3 bg-gray-200 rounded-full w-full" />
                  <div className="h-3 bg-gray-200 rounded-full w-4/5" />
                  <div className="h-3 bg-gray-200 rounded-full w-3/5" />
                  <div className="h-32 bg-gray-200 rounded-lg mt-3" />
                </div>

                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary-600 rounded-full" />
                    Municipality updates & advisories
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary-600 rounded-full" />
                    Projects & achievements
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary-600 rounded-full" />
                    Community events
                  </li>
                </ul>

                <a
                  href="https://facebook.com/AtimonanLGU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center text-sm py-2.5 block"
                >
                  Visit our Facebook Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
