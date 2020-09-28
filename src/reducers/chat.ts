import { createReducer } from 'deox';
import * as R from 'ramda';

import { setAllUsers, setMessage } from 'actions/chat';
import { REDUCER_TYPES } from 'enums';
import { getCommonReducers, getInitialState } from './common';

const initialState = getInitialState({
  messages: {},
  allUserList: [],
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
    ...getCommonReducers(REDUCER_TYPES.CHAT, initialState, handleAction),
  ]),
);
