import * as R from 'ramda';

import {
  getCommonReducers,
  getInitialState as getCommonState,
} from '../common';
import {
  setFormData,
  replaceFormData,
  setFormErrors,
  clearFormData,
  clearFormErrors,
  clearFormFieldError,
  clearForm,
} from '../../actions/forms/common';

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

  [setFormErrors]: (state, { payload: { formName, errors } }) =>
    reducerChecker(reducerFormName, state, formName, { errors }),

  [clearFormData]: (state, { payload: { formName } }) =>
    reducerChecker(reducerFormName, state, formName, { formData: getInitialState(additionalState).formData }),

  [clearFormErrors]: (state, { payload: { formName } }) =>
    reducerChecker(reducerFormName, state, formName, { errors: getInitialState(additionalState).errors }),

  [clearFormFieldError]: (state, { payload: { formName, field } }) =>
    reducerChecker(reducerFormName, state, formName, { errors: R.dissoc(field, state.errors) }),

  [clearForm]: (state, { payload: { formName } }) =>
    reducerChecker(reducerFormName, state, formName, getInitialState(additionalState)),

  ...getCommonReducers(reducerFormName, additionalState),
});
