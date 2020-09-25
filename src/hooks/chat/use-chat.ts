import {
  useEffect,
  useCallback,
  useMemo,
  RefObject,
  SyntheticEvent,
  useRef,
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
import { IChat } from 'interfaces/state.interfaces/chat-interface';
import { FORM_TYPES } from 'enums';

const ENTER_KEY = 13;

interface IUseChat {
  chat: IChat;
  socket: any;
  roomHash: string;
  chatContentRef: RefObject<HTMLDivElement>;
  handleSubmit: (e: SyntheticEvent) => void;
  handleKeyPress: (e: KeyboardEvent) => void;
}

export const useChat = (roomId: string): IUseChat => {
  const dispatch = useDispatch();
  const profileId = useShallowSelector(state => state?.profile?._id);
  const message = useShallowSelector(state => state?.forms?.chatMessage?.formData[roomId] || '');
  const chat = useShallowSelector(state => state?.chat);
  const socket = useMemo(getChatSocketServiceSingleton, []);
  const roomHash = useMemo(() => getRoomHash(profileId, roomId), [profileId, roomId]);
  const chatContentRef = useRef<HTMLDivElement>();

  useEffect(() => {
    socket.connect();

    return (): void => {
      socket.disconnect();
    };
  }, [socket]);

  useEffect(() => {
    socket.emit('joinRoom', profileId);

    return (): void => {
      socket.emit('leaveRoom', profileId);
    };
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

    return (): void => {
      stream$.unsubscribe();
    };
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

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
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
