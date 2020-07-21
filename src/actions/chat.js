import { createActions } from 'redux-actions';

export const {
  getAllUsers,
  setAllUsers,
  setMessage,
  sendMessage,
} = createActions(
  'GET_ALL_USERS',
  'SET_ALL_USERS',
  'SET_MESSAGE',
  'SEND_MESSAGE',
);
