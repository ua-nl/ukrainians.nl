import { NextPage } from 'next';
import { Wrap } from '../components/Wrap';

const AppError: NextPage<{
  statusCode: number;
}> = ({ statusCode }) => (
  <Wrap title="Error">
    <h1>Error {statusCode}!</h1>
  </Wrap>
);

AppError.getInitialProps = ({ res, err }) => ({
  statusCode: res?.statusCode ?? err?.statusCode ?? 404,
});

export default AppError;
