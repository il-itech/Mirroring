import { concat, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { request as ajax } from 'universal-rxjs-ajax';
import { ActionType, ofType } from 'deox';
import * as R from 'ramda';

import { getCoronavirusGlobalStats, setCoronavirusGlobalStats } from 'actions/coronavirus';
import { getGlobalCoronavirusStats as getGlobalCoronavirusStatsApi } from 'services/http/coronavirus-api';
import { catchGlobalErrorWithUndefinedId } from '../common-operators';

type Action = ActionType<
  typeof getCoronavirusGlobalStats
>;

export const fetchCoronavirusGlobalStatsEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(getCoronavirusGlobalStats),
    switchMap(() => concat(
      getGlobalCoronavirusStatsApi(ajax).pipe(
        map(({ response: { results } }) => setCoronavirusGlobalStats(R.head(results))),
      ),
    )),
    catchGlobalErrorWithUndefinedId,
  );
