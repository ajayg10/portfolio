import React from 'react';
import { Download } from 'lucide-react';
import { useTheme } from '../themes/ThemeContext';

export default function ResumeSection({ profile }) {
  const { theme } = useTheme();

  return (
    <section id="resume" className="section section--default">
      <div className="section__container section__container--center">
        <div className="section__header" data-scroll-reveal data-scroll-type="fade-up">
          <h2 className="section__title">{theme.copy.resumeTitle}</h2>
          <div className="section__divider">
            <div className="section__divider-line" />
            <span className="section__divider-icon">
              <Download size={16} />
            </span>
          </div>
        </div>

        <div
          className="card card--large"
          data-scroll-reveal
          data-scroll-type="flip-in"
          data-scroll-delay="200"
        >
          <p className="card__text card__text--center">{theme.copy.resumeDesc}</p>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--large"
          >
            <Download size={24} />
            {theme.copy.resumeButton}
          </a>
        </div>
      </div>
    </section>
  );
}
