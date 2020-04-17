import Button from '@material-ui/core/Button';

import { RouteLink } from '../../route-link/route-link';

export const FormSignIn = () => (
  <div>
    <RouteLink
      to="/"
      component={Button}
      copmonentClassName="text-white"
    >
      Back To Home
    </RouteLink>
    <RouteLink
      to="/sign-up"
      component={Button}
      copmonentClassName="text-white"
    >
      Sign Up
    </RouteLink>
  </div>
);
