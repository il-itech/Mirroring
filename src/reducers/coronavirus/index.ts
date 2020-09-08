import { combineReducers } from 'redux';

import { ICoronavirus } from 'interfaces/state.interfaces/coronavirus-interface';
import { globalStats } from './global-stats';
import { allCountryStats } from './all-country-stats';
import { countryStats } from './country-stats';
import { fullTimelineStats } from './full-timelime-stats';
import { countryTimelineStats } from './country-timeline-stats';

export const coronavirus = combineReducers<ICoronavirus>({
  globalStats,
  allCountryStats,
  countryStats,
  fullTimelineStats,
  countryTimelineStats,
});
