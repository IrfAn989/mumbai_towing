import { motion } from 'framer-motion';
import { Phone, MapPin, Truck } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    step: '01',
    title: 'Call or WhatsApp',
    desc: 'Reach us in seconds via call or WhatsApp. Share your vehicle type and situation.',
    color: 'bg-orange-500',
  },
  {
    icon: MapPin,
    step: '02',
    title: 'Share Your Location',
    desc: 'Drop a pin on WhatsApp or tell us the nearest landmark. We lock in your location instantly.',
    color: 'bg-blue-600',
  },
  {
    icon: Truck,
    step: '03',
    title: 'We Tow Your Vehicle',
    desc: 'Our team arrives within 30 minutes. We tow safely to your chosen destination.',
    color: 'bg-orange-500',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Getting help is as easy as 3 steps. No complicated forms, no waiting on hold.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(16.66%+40px)] right-[calc(16.66%+40px)] h-0.5 bg-gradient-to-r from-orange-200 via-blue-200 to-orange-300" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className={`relative z-10 w-24 h-24 ${step.color} rounded-full flex items-center justify-center shadow-xl mb-6`}>
                  <step.icon size={36} className="text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
                    <span className="text-xs font-extrabold text-gray-700">{step.step}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs">{step.desc}</p>

                {/* Mobile connector arrow */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden mt-6 text-gray-300 text-3xl">↓</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-gray-400 mt-12"
        >
          Average total time from call to vehicle tow: <strong className="text-gray-600">under 45 minutes</strong>
        </motion.p>
      </div>
    </section>
  );
}
