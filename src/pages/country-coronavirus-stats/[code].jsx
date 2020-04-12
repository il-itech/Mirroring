import PropTypes from 'prop-types';
import { resolveActions } from 'next-redux-observable';
import { Typography } from '@material-ui/core';
import * as R from 'ramda';

import { getCoronavirusCountryStats } from '../../actions/coronavirus';
import { Main } from '../../components/main/main';
import { PaperList } from '../../components/paper-list/paper-list';

const CountryStats = ({
  coronavirus: {
    countryStats: { stats },
  },
}) => {
  const { info: { title } } = stats;
  const statsList = R.compose(R.drop(1), R.toPairs)(stats);

  return (
    <Main className="mt-10_5">
      <Typography className="text-white" variant="h5">
        {title}
      </Typography>
      <PaperList list={statsList} />
    </Main>
  );
};

CountryStats.getInitialProps = ctx => resolveActions([
  getCoronavirusCountryStats(ctx.query.code),
])(ctx);

CountryStats.propTypes = {
  coronavirus: PropTypes.shape({
    countryStats: PropTypes.shape({
      stats: PropTypes.shape({
        info: PropTypes.shape({
          title: PropTypes.string,
        }),
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default CountryStats;
