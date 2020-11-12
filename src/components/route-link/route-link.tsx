import { FC } from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

import { Props } from './types';

export const RouteLink: FC<Props> = ({
  to,
  as = {},
  children,
  component: Component = Button,
  copmonentClassName,
  linkProps,
  disabled = false,
  handleClick,
  ...otherComponentProps
}) => (
  <Link
    href={to}
    as={as}
    {...linkProps}
  >
    <Component
      onClick={handleClick}
      classes={{
        root: copmonentClassName,
      }}
      disabled={disabled}
      {...otherComponentProps}
    >
      {children}
    </Component>
  </Link>
);
