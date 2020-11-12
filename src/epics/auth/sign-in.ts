import { ActionType, ofType } from 'deox';
import { concat, of, Observable } from 'rxjs';
import {
  switchMap, mergeMap, catchError,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import cookies from 'js-cookie';
import * as R from 'ramda';

import { setAccessToken, showNotification } from 'actions/system';
import { setProfile } from 'actions/profile';
import { signIn, setAuthStatus } from 'actions/auth';
import { signIn as signInApi } from 'services/http/auth';
import { FORM_TYPES, SNACKBAR_VARIANTS } from 'enums';
import { IProfile } from 'interfaces/state.interfaces/profile-interface';
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
        mergeMap(({ response }) => {
          const { accessToken } = response;
          const profile = R.omit(['accessToken'], response) as IProfile;

          cookies.set('accessToken', accessToken);

          return of(
            setProfile(profile),
            setAccessToken(accessToken),
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
