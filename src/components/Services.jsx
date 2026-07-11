import React from 'react';
import {
  Stethoscope,
  ShieldCheck,
  Users,
  ClipboardList,
  Syringe,
  Droplet,
  HeartPulse,
  Video,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const servicesList = [
    {
      icon: Stethoscope,
      title: 'General Consultation',
      desc: 'Comprehensive medical consultations focusing on diagnosing acute illnesses, physical check-ups, and managing chronic health problems.',
      color: 'emerald',
    },
    {
      icon: ShieldCheck,
      title: 'Preventive Care',
      desc: 'Customized screening programs, health risk assessments, and lifestyle coaching to prevent diseases before they arise.',
      color: 'blue',
    },
    {
      icon: Users,
      title: 'Family Medicine',
      desc: 'Continuous and personalized healthcare for individuals and families across all ages, genders, and disease types.',
      color: 'purple',
    },
    {
      icon: ClipboardList,
      title: 'Health Checkups',
      desc: 'Annual health packages, workplace wellness evaluations, and age-specific diagnostic screening checklists.',
      color: 'orange',
    },
    {
      icon: Syringe,
      title: 'Vaccination',
      desc: 'Adulthood immunizations, travel vaccines, flu shots, and booster advice matching global health recommendations.',
      color: 'rose',
    },
    {
      icon: Droplet,
      title: 'Diabetes Care',
      desc: 'Specialized diagnostic checks, continuous glucose monitoring integration, dietary planning, and therapy optimization.',
      color: 'cyan',
    },
    {
      icon: HeartPulse,
      title: 'Heart Care',
      desc: 'Hypertension evaluation, cardiovascular risk profiling, lipid profile assessments, and proactive counseling.',
      color: 'red',
    },
    {
      icon: Video,
      title: 'Online Consultation',
      desc: 'Virtual video appointments for secure clinical consults, prescription refills, and lab result reviews from home.',
      color: 'indigo',
    },
  ];

  const getColorClasses = (color) => {
    const maps = {
      emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white',
      blue: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white',
      purple: 'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white',
      orange: 'bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400 group-hover:bg-orange-600 group-hover:text-white',
      rose: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 group-hover:bg-rose-600 group-hover:text-white',
      cyan: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white',
      red: 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 group-hover:bg-red-600 group-hover:text-white',
      indigo: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white',
    };
    return maps[color] || maps.emerald;
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <section id="services" className="py-24 bg-[#F5F9FC] dark:bg-[#0E1524] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-bold text-primary dark:text-primary-light mb-3">
            Core Competencies
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
            Our Medical Services
          </h3>
          <div className="h-1 w-12 bg-primary rounded mt-4 mx-auto" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-5 leading-relaxed">
            We provide a wide range of medical services to support you at every stage of your healthcare journey.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group glass-card p-6 rounded-[24px] shadow-sm hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-950/40 hover:-translate-y-2 border border-slate-100 dark:border-slate-800 transition-all duration-350 flex flex-col justify-between h-full bg-white dark:bg-slate-900/50"
              >
                <div>
                  {/* Icon Wrapper */}
                  <div
                    className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-6 shrink-0 transition-all duration-300 ${getColorClasses(
                      service.color
                    )}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* CTA Action */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary dark:text-primary-light hover:gap-2.5 transition-all mt-auto"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
