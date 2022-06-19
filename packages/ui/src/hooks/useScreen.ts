import { Breakpoint, useMediaQuery, useTheme } from '@mui/material';

export const useScreen = (screenSize: Breakpoint = 'md') => {
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.up(screenSize), {
    noSsr: true,
  });

  return breakpoint;
};
