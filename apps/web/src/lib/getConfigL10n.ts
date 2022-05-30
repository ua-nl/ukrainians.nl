import { L10NStrings } from './l10n/@types';

import l10nEN from './l10n/en.json';
import { l10nNL } from './l10n/nl';

export type AvailableLangs = 'en' | 'nl';

const LANG_MAP: Record<AvailableLangs, L10NStrings> = {
  en: l10nEN,
  nl: l10nNL,
};

export const getConfigL10n = (lang: AvailableLangs) => LANG_MAP[lang];
