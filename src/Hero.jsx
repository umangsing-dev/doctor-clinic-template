import React from 'react';
import { ShieldCheck, Calendar, Phone, Award, Users, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden bg-gradient-to-tr from-[#F5F9FC] via-[#FFFFFF] to-[#E8F1F5] dark:from-[#0B0F19] dark:via-[#0E1524] dark:to-[#172237]"
    >
      {/* Animated Floating Gradient Blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-blob-slow" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl animate-blob-slow-delay" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light text-xs font-semibold uppercase tracking-wider mb-6 w-fit"
          >
            <ShieldCheck className="h-4 w-4" />
            <span>Trusted Healthcare Partner</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-slate-900 dark:text-white leading-[1.1] mb-6"
          >
            Your Health,<br />
            <span className="text-primary dark:text-primary-light">Our Utmost Priority</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-350 leading-relaxed max-w-xl mb-8"
          >
            Providing compassionate, personalized healthcare with modern medical expertise and advanced treatments. Dr. Sarah Wilson specializes in proactive internal medicine, helping you lead a healthier life.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              <Calendar className="h-5 w-5" />
              Book Appointment
            </a>
            
            <a
              href="tel:+18005550199"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5 text-primary dark:text-primary-light" />
              Call Now
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 border-t border-slate-200/60 dark:border-slate-800/60 pt-8"
          >
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">20+</span>
              <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Years Experience</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">10K+</span>
              <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Happy Patients</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">100%</span>
              <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Board Certified</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side Image & Floating Cards */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex items-center justify-center">
          
          {/* Main Visual Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200/40 dark:shadow-slate-950/40 border-4 border-white dark:border-slate-800"
          >
            <img
              src="/assets/hero-bg.jpg"
              alt="Medical Consultation with Doctor"
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </motion.div>

          {/* Floating Achievements / Cards */}
          
          {/* Card 1: Experience */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/10 -left-6 sm:-left-12 glass-card p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/30 max-w-[190px]"
          >
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-450">Clinical Rank</p>
              <p className="text-xs font-bold text-slate-800 dark:text-white leading-tight">Board Certified Specialist</p>
            </div>
          </motion.div>

          {/* Card 2: 24/7 Consultation */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-1/6 -right-6 sm:-right-10 glass-card p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/30 max-w-[190px]"
          >
            <div className="h-10 w-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-450">Availability</p>
              <p className="text-xs font-bold text-slate-800 dark:text-white leading-tight">24/7 Emergency Support</p>
            </div>
          </motion.div>

          {/* Card 3: Happy Patients */}
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-5 left-1/10 glass-card px-5 py-3 rounded-2xl shadow-lg flex items-center gap-2.5 border border-white/30"
          >
            <div className="flex -space-x-2.5">
              <img className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800 object-cover" src="/assets/patient-1.jpg" alt="Patient avatar" />
              <img className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800 object-cover" src="/assets/patient-2.jpg" alt="Patient avatar" />
              <img className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800 object-cover" src="/assets/patient-3.jpg" alt="Patient avatar" />
            </div>
            <span className="text-[11px] font-bold text-slate-700 dark:text-slate-200">
              Join <span className="text-primary dark:text-primary-light">10k+</span> patients
            </span>
          </motion.div>

        </div>
      </div>

      {/* Decorative Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 translate-y-px">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-[#FFFFFF] dark:text-[#0B0F19] fill-current"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1057.57,112,985.66,92.83Z" />
        </svg>
      </div>
    </section>
  );
}
