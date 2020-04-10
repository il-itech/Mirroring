import Head from 'next/head';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { withObservable } from 'next-redux-observable';
import * as R from 'ramda';

import { Header } from '../components/header/header';
import { rootEpic } from '../epics';
import configureStore from '../store/store';

import '../customizations/entrypoints.scss';

const App = ({ Component, pageProps, store }) => (
  <>
    <Head>
      <title>NextJS Project</title>
    </Head>
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  </>
);

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
