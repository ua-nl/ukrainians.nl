import type { ReactNode } from 'react';

import Head from 'next/head';
import { AppWrapper, AppHeader } from 'ui/ux';

import { META_TAGS } from '../lib/metaTags';
import { MetaTags } from './MetaTags';

export const WrapApp = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => (
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
