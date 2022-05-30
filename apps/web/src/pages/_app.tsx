import { LinearProgress } from '@mui/material';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { UIContext } from 'ui/lib';
import { UIProvider } from '../lib/uiContext';
import { useJSON } from '../lib/useJSON';
import { Wrap } from '../components/Wrap';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { lang = 'en' } = router.query;
  const { data, error } = useJSON<UIContext>(`/api/config/${lang}`);

  if (error) {
    return (
      <Wrap title="App error">
        <h1>Failed to load APP</h1>
        <p>
          <code>
            <pre>{String(error)}</pre>
          </code>
        </p>
      </Wrap>
    );
  }

  if (!data) {
    return (
      <Wrap title="Loading">
        <LinearProgress />
      </Wrap>
    );
  }

  return (
    <UIProvider value={data}>
      <Wrap>
        {/* @ts-expect-error: different react instances */}
        <Component {...pageProps} />
      </Wrap>
    </UIProvider>
  );
};

export default App;
