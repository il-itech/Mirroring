import { handleActions } from 'redux-actions';

import { ICommonStats } from 'interfaces/state.interfaces/coronavirus-interface';
import { setCoronavirusGlobalStats } from 'actions/coronavirus';
import { CORONAVIRUS_REDUCER_TYPES } from 'enums';
import { getCommonReducers, getInitialState } from '../common';

export const additionalState = {
  stats: {},
};

export const globalStats = handleActions<ICommonStats, any>(
  {
    [`${setCoronavirusGlobalStats}`]: (state, { payload }) => ({
      ...state,
      stats: payload,
    }),
    ...getCommonReducers(CORONAVIRUS_REDUCER_TYPES.GLOBAL_STATS, additionalState),
  },
  getInitialState(additionalState),
);
