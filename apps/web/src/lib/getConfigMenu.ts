import type { L10NKeys } from './l10n/@types';

const cteateMenuItem = (slug: string, label: L10NKeys) => ({
  slug,
  label,
});

export const getConfigMenu = () => [
  cteateMenuItem('/', 'menu.home'),
  cteateMenuItem('/about', 'menu.about'),
  cteateMenuItem('/humanitarianAid', 'menu.humanitarianAid'),
  cteateMenuItem('/financialAid', 'menu.financialAid'),
  cteateMenuItem('/displacedPeople', 'menu.displacedPeople'),
];
