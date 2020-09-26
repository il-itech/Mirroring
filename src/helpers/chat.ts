import hash from 'object-hash';
import * as R from 'ramda';

import { IChatMessage, IChatMessages } from 'interfaces/state.interfaces/chat-interface';

export const getLastMessage = (
  _id: string,
  messages: IChatMessages,
): string =>
  R.compose<IChatMessage[], IChatMessage, string>(
    R.propOr('...', 'message'),
    R.last,
    R.propOr([], _id),
  )(messages);

export const getRoomHash = (
  profileId: string,
  roomId: string,
): string => hash({
  [profileId]: null,
  [roomId]: null,
});
