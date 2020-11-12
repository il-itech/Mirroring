import { createReducer } from 'deox';

import { setProfile } from 'actions/profile';
import { REDUCER_TYPES } from 'enums';
import { getCommonReducers, getInitialState } from './common';

const initialState = getInitialState({
  _id: '',
  firstname: '',
  lastname: '',
  email: '',
  avatar: '',
});

export const profile = createReducer(
  initialState,
  handleAction => ([
    handleAction(setProfile, (state, { payload }) => ({
      ...state,
      ...payload,
    })),
    ...getCommonReducers(REDUCER_TYPES.PROFILE, initialState, handleAction),
  ]),
);
