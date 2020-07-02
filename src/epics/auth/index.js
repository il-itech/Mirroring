import { combineEpics } from 'redux-observable';

import { signInEpic } from './sign-in';
import { signUpEpic } from './sign-up';
import { confirmEmailEpic } from './confirm-email';

export const authEpic = combineEpics(
  signInEpic,
  signUpEpic,
  confirmEmailEpic,
);
