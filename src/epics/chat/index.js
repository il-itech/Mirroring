import { combineEpics } from 'redux-observable';

import { getAllUsersEpic } from './get-all-users';

export const chatEpic = combineEpics(
  getAllUsersEpic,
);
