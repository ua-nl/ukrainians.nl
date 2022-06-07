import type { L10NStrings } from './l10n/@types';

import l10nEN from './l10n/en.json';
import { l10nNL } from './l10n/nl';
import { l10nRU } from './l10n/ru';
import { l10nUA } from './l10n/ua';

export type AvailableLangs = 'en' | 'nl' | 'ua' | 'ru';

const LANG_MAP: Record<AvailableLangs, L10NStrings> = {
  en: l10nEN,
  nl: l10nNL,
  ua: l10nUA,
  ru: l10nRU,
};

export const getConfigL10n = (lang: AvailableLangs) => LANG_MAP[lang];
