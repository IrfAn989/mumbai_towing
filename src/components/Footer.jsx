import { Phone, MessageCircle, MapPin, Clock, Truck, Mail } from 'lucide-react';

const PHONE = '+919820207025';
const PHONE_DISPLAY = '+91 98202 07025';
const WHATSAPP = 'https://wa.me/919820207025?text=Hi%2C%20I%20need%20towing%20service%20in%20Mumbai';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Service Areas', href: '#contact' },
];

const services = [
  'Emergency Towing',
  'Flatbed Towing',
  'Bike Towing',
  'Accident Recovery',
  'Outstation Towing',
];

const handleNav = (e, href) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
                <Truck size={20} className="text-white" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                mumbaitowing<span className="text-orange-400">24</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Mumbai's trusted 24/7 car towing service. Fast, affordable, and always available — anywhere in Mumbai.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-3 text-sm hover:text-orange-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/40 transition-colors">
                  <Phone size={15} className="text-orange-400" />
                </div>
                {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-orange-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/40 transition-colors">
                  <MessageCircle size={15} className="text-orange-400" />
                </div>
                WhatsApp Us
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                  <MapPin size={15} className="text-gray-400" />
                </div>
                Mumbai, Maharashtra, India
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                  <Clock size={15} className="text-gray-400" />
                </div>
                Open 24/7 — Every Day
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => handleNav(e, '#services')}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Box */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Need Help Now?</h4>
            <div className="bg-orange-500 rounded-2xl p-5">
              <p className="text-white text-sm font-medium mb-4">
                Stuck on the road? Don't wait — call us now for immediate towing assistance.
              </p>
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-2 w-full bg-white text-orange-600 font-bold text-sm py-3 rounded-xl hover:bg-orange-50 transition-colors"
              >
                <Phone size={15} />
                Call Now — 24/7
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-white/20 hover:bg-white/30 text-white font-semibold text-sm py-3 rounded-xl border border-white/30 mt-2 transition-colors"
              >
                <MessageCircle size={15} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>© 2025 Mumbai Towing 24. All rights reserved.</p>
            <p>
              Towing service Mumbai &nbsp;·&nbsp; 24/7 car towing &nbsp;·&nbsp; Emergency towing Mumbai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
