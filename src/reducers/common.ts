import { ReducerMap } from 'redux-actions';
import * as R from 'ramda';

import {
  setInProgressStatus,
  setSuccessStatus,
  clearState,
} from 'actions/common';
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
import { ICommon, IFormCommon } from 'interfaces/state.interfaces/common-interface';

interface ICommonPayload {
  field: string;
  status?: boolean;
}
interface ICommonFormPayload {
  formName: string;
  field: string;
  formData: {};
  error?: {};
  errors?: {};
}

export const getInitialState = <T extends {}>(additionalState: T): T & ICommon => ({
  isInProgress: false,
  isSuccess: false,
  ...additionalState,
});

export const getInitialFormState = <
  T extends {}
>
  (additionalState: T): T & IFormCommon & ICommon => ({
    formData: {},
    errors: {},
    ...additionalState,
    ...getInitialState({}),
  });

const reducerChecker = <
  T extends {},
  V extends {}
>(
    reducerFieldName: string,
    state: T,
    fieldName: string,
    result: V,
  ): T | T & V =>
    R.equals(reducerFieldName, fieldName)
      ? { ...state, ...result }
      : state;

export const getCommonReducers = <
  T extends {},
  V extends {}
>(
    reducerFieldName: string,
    additionalState: V,
  ): ReducerMap<T, ICommonPayload> => ({
    [`${setInProgressStatus}`]: (state, { payload: { field, status } }): T | T & V =>
      reducerChecker(reducerFieldName, state, field, { isInProgress: status }),
    [`${setSuccessStatus}`]: (state, { payload: { field, status } }): T | T & V =>
      reducerChecker(reducerFieldName, state, field, { isSuccess: status }),
    [`${clearState}`]: (state, { payload: { field } }): T | T & V =>
      reducerChecker(reducerFieldName, state, field, getInitialState(additionalState)),
  });

export const getFormsCommonReducer = <
  T extends { formData: {}; errors: {} },
  V extends {}
>(reducerFormName: string, additionalState: V): ReducerMap<T, ICommonFormPayload> => ({
    [`${setFormData}`]: (state, { payload: { formName, formData } }): T | T & V =>
      reducerChecker(reducerFormName, state, formName, { formData: { ...state.formData, ...formData } }),

    [`${replaceFormData}`]: (state, { payload: { formName, formData } }): T | T & V =>
      reducerChecker(reducerFormName, state, formName, { formData }),

    [`${setFormError}`]: (state, { payload: { formName, error } }): T | T & V =>
      reducerChecker(reducerFormName, state, formName, { errors: { ...state.errors, ...error } }),

    [`${setFormErrors}`]: (state, { payload: { formName, errors } }): T | T & V =>
      reducerChecker(reducerFormName, state, formName, { errors }),

    [`${clearFormData}`]: (state, { payload: { formName, field } }): T | T & V =>
      reducerChecker(reducerFormName, state, formName, { formData: R.dissoc(field, state.formData) }),

    [`${clearFormError}`]: (state, { payload: { formName, field } }): T | T & V =>
      reducerChecker(reducerFormName, state, formName, { errors: R.dissoc(field, state.errors) }),

    [`${clearFormErrors}`]: (state, { payload: { formName } }): T | T & V =>
      reducerChecker(reducerFormName, state, formName, { errors: getInitialFormState(additionalState).errors }),

    [`${clearForm}`]: (state, { payload: { formName } }): T | T & V =>
      reducerChecker(reducerFormName, state, formName, getInitialFormState(additionalState)),

    ...getCommonReducers(reducerFormName, additionalState),
  });
