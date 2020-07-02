import { useEffect } from 'react';

import { getChatSocketServiceSingleton } from 'services/sockets';
import { useShallowSelector } from '../use-shallow-selector';

export const useChat = () => {
  const { messages } = useShallowSelector(state => state?.messenger);
  const socket = getChatSocketServiceSingleton();

  useEffect(() => {
    socket.connect();

    return () => socket.disconnect();
  }, [socket]);

  return {
    messages,
  };
};
