import { createActions } from 'redux-actions';

export const {
  signIn,
  signUp,
  signOut,
  confirmEmail,
  changeCredentials,
  changePassword,
  setAuthStatus,
} = createActions(
  'SIGN_IN',
  'SIGN_UP',
  'SIGN_OUT',
  'CONFIRM_EMAIL',
  'CHANGE_CREDENTIALS',
  'CHANGE_PASSWORD',
  'SET_AUTH_STATUS',
);
