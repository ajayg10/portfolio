// src/components/GoTPortfolio.jsx
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mail, Download, Menu, X, ChevronDown, Code, Map, Zap, Database, Cloud, Brush } from 'lucide-react'; // ADDED new icons
import profilePic from './assets/profile.png'; 
import logo from "./assets/logo.png";
import darkRealmBg from './assets/background.png';

const GoTPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Profile data - replace any values as needed
  const profile = {
    name: "Ajay Garg",
    tagline: "Forged by Logic",
    profilePic: profilePic,
    about:
      "I am a passionate developer and creative professional with a deep interest in building exceptional digital experiences. My journey in technology has been guided by curiosity and a relentless pursuit of excellence. Like the great houses of Westeros, I believe in honor, dedication, and the power of forging strong alliances.",
    skills: [
      { name: "Web Development", icon: Code }, // MODIFIED: Skills are now objects with icons
      { name: "UI/UX Design", icon: Brush },
      { name: "JavaScript & React", icon: Zap },
      { name: "Node.js & Backend", icon: Map },
      { name: "Database Management", icon: Database },
      { name: "Cloud Architecture", icon: Cloud }
    ],
    education: "3rd-year B.Tech in Computer Science (Cloud Computing specialization)",
    interests:
      "When I'm not coding, you'll find me exploring fantasy literature, playing strategy games, or contributing to open-source projects.",
    resumeUrl: "https://example.com/resume.pdf",
    social: {
      github: "https://github.com/ajayg10",
      linkedin: "https://www.linkedin.com/in/ajay-garg-647838301",
      instagram: "https://instagram.com/ajay.garg10",
      email: "ajaygarg200r@gmail.com"
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'resume', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // IMPROVED Active Section Logic
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    // run once on mount to initialize active section correctly
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-serif">
      {/* Navigation */}
      <nav
        aria-label="Primary"
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* IMPROVED logo accessibility with href */}
              <a
                href="#home"
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              >
                <img 
                  src={logo} 
                  alt="Ajay Garg Logo - Home"
                  className="object-contain cursor-pointer h-10 w-auto border-2 border-amber-700 rounded-full hover:border-amber-500 transition duration-300"
                />
              </a>
            </div>


            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8" role="menubar" aria-label="Main navigation">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm uppercase tracking-wider transition-colors ${
                    activeSection === item.id
                      ? 'text-amber-500 border-b-2 border-amber-500'
                      : 'text-gray-300 hover:text-amber-400'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-amber-500"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm" role="dialog" aria-modal="true">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-amber-500 hover:bg-gray-800/50 rounded uppercase tracking-wider"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background with overlay - Thematic Image for a stronger look */}
                    <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
                // MODIFIED: Use the imported local asset instead of the hardcoded URL string
                backgroundImage: `url(${darkRealmBg})`,
            }}
            aria-hidden="true"
            >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 space-y-8">
          {/* Profile Picture with ornate border */}
          <div className="relative inline-block group" aria-hidden="false">
            <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl group-hover:bg-amber-500/30 transition-all duration-500"></div>
            <div className="relative">
              <div className="w-48 h-48 mx-auto rounded-full border-4 border-amber-600 shadow-2xl overflow-hidden ring-4 ring-amber-900/50">
                <img
                  src={profile.profilePic}
                  alt={`${profile.name} — profile`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative corners - INCREASED SIZE FOR VISUAL IMPACT */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-amber-500" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-amber-500" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-amber-500" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-amber-500" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-amber-500 tracking-wide drop-shadow-[0_0_30px_rgba(245,158,11,0.5)]">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 italic tracking-widest uppercase">
              "{profile.tagline}"
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-black font-bold uppercase tracking-wider rounded shadow-lg hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Learn My History
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-transparent border-2 border-amber-600 hover:bg-amber-600/20 text-amber-500 font-bold uppercase tracking-wider rounded shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact The House
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-amber-500" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-500 mb-4 uppercase tracking-wider">
              My Oath and History
            </h2>
            {/* Thematic Divider with enhanced styling */}
            <div className="w-32 h-1 mx-auto relative mt-2">
              <div className="h-1 bg-amber-600" />
              <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 px-2">
                <Code size={16} className="text-amber-500" />
              </span>
            </div>
          </div>

          {/* Content Grid */}
          <div className="space-y-12">
            {/* Bio */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-amber-900/30 rounded-lg p-8 shadow-xl">
              <p className="text-gray-300 leading-relaxed text-lg">{profile.about}</p>
            </div>

            {/* Skills - Thematic Grid Display */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-amber-900/30 rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-amber-500 mb-6 uppercase tracking-wide">Skills: My Arsenal</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {profile.skills.map((skill, index) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 p-4 bg-gray-900/50 border border-amber-700/50 rounded hover:bg-amber-900/30 hover:border-amber-600 transition-all duration-300"
                    >
                      <SkillIcon size={30} className="text-amber-500" />
                      <span className="text-gray-300 text-center text-sm font-semibold">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-amber-900/30 rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-amber-500 mb-4 uppercase tracking-wide">Education: My Maester's Training</h3>
              <p className="text-gray-300 text-lg">{profile.education}</p>
            </div>

            {/* Interests */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-amber-900/30 rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-amber-500 mb-4 uppercase tracking-wide">Interests: What I Seek</h3>
              <p className="text-gray-300 text-lg">{profile.interests}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-500 mb-4 uppercase tracking-wider">The Chronicle (Resume)</h2>
            {/* Thematic Divider */}
            <div className="w-32 h-1 mx-auto relative mt-2">
              <div className="h-1 bg-amber-600" />
              <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black px-2">
                <Download size={16} className="text-amber-500" />
              </span>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-amber-900/30 rounded-lg p-12 shadow-xl space-y-8">
            <p className="text-gray-300 text-lg">
              Download my complete chronicle to witness my professional journey, training, and achievements.
            </p>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-black font-bold uppercase tracking-wider rounded shadow-lg hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <Download size={24} />
              Download Chronicle
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-500 mb-4 uppercase tracking-wider">Contact The House</h2>
            {/* Thematic Divider */}
            <div className="w-32 h-1 mx-auto relative mt-2">
              <div className="h-1 bg-amber-600" />
              <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 px-2">
                <Mail size={16} className="text-amber-500" />
              </span>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-amber-900/30 rounded-lg p-12 shadow-xl">
            <p className="text-gray-300 text-lg text-center mb-12">Let's connect! Send a raven through any of these platforms.</p>

            {/* Social Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-gray-900/50 hover:bg-amber-900/20 border border-amber-900/30 hover:border-amber-600 rounded-lg transition-all duration-300 transform hover:scale-105 group"
                aria-label="GitHub"
              >
                <Github size={40} className="text-amber-500 group-hover:text-amber-400" />
                <span className="text-gray-300 uppercase tracking-wide text-sm">GitHub</span>
              </a>

              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-gray-900/50 hover:bg-amber-900/20 border border-amber-900/30 hover:border-amber-600 rounded-lg transition-all duration-300 transform hover:scale-105 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={40} className="text-amber-500 group-hover:text-amber-400" />
                <span className="text-gray-300 uppercase tracking-wide text-sm">LinkedIn</span>
              </a>

              <a
                href={profile.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-gray-900/50 hover:bg-amber-900/20 border border-amber-900/30 hover:border-amber-600 rounded-lg transition-all duration-300 transform hover:scale-105 group"
                aria-label="Instagram"
              >
                <Instagram size={40} className="text-amber-500 group-hover:text-amber-400" />
                <span className="text-gray-300 uppercase tracking-wide text-sm">Instagram</span>
              </a>

              <a
                href={`mailto:${profile.social.email}`}
                className="flex flex-col items-center gap-3 p-6 bg-gray-900/50 hover:bg-amber-900/20 border border-amber-900/30 hover:border-amber-600 rounded-lg transition-all duration-300 transform hover:scale-105 group"
                aria-label="Email"
              >
                <Mail size={40} className="text-amber-500 group-hover:text-amber-400" />
                <span className="text-gray-300 uppercase tracking-wide text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-amber-900/30 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} {profile.name}. All rights reserved. The Code is My Word.</p>
          <p className="text-gray-500 text-xs mt-2 italic">"When you play the game of codes, you win or you get bugged."</p>
        </div>
      </footer>
    </div>
  );
};

export default GoTPortfolio;