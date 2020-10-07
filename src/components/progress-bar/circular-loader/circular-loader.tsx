import React, { FC } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Props } from './types';

export const CircularLoader: FC<Props> = ({
  colorPrimary = 'bg-blue',
}) => (
  <CircularProgress
    classes={{
      root: 'position-absolute circular-loader',
      colorPrimary,
    }}
  />
);
