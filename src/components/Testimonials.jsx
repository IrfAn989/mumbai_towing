import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

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
    text: "My scooter's engine seized near Borivali station. Called mumbaitowing24 and they handled it perfectly. Bike was towed without a scratch. Wonderful team!",
    vehicle: 'Honda Activa',
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
            Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Mumbai Drivers Love Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Real reviews from real Mumbaikars we've helped get back on the road.
          </p>
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
                  <div>
                    <p className="font-bold text-gray-900">{reviews[current].name}</p>
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
          Rated <strong className="text-gray-700">4.9/5</strong> based on <strong className="text-gray-700">200+ reviews</strong> from verified customers across Mumbai
        </motion.div>
      </div>
    </section>
  );
}
