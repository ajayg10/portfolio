import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { useTheme } from '../themes/ThemeContext';

const socialIcons = [
  { key: 'github', icon: Github, label: 'GitHub' },
  { key: 'linkedin', icon: Linkedin, label: 'LinkedIn' },
  { key: 'instagram', icon: Instagram, label: 'Instagram' },
  { key: 'email', icon: Mail, label: 'Email', isEmail: true },
];

export default function ContactSection({ profile }) {
  const { theme } = useTheme();

  return (
    <section id="contact" className="section section--alt">
      <div className="section__container">
        <div className="section__header" data-scroll-reveal data-scroll-type="fade-up">
          <h2 className="section__title">{theme.copy.contactTitle}</h2>
          <div className="section__divider">
            <div className="section__divider-line" />
            <span className="section__divider-icon">
              <Mail size={16} />
            </span>
          </div>
        </div>

        <div className="card card--large" data-scroll-reveal data-scroll-type="fade-up" data-scroll-delay="100">
          <p className="card__text card__text--center">{theme.copy.contactDesc}</p>

          <div className="social-grid">
            {socialIcons.map(({ key, icon: Icon, label, isEmail }, index) => {
              const href = isEmail
                ? `https://mail.google.com/mail/?view=cm&to=${profile.social[key]}&su=Hello%20Ajay`
                : profile.social[key];
              return (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  aria-label={label}
                  data-scroll-reveal
                  data-scroll-type="fade-up"
                  data-scroll-delay={`${200 + index * 120}`}
                >
                  <Icon size={40} className="social-card__icon" />
                  <span className="social-card__label">{label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
