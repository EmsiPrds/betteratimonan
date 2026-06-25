import { Phone, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '../data/mock-data';

const iconMap: Record<string, React.ReactNode> = {
  Phone: <Phone className="w-6 h-6" />,
  Mail: <Mail className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
};

export function ContactSection() {
  return (
    <section className="bg-background section-padding border-t border-gray-100">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Contact Information
          </h2>
          <p className="text-gray-600">Reach out to the Municipal Government of Atimonan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {contactInfo.map((info) => (
            <div key={info.id} className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-800">
                {iconMap[info.icon]}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{info.label}</h3>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-sm text-gray-500 hover:text-primary-800 transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-sm text-gray-500">{info.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
