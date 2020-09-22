import { NextPage } from 'next';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import {
  getCoronavirusGlobalStats,
  getCoronavirusAllCountryStats,
} from 'actions/coronavirus';
import { setIntervalActions, clearIntervalActions } from 'actions/common';
import { resolveActions } from 'helpers/resolve-actions';
import { CoronavirusStats as CoronavirusStatsLayout } from 'layouts/coronavirus-stats/coronavirus-stats';
import { Props } from 'interfaces/pages.interfaces/coronavirus-stats.interface';

const CoronavirusStats: NextPage<Props> = ({
  coronavirus: {
    globalStats: { stats: globalStats },
    allCountryStats: { stats: allCountryStats },
  },
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    R.compose(dispatch, setIntervalActions)([
      getCoronavirusGlobalStats,
      getCoronavirusAllCountryStats,
    ]);

    return R.compose(dispatch, clearIntervalActions);
  }, [dispatch]);

  const statsList = useMemo(() => R.compose(R.dropLast(1), R.toPairs)(globalStats), [globalStats]);

  return (
    <CoronavirusStatsLayout
      statsList={statsList}
      allCountryStats={allCountryStats}
    />
  );
};

CoronavirusStats.getInitialProps = resolveActions([
  getCoronavirusGlobalStats(),
  getCoronavirusAllCountryStats(),
]);

export default CoronavirusStats;
