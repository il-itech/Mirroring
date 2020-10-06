import { ActionType, ofType } from 'deox';
import { StateObservable } from 'redux-observable';
import { of, concat, Observable } from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { IState } from 'interfaces/state.interfaces/index';
import { showNotification } from 'actions/system';
import { setProfile } from 'actions/profile';
import { uploadFile } from 'actions/files';
import { setUserAvatar as setUserAvatarApi } from 'services/http/account';
import { getToken } from 'helpers/auth';
import { SNACKBAR_VARIANTS } from 'enums';
import {
  catchGlobalErrorWithUndefinedId,
  setGlobalInProgressStatusAction,
} from '../common-operators';

type Action = ActionType<
  typeof uploadFile
>;

export const setUserAvatarEpic = (
  action$: Observable<Action>,
  state$: StateObservable<IState>,
) =>
  action$.pipe(
    ofType(uploadFile),
    switchMap(({ payload }) => concat(
      setGlobalInProgressStatusAction(true),
      setUserAvatarApi(ajax, payload, getToken() as string).pipe(
        mergeMap(({ response }) => {
          const { profile } = state$?.value;

          return of(
            setProfile({ ...profile, ...response }),
            showNotification({ variant: SNACKBAR_VARIANTS.SUCCESS, message: 'Avatar has been updated' }),
          );
        }),
      ),
      setGlobalInProgressStatusAction(false),
    )),
    catchGlobalErrorWithUndefinedId,
  );
