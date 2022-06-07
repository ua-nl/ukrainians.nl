import type { L10NKeys } from './l10n/@types';

const cteateCD = (key: string, value: string, label: L10NKeys) => ({
  key,
  label,
  value,
});

export const getConfigContactData = () => [
  cteateCD('email', 'support@ukrainians.nl', 'info.email'),
  cteateCD('phone', '+31102005661', 'info.phone'),
  cteateCD('kvk', '60054050', 'info.kvk'),
  cteateCD('anbi', '853747945', 'info.anbi'),
];
