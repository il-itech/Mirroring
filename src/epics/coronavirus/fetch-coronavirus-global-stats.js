import { ofType } from 'redux-observable';
import { concat } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { request as ajax } from 'universal-rxjs-ajax';
import * as R from 'ramda';

import { getCoronavirusGlobalStats, setCoronavirusGlobalStats } from 'actions/coronavirus';
import { getGlobalCoronavirusStats as getGlobalCoronavirusStatsApi } from 'services/http/coronavirus-api';
import { catchGlobalErrorWithUndefinedId } from '../common-operators';

export const fetchCoronavirusGlobalStatsEpic = action$ =>
  action$.pipe(
    ofType(getCoronavirusGlobalStats),
    switchMap(() => concat(
      getGlobalCoronavirusStatsApi(ajax).pipe(
        map(({ response: { results } }) => setCoronavirusGlobalStats(R.head(results))),
      ),
    )),
    catchGlobalErrorWithUndefinedId,
  );
