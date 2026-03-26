import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    name: 'Rahul Mehta',
    location: 'Andheri West',
    rating: 5,
    text: 'My car broke down at midnight on the Western Express Highway. These guys came in literally 22 minutes. Professional, fast, and very reasonable price. Highly recommend!',
    vehicle: 'Honda City',
  },
  {
    name: 'Priya Sharma',
    location: 'Bandra',
    rating: 5,
    text: "Got a flat tyre near Bandra Kurla Complex during peak hours. WhatsApp-ed them and they were there within 25 minutes. Driver was very helpful and the flatbed was clean. 5 stars!",
    vehicle: 'Hyundai Creta',
  },
  {
    name: 'Vikram Joshi',
    location: 'Thane',
    rating: 5,
    text: 'Used their outstation towing service to move my car from Mumbai to Pune after an accident. Very transparent pricing, no surprises at the end. Great service!',
    vehicle: 'Maruti Swift',
  },
  {
    name: 'Sneha Patel',
    location: 'Borivali',
    rating: 5,
    text: 'Car battery died near Borivali station late at night. Called mumbaitowing24 and they provided roadside assistance within 20 minutes. Very professional team!',
    vehicle: 'Maruti Baleno',
  },
  {
    name: 'Arjun Nair',
    location: 'Powai',
    rating: 5,
    text: 'Had an accident near Powai Lake. These guys coordinated with my insurance company directly and made the whole process stress-free. Top-notch service.',
    vehicle: 'Toyota Fortuner',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + reviews.length) % reviews.length);
  };

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
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
            Google Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Trusted by 1000+ Mumbai Drivers
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Real verified reviews from real customers we've helped get back on the road.
          </p>
          {/* Google Rating Badge */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-gray-900">4.9</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-gray-500">Google Reviews</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gray-50 p-8 sm:p-12 min-h-[280px] flex items-center">
            {/* Quote icon */}
            <Quote size={48} className="absolute top-6 right-8 text-orange-100" />

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: reviews[current].rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium mb-7">
                  "{reviews[current].text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {reviews[current].name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-gray-900">{reviews[current].name}</p>
                      <CheckCircle2 size={16} className="text-blue-500" title="Verified Customer" />
                    </div>
                    <p className="text-sm text-gray-600">
                      {reviews[current].location} &nbsp;·&nbsp; {reviews[current].vehicle}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-all duration-200`}
                  aria-label={`Go to review ${i + 1} by ${reviews[i].name}`}
                >
                  <span className={`h-2.5 rounded-full transition-all duration-200 ${i === current ? 'bg-orange-500 w-6' : 'bg-gray-300 w-2.5 hover:bg-gray-400'}`} />
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => paginate(-1)}
                className="w-11 h-11 bg-white border border-gray-200 hover:border-orange-400 rounded-full flex items-center justify-center text-gray-700 hover:text-orange-500 transition-all"
                aria-label="Go to previous review"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-11 h-11 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-all"
                aria-label="Go to next review"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Mini trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10 text-sm text-gray-400"
        >
          <strong className="text-gray-700">200+ verified Google Reviews</strong> · Rated <strong className="text-gray-700">4.9/5</strong> · Trusted by Mumbai drivers since 2020
        </motion.div>
      </div>
    </section>
  );
}
