import { motion } from 'framer-motion';
import { Timer, BadgeIndianRupee, UserCheck, Clock, MapPin, Shield } from 'lucide-react';

const points = [
  {
    icon: Timer,
    title: 'Fast Response Time',
    desc: 'Our fleet is strategically stationed across Mumbai so we reach you in under 30 minutes — guaranteed.',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Affordable Pricing',
    desc: 'Transparent rates with no hidden charges. Get a free quote before we dispatch.',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    icon: UserCheck,
    title: 'Professional Drivers',
    desc: 'All our drivers are trained, background-verified, and experienced in safe vehicle handling.',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    icon: Clock,
    title: 'Available 24/7',
    desc: 'Midnight breakdown? Weekend emergency? We never close. Call us any time, any day of the year.',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    icon: MapPin,
    title: 'All of Mumbai Covered',
    desc: 'From South Mumbai to Thane to Navi Mumbai — our network covers every major area in the city.',
    color: 'bg-red-100 text-red-700',
  },
  {
    icon: Shield,
    title: 'Insured & Certified',
    desc: 'Your vehicle is in safe hands. We carry full insurance coverage on every single tow.',
    color: 'bg-yellow-100 text-yellow-700',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — heading + visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
              Why Mumbai Trusts Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Best Towing Service Near Me <br />
              <span className="text-orange-500">in Mumbai</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Need car towing near me? When you search for tow truck near me or car breakdown service near me, we're the 24 hour towing Mumbai service that shows up fast with roadside assistance Mumbai.
            </p>

            {/* Visual stat card */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-7 text-white shadow-xl shadow-orange-200/50">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: '1000+', label: 'Tows Done' },
                  { value: '30 min', label: 'Avg Arrival' },
                  { value: '4.9★', label: 'Avg Rating' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl lg:text-3xl font-extrabold">{s.value}</div>
                    <div className="text-xs text-orange-100 mt-1 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — feature points */}
          <div className="grid sm:grid-cols-2 gap-5">
            {points.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="bg-gray-50 rounded-2xl p-5 hover:bg-orange-50 transition-colors duration-200 group"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${point.color}`}>
                  <point.icon size={20} />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                  {point.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
