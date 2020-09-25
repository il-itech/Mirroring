import { handleActions } from 'redux-actions';

import { ICommonStats } from 'interfaces/state.interfaces/coronavirus-interface';
import { setCoronavirusCountryTimelineStats } from 'actions/coronavirus';
import { CORONAVIRUS_REDUCER_TYPES } from 'enums';
import { getCommonReducers, getInitialState } from '../common';

export const additionalState = {
  stats: {},
};

export const countryTimelineStats = handleActions<ICommonStats, any>(
  {
    [`${setCoronavirusCountryTimelineStats}`]: (state, { payload }) => ({
      ...state,
      stats: payload,
    }),
    ...getCommonReducers(CORONAVIRUS_REDUCER_TYPES.COUNTRY_TIMELINE_STATS, additionalState),
  },
  getInitialState(additionalState),
);
