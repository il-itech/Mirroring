import { ActionType, ofType } from 'deox';
import { concat, of, Observable } from 'rxjs';
import { switchMap, mergeMap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { setSuccessStatus } from 'actions/common';
import { signUp } from 'actions/auth';
import { showNotification } from 'actions/system';
import { signUp as signUpApi } from 'services/http/auth';
import { FORM_TYPES, SNACKBAR_VARIANTS } from 'enums';
import {
  getGlobalErrorObservable,
  setInProgressStatusAction,
  catchGlobalErrorWithUndefinedId,
} from '../common-operators';

type Action = ActionType<
  typeof signUp
>;

export const signUpEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(signUp),
    switchMap(({ payload }) => concat(
      setInProgressStatusAction(FORM_TYPES.SIGN_UP, true),
      signUpApi(ajax, payload).pipe(
        mergeMap(({ response }) => of(
          setSuccessStatus(FORM_TYPES.SIGN_UP, response),
          showNotification({ variant: SNACKBAR_VARIANTS.SUCCESS, message: 'Registration has been success' }),
        )),
        catchError((error) => {
          const { response: { message } } = error;

          return getGlobalErrorObservable(message, error);
        }),
      ),
      setInProgressStatusAction(FORM_TYPES.SIGN_UP, false),
    )),
    catchGlobalErrorWithUndefinedId,
  );
