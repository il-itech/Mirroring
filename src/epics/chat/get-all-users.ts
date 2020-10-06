import { ActionType, ofType } from 'deox';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { request as ajax } from 'universal-rxjs-ajax';

import { getAllUsers, setAllUsers } from 'actions/chat';
import { getAllUsers as getAllUsersApi } from 'services/http/chat';
import { getToken } from 'helpers/auth';
import { catchGlobalErrorWithUndefinedId } from '../common-operators';

type Action = ActionType<
  typeof getAllUsers
>;

export const getAllUsersEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(getAllUsers),
    switchMap(() =>
      getAllUsersApi(ajax, getToken() as string).pipe(
        map(({ response }) => setAllUsers(response)),
      )),
    catchGlobalErrorWithUndefinedId,
  );
