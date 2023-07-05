import { createContext, useContext } from 'react';
import { type ThemeType } from 'types';

type ThemeContextProps = {
  theme: ThemeType | null;
  setTheme: (theme: ThemeType) => void;
};

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
