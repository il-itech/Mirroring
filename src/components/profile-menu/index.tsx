import { FC } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { RouteLink } from 'components/route-link';
import { Props } from './types';

import './index.scss';

const PROFILE_MENU = [
  { id: 1, value: 'Account', href: '/account' },
];

export const ProfileMenu: FC<Props> = ({
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
      <div key={id}>
        <RouteLink
          to={href}
          component={MenuItem}
          copmonentClassName="py-1_5 link-hover"
          handleClick={handleClose}
        >
          {value}
        </RouteLink>
      </div>
    ))}
    <MenuItem
      onClick={handleSignOut}
      className="py-1_5 link-hover"
    >
      Logout
    </MenuItem>
  </Menu>
);
