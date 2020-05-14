import { createActions } from 'redux-actions';

export const {
  signIn,
  signUp,
  signOut,
  setAuthStatus,
} = createActions(
  'SIGN_IN',
  'SIGN_UP',
  'SIGN_OUT',
  'SET_AUTH_STATUS',
);
