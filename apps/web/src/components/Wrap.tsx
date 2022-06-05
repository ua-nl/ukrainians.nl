import type { FC, ReactNode } from 'react';
import { AppWrapper } from 'ui/ux';
import Head from 'next/head';
import { AppHeader } from 'ui/ux';

export const Wrap: FC<{
  children: ReactNode;
  title?: string;
}> = ({ children, title }) => (
  // @ts-expect-error: different react instances
  <AppWrapper>
    <Head>
      <title>
        {title} {title ? '⬅' : ''} ukrainians.nl
      </title>
      <AppHeader />
    </Head>
    {children}
  </AppWrapper>
);
