import { RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import { useUserStore } from 'store/user';
import { LanguageList, LanguageType } from 'types';
import IntlMessage from 'components/IntlMessage';
import { toast } from 'sonner';
import CustomIcon from 'components/CustomIcon';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';

const LanguageSelectModal = () => {
  const locale = useUserStore(state => state.locale);
  const setLanguage = useUserStore(state => state.setLocale);

  const languages: LanguageList[] = [
    {
      name: IntlMessage({ id: 'app.header.lang.en' }),
      code: 'en',
      image: '/us.svg',
    },
    {
      name: IntlMessage({ id: 'app.header.lang.es' }),
      code: 'es',
      image: '/es.svg',
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
    <section className="space-y-2">
      <h4>{IntlMessage({ id: 'app.modal.preferences-label.language' })}</h4>
      <RadioGroup value={locale} onChange={setLanguage}>
        <RadioGroup.Label className="sr-only">Select a theme</RadioGroup.Label>
        <ul className="flex items-center space-x-3 w-full">
          {languages.map(item => (
            <RadioGroup.Option
              as={'li'}
              key={item.code}
              value={item.code}
              onClick={() => handleToast(item.code)}
              className={({ checked }) =>
                clsx(
                  'group select-none cursor-pointer flex items-center justify-center rounded-md w-full px-2 py-5 text-sm font-medium',
                  checked
                    ? 'bg-sky-500 text-slate-50 cursor-auto pointer-events-none'
                    : 'md:hover:bg-slate-200 dark:md:hover:bg-slate-950/50 border border-sky-500/50',
                )
              }>
              <img src={item.image} alt={item.name} className="w-7" />
            </RadioGroup.Option>
          ))}
        </ul>
      </RadioGroup>
    </section>
  );
};

export default LanguageSelectModal;
