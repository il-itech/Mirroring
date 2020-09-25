import { handleActions } from 'redux-actions';

import { IAuth } from 'interfaces/state.interfaces/auth-interface';
import { setAuthStatus } from 'actions/auth';
import { REDUCER_TYPES } from 'enums';
import { getCommonReducers, getInitialState } from './common';

const additionalState = {
  isUserAuth: false,
};

export const auth = handleActions<IAuth, any>(
  {
    [`${setAuthStatus}`]: (state, { payload }) => ({
      ...state,
      isUserAuth: payload,
    }),
    ...getCommonReducers(REDUCER_TYPES.AUTH, additionalState),
  },
  getInitialState(additionalState),
);
