import { useContext, useMemo } from 'react';

import { LocaleContext } from '../../context/locale/LocaleContext';
import { LocaleContextValueType } from '../../context/locale/LocaleContext.types';

export const useLocale = (): LocaleContextValueType => {
  const localeContext = useContext(LocaleContext);

  if (localeContext === undefined) {
    throw new Error(
      'LocaleContext is unavailable, make sure you are using LocaleContextController',
    );
  }

  const locale = useMemo(
    () => ({
      ...localeContext,
    }),
    [localeContext],
  );

  return locale;
};
