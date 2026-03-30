import React, { useEffect, useRef, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../themes/ThemeContext';

export default function HeroSection({ profile }) {
  const { theme } = useTheme();
  const particlesRef = useRef(null);
  const sectionRef = useRef(null);

  // Parallax on scroll
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bg = section.querySelector('.hero__bg');
      const content = section.querySelector('.hero__content');
      if (bg) bg.style.transform = `translateY(${scrollY * 0.4}px) scale(1.1)`;
      if (content) content.style.transform = `translateY(${scrollY * 0.15}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ambient particles
  const particles = useMemo(() => {
    const count = theme.particles?.count || 20;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 8,
      duration: Math.random() * 6 + 4,
      opacity: Math.random() * 0.6 + 0.2,
    }));
  }, [theme.particles?.count]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" ref={sectionRef}>
      {/* Background */}
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${theme.background})` }}
        aria-hidden="true"
      />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__radial-overlay" aria-hidden="true" />

      {/* Particles */}
      <div className="hero__particles" ref={particlesRef} aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className={`particle particle--${theme.particles?.type || 'embers'}`}
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              opacity: p.opacity,
              backgroundColor: theme.particles?.color || theme.colors['--theme-primary'],
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="hero__content" data-scroll-reveal data-scroll-type="fade-up">
        {/* Profile picture */}
        <div className="hero__profile-wrapper">
          <div className="hero__profile-glow" />
          <div className="hero__profile-ring">
            <div className="hero__profile-img-wrapper">
              <img
                src={theme.profilePic}
                alt={`${profile.name} — profile`}
                className="hero__profile-img"
              />
            </div>
            {/* Corner ornaments */}
            <div className="hero__corner hero__corner--tl" />
            <div className="hero__corner hero__corner--tr" />
            <div className="hero__corner hero__corner--bl" />
            <div className="hero__corner hero__corner--br" />
          </div>
        </div>

        <div className="hero__text">
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__tagline">"{theme.copy.tagline}"</p>
        </div>

        <div className="hero__buttons">
          <button
            onClick={() => scrollToSection('about')}
            className="btn btn--primary"
          >
            {theme.copy.heroButton1}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn btn--outline"
          >
            {theme.copy.heroButton2}
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll-indicator">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
}
