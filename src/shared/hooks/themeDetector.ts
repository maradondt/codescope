import { useEffect, useState } from 'react';

export const useThemeDetector = () => {
  const getCurrentTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  useEffect(() => {
    const mqListener = (e: MediaQueryListEvent) => {
      setIsDarkTheme(e.matches);
    };
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addEventListener('change', mqListener);

    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);
  return isDarkTheme ? 'dark' : 'light';
};
