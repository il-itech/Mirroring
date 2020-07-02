import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import {
  getCoronavirusGlobalStats,
  getCoronavirusAllCountryStats,
} from 'actions/coronavirus';
import { setIntervalActions, clearIntervalActions } from 'actions/common';
import { resolveActions } from 'helpers/resolve-actions';
import { CoronavirusStats as CoronavirusStatsLayout } from 'layouts/coronavirus-stats/coronavirus-stats';

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

CoronavirusStats.propTypes = {
  coronavirus: PropTypes.shape({
    globalStats: PropTypes.shape({
      stats: PropTypes.shape({}).isRequired,
    }).isRequired,
    allCountryStats: PropTypes.shape({
      stats: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default CoronavirusStats;
