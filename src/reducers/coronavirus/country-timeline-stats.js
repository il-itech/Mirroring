import { handleActions } from 'redux-actions';

import { getCommonReducers, getInitialState } from '../common';
import { setCoronavirusCountryTimelineStats } from '../../actions/coronavirus';
import { REDUCER_TYPES } from '../../constants';

export const additionalState = {
  stats: {},
};

export const countryTimelineStats = handleActions(
  {
    [setCoronavirusCountryTimelineStats]: (state, { payload }) => ({
      ...state,
      stats: payload,
    }),
    ...getCommonReducers(REDUCER_TYPES.CORONAVIRUS.COUNTRY_TIMELINE_STATS, additionalState),
  },
  getInitialState(additionalState),
);
