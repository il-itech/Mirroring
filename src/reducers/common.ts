// eslint-disable-next-line import/no-unresolved
import { CreateHandlerMap } from 'deox/dist/create-handler-map';
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

/**
 * @param   {Object} additionalState
 * @returns {Object} initial state fields for every reducers
 */
export const getInitialState = <T extends {}>(additionalState: T): T & ICommon => ({
  isInProgress: false,
  isSuccess: false,
  ...additionalState,
});

/**
 * @param   {Object} additionalState
 * @returns {Object} initial state fields for every form reducers
 */
export const getInitialFormState = <T extends {}>
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

export const getCommonReducers = <T extends {}>(
  reducerFieldName: string,
  initialState: T,
  handleAction: CreateHandlerMap<T>,
) => ([
    handleAction(setInProgressStatus, (state: T, { payload: { field, status } }) =>
      reducerChecker(reducerFieldName, state, field, { isInProgress: status })),

    handleAction(setSuccessStatus, (state: T, { payload: { field, status } }) =>
      reducerChecker(reducerFieldName, state, field, { isSuccess: status })),

    handleAction(clearState, (state: T, { payload: { field } }) =>
      reducerChecker(reducerFieldName, state, field, getInitialState(initialState))),
  ]);

export const getFormsCommonReducer = <T extends { formData: {}; errors: {} }>(
  reducerFormName: string,
  initialState: T,
  handleAction: CreateHandlerMap<T>,
) => ([
    handleAction(setFormData, (state, { payload: { formName, formData } }) =>
      reducerChecker(reducerFormName, state, formName, { formData: { ...state.formData, ...formData } })),

    handleAction(replaceFormData, (state, { payload: { formName, formData } }) =>
      reducerChecker(reducerFormName, state, formName, { formData })),

    handleAction(setFormError, (state, { payload: { formName, error } }) =>
      reducerChecker(reducerFormName, state, formName, { errors: { ...state.errors, ...error } })),

    handleAction(setFormErrors, (state, { payload: { formName, errors } }) =>
      reducerChecker(reducerFormName, state, formName, { errors })),

    handleAction(clearFormData, (state, { payload: { formName, field } }) =>
      reducerChecker(reducerFormName, state, formName, { formData: R.dissoc(field, state.formData) })),

    handleAction(clearFormError, (state, { payload: { formName, field } }) =>
      reducerChecker(reducerFormName, state, formName, { errors: R.dissoc(field, state.errors) })),

    handleAction(clearFormErrors, (state, { payload: { formName } }) =>
      reducerChecker(reducerFormName, state, formName, { errors: getInitialFormState(initialState).errors })),

    handleAction(clearForm, (state, { payload: { formName } }) =>
      reducerChecker(reducerFormName, state, formName, getInitialFormState(initialState))),

    ...getCommonReducers(reducerFormName, initialState, handleAction),
  ]);
