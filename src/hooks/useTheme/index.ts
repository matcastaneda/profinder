import { useEffect, useRef } from 'react';
import { useThemeStore } from 'store/theme';
import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicLayoutEffect';
import { updateThemeConfig } from 'utils/updateThemeConfig';
import { ThemeType } from 'types';

export const useTheme = () => {
  const initialRef = useRef(true);
  const storagedTheme = localStorage.getItem('theme') as ThemeType;
  const { theme, setTheme } = useThemeStore(state => ({
    theme: state.theme,
    setTheme: state.setTheme,
  }));

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

  return [theme, setTheme] as const;
};
