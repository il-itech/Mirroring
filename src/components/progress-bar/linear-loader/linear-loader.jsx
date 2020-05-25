import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';

import './linear-loader.scss';

export const LinearLoader = ({ bgColor }) => (
  <LinearProgress
    classes={{
      root: 'w-100 position-fixed linear-loader',
      colorPrimary: 'bg-jackson',
      bar: bgColor,
    }}
  />
);

LinearLoader.propTypes = {
  bgColor: PropTypes.string,
};

LinearLoader.defaultProps = {
  bgColor: 'bg-blue',
};
