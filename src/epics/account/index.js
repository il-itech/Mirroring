import { combineEpics } from 'redux-observable';

import { setUserAvatarEpic } from './set-user-avatar';

export const accountEpic = combineEpics(
  setUserAvatarEpic,
);
