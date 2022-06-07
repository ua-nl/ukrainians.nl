import type { ReactNode } from 'react';

import { CacheProvider } from '@emotion/react';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';

import { cssCache } from '../lib/cssCache';
import { mainTheme } from '../lib/theme';

export const AppWrapper = ({ children }: { children: ReactNode }) => (
  <StyledEngineProvider injectFirst>
    <CacheProvider value={cssCache}>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  </StyledEngineProvider>
);
