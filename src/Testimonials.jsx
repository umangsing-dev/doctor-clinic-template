import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Robert Jenkins',
      title: 'Diabetes Patient',
      image: '/assets/patient-1.jpg',
      review: "Dr. Wilson's thorough diagnostics and custom treatment plan saved me from what could have been a serious diabetic crisis. Her explanation of glucose biochemistry was clear, helping me take back control of my daily routines.",
      rating: 5,
    },
    {
      id: 2,
      name: 'Eleanor Vance',
      title: 'Preventative Care Patient',
      image: '/assets/patient-2.jpg',
      review: 'The most compassionate physician I have ever met. She spent nearly an hour listening to my health history and explaining my results. The clinic environment feels premium, peaceful, and highly professional.',
      rating: 5,
    },
    {
      id: 3,
      name: 'David Miller',
      title: 'General Practice Patient',
      image: '/assets/patient-3.jpg',
      review: 'Dr. Sarah has been our family doctor for three years. Her diagnosis accuracy is flawless, and the online consultation option makes checkups incredibly easy to book around my work schedule. A stellar clinic!',
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right
  const timerRef = useRef(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);
  };

  const stopAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.4, ease: 'easeIn' },
    }),
  };

  return (
    <section id="testimonials" className="py-24 bg-[#F5F9FC] dark:bg-[#0E1524] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest font-bold text-primary dark:text-primary-light mb-3">
            Patient Stories
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
            What Our Patients Say
          </h3>
          <div className="h-1 w-12 bg-primary rounded mt-4 mx-auto" />
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[380px] sm:min-h-[290px] flex items-center justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full glass-card p-8 sm:p-10 rounded-[32px] shadow-xl shadow-slate-200/40 dark:shadow-slate-950/40 border border-white dark:border-slate-800 bg-white dark:bg-slate-900/50 flex flex-col md:flex-row gap-6 md:gap-8 items-center"
              onMouseEnter={stopAutoPlay}
              onMouseLeave={startAutoPlay}
            >
              {/* Patient Photo */}
              <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 shrink-0 shadow-md">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Review Text */}
              <div className="flex-1 text-center md:text-left flex flex-col justify-between">
                <div>
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary/10 dark:text-primary/20 mb-3 mx-auto md:mx-0 shrink-0" />
                  
                  {/* Review Text */}
                  <p className="text-sm sm:text-base italic text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-medium">
                    "{testimonials[activeIndex].review}"
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  {/* Patient Info */}
                  <div>
                    <h4 className="text-base font-extrabold text-slate-850 dark:text-white leading-tight">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-xs text-slate-400 dark:text-slate-455 mt-0.5">
                      {testimonials[activeIndex].title}
                    </p>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Previous Review"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Next Review"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-slate-300 dark:bg-slate-700'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
