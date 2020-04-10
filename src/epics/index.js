import { combineEpics } from 'redux-observable';

import { coronavirusStatEpic } from './coronavirus';

export const rootEpic = combineEpics(
  coronavirusStatEpic,
);
