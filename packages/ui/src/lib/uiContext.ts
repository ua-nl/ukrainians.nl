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
  texts: {
    contactHeader: string;
    donateBtn: string;
    followUs: string;
  };
};
