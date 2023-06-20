import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import { TbChevronDown } from 'react-icons/tb';
import { type ThemeType, type ThemeItemInterface } from 'types';

interface ThemeButtonProps {
  themeList: ThemeItemInterface[];
  theme: ThemeType;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ themeList, theme }) => {
  return (
    <Listbox.Button aria-hidden="true">
      {({ open }) => (
        <div
          className={clsx(
            'inline-flex space-x-2 md:space-x-4 items-center w-full justify-center rounded-md bg-slate-200/60 md:hover:bg-slate-200 dark:bg-slate-950/30 dark:md:hover:bg-slate-950/50 px-4 py-2 md:px-4 md:py-3 text-xs md:text-sm font-medium focus:outline-none',
            open && 'bg-slate-200 dark:bg-slate-950/50',
          )}>
          <div className="flex items-center space-x-1">
            {themeList.find(item => item.theme === theme)?.icon}
            <p className="hidden md:block">
              {themeList.find(item => item.theme === theme)?.label}
            </p>
          </div>

          <TbChevronDown
            aria-hidden="true"
            className={clsx(
              'w-4 h-4 transition-transform duration-200',
              open && 'transform rotate-180',
            )}
          />
        </div>
      )}
    </Listbox.Button>
  );
};

export default ThemeButton;
