import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import * as R from 'ramda';

import { getMonetaryValue } from '../../helpers/utils';

import './global-coronavirus-stats-list.scss';

export const GlobalCoronavirusStatsList = ({ stats }) => {
  const statsList = R.compose(R.dropLast(1), R.toPairs)(stats);

  return (
    <div className="global-coronavirus-stats-list">
      {statsList.map(([title, value]) => (
        <Paper
          key={title}
          className="d-flex flex-column p-3 text-center"
          elevation={1}
        >
          <Typography variant="overline">
            {R.replace(/_/g, ' ', title)}
          </Typography>
          <Typography variant="h4">
            {getMonetaryValue(value)}
          </Typography>
        </Paper>
      ))}
    </div>
  );
};

GlobalCoronavirusStatsList.propTypes = {
  stats: PropTypes.shape({}).isRequired,
};
