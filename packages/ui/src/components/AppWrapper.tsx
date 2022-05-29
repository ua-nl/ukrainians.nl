import { CacheProvider } from '@emotion/react';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import React from 'react';
import { mainTheme } from '../lib/theme';
import { cssCache } from '../lib/cssCache';

export const AppWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <CacheProvider value={cssCache}>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  </StyledEngineProvider>
);
