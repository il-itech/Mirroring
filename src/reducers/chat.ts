import { handleActions } from 'redux-actions';
import * as R from 'ramda';

import { IChat } from 'types/state.interfaces/chat-interface';
import { setAllUsers, setMessage } from 'actions/chat';

import { REDUCER_TYPES } from 'constants';
import { getCommonReducers, getInitialState } from './common';

const additionalState = {
  messages: {},
  allUserList: [],
};

export const chat = handleActions<IChat, any>(
  {
    [`${setAllUsers}`]: (state, { payload }) => ({
      ...state,
      allUserList: payload,
    }),
    [`${setMessage}`]: (state, {
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
