import { handleActions } from 'redux-actions';

import {
  globalError,
  redirectTo,
  setGlobalInProgressStatus,
  showNotification,
  clearError,
  clearSystem,
} from 'actions/system';
import { ERRORS } from 'constants';

const initialState = {
  globalError: {},
  globalInProgressStatus: false,
  notification: { variant: null, message: null },
  is404: false,
  redirectTo: null,
};

export const system = handleActions(
  {
    [globalError]: (state, { payload: { error = ERRORS.UNDEFINED, status } }) => ({
      ...state,
      globalError: {
        ...state.globalError,
        errorId: error,
        status,
      },
    }),
    [redirectTo]: (state, { payload }) => ({
      ...state,
      redirectTo: payload,
    }),
    [setGlobalInProgressStatus]: (state, { payload }) => ({
      ...state,
      globalInProgressStatus: payload,
    }),
    [showNotification]: (state, { payload }) => ({
      ...state,
      notification: payload,
    }),
    [clearError]: (state) => ({
      ...state,
      globalError: {},
    }),
    [clearSystem]: () => ({
      ...initialState,
    }),
  },
  initialState,
);
