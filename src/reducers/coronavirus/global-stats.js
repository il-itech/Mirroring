import { handleActions } from 'redux-actions';

import { getCommonReducers, getInitialState } from '../common';
import { setCoronavirusGlobalStats } from '../../actions/coronavirus';
import { REDUCER_TYPES } from '../../constants';

export const additionalState = {
  stats: {},
};

export const globalStats = handleActions(
  {
    [setCoronavirusGlobalStats]: (state, { payload }) => ({
      ...state,
      stats: payload,
    }),
    ...getCommonReducers(REDUCER_TYPES.CORONAVIRUS.GLOBAL_STATS, additionalState),
  },
  getInitialState(additionalState),
);
