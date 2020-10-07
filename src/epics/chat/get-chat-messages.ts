import { ActionType, ofType } from 'deox';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { request as ajax } from 'universal-rxjs-ajax';

import { getChatMessages, setChatMessages } from 'actions/chat';
import { getChatMessages as getChatMessagesApi } from 'services/http/chat';
import { getToken } from 'helpers/auth';
import { catchGlobalErrorWithUndefinedId } from '../common-operators';

type Action = ActionType<
  typeof getChatMessages
>;

export const getChatMessagesEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(getChatMessages),
    switchMap(({ payload: { roomId, roomHash } }) =>
      getChatMessagesApi(ajax, roomHash, getToken() as string).pipe(
        map(({ response: messages }) => setChatMessages({ roomId, messages })),
      )),
    catchGlobalErrorWithUndefinedId,
  );
