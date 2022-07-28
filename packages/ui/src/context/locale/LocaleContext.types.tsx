import { AppLocale } from '../../lib/types/app-locale.types';

export type LocaleContextValueType = {
  defaultLocale: AppLocale;
  locale: AppLocale;
  setLocale: (locale: AppLocale) => void;
};
