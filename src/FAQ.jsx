import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const faqs = [
    {
      question: 'How do I schedule an appointment with Dr. Wilson?',
      answer: 'You can book an appointment directly through our website by filling out the booking form in the Contact section, or by calling our office line at 1-800-555-0199. Our administrative team will help confirm a suitable slot within 24 hours.',
    },
    {
      question: 'Do you accept my medical insurance?',
      answer: 'Yes, we accept major commercial insurance providers, including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and Medicare. We recommend calling our billing desk prior to your visit to verify coverage details.',
    },
    {
      question: 'What should I bring to my first consultation?',
      answer: 'Please bring a valid photo ID, your insurance card, a list of current prescription medications, dosages, and any relevant recent medical records or lab reports from other clinics.',
    },
    {
      question: 'Are telemedicine/online consultations available?',
      answer: 'Yes, we offer secure HIPAA-compliant video consultations for follow-ups, diagnostic reviews, and prescription adjustments. These can be booked through the same appointment scheduling form.',
    },
    {
      question: 'What is your clinic\'s emergency policy?',
      answer: 'For life-threatening medical emergencies, please dial 911 immediately or visit the nearest hospital emergency room. For urgent issues that arise after hours, registered clinic patients can call our emergency line at 1-800-555-0198.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-[#0B0F19] relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest font-bold text-primary dark:text-primary-light mb-3">
            Inquiries
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h3>
          <div className="h-1 w-12 bg-primary rounded mt-4 mx-auto" />
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-primary/30 dark:border-primary-light/30 bg-slate-50/50 dark:bg-slate-900/30'
                    : 'border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/10'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:text-primary dark:hover:text-primary-light transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-800 dark:text-white text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="h-6 w-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>

                {/* Accordion Content Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
