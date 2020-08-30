import { handleActions } from 'redux-actions';

import { setProfile } from 'actions/profile';
import { REDUCER_TYPES } from 'constants';
import { getCommonReducers, getInitialState } from './common';

const additionalState = {
  _id: null,
  firstname: null,
  lastname: null,
  email: null,
  accessToken: null,
  avatar: null,
};

export const profile = handleActions(
  {
    [setProfile]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    ...getCommonReducers(REDUCER_TYPES.PROFILE, additionalState),
  },
  getInitialState(additionalState),
);
