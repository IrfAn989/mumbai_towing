import { Phone, MessageCircle } from 'lucide-react';

const PHONE = '+919820207025';
const WHATSAPP = 'https://wa.me/919820207025?text=Hi%2C%20I%20need%20towing%20service%20in%20Mumbai';

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-white border-t border-gray-200 shadow-2xl px-4 py-3 safe-area-bottom">
        <div className="flex gap-3 max-w-lg mx-auto">
          <a
            href={`tel:${PHONE}`}
            className="flex-1 flex items-center justify-center gap-2 bg-orange-500 active:bg-orange-600 text-white font-bold text-base py-4 min-h-[48px] rounded-xl transition-colors"
            aria-label="Call Mumbai Towing 24/7 now"
          >
            <Phone size={20} aria-hidden="true" />
            Call Now
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gray-900 active:bg-gray-800 text-white font-bold text-base py-4 min-h-[48px] rounded-xl transition-colors"
            aria-label="Contact Mumbai Towing 24/7 on WhatsApp"
          >
            <MessageCircle size={20} aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
