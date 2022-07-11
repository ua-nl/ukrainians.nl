import '@fontsource/montserrat';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import type { ReactNode } from 'react';

import Head from 'next/head';
import { AppWrapper, AppWrapperProps } from 'ui/ux';

import { META_TAGS } from '../lib/metaTags';
import { MetaTags } from './MetaTags';

export const WrapApp = (props: {
  children: ReactNode;
  title?: string;
  data?: AppWrapperProps['data'];
}) => (
  <AppWrapper data={props.data}>
    <Head>
      <title>
        {props.title} {props.title ? '⬅' : ''} ukrainians.nl
      </title>
      <link rel="icon" href={META_TAGS.favicon} />
      <MetaTags />
    </Head>
    {props.children}
  </AppWrapper>
);
