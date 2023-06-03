import React from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { useTheme } from 'hooks/useTheme';
import ThemeButton from './ThemeButton';
import ThemeItem from './ThemeItem';
import { themeList } from 'utils/lists/themeList';
import { type ThemeType } from 'types';

const Theme = () => {
  const [theme, setTheme] = useTheme();

  return (
    <section className="relative inline-block text-left ml-auto select-none">
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
            className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-slate-200/60 dark:bg-slate-950/30 focus:outline-none">
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

export default Theme;
