import { useEffect } from 'react';

import { useShallowSelector } from '../use-shallow-selector';
import { getChatSocketServiceSingleton } from '../../services/socket';

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
