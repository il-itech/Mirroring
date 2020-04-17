import { handleActions } from 'redux-actions';

import { getCommonReducers, getInitialState } from '../common';
import { setMessage } from '../../actions/messenger';
import { REDUCER_TYPES } from '../../constants';

const additionalState = {
  messages: {},
};

export const messenger = handleActions(
  {
    [setMessage]: (state, { payload: { user, message } }) => ({
      ...state,
      messages: {
        [user]: message,
      },
    }),
    ...getCommonReducers(REDUCER_TYPES.MESSENGER, additionalState),
  },
  getInitialState(additionalState),
);