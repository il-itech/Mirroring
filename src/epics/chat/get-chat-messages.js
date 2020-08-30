import { ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';
import { request as ajax } from 'universal-rxjs-ajax';

import { getChatMessages, setChatMessages } from 'actions/chat';
import { getChatMessages as getChatMessagesApi } from 'api/chat';
import { getToken } from 'helpers/auth';
import { catchGlobalErrorWithUndefinedId } from '../common-operators';

export const getChatMessagesEpic = action$ =>
  action$.pipe(
    ofType(getChatMessages),
    switchMap(({ payload: { roomId, roomHash } }) =>
      getChatMessagesApi(ajax, roomHash, getToken()).pipe(
        map(({ response: messages }) => setChatMessages({ roomId, messages })),
      )),
    catchGlobalErrorWithUndefinedId,
  );
