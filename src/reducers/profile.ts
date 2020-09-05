import { handleActions } from 'redux-actions';

import { IProfile } from 'types/state.interfaces/profile-interface';
import { setProfile } from 'actions/profile';
import { REDUCER_TYPES } from 'constants.js';
import { getCommonReducers, getInitialState } from './common';

const additionalState = {
  _id: null,
  firstname: null,
  lastname: null,
  email: null,
  accessToken: null,
  avatar: null,
};

export const profile = handleActions<IProfile, any>(
  {
    [`${setProfile}`]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    ...getCommonReducers(REDUCER_TYPES.PROFILE, additionalState),
  },
  getInitialState(additionalState),
);
