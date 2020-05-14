import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { withObservable } from 'next-redux-observable';
import * as R from 'ramda';

import { AuthProvider } from '../context/auth-provider';
import { rootEpic } from '../epics';
import configureStore from '../store/store';

import '../customizations/entrypoints.scss';

const App = ({ Component, pageProps, store }) => {
  React.useEffect(() => {
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
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
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
