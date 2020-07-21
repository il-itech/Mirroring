import React, { useEffect, createContext } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { useSnackbar } from 'notistack';
import store from 'store';
import * as R from 'ramda';

import { clearState } from 'actions/common';
import { setProfile } from 'actions/profile';
import { useShallowSelector } from 'hooks/use-shallow-selector';
import { isEmptyOrNil } from 'helpers/utils';
import { REDUCER_TYPES } from 'constants';

export const GeneralContext = createContext();

const NOTIFY_SETTINGS = {
  preventDuplicate: true,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
};

export const GeneralProvider = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { isUserAuth } = useShallowSelector(state => state?.auth);
  const {
    redirectTo,
    notification: { variant, message },
  } = useShallowSelector(state => state?.system);

  /**
   * Checking any message in store and if message is not null and was replaced - show notification
   */
  useEffect(() => {
    if (!isEmptyOrNil(message)) {
      enqueueSnackbar(message, { ...NOTIFY_SETTINGS, variant });
    }
  }, [enqueueSnackbar, message, variant]);

  useEffect(() => {
    const user = store.get('user');

    if (!isEmptyOrNil(user)) {
      R.compose(dispatch, setProfile)(user);
    }
  }, [dispatch]);

  useEffect(() => {
    if (isUserAuth) {
      Router.push('/');
    }

    return () => R.compose(dispatch, clearState)(REDUCER_TYPES.AUTH);
  }, [dispatch, isUserAuth]);

  useEffect(() => {
    if (!isEmptyOrNil(redirectTo)) {
      Router.push(redirectTo);
    }
  }, [dispatch, redirectTo]);

  return (
    <GeneralContext.Provider value={null}>
      {children}
    </GeneralContext.Provider>
  );
};

GeneralProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
