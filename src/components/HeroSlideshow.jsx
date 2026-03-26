import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { Phone, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

// Lazy load illustrations - they're only shown on desktop
const EmergencyIllustration = lazy(() => import('./illustrations/EmergencyIllustration'));
const FlatbedIllustration = lazy(() => import('./illustrations/FlatbedIllustration'));
const SpeedIllustration = lazy(() => import('./illustrations/SpeedIllustration'));
const CoverageIllustration = lazy(() => import('./illustrations/CoverageIllustration'));

const PHONE = '+919820207025';
const WHATSAPP = 'https://wa.me/919820207025?text=Hi%2C%20I%20need%20towing%20service%20in%20Mumbai';
const INTERVAL = 5500;

const slides = [
  {
    id: 0,
    badge: 'Available Right Now — Mumbai Wide',
    headline: ['24/7 Emergency', 'Towing in Mumbai'],
    sub: 'Breakdown anywhere in Mumbai? We dispatch immediately and reach you in under 30 minutes — day or night.',
    theme: 'dark',
    bg: '#0F172A',
    accentClass: 'text-orange-400',
    badgeBg: 'bg-orange-500/20 border-orange-500/30 text-orange-300',
    illustrationType: 'emergency',
  },
  {
    id: 1,
    badge: 'Zero Damage Guarantee',
    headline: ['Flatbed Towing —', 'Safe & Secure'],
    sub: 'Luxury cars, SUVs, low-clearance vehicles — transported on professional flatbeds with full insurance coverage.',
    theme: 'dark',
    bg: '#0C1A2E',
    accentClass: 'text-blue-400',
    badgeBg: 'bg-blue-500/20 border-blue-500/30 text-blue-300',
    illustrationType: 'flatbed',
  },
  {
    id: 2,
    badge: 'Mumbai\'s Fastest Response',
    headline: ['~25 Min Response.', 'Every Time.'],
    sub: 'Our trucks are stationed across Mumbai\'s key zones. We clock an average 25-minute arrival time, all day, every day.',
    theme: 'orange',
    bg: '#EA580C',
    accentClass: 'text-white/90',
    badgeBg: 'bg-white/20 border-white/30 text-white',
    illustrationType: 'speed',
  },
  {
    id: 3,
    badge: 'Serving All Mumbai Zones',
    headline: ['Every Corner of', 'Mumbai Covered'],
    sub: 'Andheri, Bandra, Thane, Navi Mumbai, Borivali, Dadar and beyond — one call covers the entire city.',
    theme: 'dark',
    bg: '#0F172A',
    accentClass: 'text-orange-400',
    badgeBg: 'bg-orange-500/20 border-orange-500/30 text-orange-300',
    illustrationType: 'coverage',
  },
];

// Get illustration component based on type - only rendered on desktop
function getIllustration(type) {
  switch(type) {
    case 'emergency': return <EmergencyIllustration />;
    case 'flatbed': return <FlatbedIllustration />;
    case 'speed': return <SpeedIllustration />;
    case 'coverage': return <CoverageIllustration />;
    default: return null;
  }
}


export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((index, dir) => {
    setDirection(dir);
    setCurrent(index);
    setProgress(0);
  }, []);

  const next = useCallback(() => goTo((current + 1) % slides.length, 1), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length, -1), [current, goTo]);

  // Auto-advance + progress bar
  useEffect(() => {
    let start = null;
    let frame;
    const step = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      setProgress(Math.min((elapsed / INTERVAL) * 100, 100));
      if (elapsed < INTERVAL) {
        frame = requestAnimationFrame(step);
      } else {
        next();
      }
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [current, next]);

  const slide = slides[current];
  const isOrange = slide.theme === 'orange';

  return (
    <section id="home" className="relative overflow-hidden" style={{ minHeight: 'calc(100vh - 64px)' }}>
      {/* Simple background - no animation for faster paint */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{ backgroundColor: slide.bg }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full"
        style={{ minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center' }}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full py-16 lg:py-20">

          {/* Left — Text */}
          <div className="space-y-5">
            {/* Badge */}
            <div>
              <span className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border backdrop-blur-sm ${slide.badgeBg}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                {slide.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="space-y-1">
              {slide.headline.map((line, i) => (
                <span
                  key={`${current}-${i}`}
                  className={`block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-none ${
                    i === 0
                      ? 'text-white'
                      : slide.accentClass
                  }`}
                >
                  {line}
                </span>
              ))}
            </h1>

            {/* Sub */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-lg ${isOrange ? 'text-white/90' : 'text-slate-300'}`}>
              {slide.sub}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`tel:${PHONE}`}
                className={`flex items-center justify-center gap-2.5 font-bold text-base px-8 py-4 min-h-[56px] rounded-2xl transition-all duration-200 shadow-lg ${
                  isOrange
                    ? 'bg-white text-orange-600 hover:bg-orange-50 shadow-black/20'
                    : 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-900/30'
                }`}
                aria-label="Call Mumbai Towing 24/7 now"
              >
                <Phone size={19} aria-hidden="true" />
                Call Now — Free
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2.5 font-bold text-base px-8 py-4 min-h-[56px] rounded-2xl border-2 transition-all duration-200 ${
                  isOrange
                    ? 'border-white/40 text-white hover:bg-white/10'
                    : 'border-white/20 text-white hover:bg-white/10'
                }`}
                aria-label="Contact Mumbai Towing on WhatsApp"
              >
                <MessageCircle size={19} aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>

            {/* Trust mini-pills */}
            <div className="flex flex-wrap gap-4 pt-1">
              {['1000+ Tows Done', 'Fully Insured', '24/7 Active'].map((t) => (
                <span key={t} className={`text-sm font-semibold ${isOrange ? 'text-white/90' : 'text-slate-300'}`}>
                  ✓ {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Illustration (desktop only, lazy loaded) */}
          <div className="hidden lg:flex items-center justify-center">
            <Suspense fallback={<div className="w-full max-w-lg h-80" />}>
              {getIllustration(slide.illustrationType)}
            </Suspense>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Slide dots + progress */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className="relative h-8 min-w-[44px] flex items-center justify-center rounded-full overflow-hidden transition-all duration-300"
                aria-label={`Go to slide ${i + 1} of ${slides.length}: ${slides[i].headline.join(' ')}`}
              >
                <span 
                  className="h-2 rounded-full transition-all duration-300"
                  style={{ width: i === current ? 40 : 14, background: i === current ? '#f97316' : 'rgba(255,255,255,0.4)' }}
                />
              </button>
            ))}
          </div>

          {/* Slide counter + arrows */}
          <div className="flex items-center gap-2">
            <span className="text-white/40 text-xs font-mono tabular-nums hidden sm:block">
              {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 flex items-center justify-center text-white transition-all"
              aria-label="Go to previous slide"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center text-white transition-all"
              aria-label="Go to next slide"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll cue - simplified, no animation */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 z-20">
        <span className="text-white/30 text-[10px] font-semibold tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-1.5 bg-orange-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
