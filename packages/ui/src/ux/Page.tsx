import type { ReactNode } from 'react';

import { Box } from '@mui/material';

import { Footer } from './Footer';
import { TopMenu } from './TopMenu';

interface PageWrapperProps {
  children: ReactNode;
}

export const Page = ({ children }: PageWrapperProps) => (
  <>
    <TopMenu />
    <Box pb="120px">{children}</Box>
    <Footer />
  </>
);
