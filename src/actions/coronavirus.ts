import { createActions } from 'redux-actions';

export const {
  getCoronavirusGlobalStats,
  setCoronavirusGlobalStats,
  getCoronavirusAllCountryStats,
  setCoronavirusAllCountryStats,
  getCoronavirusCountryStats,
  setCoronavirusCountryStats,
  getCoronavirusFullTimelineStats,
  setCoronavirusFullTimelineStats,
  getCoronavirusCountryTimelineStats,
  setCoronavirusCountryTimelineStats,
} = createActions(
  'GET_CORONAVIRUS_GLOBAL_STATS',
  'SET_CORONAVIRUS_GLOBAL_STATS',
  'GET_CORONAVIRUS_ALL_COUNTRY_STATS',
  'SET_CORONAVIRUS_ALL_COUNTRY_STATS',
  'GET_CORONAVIRUS_COUNTRY_STATS',
  'SET_CORONAVIRUS_COUNTRY_STATS',
  'GET_CORONAVIRUS_FULL_TIMELINE_STATS',
  'SET_CORONAVIRUS_FULL_TIMELINE_STATS',
  'GET_CORONAVIRUS_COUNTRY_TIMELINE_STATS',
  'SET_CORONAVIRUS_COUNTRY_TIMELINE_STATS',
);
