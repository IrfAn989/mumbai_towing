import { useState, useEffect } from 'react';
import { Phone, Menu, X, Truck } from 'lucide-react';

const PHONE = '+919820207025';
const PHONE_DISPLAY = '+91 98202 07025';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#home" onClick={(e) => handleNav(e, '#home')} className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center shadow-sm group-hover:bg-orange-600 transition-colors">
                <Truck size={20} className="text-white" />
              </div>
              <span className="font-bold text-lg text-gray-900 tracking-tight">
                mumbaitowing<span className="text-orange-500">24</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
              >
                <Phone size={15} />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-700 hover:text-orange-500 transition-colors"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-slideDown">
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="block py-4 px-3 min-h-[48px] flex items-center text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 pb-1">
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-center justify-center gap-2 w-full bg-orange-500 text-white text-base font-semibold py-4 min-h-[48px] rounded-xl"
                    aria-label="Call Mumbai Towing 24/7"
                  >
                    <Phone size={18} aria-hidden="true" />
                    Call Now — {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
