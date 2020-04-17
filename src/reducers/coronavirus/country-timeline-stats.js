import { handleActions } from 'redux-actions';

import { getCommonReducers, getInitialState } from '../common';
import { setCoronavirusCountryTimelineStats } from '../../actions/coronavirus';
import { CORONAVIRUS_REDUCER_TYPES } from '../../constants';

export const additionalState = {
  stats: {},
};

export const countryTimelineStats = handleActions(
  {
    [setCoronavirusCountryTimelineStats]: (state, { payload }) => ({
      ...state,
      stats: payload,
    }),
    ...getCommonReducers(CORONAVIRUS_REDUCER_TYPES.COUNTRY_TIMELINE_STATS, additionalState),
  },
  getInitialState(additionalState),
);
