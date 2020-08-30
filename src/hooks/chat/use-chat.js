import {
  useEffect,
  useCallback,
  useMemo,
  createRef,
} from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import * as R from 'ramda';

import { clearFormData } from 'actions/forms/common';
import { setMessage, getChatMessages } from 'actions/chat';
import { useShallowSelector } from 'hooks/use-shallow-selector';
import { getChatSocketServiceSingleton } from 'services/sockets';
import { isEmptyOrNil } from 'helpers/utils';
import { getRoomHash } from 'helpers/chat';
import { FORM_TYPES } from 'constants';

const ENTER_KEY = 13;

export const useChat = (roomId) => {
  const dispatch = useDispatch();
  const profileId = useShallowSelector(state => state?.profile?._id);
  const message = useShallowSelector(state => state?.forms?.chatMessage?.formData[roomId] || '');
  const chat = useShallowSelector(state => state?.chat);
  const socket = useMemo(getChatSocketServiceSingleton);
  const roomHash = useMemo(() => getRoomHash(profileId, roomId), [profileId, roomId]);
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

  useEffect(() => {
    R.compose(dispatch, getChatMessages)({ roomId, roomHash });
  }, [dispatch, roomHash, roomId]);

  const handleSubmit = useCallback(() => {
    if (isEmptyOrNil(message)) return;

    const preparedMessage = R.trim(message);
    const date = dayjs().toISOString();
    const data = {
      roomId,
      sender: profileId,
      message: preparedMessage,
      date,
    };

    socket.emit('chatToServer', {
      ...data,
      roomHash,
    });

    if (roomId !== profileId) {
      R.compose(dispatch, setMessage)(data);
    }

    R.compose(dispatch, clearFormData)(FORM_TYPES.CHAT_MESSAGE, roomId);
  }, [dispatch, message, profileId, roomHash, roomId, socket]);

  const handleKeyPress = useCallback((e) => {
    if (e.which === ENTER_KEY && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }, [handleSubmit]);

  return {
    chat,
    socket,
    roomHash,
    chatContentRef,
    handleSubmit,
    handleKeyPress,
  };
};
