import { createContext, useContext } from 'react';
import { UIContext } from 'ui/lib';

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
