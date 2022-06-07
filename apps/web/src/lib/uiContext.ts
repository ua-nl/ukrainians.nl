import type { UIContext } from 'ui/lib';

import { createContext, useContext } from 'react';

const uiContext = createContext<UIContext>({
  lang: 'en',
  menu: [],
  texts: {
    contactHeader: 'Contacts',
    donateBtn: 'Donate',
    followUs: 'Follow us',
  },
  l10n: {},
  contactData: [],
});

export const UIProvider = uiContext.Provider;
export const useUIContext = () => useContext(uiContext);
