import { motion } from 'framer-motion';
import { Phone, MessageCircle, Shield, Clock, Star } from 'lucide-react';

const PHONE = '+919999999999';
const WHATSAPP = 'https://wa.me/919999999999?text=Hi%2C%20I%20need%20towing%20service%20in%20Mumbai';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-white overflow-hidden min-h-[calc(100vh-64px)] flex items-center"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 80% 60% at 70% 50%, #f0fdf4 0%, #ffffff 70%)',
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-60 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-50 rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-semibold px-4 py-2 rounded-full border border-green-200 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available 24/7 Across Mumbai
            </motion.div>

            {/* H1 */}
            <motion.h1 {...fadeUp(0.1)} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
              24/7 Car Towing{' '}
              <span className="text-green-600">Service in Mumbai</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p {...fadeUp(0.2)} className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-8 max-w-xl">
              Fast, reliable, and affordable towing anywhere in Mumbai.
              We reach you in under <strong className="text-gray-700">30 minutes</strong> — day or night.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-green-200 hover:shadow-xl"
              >
                <Phone size={20} />
                Call Now — Free Estimate
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-800 font-bold text-base px-8 py-4 rounded-2xl border-2 border-gray-200 hover:border-green-400 transition-all duration-200 hover:scale-105"
              >
                <MessageCircle size={20} className="text-green-600" />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Trust Pills */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4">
              {[
                { icon: Shield, text: 'Fully Insured' },
                { icon: Clock, text: '~30 Min Response' },
                { icon: Star, text: '500+ Happy Customers' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <Icon size={16} className="text-green-600" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main illustration card */}
              <div className="relative bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 shadow-2xl overflow-hidden">
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Tow Truck SVG Illustration */}
                <div className="relative z-10 flex flex-col items-center">
                  <TowTruckIllustration />

                  {/* Live indicator */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                    className="mt-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-5 py-3 text-white text-center"
                  >
                    <p className="text-xs font-medium opacity-80 uppercase tracking-wide">Nearest truck</p>
                    <p className="text-xl font-bold">~25 min away</p>
                  </motion.div>
                </div>
              </div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 text-center border border-gray-100"
              >
                <p className="text-2xl font-extrabold text-green-600">24/7</p>
                <p className="text-xs text-gray-500 font-medium">Always On</p>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Insured</p>
                    <p className="text-xs text-gray-400">& Certified</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TowTruckIllustration() {
  return (
    <svg viewBox="0 0 320 180" className="w-full max-w-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Road */}
      <rect x="0" y="150" width="320" height="30" fill="white" fillOpacity="0.15" rx="4" />
      <rect x="40" y="163" width="30" height="4" fill="white" fillOpacity="0.4" rx="2" />
      <rect x="100" y="163" width="30" height="4" fill="white" fillOpacity="0.4" rx="2" />
      <rect x="160" y="163" width="30" height="4" fill="white" fillOpacity="0.4" rx="2" />
      <rect x="220" y="163" width="30" height="4" fill="white" fillOpacity="0.4" rx="2" />

      {/* Tow truck body */}
      <rect x="30" y="90" width="130" height="60" rx="6" fill="white" fillOpacity="0.95" />
      {/* Cab */}
      <rect x="130" y="70" width="70" height="80" rx="8" fill="white" />
      {/* Windshield */}
      <rect x="140" y="78" width="52" height="36" rx="5" fill="#16A34A" fillOpacity="0.7" />
      {/* Headlight */}
      <circle cx="196" cy="128" r="8" fill="#FCD34D" />
      <circle cx="196" cy="128" r="5" fill="#F59E0B" />
      {/* Exhaust */}
      <rect x="198" y="72" width="6" height="18" rx="3" fill="white" fillOpacity="0.6" />
      {/* Smoke puffs */}
      <circle cx="201" cy="64" r="5" fill="white" fillOpacity="0.3" />
      <circle cx="206" cy="56" r="4" fill="white" fillOpacity="0.2" />

      {/* Wheels */}
      <circle cx="65" cy="150" r="16" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="3" />
      <circle cx="65" cy="150" r="8" fill="white" fillOpacity="0.4" />
      <circle cx="145" cy="150" r="16" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="3" />
      <circle cx="145" cy="150" r="8" fill="white" fillOpacity="0.4" />
      <circle cx="188" cy="150" r="16" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="3" />
      <circle cx="188" cy="150" r="8" fill="white" fillOpacity="0.4" />

      {/* Tow boom arm */}
      <line x1="30" y1="100" x2="5" y2="78" stroke="white" strokeWidth="5" strokeLinecap="round" />
      {/* Hook */}
      <path d="M5 78 Q-2 72 0 65 Q2 58 8 60" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Car being towed */}
      <rect x="230" y="112" width="80" height="36" rx="6" fill="white" fillOpacity="0.4" />
      <rect x="238" y="100" width="64" height="26" rx="5" fill="white" fillOpacity="0.6" />
      <circle cx="252" cy="150" r="12" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="2.5" />
      <circle cx="252" cy="150" r="6" fill="white" fillOpacity="0.5" />
      <circle cx="296" cy="150" r="12" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="2.5" />
      <circle cx="296" cy="150" r="6" fill="white" fillOpacity="0.5" />

      {/* Tow chain */}
      <path d="M5 68 Q120 60 230 120" stroke="white" strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round" />

      {/* Emergency light */}
      <rect x="155" y="66" width="20" height="7" rx="3" fill="#EF4444" />
      <rect x="178" y="66" width="16" height="7" rx="3" fill="#F59E0B" />
    </svg>
  );
}
