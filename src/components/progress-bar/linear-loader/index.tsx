import { FC } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

import { Props } from './types';

import './index.scss';

export const LinearLoader: FC<Props> = ({
  bgColor = 'bg-blue',
}) => (
  <LinearProgress
    classes={{
      root: 'w-100 position-fixed linear-loader',
      colorPrimary: 'bg-jackson',
      bar: bgColor,
    }}
  />
);
