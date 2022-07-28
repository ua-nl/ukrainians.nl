import { useState } from 'react';

import { defaultLocale } from '../../lib/defaultLocale';
import { AppLocale } from '../../lib/types/app-locale.types';
import { LocaleContext } from './LocaleContext';
import { LocaleContextControllerProps } from './LocaleContextController.types';

export const LocaleContextController = ({
  children,
}: LocaleContextControllerProps) => {
  const [locale, setLocale] = useState<AppLocale>(defaultLocale);

  return (
    <LocaleContext.Provider value={{ defaultLocale, locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
