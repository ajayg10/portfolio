import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import themes from './themeConfig';

const ThemeContext = createContext(null);

const STORAGE_KEY = 'portfolio-theme';

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && themes[saved]) return saved;
    } catch {}
    return 'got';
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  const theme = themes[themeId];

  // Apply CSS custom properties to :root
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([prop, value]) => {
      root.style.setProperty(prop, value);
    });
    root.style.setProperty('--theme-font-heading', theme.fonts.heading);
    root.style.setProperty('--theme-font-body', theme.fonts.body);
  }, [theme]);

  // Persist theme choice
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, themeId);
    } catch {}
  }, [themeId]);

  const switchTheme = useCallback((newThemeId) => {
    if (newThemeId === themeId || !themes[newThemeId]) return;
    setIsTransitioning(true);
    // Brief delay for transition overlay
    setTimeout(() => {
      setThemeId(newThemeId);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }, 300);
  }, [themeId]);

  return (
    <ThemeContext.Provider value={{ theme, themeId, switchTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}

export default ThemeContext;
