import { combineEpics } from 'redux-observable';

import { coronavirusStatEpic } from './coronavirus';
import { setIntervalActionsEpic } from './set-interval-actions';
import { signInEpic } from './sign-in';
import { signUpEpic } from './sign-up';

export const rootEpic = combineEpics(
  coronavirusStatEpic,
  setIntervalActionsEpic,
  signInEpic,
  signUpEpic,
);
