import { L10NKeys } from './l10n/@types';

const createCD = (label: L10NKeys, slug: string) => ({
  label,
  slug,
});

export const getConfigLinksData = () => [
  createCD('links.vacancy', '/'),
  createCD('links.school', '/'),
  createCD('links.church', '/'),
];
