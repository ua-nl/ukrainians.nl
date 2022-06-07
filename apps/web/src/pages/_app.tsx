import { LinearProgress } from '@mui/material';
import { useRouter } from 'next/router';
import { UIContext } from 'ui/lib';

import { WrapApp } from '../components/WrapApp';
import { UIProvider } from '../lib/uiContext';
import { useJSON } from '../lib/useJSON';

import type { AppProps } from 'next/app';

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
    <UIProvider value={data}>
      <WrapApp>
        <Component {...pageProps} />
      </WrapApp>
    </UIProvider>
  );
};

export default App;
