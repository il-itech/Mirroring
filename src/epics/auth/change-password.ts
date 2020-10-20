import { ActionType, ofType } from 'deox';
import { of, Observable, concat } from 'rxjs';
import { switchMap, mergeMap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { setSuccessStatus } from 'actions/common';
import { redirectTo, showNotification } from 'actions/system';
import { changePassword } from 'actions/auth';
import { changePassword as changePasswordApi } from 'services/http/auth';
import { FORM_TYPES, SNACKBAR_VARIANTS } from 'enums';
import {
  catchGlobalErrorWithUndefinedId,
  getGlobalErrorObservable,
  setInProgressStatusAction,
} from '../common-operators';

type Action = ActionType<
  typeof changePassword
>;

export const changePasswordEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(changePassword),
    switchMap(({ payload: { password, token } }) => concat(
      setInProgressStatusAction(FORM_TYPES.CHANGE_PASSWORD, true),
      changePasswordApi(ajax, { password, token }).pipe(
        mergeMap(() => of(
          setSuccessStatus(FORM_TYPES.CHANGE_PASSWORD, true),
          showNotification({ variant: SNACKBAR_VARIANTS.SUCCESS, message: 'Your password was successfully updated' }),
          redirectTo('/'),
        )),
        catchError((error) => {
          const { response: { message } } = error;

          return getGlobalErrorObservable(message, error);
        }),
      ),
      setInProgressStatusAction(FORM_TYPES.CHANGE_PASSWORD, false),
    )),
    catchGlobalErrorWithUndefinedId,
  );
