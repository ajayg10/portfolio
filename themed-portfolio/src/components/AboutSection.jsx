import React from 'react';
import { Code } from 'lucide-react';
import { useTheme } from '../themes/ThemeContext';

export default function AboutSection({ profile }) {
  const { theme } = useTheme();

  return (
    <section id="about" className="section section--alt">
      <div className="section__container">
        {/* Header */}
        <div className="section__header" data-scroll-reveal data-scroll-type="fade-up">
          <h2 className="section__title">{theme.copy.aboutTitle}</h2>
          <div className="section__divider">
            <div className="section__divider-line" />
            <span className="section__divider-icon">
              <Code size={16} />
            </span>
          </div>
        </div>

        <div className="section__content-stack">
          {/* Bio */}
          <div className="card" data-scroll-reveal data-scroll-type="fade-up" data-scroll-delay="100">
            <p className="card__text">{theme.copy.about}</p>
          </div>

          {/* Skills */}
          <div className="card" data-scroll-reveal data-scroll-type="fade-up" data-scroll-delay="200">
            <h3 className="card__title">{theme.copy.skillsTitle}</h3>
            <div className="skills-grid">
              {profile.skills.map((skill, index) => {
                const SkillIcon = skill.icon;
                return (
                  <div
                    key={index}
                    className="skill-item"
                    data-scroll-reveal
                    data-scroll-type="zoom-rotate"
                    data-scroll-delay={`${300 + index * 100}`}
                  >
                    <SkillIcon size={30} className="skill-item__icon" />
                    <span className="skill-item__label">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <div className="card" data-scroll-reveal data-scroll-type="fade-left" data-scroll-delay="200">
            <h3 className="card__title">{theme.copy.educationTitle}</h3>
            <p className="card__text">{profile.education}</p>
          </div>

          {/* Interests */}
          <div className="card" data-scroll-reveal data-scroll-type="fade-right" data-scroll-delay="300">
            <h3 className="card__title">{theme.copy.interestsTitle}</h3>
            <p className="card__text">{profile.interests}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
