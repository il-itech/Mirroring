import { concat, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { request as ajax } from 'universal-rxjs-ajax';
import { ActionType, ofType } from 'deox';
import * as R from 'ramda';

import { getCoronavirusCountryStats, setCoronavirusCountryStats } from 'actions/coronavirus';
import { getCountryCoronavirusStats as getCountryCoronavirusStatsApi } from 'services/http/coronavirus-api';
import { catchGlobalErrorWithUndefinedId } from '../common-operators';

type Action = ActionType<
  typeof getCoronavirusCountryStats
>;

export const fetchCoronavirusCountryStatsEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(getCoronavirusCountryStats),
    switchMap(({ payload: code }) => concat(
      getCountryCoronavirusStatsApi(ajax, code).pipe(
        map(({ response: { countrydata } }) => setCoronavirusCountryStats(R.head(countrydata))),
      ),
    )),
    catchGlobalErrorWithUndefinedId,
  );
