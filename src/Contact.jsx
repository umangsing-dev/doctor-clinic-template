import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldAlert, CheckCircle, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Consultation',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^[+]?[0-9]{8,15}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/[\s-()]/g, ''))) {
      tempErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Please enter your message or health concern';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear error as typing
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setShowToast(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'General Consultation',
          message: '',
        });
        // Auto-close toast
        setTimeout(() => setShowToast(false), 5000);
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#F5F9FC] dark:bg-[#0E1524] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-bold text-primary dark:text-primary-light mb-3">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
            Schedule Your Visit
          </h3>
          <div className="h-1 w-12 bg-primary rounded mt-4 mx-auto" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-5 leading-relaxed">
            Fill out the form to request an appointment, or contact our medical desk directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact info & Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Info Cards */}
            <div className="glass-card p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 flex flex-col gap-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Clinic Address</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    100 Medical Plaza, Suite 400<br />Beverly Hills, CA 90210
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Direct Appointments</h4>
                  <a
                    href="tel:+18005550199"
                    className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary-light font-medium mt-1 inline-block transition-colors"
                  >
                    +1-800-555-0199
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Email Inquiries</h4>
                  <a
                    href="mailto:contact@drwilsonclinic.com"
                    className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary-light font-medium mt-1 inline-block transition-colors"
                  >
                    contact@drwilsonclinic.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Working Hours</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Mon - Fri: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>

              {/* Emergency Hotline */}
              <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-2xl">
                <div className="h-10 w-10 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-650 dark:text-red-405 flex items-center justify-center shrink-0">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-red-800 dark:text-red-300 text-sm">Emergency Hotlines</h4>
                  <a
                    href="tel:+18005550198"
                    className="text-xs font-bold text-red-600 dark:text-red-400 hover:underline mt-1 block"
                  >
                    +1-800-555-0198 (24/7 Registered Patients)
                  </a>
                </div>
              </div>

            </div>

            {/* Mock Google Map Embed */}
            <div className="h-64 rounded-3xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 relative bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
              <iframe
                title="Dr. Sarah Wilson's Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.7644917531773!2d-118.40263658448834!3d34.07361732395562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1d3304.76!2d-118.40!3d34.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1625902100000!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full border-0 opacity-80 dark:opacity-60 grayscale dark:invert"
                allowFullScreen=""
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-xl shadow text-[10px] font-bold text-slate-800 dark:text-white flex items-center gap-1.5 pointer-events-none">
                <MapPin className="h-3 w-3 text-primary" />
                Beverly Hills Medical Plaza
              </div>
            </div>
          </motion.div>

          {/* Right Column: Appointment Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 flex flex-col gap-6"
              noValidate
            >
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Request an Appointment</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-red-400 focus:ring-red-400/30'
                        : 'border-slate-200 dark:border-slate-800 focus:border-primary focus:ring-primary/20'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-500 font-semibold flex items-center gap-1">
                      <AlertTriangle className="h-3.5 w-3.5" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-400 focus:ring-red-400/30'
                        : 'border-slate-200 dark:border-slate-800 focus:border-primary focus:ring-primary/20'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 font-semibold flex items-center gap-1">
                      <AlertTriangle className="h-3.5 w-3.5" /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? 'border-red-400 focus:ring-red-400/30'
                        : 'border-slate-200 dark:border-slate-800 focus:border-primary focus:ring-primary/20'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-500 font-semibold flex items-center gap-1">
                      <AlertTriangle className="h-3.5 w-3.5" /> {errors.phone}
                    </span>
                  )}
                </div>

                {/* Subject / Service Selection */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                    Required Service
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-700 dark:text-slate-300"
                  >
                    <option>General Consultation</option>
                    <option>Preventive Care</option>
                    <option>Family Medicine</option>
                    <option>Health Checkup</option>
                    <option>Vaccination</option>
                    <option>Diabetes Care</option>
                    <option>Heart Care</option>
                    <option>Online Consultation</option>
                  </select>
                </div>

              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                  Health Concern / Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Describe your health requirements or booking dates..."
                  className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.message
                      ? 'border-red-400 focus:ring-red-400/30'
                      : 'border-slate-200 dark:border-slate-800 focus:border-primary focus:ring-primary/20'
                  }`}
                />
                {errors.message && (
                  <span className="text-[11px] text-red-500 font-semibold flex items-center gap-1">
                    <AlertTriangle className="h-3.5 w-3.5" /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-all duration-300 shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 disabled:bg-slate-350 dark:disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Validating Request...
                  </>
                ) : (
                  'Submit Booking Request'
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>

      {/* Success Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 glass-card bg-emerald-50/95 dark:bg-emerald-950/90 border border-emerald-250 dark:border-emerald-800 p-4 rounded-2xl shadow-xl flex items-center gap-3.5 max-w-sm"
          >
            <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle className="h-5 w-5" />
            </div>
            <div>
              <h5 className="font-bold text-emerald-900 dark:text-emerald-200 text-sm">Request Submitted!</h5>
              <p className="text-xs text-emerald-700/80 dark:text-emerald-400/80 mt-0.5">
                Our clinic manager will call you shortly to confirm your booking details.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
