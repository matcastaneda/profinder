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
      className="inline-flex space-x-4 items-center w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-3 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      aria-hidden="true">
      <div className="flex items-center space-x-1">
        <span>{themeList.find(item => item.theme === theme)?.icon}</span>
        <span>{themeList.find(item => item.theme === theme)?.label}</span>
      </div>

      <TbChevronDown
        aria-hidden="true"
        className="w-5 h-5 -mr-2 text-violet-200 hover:text-violet-100"
      />
    </Menu.Button>
  );
};

export default ThemeButton;
