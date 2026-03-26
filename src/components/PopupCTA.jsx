import { useState, useEffect } from 'react';
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

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-[100]"
        onClick={() => setIsOpen(false)}
        style={{ contain: 'strict' }}
      />

      {/* Popup Card */}
      <div
        className="fixed inset-x-4 bottom-24 sm:inset-auto sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-sm z-[101]"
        style={{ contain: 'layout' }}
      >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Header gradient */}
              <div className="relative bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 pt-6 pb-10">
                {/* Close */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3.5 right-3.5 w-11 h-11 bg-white/25 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="Close popup dialog"
                >
                  <X size={18} aria-hidden="true" />
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
                <div className="absolute -bottom-5 right-6 w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <Truck size={24} className="text-orange-500" />
                </div>
              </div>

              {/* Body */}
              <div className="px-6 pt-8 pb-6 space-y-3">
                {/* Call CTA */}
                <a
                  href={`tel:${PHONE}`}
                  onClick={() => window.gtag_report_conversion && window.gtag_report_conversion(`tel:${PHONE}`)}
                  className="flex items-center justify-between w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-5 rounded-2xl transition-colors shadow-lg shadow-orange-200"
                  aria-label="Call Mumbai Towing 24/7"
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
                </a>

                {/* WhatsApp CTA */}
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-5 rounded-2xl transition-colors"
                  aria-label="Message Mumbai Towing on WhatsApp"
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
                </a>

                {/* Trust row */}
                <div className="flex items-center justify-center gap-6 pt-2">
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <Shield size={12} className="text-orange-500" />
                    Insured
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <Clock size={12} className="text-orange-500" />
                    ~30 min
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <span className="text-orange-500">★</span>
                    4.9 rated
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center text-sm text-gray-500 hover:text-gray-700 py-3 transition-colors min-h-[44px]"
                  aria-label="Dismiss this popup"
                >
                  No thanks, I'm fine
                </button>
              </div>
            </div>
      </div>
    </>
  );
}
