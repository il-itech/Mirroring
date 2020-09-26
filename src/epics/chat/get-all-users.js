import { ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';
import { request as ajax } from 'universal-rxjs-ajax';

import { getAllUsers, setAllUsers } from 'actions/chat';
import { getAllUsers as getAllUsersApi } from 'services/http/chat';
import { getToken } from 'helpers/auth';
import { catchGlobalErrorWithUndefinedId } from '../common-operators';

export const getAllUsersEpic = action$ =>
  action$.pipe(
    ofType(getAllUsers),
    switchMap(({ payload }) =>
      getAllUsersApi(ajax, payload, getToken()).pipe(
        map(({ response }) => setAllUsers(response)),
      )),
    catchGlobalErrorWithUndefinedId,
  );
