import { Menu } from '@headlessui/react';
import { TbChevronDown } from 'react-icons/tb';
import { useThemeStore } from 'store/theme';
import { type ThemeItemInterface } from 'types';

interface ThemeButtonProps {
  themeList: ThemeItemInterface[];
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ themeList }) => {
  const theme = useThemeStore(state => state.theme);

  return (
    <Menu.Button
      className="inline-flex space-x-4 items-center w-full justify-center rounded-md bg-slate-200/60 md:hover:bg-slate-200/80 dark:bg-slate-950/30 dark:md:hover:bg-slate-950/50 px-4 py-3 text-sm font-medium focus:outline-none"
      aria-hidden="true">
      <div className="flex items-center space-x-1">
        <span>{themeList.find(item => item.theme === theme)?.icon}</span>
        <span>{themeList.find(item => item.theme === theme)?.label}</span>
      </div>

      <TbChevronDown aria-hidden="true" className="w-5 h-5 -mr-2 opacity-40" />
    </Menu.Button>
  );
};

export default ThemeButton;
