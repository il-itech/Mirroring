import { StateObservable } from 'redux-observable';
import { ActionType, ofType } from 'deox';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { request as ajax } from 'universal-rxjs-ajax';

import { getAllUsers, setAllUsers } from 'actions/chat';
import { getAllUsers as getAllUsersApi } from 'services/http/chat';
import { IState } from 'interfaces/state.interfaces';
import { catchGlobalErrorWithUndefinedId } from '../common-operators';

type Action = ActionType<
  typeof getAllUsers
>;

export const getAllUsersEpic = (
  action$: Observable<Action>,
  state$: StateObservable<IState>,
) =>
  action$.pipe(
    ofType(getAllUsers),
    switchMap(() => {
      const { accessToken } = state$?.value.system;

      return getAllUsersApi(ajax, accessToken).pipe(
        map(({ response }) => setAllUsers(response)),
      );
    }),
    catchGlobalErrorWithUndefinedId,
  );
