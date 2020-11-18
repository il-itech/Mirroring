import { useRouter } from 'next/router';

import { ResetPassword as ResetPasswordLayout } from 'layouts/reset-password';
import { getQueryString } from 'helpers/utils';

const ResetPassword = () => {
  const { query } = useRouter();
  const token = getQueryString(query?.token);

  return (
    <ResetPasswordLayout
      token={token}
    />
  );
};

export default ResetPassword;
