import { handleActions } from 'redux-actions';

import { IStats } from 'interfaces/state.interfaces/coronavirus-interface';
import { setCoronavirusGlobalStats } from 'actions/coronavirus';
import { CORONAVIRUS_REDUCER_TYPES } from 'constants';
import { getCommonReducers, getInitialState } from '../common';

export const additionalState = {
  stats: {},
};

export const globalStats = handleActions<IStats, any>(
  {
    [`${setCoronavirusGlobalStats}`]: (state, { payload }) => ({
      ...state,
      stats: payload,
    }),
    ...getCommonReducers(CORONAVIRUS_REDUCER_TYPES.GLOBAL_STATS, additionalState),
  },
  getInitialState(additionalState),
);
