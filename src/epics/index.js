import { combineEpics } from 'redux-observable';

import { coronavirusStatEpic } from './coronavirus';
import { setIntervalActionsEpic } from './set-interval-actions';

export const rootEpic = combineEpics(
  coronavirusStatEpic,
  setIntervalActionsEpic,
);
