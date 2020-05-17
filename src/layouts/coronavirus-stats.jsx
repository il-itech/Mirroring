import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import * as R from 'ramda';

import {
  getCoronavirusGlobalStats,
  getCoronavirusAllCountryStats,
} from '../actions/coronavirus';
import { setIntervalActions, clearIntervalActions } from '../actions/common';
import { Main } from '../components/main/main';
import { Header } from '../components/header/header';
import { DrawerSideBar } from '../components/drawers/drawer-side-bar/drawer-side-bar';
import { PaperList } from '../components/paper-list/paper-list';
import { CoronavirusAllCountryStatsTable } from '../components/coronavirus-all-country-stats-table/coronavirus-all-country-stats-table';

export const CoronavirusStats = ({
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
    <Main isShowSideBar className="mt-10_5">
      <Header />
      <DrawerSideBar />
      <Typography className="text-white" variant="h5">
        Global Stats
      </Typography>
      <PaperList list={statsList} />
      <Typography className="mt-3 mb-2 text-white" variant="h5">
        Country Stats
      </Typography>
      <CoronavirusAllCountryStatsTable tableData={allCountryStats} />
    </Main>
  );
};

CoronavirusStats.propTypes = {
  coronavirus: PropTypes.shape({
    globalStats: PropTypes.shape({
      stats: PropTypes.shape({}),
    }),
    allCountryStats: PropTypes.shape({
      stats: PropTypes.shape({}),
    }),
  }).isRequired,
};
