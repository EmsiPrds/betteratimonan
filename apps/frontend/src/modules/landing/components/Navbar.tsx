import { useState, useEffect, useRef } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { navLinks } from '../data/mock-data';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show at the very top
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up — show
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down — hide
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50
                  transition-transform duration-300 ease-in-out
                  ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20 py-2">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2" aria-label="Better Atimonan Home">
            <img
              src="/images/Logo.svg"
              alt="Better Atimonan Logo"
              className="h-16 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  link.isActive
                    ? 'text-primary-800 bg-primary-50'
                    : 'text-gray-600 hover:text-primary-800 hover:bg-gray-50'
                }`}
                aria-current={link.isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side - Search & Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              className="p-2 text-gray-500 hover:text-primary-800 hover:bg-gray-50 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              className="lg:hidden p-2 text-gray-500 hover:text-primary-800 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4" role="menu">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  link.isActive
                    ? 'text-primary-800 bg-primary-50'
                    : 'text-gray-600 hover:text-primary-800 hover:bg-gray-50'
                }`}
                role="menuitem"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
