import { Components, Theme } from '@mui/material';

const containerBreakPoints = (theme: Theme) => ({
  [theme.breakpoints.down('md')]: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    maxWidth: 870,
  },
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    maxWidth: 550,
  },
});

export const ContainerStyles = (theme: Theme): Partial<Components> => {
  return {
    MuiContainer: {
      styleOverrides: {
        maxWidthXl: containerBreakPoints(theme),
        maxWidthLg: containerBreakPoints(theme),
        maxWidthMd: {
          [theme.breakpoints.only('xs')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            maxWidth: 550,
          },
          [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(8),
            paddingRight: theme.spacing(8),
            maxWidth: 870,
          },
        },
      },
    },
  };
};
