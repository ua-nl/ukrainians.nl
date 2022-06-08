import { Components, Theme } from '@mui/material';

export const ButtonStyles = (theme: Theme): Partial<Components> => {
  return {
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
          color: theme.palette.primary.contrastText,
        },
        // @ts-expect-error custom variants are not in types
        containedAccent: {
          color: theme.palette.primary.dark,
        },
      },
    },
  };
};
