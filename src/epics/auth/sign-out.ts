import { ActionType, ofType } from 'deox';
import { concat, of, Observable } from 'rxjs';
import { switchMap, mergeMap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import cookies from 'js-cookie';

import { clearState } from 'actions/common';
import {
  showNotification, redirectTo, clearSystem,
} from 'actions/system';
import { signOut } from 'actions/auth';
import { signOut as signOutApi } from 'services/http/auth';
import { getToken } from 'helpers/auth';
import { REDUCER_TYPES, SNACKBAR_VARIANTS } from 'enums';
import { setGlobalInProgressStatusAction, catchGlobalErrorWithUndefinedId, getGlobalErrorObservable } from '../common-operators';

type Action = ActionType<
  typeof signOut
>;

export const signOutEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(signOut),
    switchMap(() => concat(
      setGlobalInProgressStatusAction(true),
      signOutApi(ajax, getToken() as string).pipe(
        mergeMap(() => {
          cookies.remove('accessToken');

          return of(
            clearState(REDUCER_TYPES.PROFILE),
            redirectTo('/'),
            clearSystem(REDUCER_TYPES.SYSTEM),
            showNotification({ variant: SNACKBAR_VARIANTS.SUCCESS, message: 'You were sign out' }),
          );
        }),
        catchError((error) => {
          const { response: { message } } = error;

          return getGlobalErrorObservable(message, error);
        }),
      ),
      setGlobalInProgressStatusAction(false),
    )),
    catchGlobalErrorWithUndefinedId,
  );
