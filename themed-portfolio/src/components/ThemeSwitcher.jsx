import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../themes/ThemeContext';
import themes, { themeOrder } from '../themes/themeConfig';

export default function ThemeSwitcher() {
  const { themeId, switchTheme, isTransitioning } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleThemeSelect = (id) => {
    switchTheme(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Transition overlay */}
      <div className={`theme-transition-overlay ${isTransitioning ? 'theme-transition-overlay--active' : ''}`} />

      <div className="theme-switcher" ref={containerRef}>
        {/* Picker panel */}
        <div className={`theme-switcher__panel ${isOpen ? 'theme-switcher__panel--open' : ''}`}>
          <div className="theme-switcher__panel-header">Choose Theme</div>
          {themeOrder.map((id) => {
            const t = themes[id];
            return (
              <button
                key={id}
                onClick={() => handleThemeSelect(id)}
                className={`theme-switcher__option ${id === themeId ? 'theme-switcher__option--active' : ''}`}
                title={t.name}
              >
                <span className="theme-switcher__option-icon">{t.icon}</span>
                <span className="theme-switcher__option-name">{t.name}</span>
                <span
                  className="theme-switcher__option-swatch"
                  style={{ backgroundColor: t.colors['--theme-primary'] }}
                />
              </button>
            );
          })}
        </div>

        {/* Fab button */}
        <button
          className={`theme-switcher__fab ${isOpen ? 'theme-switcher__fab--open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Change theme"
          title="Change theme"
        >
          <span className="theme-switcher__fab-icon">🎨</span>
        </button>
      </div>
    </>
  );
}
