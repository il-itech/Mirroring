import { FC } from 'react';
import Typography from '@material-ui/core/Typography';

import { FormChangePassword } from 'components/forms/form-change-password/form-change-password';

export const AccountSecurity: FC<{}> = () => (
  <div className="w-100 d-flex flex-column p-2 bg-ebony account-security">
    <Typography className="pb-2 border-bottom border-white-12">Change Password</Typography>
    <FormChangePassword />
  </div>
);
