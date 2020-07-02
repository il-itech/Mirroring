import { useEffect } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { SnackbarProvider } from 'notistack';
import * as R from 'ramda';

import { withObservable } from 'hocs/with-observable';
import { GeneralProvider } from 'context/general-provider';
import { rootEpic } from 'epics';
import configureStore from '../store/store';

import '../customizations/entrypoints.scss';

const App = ({ Component, pageProps, store }) => {
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

App.getInitialProps = async (props) => {
  const { Component, ctx } = props;

  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps };
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}),
  store: PropTypes.shape({}).isRequired,
};

App.defaultProps = {
  pageProps: null,
};

export default R.compose(
  withRedux(configureStore),
  withObservable(rootEpic),
)(App);
