import { createTheme, PaletteColorOptions } from '@mui/material';
import { ButtonStyles } from './components/Button.styles';
import { ContainerStyles } from './components/Container.styles';
import { CssBaselineStyles } from './components/CssBaseline.styles';
import { InputStyles } from './components/Input.styles';
import { TypographyStyle } from './components/Typography.styles';
import { palette } from './palette';
import { typography } from './typography';


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

export const mainTheme = createTheme({
  palette,
  typography,
  spacing: 4,
  shape: {
    borderRadius: 4,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
});

mainTheme.components = {
  ...CssBaselineStyles(mainTheme),
  ...ContainerStyles(mainTheme),
  ...TypographyStyle(),
  ...ButtonStyles(mainTheme),
  ...InputStyles(mainTheme),
};
