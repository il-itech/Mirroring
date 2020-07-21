import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

export const CircularLoader = ({ colorPrimary }) => (
  <CircularProgress
    classes={{
      root: 'position-absolute circular-loader',
      colorPrimary,
    }}
  />
);

CircularLoader.propTypes = {
  colorPrimary: PropTypes.string,
};

CircularLoader.defaultProps = {
  colorPrimary: 'bg-blue',
};
