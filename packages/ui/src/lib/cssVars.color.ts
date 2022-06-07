export type ColorString =
  | `#${string}`
  | `rgb(${string},${string},${string})`
  | `rgba(${string},${string},${string},${string})`;

export type UASysColorValues = typeof UASysColors[UASysColorKeys];
export type UASysColorKeys =
  | 'blue100'
  | 'blue60'
  | 'blue30'
  | 'blueHover'
  | 'yellow100'
  | 'yellow60'
  | 'yellow30'
  | 'yellowHover'
  | 'black100'
  | 'black60'
  | 'black30'
  | 'black10'
  | 'darkBlue'
  | 'white'
  | 'lightGray'
  | 'shadow';

export const UASysColors: Record<UASysColorKeys, ColorString> = {
  blueHover: `#034997`,
  blue100: '#0057B8',
  blue60: `#669AD4`,
  blue30: `#B3CDEA`,
  yellowHover: `#FFCA1D`,
  yellow100: '#FFD700',
  yellow60: `#FFE766`,
  yellow30: `#FFF3B3`,
  black100: `#333333`,
  black60: `#000000`,
  black30: `#C2C2C2`,
  black10: `#EBEBEB`,
  darkBlue: `#0E0E2C`,
  white: `#FFFFFF`,
  lightGray: `#FAFAFA`,
  shadow: `rgba(0, 0, 0, 0.08)`,
};
