import { ofType } from 'redux-observable';
import { concat } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { request as ajax } from 'universal-rxjs-ajax';
import * as R from 'ramda';

import { getCoronavirusCountryStats, setCoronavirusCountryStats } from 'actions/coronavirus';
import { getCountryCoronavirusStats as getCountryCoronavirusStatsApi } from 'api/coronavirus-api';
import { catchGlobalErrorWithUndefinedId } from '../common-operators';

export const fetchCoronavirusCountryStatsEpic = action$ =>
  action$.pipe(
    ofType(getCoronavirusCountryStats),
    switchMap(({ payload: code }) => concat(
      getCountryCoronavirusStatsApi(ajax, code).pipe(
        map(({ response: { countrydata } }) => setCoronavirusCountryStats(R.head(countrydata))),
      ),
    )),
    catchGlobalErrorWithUndefinedId,
  );
