import { createActions } from 'redux-actions';

export const {
  signIn,
  signUp,
  signOut,
  confirmEmail,
  changeCredentials,
  setAuthStatus,
} = createActions(
  'SIGN_IN',
  'SIGN_UP',
  'SIGN_OUT',
  'CONFIRM_EMAIL',
  'CHANGE_CREDENTIALS',
  'SET_AUTH_STATUS',
);
