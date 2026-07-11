import React from 'react';
import { Facebook, Instagram, Linkedin, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Column 1: Brand details */}
        <div className="flex flex-col gap-4">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center shadow-md shadow-primary/20">
              <svg
                className="h-4.5 w-4.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base text-white leading-tight">
                Dr. Sarah Wilson
              </span>
              <span className="text-[9px] tracking-wider text-slate-500 font-medium uppercase">
                Internal Medicine Specialist
              </span>
            </div>
          </a>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            Providing modern, personalized internal medicine diagnostic scans and preventative wellness programs in Beverly Hills, California.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-lg bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-colors"
              aria-label="Facebook Page"
            >
              <Facebook className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-lg bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-lg bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-colors"
              aria-label="LinkedIn Professional Bio"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">Quick Links</h4>
          <ul className="flex flex-col gap-3.5 text-xs sm:text-sm">
            <li>
              <a href="#home" className="hover:text-primary transition-colors">
                Home Page
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary transition-colors">
                About Dr. Wilson
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary transition-colors">
                Medical Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-primary transition-colors">
                Patient Reviews
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-primary transition-colors">
                FAQs & Insurance
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Medical Services */}
        <div>
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">Services</h4>
          <ul className="flex flex-col gap-3.5 text-xs sm:text-sm">
            <li>
              <a href="#services" className="hover:text-primary transition-colors">
                General Consultation
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary transition-colors">
                Preventive Health Screenings
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary transition-colors">
                Diabetes Therapy Plans
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary transition-colors">
                Cardiovascular Evaluations
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary transition-colors">
                Online Videoconferencing
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Location & Info */}
        <div className="flex flex-col gap-3.5 text-xs sm:text-sm">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-2">Clinic Information</h4>
          <p>
            <span className="font-bold text-slate-350">Clinic Address:</span>
            <br />
            100 Medical Plaza, Suite 400
            <br />
            Beverly Hills, CA 90210
          </p>
          <p>
            <span className="font-bold text-slate-350">Appointments Desk:</span>
            <br />
            +1-800-555-0199
          </p>
          <p>
            <span className="font-bold text-slate-350">24/7 Patient Emergency:</span>
            <br />
            +1-800-555-0198
          </p>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500">
          © {currentYear} Dr. Sarah Wilson Clinic. All rights reserved.
        </p>
        <p className="text-xs text-slate-500 flex items-center gap-1.5 justify-center">
          Designed with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> for healthcare excellence.
        </p>
      </div>
    </footer>
  );
}
