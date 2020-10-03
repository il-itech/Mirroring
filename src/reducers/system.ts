import { createReducer } from 'deox';

import {
  globalError,
  redirectTo,
  setGlobalInProgressStatus,
  showNotification,
  clearNotification,
  clearErrors,
  clearSystem,
} from 'actions/system';
import { ERRORS, VariantEnum } from 'enums';

const initialState = {
  globalError: {},
  globalInProgressStatus: false,
  notification: { variant: VariantEnum.default, message: '' },
  is404: false,
  redirectTo: '',
};

export const system = createReducer(initialState, handleAction => ([
  handleAction(globalError, (state, { payload: { error = ERRORS.UNDEFINED, status } }) => ({
    ...state,
    globalError: {
      ...state.globalError,
      errorId: error,
      status,
    },
  })),
  handleAction(redirectTo, (state, { payload }) => ({
    ...state,
    redirectTo: payload,
  })),
  handleAction(setGlobalInProgressStatus, (state, { payload }) => ({
    ...state,
    globalInProgressStatus: payload,
  })),
  handleAction(showNotification, (state, { payload }) => ({
    ...state,
    notification: payload,
  })),
  handleAction(clearNotification, state => ({
    ...state,
    notification: { variant: VariantEnum.default, message: '' },
  })),
  handleAction(clearErrors, state => ({
    ...state,
    globalError: {},
  })),
  handleAction(clearSystem, () => ({
    ...initialState,
  })),
]));
