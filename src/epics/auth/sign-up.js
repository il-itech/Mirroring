import { ofType } from 'redux-observable';
import { concat, of } from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { setSuccessStatus } from 'actions/common';
import { signUp } from 'actions/auth';
import { showNotification } from 'actions/system';
import { signUp as signUpApi } from 'api/auth';
import { FORM_TYPES, SNACKBAR_VARIANTS } from 'constants';
import {
  setInProgressStatusAction,
  catchGlobalErrorWithUndefinedId,
} from '../common-operators';

export const signUpEpic = action$ =>
  action$.pipe(
    ofType(signUp),
    switchMap(({ payload }) => concat(
      setInProgressStatusAction(FORM_TYPES.SIGN_UP, true),
      signUpApi(ajax, payload).pipe(
        mergeMap(({ response }) => of(
          setSuccessStatus(FORM_TYPES.SIGN_UP, response),
          showNotification({ variant: SNACKBAR_VARIANTS.SUCCESS, message: 'Registration has been success' }),
        )),
      ),
      setInProgressStatusAction(FORM_TYPES.SIGN_UP, false),
    )),
    catchGlobalErrorWithUndefinedId,
  );
