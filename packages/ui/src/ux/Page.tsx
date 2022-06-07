import type { ReactNode } from 'react';

import { Box } from '@mui/material';

import { UIContext } from '../lib/uiContext';
import { Footer } from './Footer';
import { TopMenu } from './TopMenu';

export const CONTAINER_MAX_WIDTH = 'lg';

export interface PageProps {
  children: ReactNode;
  ctx: UIContext;
}
export const Page = ({ children, ctx }: PageProps) => (
  <>
    <TopMenu
      maxWidth={CONTAINER_MAX_WIDTH}
      menu={ctx.menu}
      l10n={ctx.l10n}
      texts={ctx.texts}
    />
    <Box pb="120px">{children}</Box>
    <Footer
      maxWidth={CONTAINER_MAX_WIDTH}
      texts={ctx.texts}
      contactData={ctx.contactData}
      l10n={ctx.l10n}
    />
  </>
);
