export type ThemeType = 'light' | 'dark' | 'system';

export interface ThemeItemInterface {
  label: string;
  icon: JSX.Element;
  theme: ThemeType;
}

export type LanguageType = 'en' | 'es';

export interface LanguageList {
  name: string;
  code: LanguageType;
  image: string;
}
