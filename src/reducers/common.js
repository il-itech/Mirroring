import * as R from 'ramda';

import {
  setInProgressStatus,
  setSuccessStatus,
  clearState,
} from 'actions/common';

export const getInitialState = (additionalState) => ({
  isInProgress: false,
  isSuccess: false,
  ...additionalState,
});

const reducerChecker = (reducerFieldName, state, fieldName, result) =>
  R.equals(reducerFieldName, fieldName)
    ? { ...state, ...result }
    : state;

export const getCommonReducers = (reducerFieldName, additionalState) => ({
  [setInProgressStatus]: (state, { payload: { field, status } }) =>
    reducerChecker(reducerFieldName, state, field, { isInProgress: status }),
  [setSuccessStatus]: (state, { payload: { field, status } }) =>
    reducerChecker(reducerFieldName, state, field, { isSuccess: status }),
  [clearState]: (state, { payload: { field } }) =>
    reducerChecker(reducerFieldName, state, field, getInitialState(additionalState)),
});
