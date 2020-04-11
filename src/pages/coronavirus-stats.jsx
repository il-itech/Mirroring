import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { resolveActions } from 'next-redux-observable';
import * as R from 'ramda';

import {
  getCoronavirusGlobalStats,
  getCoronavirusAllCountryStats,
} from '../actions/coronavirus';
import { setIntervalActions, clearIntervalActions } from '../actions/common';
import { Main } from '../components/main/main';
import { GlobalCoronavirusStatsList } from '../components/global-coronavirus-stats-list/global-coronavirus-stats-list';
import { CustomTable } from '../components/custom-table/custom-table';

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

  return (
    <Main className="mt-10_5">
      <GlobalCoronavirusStatsList stats={globalStats} />
      <CustomTable tableData={allCountryStats} />
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
