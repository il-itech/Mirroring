import { createReducer } from 'deox';

import { setAuthStatus } from 'actions/auth';
import { REDUCER_TYPES } from 'enums';
import { getCommonReducers, getInitialState } from './common';

const initialState = getInitialState({
  isUserAuth: false,
});

export const auth = createReducer(
  initialState,
  handleAction => ([
    handleAction(setAuthStatus, (state, { payload }) => ({
      ...state,
      isUserAuth: payload,
    })),
    ...getCommonReducers(REDUCER_TYPES.AUTH, initialState, handleAction),
  ]),
);
