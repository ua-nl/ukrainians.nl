import { L10NKeys } from './l10n/@types';

const cteateMenuItem = (slug: string, label: L10NKeys) => ({
  label,
  slug,
});

export const getConfigMenu = () => [
  cteateMenuItem('home', 'menu.home'),
  cteateMenuItem('about', 'menu.about'),
];
