import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import cookies from 'js-cookie';

import { showNotification } from 'actions/system';
import { setProfile } from 'actions/profile';
import { confirmEmail, setAuthStatus } from 'actions/auth';
import { confirmEmail as confirmEmailApi } from 'api/auth';
import { SNACKBAR_VARIANTS } from 'constants';
import { catchGlobalErrorWithUndefinedId } from '../common-operators';

export const confirmEmailEpic = action$ =>
  action$.pipe(
    ofType(confirmEmail),
    switchMap(({ payload: token }) =>
      confirmEmailApi(ajax, token).pipe(
        mergeMap(({ response: user }) => {
          cookies.set('accessToken', user.accessToken);

          return of(
            setProfile(user),
            showNotification({ variant: SNACKBAR_VARIANTS.SUCCESS, message: 'Email has been confirmed!' }),
            setAuthStatus(true),
          );
        }),
      )),
    catchGlobalErrorWithUndefinedId,
  );
