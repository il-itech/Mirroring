import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { resolveActions } from 'next-redux-observable';
import { Typography } from '@material-ui/core';
import * as R from 'ramda';

import {
  getCoronavirusGlobalStats,
  getCoronavirusAllCountryStats,
} from '../actions/coronavirus';
import { setIntervalActions, clearIntervalActions } from '../actions/common';
import { Main } from '../components/main/main';
import { PaperList } from '../components/paper-list/paper-list';
import { CoronavirusAllCountryStatsTable } from '../components/coronavirus-all-country-stats-table/coronavirus-all-country-stats-table';

const CoronavirusStats = ({
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

  const statsList = R.compose(R.dropLast(1), R.toPairs)(globalStats);

  return (
    <Main className="mt-10_5">
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

CoronavirusStats.getInitialProps = resolveActions([
  getCoronavirusGlobalStats(),
  getCoronavirusAllCountryStats(),
]);

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

export default CoronavirusStats;
