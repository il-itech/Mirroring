import { combineReducers } from 'redux';

import { globalStats } from './global-stats';
import { allCountryStats } from './all-country-stats';
import { countryStats } from './country-stats';
import { fullTimelineStats } from './full-timelime-stats';
import { countryTimelineStats } from './country-timeline-stats';

export const coronavirus = combineReducers({
  globalStats,
  allCountryStats,
  countryStats,
  fullTimelineStats,
  countryTimelineStats,
});
