import { useEffect, useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicLayoutEffect';
import { updateThemeConfig } from 'utils/updateThemeConfig';
import { type ThemeType } from 'types';
import { ThemeContext } from './themeContext';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const initialRef = useRef(true);
  const [theme, setTheme] = useState<ThemeType | null>(null);

  const storagedTheme = localStorage.getItem('theme') as ThemeType;

  useIsomorphicLayoutEffect(() => {
    if (storagedTheme === 'light' || storagedTheme === 'dark') {
      setTheme(storagedTheme);
    } else {
      setTheme('system');
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (theme === 'system') {
      localStorage.removeItem('theme');
    } else if (theme === 'light' || theme === 'dark') {
      localStorage.setItem('theme', theme);
    }
    if (initialRef.current) {
      initialRef.current = false;
    } else {
      updateThemeConfig();
    }
  }, [theme]);

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');

    if (matchMedia?.addEventListener) {
      matchMedia.addEventListener('change', updateThemeConfig);
    } else {
      matchMedia.addListener(updateThemeConfig);
    }

    const handleStorage = () => {
      updateThemeConfig();
      if (storagedTheme === 'light' || storagedTheme === 'dark') {
        setTheme(storagedTheme);
      } else {
        setTheme('system');
      }
    };

    window.addEventListener('storage', handleStorage);

    return () => {
      if (matchMedia?.removeEventListener) {
        matchMedia.removeEventListener('change', updateThemeConfig);
      } else {
        matchMedia.removeListener(updateThemeConfig);
      }

      window.removeEventListener('storage', handleStorage);
    };
  }, [setTheme, storagedTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
