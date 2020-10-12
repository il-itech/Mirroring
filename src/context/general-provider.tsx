import React, { useEffect, createContext } from 'react';
import { useDispatch } from 'react-redux';
import Router, { useRouter } from 'next/router';
import { useSnackbar, OptionsObject } from 'notistack';
import CloseIcon from '@material-ui/icons/Close';
import * as R from 'ramda';

import { clearState } from 'actions/common';
import { clearNotification } from 'actions/system';
import { closeAllDrawers } from 'actions/drawers';
import { useShallowSelector } from 'hooks/use-shallow-selector';
import { LinearLoader } from 'components/progress-bar/linear-loader/linear-loader';
import { isEmptyOrNil } from 'helpers/utils';
import { REDUCER_TYPES } from 'enums';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GeneralContext = createContext(null);

const NOTIFY_SETTINGS: OptionsObject = {
  preventDuplicate: true,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
};

export const GeneralProvider = ({ children }: Props) => {
  const { asPath } = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
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
      enqueueSnackbar(message, {
        ...NOTIFY_SETTINGS,
        action: key => (
          <CloseIcon className="cursor-pointer" onClick={() => closeSnackbar(key)} />
        ),
        variant,
      });
    }

    return () => {
      R.compose(dispatch, clearNotification)();
    };
  }, [closeSnackbar, dispatch, enqueueSnackbar, message, variant]);

  /**
   * Close all drawers if route string was changed
   */
  useEffect(() => {
    R.compose(dispatch, closeAllDrawers)();
  }, [asPath, dispatch]);

  /**
   * Redirect to home if user authed
   */
  useEffect(() => {
    if (isUserAuth) {
      Router.push('/');
    }

    return () => {
      R.compose(dispatch, clearState)(REDUCER_TYPES.AUTH);
    };
  }, [dispatch, isUserAuth]);

  /**
   * Redirect to somewhere if redirect path was changed
   */
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
