import { ActionType, ofType } from 'deox';
import { of, Observable } from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import cookies from 'js-cookie';

import { showNotification } from 'actions/system';
import { setProfile } from 'actions/profile';
import { confirmEmail, setAuthStatus } from 'actions/auth';
import { confirmEmail as confirmEmailApi } from 'services/http/auth';
import { SNACKBAR_VARIANTS } from 'enums';
import { catchGlobalErrorWithUndefinedId } from '../common-operators';

type Action = ActionType<
  typeof confirmEmail
>;

export const confirmEmailEpic = (action$: Observable<Action>) =>
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
