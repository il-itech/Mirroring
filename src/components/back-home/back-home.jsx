import Button from '@material-ui/core/Button';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { RouteLink } from 'components/route-link/route-link';

import './back-home.scss';

export const BackHome = ({
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

BackHome.propTypes = {
  className: PropTypes.string,
};

BackHome.defaultProps = {
  className: null,
};
