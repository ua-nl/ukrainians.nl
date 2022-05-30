import { FC, ReactNode } from 'react';
import { Container } from '@mui/material';
import { Footer } from './Footer';
import { TopMenu } from './TopMenu';
import { UIContext } from '../lib/uiContext';

export const Page: FC<{ children: ReactNode; ctx: UIContext }> = ({
  children,
  ctx,
}) => (
  <>
    <TopMenu maxWidth="xl" menu={ctx.menu} l10n={ctx.l10n} texts={ctx.texts} />
    <Container maxWidth="xl">{children}</Container>
    <Footer
      maxWidth="xl"
      texts={ctx.texts}
      contactData={ctx.contactData}
      l10n={ctx.l10n}
    />
  </>
);
