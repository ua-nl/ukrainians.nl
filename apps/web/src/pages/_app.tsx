import React from 'react';
import type { AppProps } from 'next/app';
import { AppWrapper } from 'ui/ux';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppWrapper>
      <Head>
        <title>ukrainians.nl</title>
      </Head>
      {/* @ts-expect-error: different react instances */}
      <Component {...pageProps} />
    </AppWrapper>
  );
};

export default App;
