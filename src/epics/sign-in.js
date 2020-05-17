import { ofType } from 'redux-observable';
import { concat } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import store from 'store';

import { signIn, setAuthStatus } from '../actions/auth';
import { signIn as signInApi } from '../api/auth';
import { setInProgressStatusAction, catchGlobalErrorWithUndefinedId } from './common-operators';
import { FORM_TYPES } from '../constants';

export const signInEpic = action$ =>
  action$.pipe(
    ofType(signIn),
    switchMap(({ payload }) => concat(
      setInProgressStatusAction(FORM_TYPES.SIGN_IN, true),
      signInApi(ajax, payload).pipe(
        map(({ response: { result } }) => {
          store.set('user', result);

          return setAuthStatus(true);
        }),
      ),
      setInProgressStatusAction(FORM_TYPES.SIGN_IN, false),
    )),
    catchGlobalErrorWithUndefinedId,
  );
