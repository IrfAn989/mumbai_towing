import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';
import { Truck, Clock, Star, MapPin } from 'lucide-react';

const stats = [
  { icon: Truck, value: 1000, suffix: '+', label: 'Vehicles Towed', color: 'text-orange-500' },
  { icon: Clock, value: 30, suffix: ' min', label: 'Avg Response Time', color: 'text-blue-600' },
  { icon: Star, value: 4.9, suffix: '★', label: 'Customer Rating', color: 'text-yellow-500', isFloat: true },
  { icon: MapPin, value: 24, suffix: '/7', label: 'Availability', color: 'text-red-500' },
];

function StatCard({ icon: Icon, value, suffix, label, color, isFloat, started }) {
  const count = useCountUp(isFloat ? value * 10 : value, 2000, started);
  const display = isFloat ? (count / 10).toFixed(1) : count;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center px-6 py-2"
    >
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 bg-gray-50`}>
        <Icon size={24} className={color} />
      </div>
      <div className={`text-3xl lg:text-4xl font-extrabold ${color} tabular-nums`}>
        {display}{suffix}
      </div>
      <div className="text-sm text-gray-600 font-medium mt-1">{label}</div>
    </motion.div>
  );
}

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-white border-y border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} started={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
