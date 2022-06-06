import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import { Footer } from './Footer';
import { TopMenu } from './TopMenu';
import { UIContext } from '../lib/uiContext';

export const CONTAINER_MAX_WIDTH = 'lg';

export const Page: FC<{
  children: ReactNode;
  ctx: UIContext;
}> = ({ children, ctx }) => (
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
