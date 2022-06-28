import { TypographyOptions } from '@mui/material/styles/createTypography';

import { UASysColors } from './cssVars/color';

const getTypografyFontSize = (base: number) =>
  `${((base / 16) * 100).toFixed(0)}%`;

export const typography: TypographyOptions = {
  fontFamily: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  allVariants: {
    accentColor: UASysColors.yellowHover,
  },
  fontWeightLight: 400,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontSize: getTypografyFontSize(32),
    fontWeight: 700,
  },
  h2: {
    fontSize: getTypografyFontSize(24),
    fontWeight: 700,
  },
  h3: {
    fontSize: getTypografyFontSize(20),
    fontWeight: 700,
  },
  h4: {
    fontSize: getTypografyFontSize(16),
    fontWeight: 700,
  },
  subtitle1: {
    fontSize: getTypografyFontSize(20),
    fontWeight: 500,
    letterSpacing: '-1px',
  },
  body1: {
    fontSize: getTypografyFontSize(16),
  },
  body2: {
    fontSize: getTypografyFontSize(14),
  },
  caption: {
    fontSize: getTypografyFontSize(12),
  },
  button: {
    fontSize: getTypografyFontSize(16),
  },
};
