import type { ReactNode } from 'react';

import { CacheProvider } from '@emotion/react';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';

import { LocaleContextController } from '../context/locale/LocaleContextController';
import { cssCache } from '../lib/cssCache';
import { mainTheme } from '../lib/theme';
import { UIContext, UIProvider, UI_CONTEXT_EMPTY } from '../lib/uiContext';

export interface AppWrapperProps {
  children: ReactNode;
  data?: UIContext;
}
export const AppWrapper = (props: AppWrapperProps) => (
  <UIProvider value={props.data ?? UI_CONTEXT_EMPTY}>
    <LocaleContextController>
      <StyledEngineProvider injectFirst>
        <CacheProvider value={cssCache}>
          <ThemeProvider theme={mainTheme}>
            <CssBaseline />
            {props.children}
          </ThemeProvider>
        </CacheProvider>
      </StyledEngineProvider>
    </LocaleContextController>
  </UIProvider>
);
