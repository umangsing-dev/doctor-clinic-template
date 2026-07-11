import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

function Counter({ endValue, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseInt(endValue, 10);
    if (isNaN(end)) return;

    const totalSteps = 60;
    const increment = end / totalSteps;
    const stepTime = (duration * 1000) / totalSteps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start + increment * currentStep));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, endValue, duration]);

  return (
    <span ref={elementRef} className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Statistics() {
  const stats = [
    { value: '20', suffix: '+', label: 'Years Experience' },
    { value: '10000', suffix: '+', label: 'Happy Patients' },
    { value: '50', suffix: '+', label: 'Medical Services' },
    { value: '99', suffix: '%', label: 'Patient Satisfaction' },
  ];

  return (
    <section className="relative py-16 bg-[#2E8B57] dark:bg-[#154c30] overflow-hidden">
      {/* Decorative SVG blobs/patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <Counter endValue={stat.value} suffix={stat.suffix} />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-100 mt-3 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
