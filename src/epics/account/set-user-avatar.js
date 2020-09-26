import { ofType } from 'redux-observable';
import { of, concat } from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { showNotification } from 'actions/system';
import { setProfile } from 'actions/profile';
import { uploadFile } from 'actions/files';
import { setUserAvatar as setUserAvatarApi } from 'services/http/account';
import { getToken } from 'helpers/auth';
import { SNACKBAR_VARIANTS } from 'constants';
import {
  catchGlobalErrorWithUndefinedId,
  setGlobalInProgressStatusAction,
} from '../common-operators';

export const setUserAvatarEpic = (action$, state$) =>
  action$.pipe(
    ofType(uploadFile),
    switchMap(({ payload }) => concat(
      setGlobalInProgressStatusAction(true),
      setUserAvatarApi(ajax, payload, getToken()).pipe(
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
