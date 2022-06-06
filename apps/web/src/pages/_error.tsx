import { NextPage } from 'next';
import { WrapApp } from '../components/WrapApp';

const AppError: NextPage<{
  statusCode: number;
}> = ({ statusCode }) => (
  <WrapApp title="Error">
    <h1>Error {statusCode}!</h1>
  </WrapApp>
);

AppError.getInitialProps = ({ res, err }) => ({
  statusCode: res?.statusCode ?? err?.statusCode ?? 404,
});

export default AppError;
