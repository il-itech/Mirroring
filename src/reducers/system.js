import { handleActions } from 'redux-actions';

import {
  globalError,
  setGlobalInProgressStatus,
  clearError,
} from 'actions/system';
import { ERRORS } from 'constants';

const initialState = {
  globalError: {},
  globalInProgressStatus: false,
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
    [clearError]: (state) => ({
      ...state,
      globalError: {},
    }),
  },
  initialState,
);
