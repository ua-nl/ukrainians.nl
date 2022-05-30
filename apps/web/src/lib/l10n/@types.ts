import l10nEN from './en.json';

export type L10NKeys = keyof typeof l10nEN;

export type L10NStrings = Record<L10NKeys, string>;
