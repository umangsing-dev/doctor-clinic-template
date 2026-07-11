import React from 'react';
import { Award, CheckCircle2, GraduationCap, Briefcase, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const credentials = [
    {
      icon: GraduationCap,
      title: 'Academic Degrees',
      desc: 'M.D. in Internal Medicine - Stanford University School of Medicine',
    },
    {
      icon: Award,
      title: 'Board Certifications',
      desc: 'American Board of Internal Medicine (ABIM) - Active Diplomat',
    },
    {
      icon: Briefcase,
      title: 'Clinical Experience',
      desc: '20+ Years Practice (Former Chief Resident at Cleveland Clinic)',
    },
    {
      icon: HeartHandshake,
      title: 'Affiliations & Awards',
      desc: 'Fellow of the American College of Physicians (FACP)',
    },
  ];

  const highlights = [
    'Board Certified Specialist',
    'Patient-Centered Care Model',
    'Advanced Preventative Medicine',
    'Evidence-Based Diagnostics',
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-bold text-primary dark:text-primary-light mb-3">
            Physician Profile
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
            Meet Dr. Sarah Wilson
          </h3>
          <div className="h-1 w-12 bg-primary rounded mt-4 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame Decorator */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary/30 rounded-tl-3xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary/30 rounded-br-3xl pointer-events-none" />
            
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-slate-50 dark:border-slate-800">
              <img
                src="/assets/doctor-sarah.jpg"
                alt="Portrait of Dr. Sarah Wilson"
                className="w-full aspect-[4/5] object-cover hover:scale-103 transition-transform duration-750"
                loading="lazy"
              />
              {/* Glassmorphic Trust Stats overlay */}
              <div className="absolute bottom-5 left-5 right-5 glass-card px-6 py-4 rounded-2xl flex justify-between text-center gap-4">
                <div>
                  <h4 className="text-xl font-bold text-slate-950 dark:text-white leading-tight">20+</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase mt-0.5">Years Practiced</p>
                </div>
                <div className="w-px bg-slate-200/50 dark:bg-slate-700/50" />
                <div>
                  <h4 className="text-xl font-bold text-slate-950 dark:text-white leading-tight">10k+</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase mt-0.5">Consultations</p>
                </div>
                <div className="w-px bg-slate-200/50 dark:bg-slate-700/50" />
                <div>
                  <h4 className="text-xl font-bold text-slate-950 dark:text-white leading-tight">99%</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase mt-0.5">Satisfaction</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col"
          >
            <span className="text-sm font-semibold text-primary dark:text-primary-light mb-2">Specialist in Internal Medicine</span>
            <h4 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-6">
              Dedicated to Preventive and Personalized Care
            </h4>
            
            <p className="text-slate-600 dark:text-slate-350 leading-relaxed mb-6">
              With over two decades of experience, Dr. Sarah Wilson has dedicated her career to providing comprehensive, evidence-based internal medicine diagnostics and treatment. She strongly believes in building lasting partnerships with her patients, addressing not just symptoms, but root causes of medical concerns.
            </p>

            {/* Mission Statement Callout */}
            <div className="pl-4 border-l-4 border-primary bg-slate-50 dark:bg-slate-800/40 p-4 rounded-r-2xl mb-8">
              <p className="text-sm italic font-medium text-slate-700 dark:text-slate-300">
                "My mission is to empower patients through education, proactive disease prevention, and cutting-edge diagnostics, ensuring that everyone receives medical care tailored to their unique biochemistry and lifestyle."
              </p>
            </div>

            {/* Qualifications / Timeline Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Credentials / Timeline List */}
            <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-550 mb-4">Credentials & Certifications</h5>
            <div className="flex flex-col gap-4">
              {credentials.map((cred, index) => {
                const IconComponent = cred.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-xl bg-slate-50 dark:bg-slate-850 flex items-center justify-center border border-slate-100 dark:border-slate-800 text-primary dark:text-primary-light shrink-0 mt-0.5">
                      <IconComponent className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h6 className="text-sm font-bold text-slate-850 dark:text-white">{cred.title}</h6>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{cred.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
