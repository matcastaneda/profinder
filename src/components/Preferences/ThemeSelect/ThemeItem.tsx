import React from 'react';
import clsx from 'clsx';
import { Listbox } from '@headlessui/react';
import { toast } from 'sonner';
import { FormattedMessage } from 'react-intl';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { TbCheck } from 'react-icons/tb';
import CustomIcon from 'components/CustomIcon';
import { type ThemeType, type ThemeItemInterface } from 'types';

interface ThemeItemProps {
  themeItem: ThemeItemInterface;
}

const ThemeItem: React.FC<ThemeItemProps> = ({ themeItem }) => {
  const { theme, icon, label } = themeItem;

  const handleToast = (theme: ThemeType) => {
    return toast.success(
      <div className="flex items-center space-x-2 pointer-events-none select-none">
        <CustomIcon icon={BsFillPatchCheckFill} size={18} />
        <p>
          <FormattedMessage
            id="app.modal.preferences-label.theme-toast-success"
            values={{
              theme: (
                <span className="font-bold">
                  <FormattedMessage id={`app.header.theme.${theme}`} />
                </span>
              ),
            }}
          />
        </p>
      </div>,
    );
  };

  return (
    <Listbox.Option as={React.Fragment} value={theme}>
      {({ selected }) => (
        <li
          onClick={() => handleToast(theme)}
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
