import { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';

import { GeneralProvider } from 'providers/general-provider';
import { wrapper } from 'store/store';

import '../customizations/entrypoints.scss';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    /** Remove the server-side injected CSS. */
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>NextJS Project</title>
      </Head>
      <SnackbarProvider
        preventDuplicate
        classes={{
          containerRoot: 'snackbar-container',
        }}
      >
        <GeneralProvider>
          <Component {...pageProps} />
        </GeneralProvider>
      </SnackbarProvider>
    </>
  );
};

export default wrapper.withRedux(App);
