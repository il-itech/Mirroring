import { ActionType, ofType } from 'deox';
import { concat, of, Observable } from 'rxjs';
import {
  switchMap, mergeMap, catchError, delay,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import cookies from 'js-cookie';

import { setInProgressStatus } from 'actions/common';
import { showNotification } from 'actions/system';
import { setProfile } from 'actions/profile';
import { signIn, setAuthStatus } from 'actions/auth';
import { signIn as signInApi } from 'services/http/auth';
import { FORM_TYPES, SNACKBAR_VARIANTS } from 'enums';
import {
  setInProgressStatusAction,
  getGlobalErrorObservable,
  catchGlobalErrorWithUndefinedId,
} from '../common-operators';

type Action = ActionType<
  typeof signIn
>;

export const signInEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(signIn),
    switchMap(({ payload }) => concat(
      setInProgressStatusAction(FORM_TYPES.SIGN_IN, true),
      signInApi(ajax, payload).pipe(
        mergeMap(({ response: user }) => {
          cookies.set('accessToken', user.accessToken);

          return of(
            setProfile(user),
            setAuthStatus(true),
            setInProgressStatus(FORM_TYPES.SIGN_IN, false),
          );
        }),
        catchError((error) => {
          const { response: { message } } = error;

          return getGlobalErrorObservable(message, error);
        }),
      ),
      of(
        showNotification({ variant: SNACKBAR_VARIANTS.SUCCESS, message: 'Authentication has been success' }),
      ).pipe(
        delay(500),
      ),
    )),
    catchGlobalErrorWithUndefinedId,
  );
