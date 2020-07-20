import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { clearFormData } from 'actions/forms/common';
import { setMessage } from 'actions/chat';
import { useShallowSelector } from 'hooks/use-shallow-selector';
import { getChatSocketServiceSingleton } from 'services/sockets';
import { FORM_TYPES } from 'constants';

export const useChat = (roomId) => {
  const dispatch = useDispatch();
  const profileId = useShallowSelector(state => state?.profile?._id);
  const message = useShallowSelector(state => state?.forms?.chatMessage?.formData[roomId] || '');
  const chat = useShallowSelector(state => state?.chat);
  const socket = getChatSocketServiceSingleton();

  useEffect(() => {
    socket.connect();

    return () => socket.disconnect();
  }, [socket]);

  useEffect(() => {
    socket.emit('joinRoom', profileId);

    return () => socket.emit('leaveRoom', profileId);
  }, [profileId, socket]);

  useEffect(() => {
    const stream$ = socket.on('chatToClient')
      .subscribe(({ sender, message: receivedMessage }) =>
        R.compose(dispatch, setMessage)({
          roomId: sender,
          sender,
          message: receivedMessage,
        }));

    return () => stream$.unsubscribe();
  }, [roomId, dispatch, socket]);

  const onSubmit = (e) => {
    e.preventDefault();

    const preparedMessage = R.trim(message);

    socket.emit('chatToServer', {
      roomId,
      sender: profileId,
      message: preparedMessage,
    });

    if (roomId !== profileId) {
      R.compose(dispatch, setMessage)({
        roomId,
        sender: profileId,
        message: preparedMessage,
      });
    }

    R.compose(dispatch, clearFormData)(FORM_TYPES.CHAT_MESSAGE, roomId);
  };

  return {
    chat,
    socket,
    onSubmit,
  };
};
