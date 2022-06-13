import { createContext, useContext } from 'react';

export type UIContext = {
  lang: string;
  l10n: Record<string, string>;
  menu: Array<{
    label: string;
    slug: string;
  }>;
  contactData: Array<{
    key: string;
    label: string;
    value: string;
  }>;
  links: Array<{
    label: string;
    slug: string;
  }>;
  texts: {
    contactHeader: string;
    donateBtn: string;
    followUs: string;
  };
  copyright: string;
};

export const UI_CONTEXT_EMPTY: UIContext = {
  lang: 'en',
  menu: [],
  links: [],
  texts: {
    contactHeader: 'Contacts',
    donateBtn: 'Donate',
    followUs: 'Follow us',
  },
  l10n: {},
  contactData: [],
  copyright: '',
};

const uiContext = createContext<UIContext>(UI_CONTEXT_EMPTY);

export const UIProvider = uiContext.Provider;
export const useUIContext = () => useContext(uiContext);
