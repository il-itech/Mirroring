import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { ResetPassword as ResetPasswordLayout } from 'layouts/reset-password/reset-password';
import { getQueryString } from 'helpers/utils';

const ResetPassword: NextPage<{}> = () => {
  const { query } = useRouter();
  const token = getQueryString(query?.token);

  return (
    <ResetPasswordLayout
      token={token}
    />
  );
};

export default ResetPassword;
