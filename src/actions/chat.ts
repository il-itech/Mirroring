import { createActionCreator } from 'deox';

import { IChatUser, IChatMessage } from 'interfaces/state.interfaces/chat-interface';

export const getAllUsers = createActionCreator('GET_ALL_USERS');

export const setAllUsers = createActionCreator(
  'SET_ALL_USERS',
  resolve => (chatUsers: IChatUser[]) => resolve(chatUsers),
);

export const setMessage = createActionCreator(
  'SET_MESSAGE',
  resolve => (chatMessage: IChatMessage) => resolve(chatMessage),
);

export const getChatMessages = createActionCreator(
  'GET_CHAT_MESSAGES',
  resolve => (chatInfo: { roomId: string; roomHash: string }) => resolve(chatInfo),
);

export const setChatMessages = createActionCreator(
  'SET_CHAT_MESSAGES',
  resolve => (chatMessages: { roomId: string; messages: IChatMessage[] }) => resolve(chatMessages),
);
