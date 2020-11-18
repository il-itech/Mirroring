import { FC } from 'react';
import Button from '@material-ui/core/Button';
import classnames from 'classnames';

import { RouteLink } from 'components/route-link';
import { Props } from './types';

import './index.scss';

export const BackHome: FC<Props> = ({
  className,
}) => (
  <RouteLink
    to="/"
    component={Button}
    copmonentClassName={classnames('text-white back-home', className)}
  >
    Back To Home
  </RouteLink>
);
