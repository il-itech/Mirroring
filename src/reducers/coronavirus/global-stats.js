import { handleActions } from 'redux-actions';

import { getCommonReducers, getInitialState } from '../common';
import { setCoronavirusGlobalStats } from '../../actions/coronavirus';
import { CORONAVIRUS_REDUCER_TYPES } from '../../constants';

export const additionalState = {
  stats: {},
};

export const globalStats = handleActions(
  {
    [setCoronavirusGlobalStats]: (state, { payload }) => ({
      ...state,
      stats: payload,
    }),
    ...getCommonReducers(CORONAVIRUS_REDUCER_TYPES.GLOBAL_STATS, additionalState),
  },
  getInitialState(additionalState),
);
