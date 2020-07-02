import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import store from 'store';

import { showNotification } from 'actions/system';
import { confirmEmail, setAuthStatus } from 'actions/auth';
import { confirmEmail as confirmEmailApi } from 'api/auth';
import { SNACKBAR_VARIANTS } from 'constants';
import { catchGlobalErrorWithUndefinedId } from '../common-operators';

export const confirmEmailEpic = action$ =>
  action$.pipe(
    ofType(confirmEmail),
    switchMap(({ payload: token }) =>
      confirmEmailApi(ajax, token).pipe(
        mergeMap(({ response }) => {
          store.set('user', response);

          return of(
            showNotification({ variant: SNACKBAR_VARIANTS.SUCCESS, message: 'Email has been confirmed!' }),
            setAuthStatus(true),
          );
        }),
      )),
    catchGlobalErrorWithUndefinedId,
  );
