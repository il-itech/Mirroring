import { handleActions } from 'redux-actions';

import { IStats } from 'types/state.interfaces/coronavirus-interface';
import { setCoronavirusCountryTimelineStats } from 'actions/coronavirus';
import { CORONAVIRUS_REDUCER_TYPES } from 'constants';
import { getCommonReducers, getInitialState } from '../common';

export const additionalState = {
  stats: {},
};

export const countryTimelineStats = handleActions<IStats, any>(
  {
    [`${setCoronavirusCountryTimelineStats}`]: (state, { payload }) => ({
      ...state,
      stats: payload,
    }),
    ...getCommonReducers(CORONAVIRUS_REDUCER_TYPES.COUNTRY_TIMELINE_STATS, additionalState),
  },
  getInitialState(additionalState),
);
