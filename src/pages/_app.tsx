import { FC, useEffect } from 'react';
import { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';

import { GeneralProvider } from 'context/general-provider';
import { wrapper } from 'store/store';

import '../customizations/entrypoints.scss';

const App: FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

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
      <SnackbarProvider preventDuplicate>
        <GeneralProvider>
          <Component {...pageProps} />
        </GeneralProvider>
      </SnackbarProvider>
    </>
  );
};

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps };
};

export default wrapper.withRedux(App);
