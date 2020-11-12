import { combineEpics } from 'redux-observable';

import { authEpic } from './auth';
import { chatEpic } from './chat';
import { coronavirusStatEpic } from './coronavirus';
import { accountEpic } from './account';
import { setIntervalActionsEpic } from './set-interval-actions';

export const rootEpic = combineEpics(
  authEpic,
  chatEpic,
  coronavirusStatEpic,
  accountEpic,
  setIntervalActionsEpic,
);
