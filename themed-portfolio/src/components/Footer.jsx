import React from 'react';
import { useTheme } from '../themes/ThemeContext';

export default function Footer({ profile }) {
  const { theme } = useTheme();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copyright">
          © {new Date().getFullYear()} {profile.name}. All rights reserved. {theme.copy.footerLine}
        </p>
        <p className="footer__quote">{theme.copy.footerQuote}</p>
      </div>
    </footer>
  );
}
