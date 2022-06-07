import { createTheme, PaletteColorOptions } from '@mui/material';

import { UASysColors } from './cssVars.color';

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

const getTypografyFontSize = (base: number) =>
  `${((base / 16) * 100).toFixed(0)}%`;

export const mainTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: UASysColors.blue100,
          fontWeight: 700,
          textDecoration: 'none',
          '&:hover': {
            color: UASysColors.blueHover,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          opacity: 1,
          fontWeight: 700,
          lineHeight: 1,
          padding: `10px 36px`,
          fontSize: `1rem`,
          letterSpacing: `-0.02rem`,
        },
        sizeSmall: {
          fontSize: `1rem`,
          padding: `10px 30px`,
          letterSpacing: `-0.02rem`,
        },
        containedSecondary: {
          color: UASysColors.white,
        },
        // @ts-expect-error custom variants are not in types
        containedAccent: {
          color: UASysColors.blueHover,
        },
      },
    },
  },
  palette: {
    // bgButtonPrimaryNormal: `blue100`,
    // bvuttonPrimaryHover: `blueHover`,
    // bgButtonCommonNormal: `blue100`,
    // bgButtonCommonHover: `blueHover`,
    primary: {
      light: UASysColors.blue60,
      main: UASysColors.blue100,
      dark: UASysColors.blueHover,
      contrastText: UASysColors.white,
    },
    // bgButtonAccentHover: `yellowHover`,
    // bgButtonAccentNormal: `yellow100`,
    accent: {
      light: UASysColors.yellow30,
      main: UASysColors.yellow60,
      dark: UASysColors.yellow100,
      contrastText: UASysColors.blue100,
    },
    // bgButtonSecondaryNormal: `blue30`,
    // bgButtonSecondaryHover: `blue60`,
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
      primary: UASysColors.black60,
      secondary: UASysColors.black60,
      disabled: UASysColors.black30,
    },
  },
  typography: {
    // htmlFontSize: `16px`,
    // fontSize: `16`,
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
      textTransform: 'uppercase',
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
    // input: {
    // fontSize: getTypografyFontSize(12),
    // },
  },
});
