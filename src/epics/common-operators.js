import * as R from 'ramda';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ActionsObservable } from 'redux-observable';

import { setInProgressStatus } from '../actions/common';
import { redirectTo, globalError, setGlobalInProgressStatus } from '../actions/system';
import { ERRORS } from '../constants';

export const getGlobalErrorObservable = R.compose(of, globalError);
export const setGlobalInProgressStatusAction = R.compose(of, setGlobalInProgressStatus);
export const setInProgressStatusAction = R.compose(of, setInProgressStatus);
export const redirectToAction = R.compose(of, redirectTo);

/**
 * Helper function that allows using actions observable of operator in compose chains
 */
export const actionsObservableOf = R.bind(ActionsObservable.of, ActionsObservable);

/**
 * Curried catchError operator to partially apply errorMessageId
 * @param {string} errorMessageId
 * @returns catchError ready for pipe operator
 */
export const catchGlobalErrorWith = (errorMessageId) =>
  catchError(err =>
    getGlobalErrorObservable(errorMessageId, err));

/**
 * Already applied catchGlobalErrorWith on UNDEFINED_ERROR_ID
 */
export const catchGlobalErrorWithUndefinedId = catchGlobalErrorWith(ERRORS.UNDEFINED);
