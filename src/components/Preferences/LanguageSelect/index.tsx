import React from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { toast } from 'sonner';
import { FormattedMessage } from 'react-intl';
import clsx from 'clsx';
import { TbCheck } from 'react-icons/tb';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { useUserStore } from 'store/user';
import IntlMessage from 'components/IntlMessage';
import CustomIcon from 'components/CustomIcon';
import { type LanguageList, type LanguageType } from 'types';
import EnglishFlagIcon from 'components/icons/EnglishFlagIcon';
import SpanishFlagIcon from 'components/icons/SpanishFlagIcon';
import { IconType } from 'react-icons';

const LanguageSelect = () => {
  const locale = useUserStore(state => state.locale);
  const setLanguage = useUserStore(state => state.setLocale);

  const languages: LanguageList[] = [
    {
      name: IntlMessage({ id: 'app.header.lang.en' }),
      code: 'en',
      icon: EnglishFlagIcon,
    },
    {
      name: IntlMessage({ id: 'app.header.lang.es' }),
      code: 'es',
      icon: SpanishFlagIcon,
    },
  ];

  const handleToast = (lang: LanguageType) => {
    return toast.success(
      <div className="flex items-center space-x-2 pointer-events-none select-none">
        <CustomIcon icon={BsFillPatchCheckFill} size={18} />
        <p>
          <FormattedMessage
            id="app.modal.preferences-label.language-toast-success"
            values={{
              lang: (
                <span className="font-bold">
                  <FormattedMessage id={`app.header.lang.${lang}`} />
                </span>
              ),
            }}
          />
        </p>
      </div>,
    );
  };

  return (
    <section className="relative inline-block text-left select-none">
      <Listbox
        value={languages.find(lang => lang.code === locale)}
        onChange={value => setLanguage(value.code)}>
        <Listbox.Button className="flex items-center space-x-2">
          <div className="inline-flex items-center w-full justify-center rounded-md text-xs md:text-sm font-medium focus:outline-none">
            <CustomIcon
              icon={
                languages.find(lang => lang.code === locale)?.icon as IconType
              }
              size={18}
              className="w-6"
            />
            {/* <img
              src={languages.find(lang => lang.code === locale)?.image}
              alt={languages.find(lang => lang.code === locale)?.name}
              className="w-6"
            /> */}
          </div>
        </Listbox.Button>

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
            className="absolute z-50 right-0 mt-6 w-40 origin-top-right shadow-md rounded-md bg-slate-100 dark:bg-slate-900 focus:outline-none">
            <ul className="p-2 space-y-1">
              {languages.map(lang => (
                <Listbox.Option
                  key={lang.code}
                  as={React.Fragment}
                  value={lang}>
                  {({ selected }) => (
                    <li
                      onClick={() => handleToast(lang.code)}
                      className={clsx(
                        'group cursor-pointer flex items-center rounded-md w-full p-2 text-sm font-medium divide-transparent focus:outline-none',
                        selected
                          ? 'text-sky-500 cursor-auto pointer-events-none'
                          : 'md:hover:bg-slate-200 dark:md:hover:bg-slate-950/50',
                      )}>
                      <div className="flex items-center space-x-2">
                        <CustomIcon
                          icon={lang.icon}
                          size={18}
                          className="w-5"
                        />
                        {/* <img src={lang.image} alt={lang.name} className="w-5" /> */}
                        <span>{lang.name}</span>
                      </div>

                      {selected ? (
                        <TbCheck
                          aria-hidden="true"
                          className="w-4 h-4 ml-auto"
                        />
                      ) : null}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </ul>
          </Listbox.Options>
        </Transition>
      </Listbox>
    </section>
  );
};

export default LanguageSelect;
