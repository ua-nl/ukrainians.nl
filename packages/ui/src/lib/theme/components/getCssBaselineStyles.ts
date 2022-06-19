import { Components, Theme } from '@mui/material';

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
    },
  },
});
