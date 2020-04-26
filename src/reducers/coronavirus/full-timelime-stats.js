import { handleActions } from 'redux-actions';

import { getCommonReducers, getInitialState } from '../common';
import { setCoronavirusFullTimelineStats } from '../../actions/coronavirus';
import { CORONAVIRUS_REDUCER_TYPES } from '../../constants';

export const additionalState = {
  stats: {},
};

export const fullTimelineStats = handleActions(
  {
    [setCoronavirusFullTimelineStats]: (state, { payload }) => ({
      ...state,
      stats: payload,
    }),
    ...getCommonReducers(CORONAVIRUS_REDUCER_TYPES.FULL_TIMELINE_STATS, additionalState),
  },
  getInitialState(additionalState),
);
