import React from 'react';
import { Menu } from '@headlessui/react';
import clsx from 'clsx';
import { useThemeStore } from 'store/theme';
import { type ThemeItemInterface } from 'types';

interface ThemeItemProps {
  selectedTheme: ThemeItemInterface;
}

const ThemeItem: React.FC<ThemeItemProps> = ({ selectedTheme }) => {
  const theme = useThemeStore(state => state.theme);
  const setTheme = useThemeStore(state => state.setTheme);

  return (
    <Menu.Item as={React.Fragment}>
      <li
        className={clsx(
          'group cursor-pointer flex items-center space-x-2 rounded-md w-full p-2 text-gray-700 ui-active:bg-gray-100 font-semibold text-sm',
          selectedTheme.theme === theme ? 'text-sky-500' : '',
        )}
        onClick={() => setTheme(selectedTheme.theme)}>
        <span>{selectedTheme.icon}</span>
        <span>{selectedTheme.label}</span>
      </li>
    </Menu.Item>
  );
};

export default ThemeItem;
