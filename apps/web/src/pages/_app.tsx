import { LinearProgress } from '@mui/material';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { UIContext } from 'ui/lib';
import { UIProvider } from '../lib/uiContext';
import { useJSON } from '../lib/useJSON';
import { WrapApp } from '../components/WrapApp';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { lang = 'en' } = router.query;
  const { data, error } = useJSON<UIContext>(`/api/config/${lang}`);

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
        {/* @ts-expect-error: different react instances */}
        <Component {...pageProps} />
      </WrapApp>
    </UIProvider>
  );
};

export default App;
