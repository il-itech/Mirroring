import { AppProps } from 'next/app';
import { Store } from 'redux';
import { useEffect, ReactNode } from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { SnackbarProvider } from 'notistack';
import * as R from 'ramda';

import { setProfile } from 'actions/profile';
import { withObservable } from 'hocs/with-observable';
import { GeneralProvider } from 'context/general-provider';
import { rootEpic } from 'epics';
import { parseCookieOnServer, isAuth } from 'helpers/auth';
import { getConfig } from 'helpers/env';
import configureStore from '../store/store';

import '../customizations/entrypoints.scss';

const api = getConfig('HTTP_API_URL');

interface Props extends AppProps {
  store: Store;
}

const App = ({ Component, pageProps, store }: Props): JSX.Element => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
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

App.getInitialProps = async (props: any): Promise<{ pageProps: {} }> => {
  const { Component, ctx } = props;

  if (ctx.isServer) {
    const { cookie } = ctx.req.headers;
    const token = parseCookieOnServer('accessToken', cookie);
    const response = await fetch(`${api}/auth/check-is-token-expired`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });
    const result = await response.json();

    if (isAuth(result)) {
      ctx.store.dispatch(setProfile(result));
    }
  }

  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps };
};

export default R.compose(
  withRedux(configureStore),
  withObservable(rootEpic),
)(App);
