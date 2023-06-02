import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { MdMonitor } from 'react-icons/md';
import { ThemeEnum } from 'utils/enums/theme';
import ThemeButton from './ThemeButton';
import ThemeItem from './ThemeItem';
import { type ThemeItemInterface } from 'types';

const Theme = () => {
  const themeList: ThemeItemInterface[] = [
    {
      label: ThemeEnum.Light,
      icon: <HiSun aria-hidden="true" className="w-5 h-5" />,
      theme: 'light',
    },
    {
      label: ThemeEnum.Dark,
      icon: <HiMoon aria-hidden="true" className="w-5 h-5" />,
      theme: 'dark',
    },
    {
      label: ThemeEnum.System,
      icon: <MdMonitor aria-hidden="true" className="w-5 h-5" />,
      theme: 'system',
    },
  ];

  return (
    <Menu
      as={'section'}
      className="relative inline-block text-left ml-auto select-none">
      <ThemeButton themeList={themeList} />

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-slate-200/60 dark:bg-slate-950/30 focus:outline-none">
          <ul className="p-2 space-y-1">
            {themeList.map(selectedTheme => (
              <ThemeItem
                key={selectedTheme.theme}
                selectedTheme={selectedTheme}
              />
            ))}
          </ul>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Theme;
