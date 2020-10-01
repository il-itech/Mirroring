import { FC, useEffect } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';

import { GeneralProvider } from 'context/general-provider';

import { useStore } from '../store/store';

import '../customizations/entrypoints.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const store = useStore(pageProps);

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
      <Provider store={store}>
        <SnackbarProvider preventDuplicate>
          <GeneralProvider>
            <Component {...pageProps} />
          </GeneralProvider>
        </SnackbarProvider>
      </Provider>
    </>
  );
};

export default App;
