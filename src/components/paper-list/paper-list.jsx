import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import * as R from 'ramda';

import { getMonetaryValue } from 'helpers/utils';

import './paper-list.scss';

export const PaperList = ({ list }) => (
  <div className="mt-1 paper-list">
    {list.map(([title, value]) => (
      <Paper
        key={title}
        className="d-flex flex-column p-3 bg-ebony text-center"
        elevation={1}
      >
        <Typography className="text-white" variant="overline">
          {R.replace(/_/g, ' ', title)}
        </Typography>
        <Typography className="text-white" variant="h4">
          {getMonetaryValue(value)}
        </Typography>
      </Paper>
    ))}
  </div>
);

PaperList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
};
