import Head from 'next/head';
import { AppWrapper, AppHeader } from 'ui/ux';

import { META_TAGS } from '../lib/metaTags';
import { MetaTags } from './MetaTags';

import type { FC, ReactNode } from 'react';

export const WrapApp: FC<{
  children: ReactNode;
  title?: string;
}> = ({ children, title }) => (
  // @ts-expect-error: different react instances
  <AppWrapper>
    <Head>
      <title>
        {title} {title ? '⬅' : ''} ukrainians.nl
      </title>
      <link rel="icon" href={META_TAGS.favicon} />
      <AppHeader />
      <MetaTags />
    </Head>
    {children}
  </AppWrapper>
);
