import { ThemeEnum } from './utils/enums/theme';

export type ThemeType = 'light' | 'dark' | 'system';

export interface ThemeItemInterface {
  label: ThemeEnum;
  icon: JSX.Element;
  theme: ThemeType;
}
