import { motion } from 'framer-motion';
import { Zap, Layers, Bike, AlertTriangle, Navigation, Phone } from 'lucide-react';

const PHONE = '+919820207025';

const services = [
  {
    icon: Zap,
    title: 'Emergency Towing',
    desc: 'Broke down on the highway or city road? We dispatch immediately and reach you in under 30 minutes.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Layers,
    title: 'Flatbed Towing',
    desc: 'Safe, secure flatbed transport for luxury cars, SUVs, and low-clearance vehicles. Zero damage guarantee.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Bike,
    title: 'Bike Towing',
    desc: 'Two-wheeler breakdown? We handle motorcycles and scooters with specialized bike carriers.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: AlertTriangle,
    title: 'Accident Recovery',
    desc: 'Post-accident vehicle recovery done swiftly with utmost care, working with insurance documentation.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Navigation,
    title: 'Outstation Towing',
    desc: 'Need your vehicle moved to another city? We offer reliable long-distance towing across Maharashtra.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: Phone,
    title: 'On-Call Assistance',
    desc: 'Not sure what you need? Call us and our experts will guide you to the right service instantly.',
    color: 'bg-yellow-50 text-yellow-600',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
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
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Towing Services in Mumbai
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            From emergency breakdowns to long-distance recovery — we handle it all, 24 hours a day.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.color}`}>
                <service.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <Phone size={18} />
            Book a Service — Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
