import { Components, Theme } from '@mui/material';

export const CssBaselineStyles = (theme: Theme): Partial<Components> => {
  return {
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
  };
};
