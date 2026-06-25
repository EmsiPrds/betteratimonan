import { Mail, Phone, Facebook } from 'lucide-react';

export function TopBar() {
  const currentDate = new Date().toLocaleDateString('en-PH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-primary-800 text-white text-sm sticky top-0 z-50">
      <div className="section-container">
        <div className="flex items-center justify-between py-2">
          {/* Left side - Date & Contact */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-primary-200">{currentDate}</span>
            <span className="text-primary-400">|</span>
            <a
              href="mailto:atimonanlgu@gmail.com"
              className="flex items-center gap-1.5 hover:text-primary-200 transition-colors"
              aria-label="Send email to atimonanlgu@gmail.com"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>atimonanlgu@gmail.com</span>
            </a>
            <span className="text-primary-400">|</span>
            <a
              href="tel:0427171234"
              className="flex items-center gap-1.5 hover:text-primary-200 transition-colors"
              aria-label="Call (042) 717-1234"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(042) 717-1234</span>
            </a>
          </div>

          {/* Right side - Social & Label */}
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="https://facebook.com/AtimonanLGU"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary-200 transition-colors"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <span className="text-primary-400">|</span>
            <span className="font-medium text-accent-400">Transparency Portal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
