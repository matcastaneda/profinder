import React from 'react';
import { Menu } from '@headlessui/react';
import { TbCheck } from 'react-icons/tb';
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
          'group cursor-pointer flex items-center rounded-md w-full p-2 text-sm font-medium',
          selectedTheme.theme === theme
            ? 'text-sky-500 cursor-auto pointer-events-none'
            : 'md:hover:bg-slate-200 dark:md:hover:bg-slate-950/50',
        )}
        onClick={() => setTheme(selectedTheme.theme)}>
        <div className="flex items-center space-x-2">
          <span>{selectedTheme.icon}</span>
          <span>{selectedTheme.label}</span>
        </div>

        {selectedTheme.theme === theme ? (
          <TbCheck aria-hidden="true" className="w-4 h-4 ml-auto" />
        ) : null}
      </li>
    </Menu.Item>
  );
};

export default ThemeItem;
