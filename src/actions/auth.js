import { createActions } from 'redux-actions';

export const {
  signIn,
  signUp,
  signOut,
  confirmEmail,
  setAuthStatus,
} = createActions(
  'SIGN_IN',
  'SIGN_UP',
  'SIGN_OUT',
  'CONFIRM_EMAIL',
  'SET_AUTH_STATUS',
);
