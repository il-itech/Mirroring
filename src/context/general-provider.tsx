import React, { useEffect, createContext } from 'react';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import { useSnackbar, OptionsObject } from 'notistack';
import * as R from 'ramda';

import { clearState } from 'actions/common';
import { clearNotification } from 'actions/system';
import { useShallowSelector } from 'hooks/use-shallow-selector';
import { LinearLoader } from 'components/progress-bar/linear-loader/linear-loader';
import { isEmptyOrNil } from 'helpers/utils';
import { REDUCER_TYPES } from 'enums';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const NOTIFY_SETTINGS: OptionsObject = {
  preventDuplicate: true,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
};

export const GeneralContext = createContext(null);

export const GeneralProvider = ({ children }: Props): JSX.Element => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const isUserAuth = useShallowSelector(state => state?.auth.isUserAuth);
  const {
    redirectTo,
    notification: { variant, message },
    globalInProgressStatus,
  } = useShallowSelector(state => state?.system);

  /**
   * Checking any message in store and if message is not null and was replaced - show notification
   */
  useEffect(() => {
    if (!isEmptyOrNil(message)) {
      enqueueSnackbar(message, { ...NOTIFY_SETTINGS, variant });
    }

    return () => {
      R.compose(dispatch, clearNotification)();
    };
  }, [dispatch, enqueueSnackbar, message, variant]);

  useEffect(() => {
    if (isUserAuth) {
      Router.push('/');
    }

    return () => {
      R.compose(dispatch, clearState)(REDUCER_TYPES.AUTH);
    };
  }, [dispatch, isUserAuth]);

  useEffect(() => {
    if (!isEmptyOrNil(redirectTo)) {
      Router.push(redirectTo);
    }
  }, [dispatch, redirectTo]);

  return (
    <GeneralContext.Provider value={null}>
      {globalInProgressStatus && <LinearLoader />}
      {children}
    </GeneralContext.Provider>
  );
};
