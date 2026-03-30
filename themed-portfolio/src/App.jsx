import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './themes/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import useScrollReveal from './hooks/useScrollReveal';
import profileData from './data/profile';

const profile = profileData;

function PortfolioContent() {
  const { theme, themeId } = useTheme();

  // Re-initialize scroll reveal whenever theme changes
  // (DOM elements may have reset their classes)
  useScrollReveal();

  // Re-observe elements after theme change
  useEffect(() => {
    // Small delay to ensure DOM is rendered
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('[data-scroll-reveal]:not(.revealed)');
      if (elements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              const delay = parseInt(el.getAttribute('data-scroll-delay') || '0', 10);
              setTimeout(() => el.classList.add('revealed'), delay);
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
      );

      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [themeId]);

  return (
    <div className="themed-portfolio">
      <Navbar />
      <HeroSection profile={profile} />
      <AboutSection profile={profile} />
      <ResumeSection profile={profile} />
      <ContactSection profile={profile} />
      <Footer profile={profile} />
      <ThemeSwitcher />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}