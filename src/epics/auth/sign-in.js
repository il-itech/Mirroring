import { ofType } from 'redux-observable';
import { concat, of } from 'rxjs';
import { switchMap, mergeMap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import store from 'store';

import { showNotification } from 'actions/system';
import { setProfile } from 'actions/profile';
import { signIn, setAuthStatus } from 'actions/auth';
import { signIn as signInApi } from 'api/auth';
import { FORM_TYPES, SNACKBAR_VARIANTS } from 'constants';
import {
  setInProgressStatusAction,
  getGlobalErrorObservable,
  catchGlobalErrorWithUndefinedId,
} from '../common-operators';

export const signInEpic = action$ =>
  action$.pipe(
    ofType(signIn),
    switchMap(({ payload }) => concat(
      setInProgressStatusAction(FORM_TYPES.SIGN_IN, true),
      signInApi(ajax, payload).pipe(
        mergeMap(({ response: user }) => {
          store.set('user', user);

          return of(
            setProfile(user),
            setAuthStatus(true),
            showNotification({ variant: SNACKBAR_VARIANTS.SUCCESS, message: 'Authentication has been success' }),
          );
        }),
        catchError((error) => {
          const { response: { message } } = error;

          return getGlobalErrorObservable(message, error);
        }),
      ),
      setInProgressStatusAction(FORM_TYPES.SIGN_IN, false),
    )),
    catchGlobalErrorWithUndefinedId,
  );
