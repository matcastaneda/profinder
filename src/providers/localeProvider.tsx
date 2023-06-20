import React from 'react';
import { IntlProvider } from 'react-intl';
import { useUserStore } from 'store/user';

import en from 'lang/en_US.json';
import es from 'lang/es_ES.json';

const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const locale = useUserStore(state => state.locale);
  const messages = { en, es };

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale]}
      defaultLocale={navigator.language.split(/[-_]/)[0]}>
      {children}
    </IntlProvider>
  );
};

export default LangProvider;
