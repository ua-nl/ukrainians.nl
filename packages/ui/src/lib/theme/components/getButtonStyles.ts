import { Components, Theme } from '@mui/material';

export const getButtonStyles = (
  theme: Theme,
): Pick<
  Components,
  'MuiButton' | 'MuiToggleButtonGroup' | 'MuiToggleButton'
> => ({
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        textTransform: 'none',
        opacity: 1,
        fontWeight: 700,
        lineHeight: 1,
        padding: theme.spacing(3, 4),
        fontSize: `1rem`,
        letterSpacing: `-0.02rem`,
      },
      outlined: {
        border: `1px solid ${theme.palette.primary.dark}`,
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
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: {
        display: 'flex',
        alignItems: 'center',

        '&.Mui-selected': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
        },
      },
      grouped: {
        marginRight: theme.spacing(2),
        border: `1px solid ${theme.palette.grey[200]}`,
        '&.Mui-selected': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
        },
        '&.Mui-disabled': {
          border: 0,
        },
        '&:not(:first-of-type)': {
          borderRadius: theme.shape.borderRadius,
          borderLeft: `1px solid ${theme.palette.grey[200]}`,
        },
        '&:first-of-type': {
          borderRadius: theme.shape.borderRadius,
        },
      },
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        padding: theme.spacing(2),
        border: `1px solid ${theme.palette.grey[200]}`,
        fontWeight: 700,
        color: theme.palette.primary.main,
        whiteSpace: 'nowrap',
        maxHeight: 41.25,
      },
    },
  },
});
