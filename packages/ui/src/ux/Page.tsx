import type { ReactNode } from 'react';

import { Box } from '@mui/material';

import { Footer } from './Footer';
import { TopMenu } from './TopMenu';

export const CONTAINER_MAX_WIDTH = 'lg';

export interface PageProps {
  children: ReactNode;
}
export const Page = ({ children }: PageProps) => (
  <>
    <TopMenu maxWidth={CONTAINER_MAX_WIDTH} />
    <Box pb="120px">{children}</Box>
    <Footer maxWidth={CONTAINER_MAX_WIDTH} />
  </>
);
