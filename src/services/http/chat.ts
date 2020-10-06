import { AjaxCreationMethod } from 'epics/types';
import { getConfig } from 'helpers/env';

const api = getConfig('HTTP_API_URL');

/**
 * API for receive list of all users
 * @param {AjaxCreationMethod} ajax
 */
export const getAllUsers = (ajax: AjaxCreationMethod, token: string) => ajax({
  url: `${api}/user/get-all-users`,
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

/**
 * API for receive list of messages by roomHash
 * @param {AjaxCreationMethod} ajax
 */
export const getChatMessages = (
  ajax: AjaxCreationMethod,
  roomHash: string,
  token: string,
) => ajax({
  url: `${api}/chat/get-chat-messages?roomHash=${roomHash}`,
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
