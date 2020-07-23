import { ofType } from 'redux-observable';
import { concat, of } from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import cookies from 'js-cookie';

import { clearState } from 'actions/common';
import { showNotification, redirectTo, clearSystem } from 'actions/system';
import { signOut } from 'actions/auth';
import { signOut as signOutApi } from 'api/auth';
import { getToken } from 'helpers/auth';
import { REDUCER_TYPES, SNACKBAR_VARIANTS } from 'constants';
import { setGlobalInProgressStatusAction, catchGlobalErrorWithUndefinedId } from '../common-operators';

export const signOutEpic = action$ =>
  action$.pipe(
    ofType(signOut),
    switchMap(() => concat(
      setGlobalInProgressStatusAction(true),
      signOutApi(ajax, getToken()).pipe(
        mergeMap(() => {
          cookies.remove('accessToken');

          return of(
            clearState(REDUCER_TYPES.PROFILE),
            showNotification({ variant: SNACKBAR_VARIANTS.SUCCESS, message: 'You were sign out' }),
            redirectTo('/'),
          );
        }),
      ),
      setGlobalInProgressStatusAction(false),
      of(clearSystem(REDUCER_TYPES.SYSTEM)),
    )),
    catchGlobalErrorWithUndefinedId,
  );
