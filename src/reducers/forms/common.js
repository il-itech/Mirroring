import * as R from 'ramda';

import {
  setFormData,
  replaceFormData,
  setFormError,
  setFormErrors,
  clearFormData,
  clearFormErrors,
  clearFormError,
  clearForm,
} from 'actions/forms/common';
import {
  getCommonReducers,
  getInitialState as getCommonState,
} from '../common';

export const getInitialState = additionalState => R.mergeDeepLeft(
  {
    formData: {},
    errors: {},
    ...additionalState,
  },
  getCommonState(),
);

const reducerChecker = (reducerFormName, state, formName, result) =>
  R.equals(reducerFormName, formName)
    ? { ...state, ...result }
    : state;

export const getFormsCommonReducer = (reducerFormName, additionalState) => ({
  [setFormData]: (state, { payload: { formName, formData } }) =>
    reducerChecker(reducerFormName, state, formName, { formData: { ...state.formData, ...formData } }),

  [replaceFormData]: (state, { payload: { formName, formData } }) =>
    reducerChecker(reducerFormName, state, formName, { formData }),

  [setFormError]: (state, { payload: { formName, error } }) =>
    reducerChecker(reducerFormName, state, formName, { errors: { ...state.errors, ...error } }),

  [setFormErrors]: (state, { payload: { formName, errors } }) =>
    reducerChecker(reducerFormName, state, formName, { errors }),

  [clearFormData]: (state, { payload: { formName, field } }) =>
    reducerChecker(reducerFormName, state, formName, { formData: R.dissoc(field, state.formData) }),

  [clearFormError]: (state, { payload: { formName, field } }) =>
    reducerChecker(reducerFormName, state, formName, { errors: R.dissoc(field, state.errors) }),

  [clearFormErrors]: (state, { payload: { formName } }) =>
    reducerChecker(reducerFormName, state, formName, { errors: getInitialState(additionalState).errors }),

  [clearForm]: (state, { payload: { formName } }) =>
    reducerChecker(reducerFormName, state, formName, getInitialState(additionalState)),

  ...getCommonReducers(reducerFormName, additionalState),
});
