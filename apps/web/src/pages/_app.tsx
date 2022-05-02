import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/tailwind.css";

const Application = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>ukrainians.nl</title>
    </Head>

    <main>
      <Component {...pageProps} />
    </main>
  </>
);

export default Application;
