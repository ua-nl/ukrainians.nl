import type { L10NKeys } from './l10n/@types';
import type { UIContext } from 'ui/lib';

import { getConfigContactData } from './getConfigContactData';
import { AvailableLangs, getConfigL10n } from './getConfigL10n';
import { getConfigLinksData } from './getConfigLinksData';
import { getConfigMenu } from './getConfigMenu';

export const getConfig = (lang: AvailableLangs): UIContext => ({
  lang,
  l10n: getConfigL10n(lang),
  menu: getConfigMenu(),
  contactData: getConfigContactData(),
  links: getConfigLinksData(),
  texts: {
    contactHeader: 'links.title',
    followUs: 'followUs',
    donateBtn: 'donate',
    volunteer: 'volunteer',
    readMore: 'readMore',
    humanitarianAid: 'menu.humanitarianAid',
    collectionPoints: 'collectionPoints',
  } as Record<keyof UIContext['texts'], L10NKeys>,
  copyright: 'copyright',
});

export type Config = ReturnType<typeof getConfig>;
