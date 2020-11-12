import * as R from 'ramda';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { setInProgressStatus, setSuccessStatus, clearState } from 'actions/common';
import { redirectTo, globalError, setGlobalInProgressStatus } from 'actions/system';
import { ERRORS } from 'enums';

export const getGlobalErrorObservable = R.compose(of, globalError);
export const setGlobalInProgressStatusAction = R.compose(of, setGlobalInProgressStatus);
export const setInProgressStatusAction = R.compose(of, setInProgressStatus);
export const setSuccessStatusAction = R.compose(of, setSuccessStatus);
export const redirectToAction = R.compose(of, redirectTo);
export const clearStateAction = R.compose(of, clearState);

/**
 * Curried catchError operator to partially apply errorMessageId
 * @param {string} errorMessageId
 * @returns catchError ready for pipe operator
 */
export const catchGlobalErrorWith = (errorMessageId: string) =>
  catchError(err =>
    getGlobalErrorObservable(errorMessageId, err));

/**
 * Already applied catchGlobalErrorWith on UNDEFINED_ERROR_ID
 */
export const catchGlobalErrorWithUndefinedId = catchGlobalErrorWith(ERRORS.UNDEFINED);
