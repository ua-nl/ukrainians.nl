import { Components, Theme } from '@mui/material';

export const CssBaselineStyles = (theme: Theme): Partial<Components> => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: theme.palette.primary.main,
          fontWeight: 700,
          textDecoration: 'none',
          '&:hover': {
            color: theme.palette.primary.dark,
          },
        },
      },
    },
  };
};
