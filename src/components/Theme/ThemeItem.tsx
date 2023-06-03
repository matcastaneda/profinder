import React from 'react';
import { Listbox } from '@headlessui/react';
import { TbCheck } from 'react-icons/tb';
import clsx from 'clsx';
import { type ThemeItemInterface } from 'types';

interface ThemeItemProps {
  themeItem: ThemeItemInterface;
}

const ThemeItem: React.FC<ThemeItemProps> = ({ themeItem }) => {
  const { theme, icon, label } = themeItem;

  return (
    <Listbox.Option as={React.Fragment} value={theme}>
      {({ selected }) => (
        <li
          className={clsx(
            'group cursor-pointer flex items-center rounded-md w-full p-2 text-sm font-medium divide-transparent focus:outline-none',
            selected
              ? 'text-sky-500 cursor-auto pointer-events-none'
              : 'md:hover:bg-slate-200 dark:md:hover:bg-slate-950/50',
          )}>
          <div className="flex items-center space-x-2">
            <span>{icon}</span>
            <span>{label}</span>
          </div>

          {selected ? (
            <TbCheck aria-hidden="true" className="w-4 h-4 ml-auto" />
          ) : null}
        </li>
      )}
    </Listbox.Option>
  );
};

export default ThemeItem;
