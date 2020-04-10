import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

export const RouteLink = ({
  to,
  children,
  component: Component,
  copmonentClassName,
  linkProps,
  disabled,
  handleClick,
  ...otherComponentProps
}) => (
  <Link
    href={to}
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

RouteLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  component: PropTypes.shape({}),
  copmonentClassName: PropTypes.string,
  linkProps: PropTypes.shape({}),
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
};

RouteLink.defaultProps = {
  linkProps: null,
  component: Button,
  copmonentClassName: null,
  disabled: false,
  handleClick: null,
};
