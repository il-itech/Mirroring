import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

export const RouteLink = ({
  to,
  as,
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

RouteLink.propTypes = {
  to: PropTypes.string.isRequired,
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.any,
  ]),
  children: PropTypes.node.isRequired,
  component: PropTypes.shape({}),
  copmonentClassName: PropTypes.string,
  linkProps: PropTypes.shape({}),
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
};

RouteLink.defaultProps = {
  linkProps: null,
  as: null,
  component: Button,
  copmonentClassName: null,
  disabled: false,
  handleClick: null,
};
