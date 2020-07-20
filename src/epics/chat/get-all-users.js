import { ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';
import { request as ajax } from 'universal-rxjs-ajax';

import { getAllUsers, setAllUsers } from 'actions/chat';
import { getAllUsers as getAllUsersApi } from 'api/chat';
import { catchGlobalErrorWithUndefinedId } from '../common-operators';

export const getAllUsersEpic = action$ =>
  action$.pipe(
    ofType(getAllUsers),
    switchMap(({ payload }) =>
      getAllUsersApi(ajax, payload).pipe(
        map(({ response }) => setAllUsers(response)),
      )),
    catchGlobalErrorWithUndefinedId,
  );
