import { RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import { toast } from 'sonner';
import { useThemeContext } from 'providers/theme/themeContext';
import { HiMoon, HiSun } from 'react-icons/hi';
import { MdMonitor } from 'react-icons/md';
import { ThemeItemInterface, ThemeType } from 'types';
import { FormattedMessage } from 'react-intl';
import CustomIcon from 'components/CustomIcon';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import IntlMessage from 'components/IntlMessage';

const ThemeSelectModal = () => {
  const { theme, setTheme } = useThemeContext();

  const themeList: ThemeItemInterface[] = [
    {
      label: IntlMessage({ id: 'app.header.theme.light' }),
      icon: <HiSun className="w-6 h-6" />,
      theme: 'light',
    },
    {
      label: IntlMessage({ id: 'app.header.theme.dark' }),
      icon: <HiMoon className="w-6 h-6" />,
      theme: 'dark',
    },
    {
      label: IntlMessage({ id: 'app.header.theme.system' }),
      icon: <MdMonitor className="w-6 h-6" />,
      theme: 'system',
    },
  ];

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
    <section className="space-y-2">
      <h4>{IntlMessage({ id: 'app.modal.preferences-label.theme' })}</h4>
      <RadioGroup value={theme} onChange={setTheme}>
        <RadioGroup.Label className="sr-only">Select a theme</RadioGroup.Label>
        <ul className="flex items-center space-x-3 w-full">
          {themeList.map(item => (
            <RadioGroup.Option
              as={'li'}
              key={item.theme}
              value={item.theme}
              onClick={() => handleToast(item.theme)}
              className={({ checked }) =>
                clsx(
                  'group select-none cursor-pointer flex items-center justify-center rounded-md w-full px-2 py-4 text-sm font-medium',
                  checked
                    ? 'bg-sky-500 text-slate-50 cursor-auto pointer-events-none'
                    : 'md:hover:bg-slate-200 dark:md:hover:bg-slate-950/50 border border-sky-500/50',
                )
              }>
              <div className="flex items-center">
                <span>{item.icon}</span>
              </div>
            </RadioGroup.Option>
          ))}
        </ul>
      </RadioGroup>
    </section>
  );
};

export default ThemeSelectModal;
