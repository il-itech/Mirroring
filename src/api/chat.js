import { getConfig } from 'helpers/env';

const api = getConfig('HTTP_API_URL');

/**
 * API for receive list of all users
 * @param {Object} ajax
 */
export const getAllUsers = (ajax, token) => ajax({
  url: `${api}/user/get-all-users`,
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

/**
 * API for receive list of messages by roomHash
 * @param {Object} ajax
 */
export const getChatMessages = (ajax, roomHash, token) => ajax({
  url: `${api}/chat/get-chat-messages?roomHash=${roomHash}`,
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
