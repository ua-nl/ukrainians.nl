import React from 'react';
import { AppWrapper } from 'ui/ux';
import Head from 'next/head';
import { NextPage } from 'next';

const AppError: NextPage<{
  statusCode: number;
}> = ({ statusCode }) => {
  return (
    <AppWrapper>
      <Head>
        <title>ukrainians.nl</title>
      </Head>
      Error {statusCode}!
    </AppWrapper>
  );
};

AppError.getInitialProps = ({ res, err }) => ({
  statusCode: res?.statusCode ?? err?.statusCode ?? 404,
});

export default AppError;
