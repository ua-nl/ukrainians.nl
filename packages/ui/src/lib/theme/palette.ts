import { PaletteColorOptions, PaletteOptions } from '@mui/material';

import { UASysColors } from './cssVars/color';

declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    accent: true;
  }
}

declare module '@mui/material/styles' {
  interface CustomPalette {
    accent: PaletteColorOptions;
  }
  interface PaletteOptions {
    accent: PaletteColorOptions;
  }
  interface Palette {
    accent: PaletteColorOptions;
  }
}

export const palette: PaletteOptions = {
  primary: {
    light: UASysColors.blue60,
    main: UASysColors.blue100,
    dark: UASysColors.blueHover,
    contrastText: UASysColors.white,
  },
  accent: {
    light: UASysColors.yellow30,
    main: UASysColors.yellow60,
    dark: UASysColors.yellow100,
    contrastText: UASysColors.blue100,
  },
  secondary: {
    light: UASysColors.blue30,
    main: UASysColors.blue30,
    dark: UASysColors.blue60,
    contrastText: UASysColors.black100,
  },
  background: {
    default: UASysColors.white,
    paper: UASysColors.white,
  },
  text: {
    primary: UASysColors.black,
    secondary: UASysColors.black,
    disabled: UASysColors.black30,
  },
  grey: {
    900: UASysColors.black100,
    700: UASysColors.black60,
    500: UASysColors.black30,
    300: UASysColors.black10,
  },
};
