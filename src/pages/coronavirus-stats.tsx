import { NextPage } from 'next';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import {
  getCoronavirusGlobalStats,
  getCoronavirusAllCountryStats,
} from 'actions/coronavirus';
import { setIntervalActions, clearIntervalActions } from 'actions/common';
import withResolveActions from 'helpers/with-resolve-actions';
import { CoronavirusStats as CoronavirusStatsLayout } from 'layouts/coronavirus-stats';
import { Props } from 'interfaces/pages.interfaces/coronavirus-stats.interface';
import { withAuth } from 'helpers/with-auth';
import { IStats } from 'interfaces/state.interfaces/coronavirus-interface';
import { wrapper } from 'storage';

const serializeStatsList = R.compose<IStats, any, [string, number][]>(
  R.dropLast(1),
  R.toPairs,
);

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

    return () => {
      R.compose(dispatch, clearIntervalActions)();
    };
  }, [dispatch]);

  const statsList = useMemo(() => serializeStatsList(globalStats), [globalStats]);

  return (
    <CoronavirusStatsLayout
      statsList={statsList}
      allCountryStats={allCountryStats}
    />
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  await withAuth(ctx);
  await withResolveActions([
    getCoronavirusGlobalStats(),
    getCoronavirusAllCountryStats(),
  ])(ctx);

  return { props: ctx.store.getState() };
});

export default CoronavirusStats;
