import { ActionType, ofType } from 'deox';
import { of, Observable, concat } from 'rxjs';
import { switchMap, mergeMap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { setSuccessStatus } from 'actions/common';
import { redirectTo, showNotification } from 'actions/system';
import { resetPassword } from 'actions/auth';
import { resetPassword as resetPasswordApi } from 'services/http/auth';
import { FORM_TYPES, SNACKBAR_VARIANTS } from 'enums';
import {
  catchGlobalErrorWithUndefinedId,
  getGlobalErrorObservable,
  setInProgressStatusAction,
} from '../common-operators';

type Action = ActionType<
  typeof resetPassword
>;

export const resetPasswordEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(resetPassword),
    switchMap(({ payload }) => concat(
      setInProgressStatusAction(FORM_TYPES.RESET_PASSWORD, true),
      resetPasswordApi(ajax, payload).pipe(
        mergeMap(() => of(
          setSuccessStatus(FORM_TYPES.RESET_PASSWORD, true),
          showNotification({ variant: SNACKBAR_VARIANTS.SUCCESS, message: 'Check your email to reset password' }),
          redirectTo('/'),
        )),
        catchError((error) => {
          const { response: { message } } = error;

          return getGlobalErrorObservable(message, error);
        }),
      ),
      setInProgressStatusAction(FORM_TYPES.RESET_PASSWORD, false),
    )),
    catchGlobalErrorWithUndefinedId,
  );
