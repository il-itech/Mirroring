import { handleActions } from 'redux-actions';

import { ISystem } from 'interfaces/state.interfaces/system-interface';
import {
  globalError,
  redirectTo,
  setGlobalInProgressStatus,
  showNotification,
  clearNotification,
  clearError,
  clearSystem,
} from 'actions/system';
import { ERRORS } from 'constants.js';

enum VariantEnum {
  default = 'default',
  error = 'error',
  success = 'success',
  warning = 'warning',
  info = 'info',
}

const initialState = {
  globalError: {},
  globalInProgressStatus: false,
  notification: { variant: VariantEnum.default, message: null },
  is404: false,
  redirectTo: '',
};

export const system = handleActions<ISystem, any>(
  {
    [`${globalError}`]: (state, { payload: { error = ERRORS.UNDEFINED, status } }) => ({
      ...state,
      globalError: {
        ...state.globalError,
        errorId: error,
        status,
      },
    }),
    [`${redirectTo}`]: (state, { payload }) => ({
      ...state,
      redirectTo: payload,
    }),
    [`${setGlobalInProgressStatus}`]: (state, { payload }) => ({
      ...state,
      globalInProgressStatus: payload,
    }),
    [`${showNotification}`]: (state, { payload }) => ({
      ...state,
      notification: payload,
    }),
    [`${clearNotification}`]: state => ({
      ...state,
      notification: { variant: null, message: null },
    }),
    [`${clearError}`]: state => ({
      ...state,
      globalError: {},
    }),
    [`${clearSystem}`]: () => ({
      ...initialState,
    }),
  },
  initialState,
);
