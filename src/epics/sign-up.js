import { ofType } from 'redux-observable';
import { concat } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import store from 'store';

import { signUp, setAuthStatus } from 'actions/auth';
import { signUp as signUpApi } from 'api/auth';
import { FORM_TYPES } from 'constants';
import { setInProgressStatusAction, catchGlobalErrorWithUndefinedId } from './common-operators';

export const signUpEpic = action$ =>
  action$.pipe(
    ofType(signUp),
    switchMap(({ payload }) => concat(
      setInProgressStatusAction(FORM_TYPES.SIGN_UP, true),
      signUpApi(ajax, payload).pipe(
        map(({ response }) => {
          store.set('user', response);

          return setAuthStatus(true);
        }),
      ),
      setInProgressStatusAction(FORM_TYPES.SIGN_UP, false),
    )),
    catchGlobalErrorWithUndefinedId,
  );
