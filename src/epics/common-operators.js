import * as R from 'ramda';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { setInProgressStatus } from '../actions/common';
import { redirectTo, globalError, setGlobalInProgressStatus } from '../actions/system';
import { ERRORS } from '../constants';

export const getGlobalErrorObservable = R.compose(of, globalError);
export const setGlobalInProgressStatusAction = R.compose(of, setGlobalInProgressStatus);
export const setInProgressStatusAction = R.compose(of, setInProgressStatus);
export const redirectToAction = R.compose(of, redirectTo);

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
