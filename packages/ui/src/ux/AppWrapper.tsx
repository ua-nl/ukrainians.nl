import { CacheProvider } from '@emotion/react';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import { ReactNode, FC } from 'react';

import { cssCache } from '../lib/cssCache';
import { mainTheme } from '../lib/theme';

export const AppWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <CacheProvider value={cssCache}>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  </StyledEngineProvider>
);
