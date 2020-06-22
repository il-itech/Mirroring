import { SocketService } from './websocket-service';

let chatSocketService = null;

export const getChatSocketServiceSingleton = () => {
  if (!chatSocketService) {
    chatSocketService = new SocketService('ws://localhost:3006/chat');
  }

  return chatSocketService;
};

