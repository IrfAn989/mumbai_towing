import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

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
    bg: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
    accentClass: 'text-orange-400',
    badgeBg: 'bg-orange-500/20 border-orange-500/30 text-orange-300',
    illustration: <EmergencyIllustration />,
  },
  {
    id: 1,
    badge: 'Zero Damage Guarantee',
    headline: ['Flatbed Towing —', 'Safe & Secure'],
    sub: 'Luxury cars, SUVs, low-clearance vehicles — transported on professional flatbeds with full insurance coverage.',
    theme: 'dark',
    bg: 'linear-gradient(135deg, #0C1A2E 0%, #1A3A5C 50%, #0C1A2E 100%)',
    accentClass: 'text-blue-400',
    badgeBg: 'bg-blue-500/20 border-blue-500/30 text-blue-300',
    illustration: <FlatbedIllustration />,
  },
  {
    id: 2,
    badge: 'Mumbai\'s Fastest Response',
    headline: ['~25 Min Response.', 'Every Time.'],
    sub: 'Our trucks are stationed across Mumbai\'s key zones. We clock an average 25-minute arrival time, all day, every day.',
    theme: 'orange',
    bg: 'linear-gradient(135deg, #C2410C 0%, #EA580C 40%, #F97316 100%)',
    accentClass: 'text-white/90',
    badgeBg: 'bg-white/20 border-white/30 text-white',
    illustration: <SpeedIllustration />,
  },
  {
    id: 3,
    badge: 'Serving All Mumbai Zones',
    headline: ['Every Corner of', 'Mumbai Covered'],
    sub: 'Andheri, Bandra, Thane, Navi Mumbai, Borivali, Dadar and beyond — one call covers the entire city.',
    theme: 'dark',
    bg: 'linear-gradient(135deg, #0F172A 0%, #14253D 50%, #0F172A 100%)',
    accentClass: 'text-orange-400',
    badgeBg: 'bg-orange-500/20 border-orange-500/30 text-orange-300',
    illustration: <CoverageIllustration />,
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (d) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: d * 0.12, ease: [0.22, 1, 0.36, 1] } }),
  exit: { opacity: 0, y: -16, transition: { duration: 0.3 } },
};

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
      {/* Background transition */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          style={{ background: slide.bg }}
        />
      </AnimatePresence>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Floating ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{ background: isOrange ? 'rgba(255,255,255,0.3)' : '#F97316' }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-15"
          style={{ background: isOrange ? 'rgba(255,255,255,0.2)' : '#F97316' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full"
        style={{ minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center' }}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full py-16 lg:py-20">

          {/* Left — Text */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div key={`text-${current}`} className="space-y-5">
                {/* Badge */}
                <motion.div custom={0} variants={textVariants} initial="hidden" animate="visible" exit="exit">
                  <span className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border backdrop-blur-sm ${slide.badgeBg}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {slide.badge}
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  custom={1}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-1"
                >
                  {slide.headline.map((line, i) => (
                    <span
                      key={`${current}-${i}`}
                      className={`block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-none ${
                        i === 0
                          ? (isOrange ? 'text-white' : 'text-white')
                          : slide.accentClass
                      }`}
                    >
                      {line}
                    </span>
                  ))}
                </motion.h1>

                {/* Sub */}
                <motion.p
                  custom={3}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={`text-base sm:text-lg leading-relaxed max-w-lg ${isOrange ? 'text-white/90' : 'text-slate-300'}`}
                >
                  {slide.sub}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div custom={4} variants={textVariants} initial="hidden" animate="visible" exit="exit"
                  className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={`tel:${PHONE}`}
                    className={`flex items-center justify-center gap-2.5 font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg ${
                      isOrange
                        ? 'bg-white text-orange-600 hover:bg-orange-50 shadow-black/20'
                        : 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-900/30'
                    }`}
                  >
                    <Phone size={19} />
                    Call Now — Free
                  </a>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2.5 font-bold text-base px-8 py-4 rounded-2xl border-2 transition-all duration-200 hover:scale-105 ${
                      isOrange
                        ? 'border-white/40 text-white hover:bg-white/10'
                        : 'border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    <MessageCircle size={19} />
                    WhatsApp Us
                  </a>
                </motion.div>

                {/* Trust mini-pills */}
                <motion.div custom={5} variants={textVariants} initial="hidden" animate="visible" exit="exit"
                  className="flex flex-wrap gap-4 pt-1">
                  {['1000+ Tows Done', 'Fully Insured', '24/7 Active'].map((t) => (
                    <span key={t} className={`text-sm font-semibold ${isOrange ? 'text-white/90' : 'text-slate-300'}`}>
                      ✓ {t}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — Illustration */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`illus-${current}`}
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex items-center justify-center"
            >
              {slide.illustration}
            </motion.div>
          </AnimatePresence>
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
                >
                {i === current && (
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-orange-500 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </span>
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

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 z-20"
      >
        <span className="text-white/30 text-[10px] font-semibold tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
            className="w-1 h-1.5 bg-orange-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ─── SVG Illustrations ─────────────────────────────────────────── */

function EmergencyIllustration() {
  return (
    <motion.div className="relative w-full max-w-lg">
      {/* Glow */}
      <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl scale-75" />
      <svg viewBox="0 0 480 360" className="w-full drop-shadow-2xl" fill="none">
        {/* Night road */}
        <rect x="0" y="270" width="480" height="90" rx="0" fill="#1E293B" opacity="0.6" />
        <rect x="60" y="310" width="50" height="6" rx="3" fill="white" opacity="0.3" />
        <rect x="170" y="310" width="50" height="6" rx="3" fill="white" opacity="0.3" />
        <rect x="280" y="310" width="50" height="6" rx="3" fill="white" opacity="0.3" />
        <rect x="390" y="310" width="50" height="6" rx="3" fill="white" opacity="0.3" />

        {/* Broken-down car body */}
        <rect x="230" y="210" width="150" height="60" rx="8" fill="#334155" />
        <rect x="245" y="185" width="118" height="38" rx="7" fill="#475569" />
        {/* Car windows */}
        <rect x="252" y="190" width="45" height="27" rx="4" fill="#0F172A" opacity="0.8" />
        <rect x="305" y="190" width="45" height="27" rx="4" fill="#0F172A" opacity="0.8" />
        {/* Car wheels */}
        <circle cx="268" cy="274" r="20" fill="#1E293B" stroke="#475569" strokeWidth="4" />
        <circle cx="268" cy="274" r="9" fill="#334155" />
        <circle cx="356" cy="274" r="20" fill="#1E293B" stroke="#475569" strokeWidth="4" />
        <circle cx="356" cy="274" r="9" fill="#334155" />
        {/* Hood open */}
        <rect x="365" y="200" width="30" height="55" rx="4" fill="#374151" />
        <rect x="363" y="198" width="34" height="6" rx="3" fill="#94A3B8" />
        {/* Engine steam */}
        <motion.g initial={{}} animate={{ y: [-8, -20, -8], opacity: [0.6, 0, 0.6] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ellipse cx="380" cy="190" rx="8" ry="12" fill="white" opacity="0.15" />
          <ellipse cx="390" cy="175" rx="6" ry="10" fill="white" opacity="0.1" />
        </motion.g>

        {/* Warning triangle */}
        <motion.g
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          <polygon points="200,255 225,210 250,255" fill="#F97316" opacity="0.9" />
          <polygon points="205,252 225,215 245,252" fill="#0F172A" opacity="0.6" />
          <text x="225" y="248" textAnchor="middle" fill="#F97316" fontSize="18" fontWeight="bold">!</text>
        </motion.g>

        {/* Tow truck */}
        <rect x="20" y="215" width="110" height="55" rx="6" fill="#EA580C" />
        <rect x="110" y="200" width="65" height="70" rx="8" fill="#F97316" />
        {/* Cab window */}
        <rect x="118" y="207" width="50" height="30" rx="5" fill="#0F172A" opacity="0.7" />
        {/* Headlights */}
        <motion.ellipse animate={{ opacity: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 1.5 }} cx="172" cy="248" rx="10" ry="7" fill="#FCD34D" opacity="0.9" />
        {/* Truck wheels */}
        <circle cx="52" cy="272" r="19" fill="#1E293B" stroke="#F97316" strokeWidth="3" />
        <circle cx="52" cy="272" r="9" fill="#334155" />
        <circle cx="115" cy="272" r="19" fill="#1E293B" stroke="#F97316" strokeWidth="3" />
        <circle cx="115" cy="272" r="9" fill="#334155" />
        <circle cx="157" cy="272" r="16" fill="#1E293B" stroke="#F97316" strokeWidth="3" />
        <circle cx="157" cy="272" r="7" fill="#334155" />
        {/* Tow boom */}
        <line x1="20" y1="225" x2="0" y2="200" stroke="#94A3B8" strokeWidth="6" strokeLinecap="round" />
        <path d="M0 200 Q-8 192 -2 184 Q4 176 10 179" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" fill="none" />
        {/* Hook line to car */}
        <line x1="0" y1="184" x2="230" y2="220" stroke="#F97316" strokeWidth="2" strokeDasharray="8 5" opacity="0.5" />

        {/* Emergency lights on truck */}
        <motion.g animate={{ opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 0.6 }}>
          <rect x="120" y="196" width="18" height="7" rx="3.5" fill="#EF4444" />
        </motion.g>
        <motion.g animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 0.6 }}>
          <rect x="142" y="196" width="18" height="7" rx="3.5" fill="#F97316" />
        </motion.g>

        {/* Stars */}
        {[[60, 50], [120, 30], [200, 60], [290, 40], [380, 55], [440, 80], [460, 30]].map(([x, y], i) => (
          <motion.circle key={i} cx={x} cy={y} r="1.5" fill="white"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 + i * 0.3, delay: i * 0.2 }} />
        ))}
      </svg>
    </motion.div>
  );
}

function FlatbedIllustration() {
  return (
    <motion.div className="relative w-full max-w-lg">
      <div className="absolute inset-0 bg-blue-500/15 rounded-full blur-3xl scale-75" />
      <svg viewBox="0 0 480 340" className="w-full drop-shadow-2xl" fill="none">
        {/* Road */}
        <rect x="0" y="268" width="480" height="72" fill="#1E293B" opacity="0.5" />
        {[60, 170, 280, 390].map((x, i) => (
          <rect key={i} x={x} y="300" width="50" height="5" rx="2.5" fill="white" opacity="0.25" />
        ))}

        {/* Flatbed trailer */}
        <rect x="18" y="220" width="310" height="48" rx="4" fill="#1E3A5F" />
        <rect x="18" y="215" width="310" height="10" rx="3" fill="#1D4ED8" />
        {/* Ramp */}
        <rect x="18" y="228" width="18" height="36" rx="3" fill="#1D4ED8" opacity="0.7" />

        {/* Luxury car ON flatbed */}
        <rect x="80" y="175" width="200" height="48" rx="6" fill="#334155" />
        <rect x="100" y="153" width="160" height="32" rx="7" fill="#3B82F6" opacity="0.5" />
        {/* Car windows */}
        <rect x="110" y="158" width="60" height="22" rx="4" fill="#0F172A" opacity="0.7" />
        <rect x="180" y="158" width="60" height="22" rx="4" fill="#0F172A" opacity="0.7" />
        {/* Car wheels (raised on flatbed) */}
        <circle cx="118" cy="226" r="16" fill="#0F172A" stroke="#3B82F6" strokeWidth="3" opacity="0.6" />
        <circle cx="242" cy="226" r="16" fill="#0F172A" stroke="#3B82F6" strokeWidth="3" opacity="0.6" />

        {/* Cab */}
        <rect x="305" y="188" width="90" height="80" rx="8" fill="#1D4ED8" />
        <rect x="315" y="195" width="72" height="42" rx="6" fill="#0F172A" opacity="0.7" />
        {/* Headlights */}
        <motion.ellipse animate={{ opacity: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 2 }} cx="393" cy="242" rx="11" ry="8" fill="#FCD34D" />
        {/* Cab wheels */}
        <circle cx="330" cy="272" r="22" fill="#0F172A" stroke="#3B82F6" strokeWidth="4" />
        <circle cx="330" cy="272" r="10" fill="#1E293B" />
        <circle cx="390" cy="272" r="22" fill="#0F172A" stroke="#3B82F6" strokeWidth="4" />
        <circle cx="390" cy="272" r="10" fill="#1E293B" />
        {/* Trailer wheels */}
        <circle cx="60" cy="272" r="20" fill="#0F172A" stroke="#1D4ED8" strokeWidth="3" />
        <circle cx="60" cy="272" r="9" fill="#1E293B" />
        <circle cx="140" cy="272" r="20" fill="#0F172A" stroke="#1D4ED8" strokeWidth="3" />
        <circle cx="140" cy="272" r="9" fill="#1E293B" />
        <circle cx="230" cy="272" r="20" fill="#0F172A" stroke="#1D4ED8" strokeWidth="3" />
        <circle cx="230" cy="272" r="9" fill="#1E293B" />

        {/* Emergency lights */}
        <motion.rect animate={{ opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 0.7 }} x="318" y="183" width="20" height="8" rx="4" fill="#EF4444" />
        <motion.rect animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 0.7 }} x="345" y="183" width="20" height="8" rx="4" fill="#3B82F6" />

        {/* Safety straps */}
        <line x1="110" y1="223" x2="100" y2="268" stroke="#F59E0B" strokeWidth="2.5" strokeDasharray="none" opacity="0.7" />
        <line x1="250" y1="223" x2="260" y2="268" stroke="#F59E0B" strokeWidth="2.5" opacity="0.7" />

        {/* Stars */}
        {[[30, 60], [100, 35], [220, 70], [350, 45], [430, 65], [460, 30]].map(([x, y], i) => (
          <motion.circle key={i} cx={x} cy={y} r="1.5" fill="white"
            animate={{ opacity: [0.3, 0.9, 0.3] }}
            transition={{ repeat: Infinity, duration: 2.5 + i * 0.2, delay: i * 0.3 }} />
        ))}

        {/* Shield badge */}
        <motion.g animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
          <rect x="350" y="100" width="100" height="52" rx="14" fill="#1D4ED8" opacity="0.9" />
          <text x="400" y="121" textAnchor="middle" fill="#93C5FD" fontSize="10" fontWeight="600">INSURED</text>
          <text x="400" y="141" textAnchor="middle" fill="white" fontSize="14" fontWeight="800">✓ Safe</text>
        </motion.g>
      </svg>
    </motion.div>
  );
}

function SpeedIllustration() {
  return (
    <motion.div className="relative w-full max-w-lg">
      <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-75" />
      <svg viewBox="0 0 480 360" className="w-full drop-shadow-2xl" fill="none">
        {/* Large clock face */}
        <circle cx="200" cy="170" r="130" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="2" strokeOpacity="0.2" />
        <circle cx="200" cy="170" r="115" fill="none" stroke="white" strokeWidth="1" opacity="0.15" />
        {/* Clock ticks */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const x1 = 200 + 105 * Math.cos(angle);
          const y1 = 170 + 105 * Math.sin(angle);
          const x2 = 200 + 115 * Math.cos(angle);
          const y2 = 170 + 115 * Math.sin(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="3" opacity="0.5" strokeLinecap="round" />;
        })}

        {/* "30" large text */}
        <text x="200" y="145" textAnchor="middle" fill="white" fontSize="64" fontWeight="900" opacity="0.15">30</text>
        <text x="200" y="175" textAnchor="middle" fill="white" fontSize="16" fontWeight="600" opacity="0.5">MINUTES</text>

        {/* Animated clock hand */}
        <motion.line
          x1="200" y1="170"
          x2="200" y2="80"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          animate={{ rotate: [0, 180, 360] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
          style={{ transformOrigin: '200px 170px' }}
          opacity="0.7"
        />
        <motion.line
          x1="200" y1="170"
          x2="270" y2="170"
          stroke="#FFF7ED"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.5"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
          style={{ transformOrigin: '200px 170px' }}
        />
        <circle cx="200" cy="170" r="7" fill="white" />

        {/* Speed lines */}
        {[[310, 160, 440, 152], [315, 185, 460, 185], [310, 208, 445, 218]].map(([x1, y1, x2, y2], i) => (
          <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"
            animate={{ x2: [x2, x2 - 30, x2], opacity: [0.4, 0.7, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.15 }} />
        ))}

        {/* Mini truck racing */}
        <motion.g
          animate={{ x: [-40, 30] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <rect x="270" y="270" width="90" height="38" rx="5" fill="white" opacity="0.9" />
          <rect x="340" y="258" width="52" height="50" rx="6" fill="white" />
          <circle cx="288" cy="312" r="13" fill="#EA580C" />
          <circle cx="348" cy="312" r="13" fill="#EA580C" />
          <circle cx="380" cy="312" r="10" fill="#EA580C" />
          <motion.ellipse animate={{ opacity: [0.8, 1, 0.8] }} transition={{ repeat: Infinity, duration: 0.5 }} cx="390" cy="286" rx="8" ry="6" fill="#FCD34D" opacity="0.9" />
          <motion.rect animate={{ opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 0.5 }} x="344" y="254" width="14" height="5" rx="2.5" fill="#EF4444" />
          <motion.rect animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 0.5 }} x="361" y="254" width="14" height="5" rx="2.5" fill="#FBBF24" />
        </motion.g>

        {/* Road under truck */}
        <rect x="250" y="326" width="230" height="34" rx="3" fill="white" opacity="0.06" />
      </svg>
    </motion.div>
  );
}

function CoverageIllustration() {
  const areas = [
    { cx: 240, cy: 100, name: 'Borivali' },
    { cx: 170, cy: 145, name: 'Andheri' },
    { cx: 270, cy: 155, name: 'Powai' },
    { cx: 155, cy: 195, name: 'Bandra' },
    { cx: 195, cy: 215, name: 'Dadar' },
    { cx: 310, cy: 200, name: 'Thane' },
    { cx: 170, cy: 255, name: 'Worli' },
    { cx: 330, cy: 260, name: 'Navi Mumbai' },
    { cx: 205, cy: 290, name: 'Churchgate' },
  ];

  return (
    <motion.div className="relative w-full max-w-lg">
      <div className="absolute inset-0 bg-orange-500/15 rounded-full blur-3xl scale-75" />
      <svg viewBox="0 0 480 360" className="w-full drop-shadow-2xl" fill="none">
        {/* Mumbai silhouette */}
        <path
          d="M240 60 L200 80 L170 110 L145 145 L130 180 L135 220 L150 255 L165 280 L185 300 L205 315 L230 320 L250 315 L265 300 L280 280 L300 255 L320 225 L335 195 L330 165 L310 145 L290 125 L270 110 L260 80 Z"
          fill="white"
          opacity="0.06"
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.2"
        />

        {/* Connection lines between areas */}
        {areas.slice(0, -1).map((a, i) => (
          <motion.line key={i}
            x1={a.cx} y1={a.cy} x2={areas[i + 1].cx} y2={areas[i + 1].cy}
            stroke="#F97316" strokeWidth="1" opacity="0.2"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ repeat: Infinity, duration: 3, delay: i * 0.3 }} />
        ))}

        {/* Coverage pings */}
        {areas.map((area, i) => (
          <motion.g key={area.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.15 }}
          >
            {/* Ripple */}
            <motion.circle cx={area.cx} cy={area.cy} r="18"
              fill="none" stroke="#F97316" strokeWidth="1.5" opacity="0.3"
              animate={{ r: [12, 26, 12], opacity: [0.4, 0, 0.4] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.25 }} />
            {/* Dot */}
            <circle cx={area.cx} cy={area.cy} r="6" fill="#F97316" opacity="0.9" />
            <circle cx={area.cx} cy={area.cy} r="3" fill="white" />
            {/* Label */}
            <text x={area.cx} y={area.cy - 12}
              textAnchor="middle" fill="white" fontSize="8" fontWeight="600" opacity="0.7">
              {area.name}
            </text>
          </motion.g>
        ))}

        {/* Central truck icon */}
        <motion.g animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}>
          <rect x="370" y="90" width="90" height="48" rx="8" fill="#F97316" opacity="0.95" />
          <text x="415" y="112" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">TOWING</text>
          <text x="415" y="128" textAnchor="middle" fill="white" fontSize="11" fontWeight="900">24/7</text>
        </motion.g>

        {/* Route lines from truck to areas */}
        {areas.slice(0, 4).map((area, i) => (
          <motion.line key={`route-${i}`}
            x1="415" y1="138" x2={area.cx} y2={area.cy}
            stroke="#F97316" strokeWidth="1" strokeDasharray="6 4"
            opacity="0.2"
            animate={{ opacity: [0.1, 0.35, 0.1] }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }} />
        ))}

        {/* Bottom label */}
        <rect x="100" y="335" width="280" height="20" rx="10" fill="white" opacity="0.06" />
        <text x="240" y="349" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" opacity="0.5">
          All Mumbai · Thane · Navi Mumbai
        </text>
      </svg>
    </motion.div>
  );
}
