import { handleActions } from 'redux-actions';

import {
  globalError,
  setGlobalInProgressStatus,
  showNotification,
  clearError,
} from 'actions/system';
import { ERRORS } from 'constants';

const initialState = {
  globalError: {},
  globalInProgressStatus: false,
  notification: { variant: null, message: null },
  is404: false,
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
  },
  initialState,
);
