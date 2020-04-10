import { ofType } from 'redux-observable';
import { concat } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { request as ajax } from 'universal-rxjs-ajax';
import * as R from 'ramda';

import { getCoronavirusAllCountryStats, setCoronavirusAllCountryStats } from '../../actions/coronavirus';
import { getAllCountryCoronavirusStats as getAllCountryCoronavirusStatsApi } from '../../api/coronavirus-api';
import { catchGlobalErrorWithUndefinedId } from '../common-operators';

export const fetchCoronavirusAllCountryStatsEpic = action$ =>
  action$.pipe(
    ofType(getCoronavirusAllCountryStats),
    switchMap(() => concat(
      getAllCountryCoronavirusStatsApi(ajax).pipe(
        map(({ response: { countryitems } }) => setCoronavirusAllCountryStats(R.head(countryitems))),
      ),
    )),
    catchGlobalErrorWithUndefinedId,
  );
