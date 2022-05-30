import { ReactNode, FC } from 'react';
import { CacheProvider } from '@emotion/react';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import { mainTheme } from '../lib/theme';
import { cssCache } from '../lib/cssCache';

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
