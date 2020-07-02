import { getConfig } from 'helpers/env';

import { SocketService } from './websocket-service';

const socketApi = getConfig('WEBSOCKET_API_URL');

let chatSocketService = null;

export const getChatSocketServiceSingleton = () => {
  if (!chatSocketService) {
    chatSocketService = new SocketService(`${socketApi}/chat`);
  }

  return chatSocketService;
};

