import { HiMoon, HiSun } from 'react-icons/hi';
import { MdMonitor } from 'react-icons/md';
import { ThemeEnum } from 'utils/enums/theme';
import { type ThemeItemInterface } from 'types';

export const themeList: ThemeItemInterface[] = [
  {
    label: ThemeEnum.Light,
    icon: <HiSun className="w-5 h-5" />,
    theme: 'light',
  },
  {
    label: ThemeEnum.Dark,
    icon: <HiMoon className="w-5 h-5" />,
    theme: 'dark',
  },
  {
    label: ThemeEnum.System,
    icon: <MdMonitor className="w-5 h-5" />,
    theme: 'system',
  },
];
