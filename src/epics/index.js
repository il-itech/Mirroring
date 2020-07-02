import { combineEpics } from 'redux-observable';

import { authEpic } from './auth';
import { coronavirusStatEpic } from './coronavirus';
import { setIntervalActionsEpic } from './set-interval-actions';

export const rootEpic = combineEpics(
  authEpic,
  coronavirusStatEpic,
  setIntervalActionsEpic,
);
