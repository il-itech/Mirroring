import { createReducer } from 'deox';
import * as R from 'ramda';

import { setAllUsers, setChatMessages, setMessage } from 'actions/chat';
import { REDUCER_TYPES } from 'enums';
import { IChatUser } from 'interfaces/state.interfaces/chat-interface';
import { getCommonReducers, getInitialState } from './common';

const initialState = getInitialState({
  messages: {},
  allUserList: [] as IChatUser[],
});

export const chat = createReducer(
  initialState,
  handleAction => ([
    handleAction(setAllUsers, (state, { payload }) => ({
      ...state,
      allUserList: payload,
    })),
    handleAction(setMessage, (state, {
      payload: {
        roomId,
        sender,
        message,
        date,
      },
    }) => ({
      ...state,
      messages: {
        ...state.messages,
        [roomId]: R.append({ sender, message, date }, state.messages[roomId] || []),
      },
    })),
    handleAction(setChatMessages, (state, { payload: { roomId, messages } }) => ({
      ...state,
      messages: {
        ...state.messages,
        [roomId]: messages,
      },
    })),
    ...getCommonReducers(REDUCER_TYPES.CHAT, initialState, handleAction),
  ]),
);
