import { createActions } from 'redux-actions';

export const {
  setMessage,
  sendMessage,
} = createActions(
  'SET_MESSAGE',
  'SEND_MESSAGE',
);
