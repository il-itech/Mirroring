import { handleActions } from 'redux-actions';
import * as R from 'ramda';

import { setAllUsers, setMessage } from 'actions/chat';

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
    [setMessage]: (state, { payload: { roomId, sender, message } }) => ({
      ...state,
      messages: {
        ...state.messages,
        [roomId]: R.append({ sender, message }, state.messages[roomId] || []),
      },
    }),
    ...getCommonReducers(REDUCER_TYPES.CHAT, additionalState),
  },
  getInitialState(additionalState),
);
