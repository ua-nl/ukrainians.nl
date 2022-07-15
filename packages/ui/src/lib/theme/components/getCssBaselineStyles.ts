import { Components, Theme } from '@mui/material';

import { getTypografyFontSize } from '../typography';

export const getCssBaselineStyles = (
  theme: Theme,
): Pick<Components, 'MuiCssBaseline'> => ({
  MuiCssBaseline: {
    styleOverrides: {
      a: {
        textDecoration: 'none',
        color: 'inherit',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
      },
      h1: {
        fontSize: getTypografyFontSize(32),
        fontWeight: 700,
        textTransform: 'uppercase',
        margin: 0,
        marginBottom: theme.spacing(5),
      },
      p: {
        fontSize: getTypografyFontSize(16),
        lineHeight: '22px',
        margin: 0,
        marginBottom: theme.spacing(4),
      },
    },
  },
});
