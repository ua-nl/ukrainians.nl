import type { ReactNode } from 'react';

import { CacheProvider } from '@emotion/react';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';

import { cssCache } from '../lib/cssCache';
import { mainTheme } from '../lib/theme';
import { UIContext, UIProvider, UI_CONTEXT_EMPTY } from '../lib/uiContext';

export interface AppWrapperProps {
  children: ReactNode;
  data?: UIContext;
}
export const AppWrapper = (props: AppWrapperProps) => (
  <UIProvider value={props.data ?? UI_CONTEXT_EMPTY}>
    <StyledEngineProvider injectFirst>
      <CacheProvider value={cssCache}>
        <ThemeProvider theme={mainTheme}>
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  </UIProvider>
);
