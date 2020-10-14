import { createReducer } from 'deox';
import { VariantType } from 'notistack';

import {
  globalError,
  redirectTo,
  setGlobalInProgressStatus,
  showNotification,
  clearNotification,
  clearErrors,
  clearSystem,
  initializeState,
} from 'actions/system';
import { ERRORS, VARIANT_ENUM } from 'enums';

const initialState = {
  globalError: {},
  globalInProgressStatus: false,
  notification: { variant: VARIANT_ENUM.DEFAULT as VariantType, message: '' },
  is404: false,
  redirectTo: '',
  initializedSSRState: false,
};

export const system = createReducer(initialState, handleAction => ([
  handleAction(initializeState, state => ({
    ...state,
    initializedSSRState: true,
  })),
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
    notification: { variant: VARIANT_ENUM.DEFAULT, message: '' },
  })),
  handleAction(clearErrors, state => ({
    ...state,
    globalError: {},
  })),
  handleAction(clearSystem, () => ({
    ...initialState,
  })),
]));
