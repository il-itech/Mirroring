import { handleActions } from 'redux-actions';
import * as R from 'ramda';

import { setAllUsers, setMessage, setChatMessages } from 'actions/chat';

import { REDUCER_TYPES } from 'constants';
import { getCommonReducers, getInitialState } from '../common';

const additionalState = {
  messages: {},
  allUserList: [],
};

export const chat = handleActions(
  {
    [setAllUsers]: (state, { payload }) => ({
      ...state,
      allUserList: payload,
    }),
    [setChatMessages]: (state, { payload: { roomId, messages } }) => ({
      ...state,
      messages: {
        ...state.messages,
        [roomId]: messages,
      },
    }),
    [setMessage]: (state, {
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
    }),
    ...getCommonReducers(REDUCER_TYPES.CHAT, additionalState),
  },
  getInitialState(additionalState),
);
