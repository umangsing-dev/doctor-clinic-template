import React from 'react';
import useDarkMode from './hooks/useDarkMode';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <>
      {/* Premium Loader */}
      <LoadingScreen />

      {/* Main Container */}
      <div className="min-h-screen flex flex-col relative overflow-x-hidden selection:bg-primary/20 selection:text-primary-dark">
        {/* Sticky Header Navigation */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Section Blocks */}
        <main className="flex-1">
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <Statistics />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>

        {/* Footer info */}
        <Footer />

        {/* Floating actions & mobile layouts */}
        <FloatingActions />
      </div>
    </>
  );
}
