import { combineEpics } from 'redux-observable';

import { authEpic } from './auth';
import { chatEpic } from './chat';
import { coronavirusStatEpic } from './coronavirus';
import { setIntervalActionsEpic } from './set-interval-actions';

export const rootEpic = combineEpics(
  authEpic,
  chatEpic,
  coronavirusStatEpic,
  setIntervalActionsEpic,
);
