import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { RouteLink } from 'components/route-link/route-link';

import './profile-menu.scss';

const PROFILE_MENU = [
  { id: 1, value: 'Account', href: '/account' },
];

export const ProfileMenu = ({
  anchorElement,
  handleClose,
  handleSignOut,
}) => (
  <Menu
    id="menu"
    className="next-profile-menu"
    classes={{
      paper: 'bg-ebony text-white profile-paper',
    }}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    getContentAnchorEl={null}
    anchorEl={anchorElement}
    open={Boolean(anchorElement)}
    onClose={handleClose}
  >
    {PROFILE_MENU.map(({ id, value, href }) => (
      <RouteLink
        key={id}
        to={href}
        component={MenuItem}
        copmonentClassName="py-1_5 link-hover"
        onClick={handleClose}
      >
        {value}
      </RouteLink>
    ))}
    <MenuItem
      onClick={handleSignOut}
      className="py-1_5 link-hover"
    >
      Logout
    </MenuItem>
  </Menu>
);

ProfileMenu.propTypes = {
  anchorElement: PropTypes.shape({}),
  handleClose: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired,
};

ProfileMenu.defaultProps = {
  anchorElement: null,
};
