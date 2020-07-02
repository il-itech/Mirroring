import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import * as R from 'ramda';

import { useShallowSelector } from 'hooks/use-shallow-selector';
import { RouteLink } from 'components/route-link/route-link';
import { IconLogo } from 'components/icons/icon-logo';
import { isEmptyOrNil } from 'helpers/utils';

import './header.scss';

export const Header = () => {
  const {
    _id,
    firstname,
    lastname,
  } = useShallowSelector(state => state?.profile);

  return (
    <AppBar
      classes={{
        root: 'next-header',
      }}
      position="fixed"
    >
      <Toolbar classes={{
        root: 'd-flex justify-content-between bg-ebony',
      }}
      >
        <RouteLink to="/">
          <IconLogo />
        </RouteLink>
        {isEmptyOrNil(_id)
          ? (
            <RouteLink
              to="/sign-in"
              component={Button}
              copmonentClassName="text-white"
            >
              Login
            </RouteLink>
          ) : (
            <div className="d-flex align-items-center text-capitalize">
              <Avatar className="mr-1">{`${R.head(firstname)} ${R.head(lastname)}`}</Avatar>
              <Typography className="mr-0_5">{firstname}</Typography>
              <Typography>{lastname}</Typography>
            </div>
          )}
      </Toolbar>
    </AppBar>
  );
};
