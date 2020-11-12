import { combineEpics } from 'redux-observable';

import { getAllUsersEpic } from './get-all-users';
import { getChatMessagesEpic } from './get-chat-messages';

export const chatEpic = combineEpics(
  getAllUsersEpic,
  getChatMessagesEpic,
);
