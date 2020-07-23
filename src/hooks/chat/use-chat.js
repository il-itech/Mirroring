import { useEffect, useCallback, createRef } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import * as R from 'ramda';

import { clearFormData } from 'actions/forms/common';
import { setMessage } from 'actions/chat';
import { useShallowSelector } from 'hooks/use-shallow-selector';
import { getChatSocketServiceSingleton } from 'services/sockets';
import { isEmptyOrNil } from 'helpers/utils';
import { FORM_TYPES } from 'constants';

const ENTER_KEY = 13;

export const useChat = (roomId) => {
  const dispatch = useDispatch();
  const profileId = useShallowSelector(state => state?.profile?._id);
  const message = useShallowSelector(state => state?.forms?.chatMessage?.formData[roomId] || '');
  const chat = useShallowSelector(state => state?.chat);
  const socket = getChatSocketServiceSingleton();
  const chatContentRef = createRef();

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
      .subscribe(({ sender, message: receivedMessage, date }) =>
        R.compose(dispatch, setMessage)({
          roomId: sender,
          sender,
          message: receivedMessage,
          date,
        }));

    return () => stream$.unsubscribe();
  }, [roomId, dispatch, socket]);

  const handleSubmit = useCallback(() => {
    if (isEmptyOrNil(message)) return;

    const preparedMessage = R.trim(message);
    const date = dayjs().toISOString();

    socket.emit('chatToServer', {
      roomId,
      sender: profileId,
      message: preparedMessage,
      date,
    });

    if (roomId !== profileId) {
      R.compose(dispatch, setMessage)({
        roomId,
        sender: profileId,
        message: preparedMessage,
        date,
      });
    }

    R.compose(dispatch, clearFormData)(FORM_TYPES.CHAT_MESSAGE, roomId);
  }, [dispatch, message, profileId, roomId, socket]);

  const handleKeyPress = useCallback((e) => {
    if (e.which === ENTER_KEY && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }, [handleSubmit]);

  return {
    chat,
    socket,
    chatContentRef,
    handleSubmit,
    handleKeyPress,
  };
};
