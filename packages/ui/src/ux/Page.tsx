import type { ReactNode } from 'react';

import { Box } from '@mui/material';

import { Footer } from './Footer';
import { TopMenu } from './TopMenu';

export interface PageProps {
  children: ReactNode;
}
export const Page = ({ children }: PageProps) => (
  <>
    <TopMenu />
    <Box pb="52px">{children}</Box>
    <Footer />
  </>
);
