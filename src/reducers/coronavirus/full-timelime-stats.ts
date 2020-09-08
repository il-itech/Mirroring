import { handleActions } from 'redux-actions';

import { IStats } from 'interfaces/state.interfaces/coronavirus-interface';
import { setCoronavirusFullTimelineStats } from 'actions/coronavirus';
import { CORONAVIRUS_REDUCER_TYPES } from 'constants';
import { getCommonReducers, getInitialState } from '../common';

export const additionalState = {
  stats: {},
};

export const fullTimelineStats = handleActions<IStats, any>(
  {
    [`${setCoronavirusFullTimelineStats}`]: (state, { payload }) => ({
      ...state,
      stats: payload,
    }),
    ...getCommonReducers(CORONAVIRUS_REDUCER_TYPES.FULL_TIMELINE_STATS, additionalState),
  },
  getInitialState(additionalState),
);
