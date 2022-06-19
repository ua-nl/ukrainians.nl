import { createTheme } from '@mui/material';

import { getAllComponents } from './theme/getAllComponents';
import { palette } from './theme/palette';
import { typography } from './theme/typography';

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

mainTheme.components = getAllComponents(mainTheme);
