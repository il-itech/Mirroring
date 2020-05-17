import { handleActions } from 'redux-actions';

import { setAuthStatus } from '../actions/auth';

const initialState = {
  isUserAuth: false,
};

export const auth = handleActions(
  {
    [setAuthStatus]: (state, { payload }) => ({
      ...state,
      isUserAuth: payload,
    }),
  },
  initialState,
);
