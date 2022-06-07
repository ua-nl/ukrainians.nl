import type { AppProps } from 'next/app';
import type { UIContext } from 'ui/lib';

import { LinearProgress } from '@mui/material';
import { useRouter } from 'next/router';

import { WrapApp } from '../components/WrapApp';
import { useJSON } from '../lib/useJSON';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { lang = 'en' } = router.query;
  const { data, error } = useJSON<UIContext>(
    `/api/config/${Array.isArray(lang) ? lang[0] : lang}`,
  );

  if (error) {
    return (
      <WrapApp title="App error">
        <h1>Failed to load APP</h1>
        <p>
          <code>
            <pre>{String(error)}</pre>
          </code>
        </p>
      </WrapApp>
    );
  }

  if (!data) {
    return (
      <WrapApp title="Loading">
        <LinearProgress />
      </WrapApp>
    );
  }

  return (
    <WrapApp data={data}>
      <Component {...pageProps} />
    </WrapApp>
  );
};

export default App;
