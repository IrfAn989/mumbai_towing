import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

const PHONE = '+919820207025';

const areas = [
  { name: 'Andheri', sub: 'East & West' },
  { name: 'Bandra', sub: 'East & West' },
  { name: 'Borivali', sub: 'North Mumbai' },
  { name: 'Dadar', sub: 'Central Mumbai' },
  { name: 'Thane', sub: 'Thane District' },
  { name: 'Navi Mumbai', sub: 'Vashi, Airoli, Nerul' },
  { name: 'Kurla', sub: 'East & West' },
  { name: 'Malad', sub: 'East & West' },
  { name: 'Goregaon', sub: 'Film City Area' },
  { name: 'Juhu', sub: 'Vile Parle' },
  { name: 'Powai', sub: 'Hiranandani' },
  { name: 'Vikhroli', sub: 'Eastern Suburbs' },
  { name: 'Worli', sub: 'South Mumbai' },
  { name: 'Churchgate', sub: 'South Mumbai' },
  { name: 'Mulund', sub: 'Eastern Suburbs' },
  { name: 'Kandivali', sub: 'North Mumbai' },
];

export default function ServiceAreas() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Coverage Map
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Towing Service Areas in Mumbai
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide 24/7 car towing across all major Mumbai neighbourhoods — from South Mumbai to the suburbs.
            If your area isn't listed, <strong className="text-gray-700">call us — we likely cover it</strong>.
          </p>
        </motion.div>

        {/* Areas grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {areas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="bg-white rounded-2xl px-5 py-4 border border-gray-100 shadow-sm hover:border-orange-300 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-orange-100 transition-colors">
                  <MapPin size={16} className="text-orange-500" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">
                    {area.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{area.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm max-w-4xl mx-auto text-center"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Mumbai's Most Trusted Towing Service
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Mumbai Towing 24 provides <strong>emergency car towing in Mumbai</strong>, <strong>flatbed towing across Mumbai</strong>,
            and <strong>24/7 towing service in Thane and Navi Mumbai</strong>. Whether you're in Andheri, Bandra,
            Borivali, Dadar, or the Eastern/Western Suburbs — our tow trucks are always nearby and ready to help.
            Call for immediate <strong>towing service near me in Mumbai</strong>.
          </p>

          <a
            href={`tel:${PHONE}`}
            onClick={() => window.gtag_report_conversion && window.gtag_report_conversion(`tel:${PHONE}`)}
            className="inline-flex items-center gap-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-4 min-h-[48px] rounded-xl transition-all duration-200 hover:scale-105 shadow-md"
            aria-label="Check towing coverage in your area - Call Mumbai Towing 24/7"
          >
            <Phone size={18} aria-hidden="true" />
            Check Coverage in Your Area
          </a>
        </motion.div>
      </div>
    </section>
  );
}
