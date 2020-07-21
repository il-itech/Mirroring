import { combineEpics } from 'redux-observable';

import { signInEpic } from './sign-in';
import { signUpEpic } from './sign-up';
import { signOutEpic } from './sign-out';
import { confirmEmailEpic } from './confirm-email';

export const authEpic = combineEpics(
  signInEpic,
  signUpEpic,
  signOutEpic,
  confirmEmailEpic,
);
