import { handleActions } from 'redux-actions';

import { IProfile } from 'interfaces/state.interfaces/profile-interface';
import { setProfile } from 'actions/profile';
import { REDUCER_TYPES } from 'enums';
import { getCommonReducers, getInitialState } from './common';

const additionalState = {
  _id: null,
  firstname: '',
  lastname: '',
  email: '',
  accessToken: null,
  avatar: '',
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
