import type { L10NKeys } from './l10n/@types';

const cteateMenuItem = (slug: string, label: L10NKeys) => ({
  slug,
  label,
});

export const getConfigMenu = () => [
  cteateMenuItem('/', 'menu.home'),
  cteateMenuItem('/about', 'menu.about'),
  cteateMenuItem('/humanitarian-aid', 'menu.humanitarianAid'),
  cteateMenuItem('/financial-support', 'menu.financialSupport'),
  cteateMenuItem('/displaced-people', 'menu.displacedPeople'),
];
