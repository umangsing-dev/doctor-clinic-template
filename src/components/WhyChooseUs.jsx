import React from 'react';
import { UserCheck, Shield, DollarSign, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const points = [
    {
      icon: UserCheck,
      title: 'Experienced Doctor',
      desc: 'Led by Dr. Sarah Wilson, who brings over 20 years of clinical experience in internal medicine, academic teaching, and patient-first diagnostics.',
    },
    {
      icon: Shield,
      title: 'Advanced Equipment',
      desc: 'Our clinic uses state-of-the-art diagnostic screening systems, offering high-accuracy vascular scans, stress tests, and automated lab integrations.',
    },
    {
      icon: DollarSign,
      title: 'Affordable & Transparent',
      desc: 'We work closely with major insurance carriers and provide clear, upfront cost structures with zero hidden medical fees.',
    },
    {
      icon: PhoneCall,
      title: 'Emergency Support',
      desc: 'Active coordination and advice hotlines for registered patients. Quick access to triage and hospital admission support in critical moments.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white dark:bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-bold text-primary dark:text-primary-light mb-3">
            Our Standard
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
            Why Patients Trust Us
          </h3>
          <div className="h-1 w-12 bg-primary rounded mt-4 mx-auto" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-5 leading-relaxed">
            We are dedicated to providing a premium experience that prioritizes your wellness, safety, and comfort.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 shadow-sm"
              >
                {/* Accent line top */}
                <div className="absolute top-0 inset-x-8 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />

                {/* Icon block */}
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light flex items-center justify-center shrink-0 mb-6">
                  <IconComponent className="h-5 w-5" />
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {point.title}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
