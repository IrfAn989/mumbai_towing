import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, Truck, Clock, Shield } from 'lucide-react';

const PHONE = '+919820207025';
const PHONE_DISPLAY = '+91 98202 07025';
const WHATSAPP = 'https://wa.me/919820207025?text=Hi%2C%20I%20need%20towing%20service%20in%20Mumbai.%20Please%20help%20me.';

export default function PopupCTA() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={() => setIsOpen(false)}
          />

          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="fixed inset-x-4 bottom-24 sm:inset-auto sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-sm z-[101]"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Header gradient */}
              <div className="relative bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 pt-6 pb-10">
                {/* Close */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3.5 right-3.5 w-8 h-8 bg-white/20 hover:bg-white/35 rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="Close"
                >
                  <X size={15} />
                </button>

                {/* Live badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
                  </span>
                  <span className="text-white/90 text-xs font-semibold tracking-wide uppercase">
                    Available Now — Truck Nearby
                  </span>
                </div>

                <h3 className="text-white text-2xl font-extrabold leading-snug">
                  Stuck on the Road?
                  <br />
                  <span className="text-orange-100">We're 30 Min Away.</span>
                </h3>
                <p className="text-orange-100/80 text-sm mt-2">
                  Free estimate. No booking fee. 24/7 service.
                </p>

                {/* Floating icon */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  className="absolute -bottom-5 right-6 w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center"
                >
                  <Truck size={24} className="text-orange-500" />
                </motion.div>
              </div>

              {/* Body */}
              <div className="px-6 pt-8 pb-6 space-y-3">
                {/* Call CTA */}
                <motion.a
                  href={`tel:${PHONE}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-between w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-5 rounded-2xl transition-colors shadow-lg shadow-orange-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-orange-100 font-medium">Call Now — Free</p>
                      <p className="font-bold text-base">{PHONE_DISPLAY}</p>
                    </div>
                  </div>
                  <span className="text-orange-200 text-lg">→</span>
                </motion.a>

                {/* WhatsApp CTA */}
                <motion.a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-between w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-5 rounded-2xl transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={18} />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-gray-400 font-medium">Chat on WhatsApp</p>
                      <p className="font-bold text-base">Send a Message</p>
                    </div>
                  </div>
                  <span className="text-gray-500 text-lg">→</span>
                </motion.a>

                {/* Trust row */}
                <div className="flex items-center justify-center gap-4 pt-1">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Shield size={12} className="text-orange-500" />
                    Insured
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Clock size={12} className="text-orange-500" />
                    ~30 min
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <span className="text-orange-500">★</span>
                    4.9 rated
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center text-xs text-gray-400 hover:text-gray-600 pt-1 pb-0.5 transition-colors"
                >
                  No thanks, I'm fine
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
