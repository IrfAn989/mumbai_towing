import { motion } from 'framer-motion';
import { Check, Phone } from 'lucide-react';

const PHONE = '+919820207025';
const WHATSAPP = 'https://wa.me/919820207025?text=Hi%2C%20I%20need%20a%20towing%20quote%20in%20Mumbai';

const plans = [
  {
    name: 'Local Tow',
    subtitle: 'Within 10 km',
    price: '₹799',
    unit: 'flat rate',
    features: [
      'Within city limits',
      'Up to 10 km distance',
      'Any vehicle type',
      'Free roadside assessment',
      '30-min response time',
    ],
    highlight: false,
    cta: 'Call for Booking',
  },
  {
    name: 'Standard Tow',
    subtitle: '10 – 30 km',
    price: '₹1,499',
    unit: 'flat rate',
    features: [
      'Mid-range city coverage',
      '10 to 30 km distance',
      'Cars, SUVs & bikes',
      'GPS-tracked dispatch',
      'Priority response',
      'WhatsApp updates',
    ],
    highlight: true,
    cta: 'Get This Plan',
  },
  {
    name: 'Per-KM Rate',
    subtitle: 'Beyond 30 km',
    price: '₹45',
    unit: 'per km',
    features: [
      'Long-distance towing',
      'Outstation transfers',
      'Flatbed available',
      'Insurance-friendly',
      'Fixed per-km billing',
    ],
    highlight: false,
    cta: 'Request a Quote',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
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
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            No Hidden Charges
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            We believe in honest pricing. Know the cost before we start — always.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 border-2 flex flex-col ${
                plan.highlight
                  ? 'border-orange-500 bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-2xl shadow-orange-100 scale-105'
                  : 'border-gray-100 bg-gray-50 text-gray-900'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-full shadow">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mt-1 ${plan.highlight ? 'text-orange-100' : 'text-gray-500'}`}>
                  {plan.subtitle}
                </p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm font-medium ${plan.highlight ? 'text-orange-100' : 'text-gray-400'}`}>
                    /{plan.unit}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm">
                    <Check
                      size={16}
                      className={`flex-shrink-0 ${plan.highlight ? 'text-orange-200' : 'text-orange-500'}`}
                    />
                    <span className={plan.highlight ? 'text-white' : 'text-gray-700'}>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`tel:${PHONE}`}
                className={`flex items-center justify-center gap-2 py-4 min-h-[48px] rounded-xl font-bold text-base transition-all duration-200 hover:scale-105 ${
                  plan.highlight
                    ? 'bg-white text-orange-600 hover:bg-orange-50'
                    : 'bg-orange-500 text-white hover:bg-orange-600'
                }`}
                aria-label={`${plan.cta} for ${plan.name} plan`}
              >
                <Phone size={18} aria-hidden="true" />
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Night charges note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center text-sm text-gray-400"
        >
          Night charges (10 PM – 6 AM): <strong className="text-gray-600">+₹200</strong> &nbsp;·&nbsp; All prices include driver + equipment &nbsp;·&nbsp;
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-orange-500 underline underline-offset-2">
            Get custom quote on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
