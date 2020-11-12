import { combineEpics } from 'redux-observable';

import { signInEpic } from './sign-in';
import { signUpEpic } from './sign-up';
import { signOutEpic } from './sign-out';
import { confirmEmailEpic } from './confirm-email';
import { resetPasswordEpic } from './reset-password';
import { changePasswordEpic } from './change-password';

export const authEpic = combineEpics(
  signInEpic,
  signUpEpic,
  signOutEpic,
  confirmEmailEpic,
  resetPasswordEpic,
  changePasswordEpic,
);
