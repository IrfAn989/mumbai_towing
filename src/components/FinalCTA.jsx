import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const PHONE = '+919820207025';
const WHATSAPP = 'https://wa.me/919820207025?text=Hi%2C%20I%20need%20towing%20service%20in%20Mumbai';

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-15" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 text-sm font-semibold px-4 py-2 rounded-full border border-orange-500/30 mb-8">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Available Right Now — 24/7
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Stuck on the Road?
            <br />
            <span className="text-orange-400">We're Just a Call Away.</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Don't wait on the roadside. Our tow trucks are stationed across Mumbai
            and ready to reach you in under 30 minutes — any time, any day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={`tel:${PHONE}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-5 min-h-[56px] rounded-2xl shadow-2xl shadow-orange-900/30 transition-colors"
              aria-label="Call Mumbai Towing 24/7 now - Free"
            >
              <Phone size={22} aria-hidden="true" />
              Call Now — Free
            </motion.a>
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-10 py-5 min-h-[56px] rounded-2xl border-2 border-white/20 hover:border-white/40 transition-all"
              aria-label="Contact Mumbai Towing 24/7 on WhatsApp"
            >
              <MessageCircle size={22} aria-hidden="true" />
              WhatsApp Us
            </motion.a>
          </div>

          <p className="mt-8 text-slate-400 text-sm">
            No booking fee &nbsp;·&nbsp; Free estimate &nbsp;·&nbsp; Arrives in ~30 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
