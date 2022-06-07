import type { L10NKeys } from './l10n/@types';

import { UIContext } from 'ui/lib';

import { getConfigContactData } from './getConfigContactData';
import { AvailableLangs, getConfigL10n } from './getConfigL10n';
import { getConfigMenu } from './getConfigMenu';

export const getConfig = (lang: AvailableLangs): UIContext => ({
  lang,
  l10n: getConfigL10n(lang),
  menu: getConfigMenu(),
  contactData: getConfigContactData(),
  texts: {
    contactHeader: 'links.title',
    followUs: 'followUs',
    donateBtn: 'donate',
  } as Record<keyof UIContext['texts'], L10NKeys>,
});

export type Config = ReturnType<typeof getConfig>;
