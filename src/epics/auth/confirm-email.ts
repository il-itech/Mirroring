import { ActionType, ofType } from 'deox';
import { of, Observable } from 'rxjs';
import { switchMap, mergeMap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import cookies from 'js-cookie';
import * as R from 'ramda';

import { IProfile } from 'interfaces/state.interfaces/profile-interface';
import { setAccessToken, showNotification } from 'actions/system';
import { setProfile } from 'actions/profile';
import { confirmEmail, setAuthStatus } from 'actions/auth';
import { confirmEmail as confirmEmailApi } from 'services/http/auth';
import { SNACKBAR_VARIANTS } from 'enums';
import { catchGlobalErrorWithUndefinedId, getGlobalErrorObservable } from '../common-operators';

type Action = ActionType<
  typeof confirmEmail
>;

export const confirmEmailEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(confirmEmail),
    switchMap(({ payload: token }) =>
      confirmEmailApi(ajax, token).pipe(
        mergeMap(({ response }) => {
          const { accessToken } = response;
          const profile = R.omit(['accessToken'], response) as IProfile;

          cookies.set('accessToken', accessToken);

          return of(
            setProfile(profile),
            setAccessToken(accessToken),
            showNotification({ variant: SNACKBAR_VARIANTS.SUCCESS, message: 'Email has been confirmed!' }),
            setAuthStatus(true),
          );
        }),
        catchError((error) => {
          const { response: { message } } = error;

          return getGlobalErrorObservable(message, error);
        }),
      )),
    catchGlobalErrorWithUndefinedId,
  );
