import { createTheme, PaletteColorOptions } from '@mui/material';

import { ButtonStyles } from './theme/components/Button.styles';
import { CssBaselineStyles } from './theme/components/CssBaseline.styles';
import { InputStyles } from './theme/components/Input.styles';
import { TypographyStyle } from './theme/components/Typography.styles';
import { palette } from './theme/palette';
import { typography } from './theme/typography';

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
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
});

mainTheme.components = {
  ...CssBaselineStyles(mainTheme),
  ...TypographyStyle(),
  ...ButtonStyles(mainTheme),
  ...InputStyles(mainTheme),
};
