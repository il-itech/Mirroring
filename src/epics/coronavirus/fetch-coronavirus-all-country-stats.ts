import { concat, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { request as ajax } from 'universal-rxjs-ajax';
import { ActionType, ofType } from 'deox';
import * as R from 'ramda';

import { getCoronavirusAllCountryStats, setCoronavirusAllCountryStats } from 'actions/coronavirus';
import { getAllCountryCoronavirusStats as getAllCountryCoronavirusStatsApi } from 'services/http/coronavirus-api';
import { catchGlobalErrorWithUndefinedId } from '../common-operators';

type Action = ActionType<
  typeof getCoronavirusAllCountryStats
>;

export const fetchCoronavirusAllCountryStatsEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(getCoronavirusAllCountryStats),
    switchMap(() => concat(
      getAllCountryCoronavirusStatsApi(ajax).pipe(
        map(({ response: { countryitems } }) => setCoronavirusAllCountryStats(R.head(countryitems))),
      ),
    )),
    catchGlobalErrorWithUndefinedId,
  );
