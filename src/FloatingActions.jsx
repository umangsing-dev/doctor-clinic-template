import React, { useEffect, useState } from 'react';
import { MessageSquare, ArrowUp, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Floating Action Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3.5 pointer-events-auto">
        
        {/* Back to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-350 shadow-xl border border-slate-100 dark:border-slate-700 hover:text-primary dark:hover:text-primary-light hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Chat Button */}
        <a
          href="https://wa.me/18005550199"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 transition-all hover:scale-105 active:scale-98 flex items-center justify-center relative group focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
          aria-label="Chat with our clinic receptionist on WhatsApp"
        >
          {/* Pulsing ring indicator */}
          <span className="absolute -inset-1 rounded-full border border-emerald-400/50 animate-ping opacity-60 pointer-events-none" />
          
          <MessageSquare className="h-5.5 w-5.5 fill-current" />
          
          {/* Tooltip on hover */}
          <span className="absolute right-14 bg-slate-900 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-wider">
            WhatsApp Support
          </span>
        </a>

      </div>

      {/* Floating Book Appointment mobile-only bottom bar */}
      <div className="fixed bottom-0 inset-x-0 z-35 md:hidden p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-150 dark:border-slate-800/80 shadow-2xl flex items-center gap-4">
        <a
          href="#contact"
          className="flex-1 py-3 px-5 rounded-xl bg-primary text-white text-center font-bold text-sm shadow-md shadow-primary/25 hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
        >
          <Calendar className="h-4.5 w-4.5" />
          Book Appointment
        </a>
      </div>
    </>
  );
}
