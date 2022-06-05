import { FC, ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import { Footer } from './Footer';
import { TopMenu } from './TopMenu';
import { UIContext } from '../lib/uiContext';

export const Page: FC<{
  children: ReactNode;
  ctx: UIContext;
}> = ({ children, ctx }) => (
  <>
    <TopMenu maxWidth="lg" menu={ctx.menu} l10n={ctx.l10n} texts={ctx.texts} />
    <Container maxWidth="lg">
      <Box pb="120px">
        {children}
      </Box>
    </Container>
    <Footer
      maxWidth="lg"
      texts={ctx.texts}
      contactData={ctx.contactData}
      l10n={ctx.l10n}
    />
  </>
);
