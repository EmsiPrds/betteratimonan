import { Facebook, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-gray-300">
      {/* Main Footer */}
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/Logo.svg"
                alt="Better Atimonan Logo"
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Transparency portal of Atimonan with accessibility, accountability, and public
              participation for the residents of Atimonan, Quezon.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/AtimonanLGU"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-primary-800 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="mailto:atimonanlgu@gmail.com"
                className="w-9 h-9 bg-gray-800 hover:bg-primary-800 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Atimonan', href: '/about' },
                { label: 'Projects', href: '/projects' },
                { label: 'Budget', href: '/budget' },
                { label: 'Ordinances', href: '/ordinances' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Transparency Seal', href: '/transparency-seal' },
                { label: 'Full Disclosure Policy', href: '/full-disclosure' },
                { label: 'FOI Request', href: '/foi' },
                { label: 'Open Data', href: '/open-data' },
                { label: 'COA Reports', href: '/coa-reports' },
                { label: 'Citizen Charter', href: '/citizen-charter' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-400">(042) 717-1234</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-400">atimonanlgu@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  Atimonan Municipal Hall, Quezon Ave., Atimonan, Quezon
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="section-container py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2025 Better Atimonan. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-700">|</span>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </a>
              <span className="text-gray-700">|</span>
              <a href="/transparency-seal" className="hover:text-white transition-colors">
                Transparency Seal
              </a>
              <span className="text-gray-700">|</span>
              <a href="/foi" className="hover:text-white transition-colors">
                FOI Request
              </a>
              <span className="text-gray-700">|</span>
              <a href="/open-data" className="hover:text-white transition-colors">
                Open Data
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
