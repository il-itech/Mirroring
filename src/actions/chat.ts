import { createActions } from 'redux-actions';

export const {
  getAllUsers,
  setAllUsers,
  setMessage,
  sendMessage,
  getChatMessages,
  setChatMessages,
} = createActions(
  'GET_ALL_USERS',
  'SET_ALL_USERS',
  'SET_MESSAGE',
  'SEND_MESSAGE',
  'GET_CHAT_MESSAGES',
  'SET_CHAT_MESSAGES',
);
