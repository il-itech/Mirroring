import { FC } from 'react';

import { Main } from 'components/main/main';
import { BackHome } from 'components/back-home/back-home';
import { FormResetPassword } from 'components/forms/form-reset-password/form-reset-password';
import { FormChangePassword } from 'components/forms/form-change-password/form-change-password';
import { isEmptyOrNil } from 'helpers/utils';

import './reset-password.scss';

interface Props {
  token: string;
}

export const ResetPassword: FC<Props> = ({ token }) => (
  <Main className="h-100vh d-flex pl-0 reset-password">
    <div className="w-100 d-flex justify-content-center">
      <div className="d-flex flex-column align-items-center justify-content-center reset-password-container">
        <BackHome />

        <div className="w-100 d-flex flex-column px-4 py-3 mt-2 bg-ebony rounded">
          {isEmptyOrNil(token)
            ? (
              <FormResetPassword />
            ) : (
              <FormChangePassword />
            )}
        </div>
      </div>
    </div>
  </Main>
);
