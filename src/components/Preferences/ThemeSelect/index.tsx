import React from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { MdMonitor } from 'react-icons/md';
import ThemeButton from './ThemeButton';
import ThemeItem from './ThemeItem';
import IntlMessage from 'components/IntlMessage';
import { ThemeItemInterface, type ThemeType } from 'types';
import { useThemeContext } from 'providers/theme/themeContext';

const ThemeSelect = () => {
  const { theme, setTheme } = useThemeContext();

  const themeList: ThemeItemInterface[] = [
    {
      label: IntlMessage({ id: 'app.header.theme.light' }),
      icon: <HiSun className="w-5 h-5" />,
      theme: 'light',
    },
    {
      label: IntlMessage({ id: 'app.header.theme.dark' }),
      icon: <HiMoon className="w-5 h-5" />,
      theme: 'dark',
    },
    {
      label: IntlMessage({ id: 'app.header.theme.system' }),
      icon: <MdMonitor className="w-5 h-5" />,
      theme: 'system',
    },
  ];

  return (
    <section className="relative inline-block text-left select-none">
      <Listbox as={React.Fragment} value={theme} onChange={setTheme}>
        <ThemeButton themeList={themeList} theme={theme as ThemeType} />

        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Listbox.Options
            as={'div'}
            className="absolute z-50 right-0 mt-2 w-40 origin-top-right shadow-md rounded-md bg-white dark:bg-slate-900 focus:outline-none">
            <ul className="p-2 space-y-1">
              {themeList.map(item => (
                <ThemeItem key={item.theme} themeItem={{ ...item }} />
              ))}
            </ul>
          </Listbox.Options>
        </Transition>
      </Listbox>
    </section>
  );
};

export default ThemeSelect;
