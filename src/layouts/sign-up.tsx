import { FC } from 'react';
import Typography from '@material-ui/core/Typography';

import { Main } from 'components/main/main';
import { BackHome } from 'components/back-home/back-home';
import { FormSignUp } from 'components/forms/form-sign-up/form-sign-up';
import { ISignUpFormData } from 'interfaces/state.interfaces/forms.interfaces/form-sign-up.interface';
import { ISignUpFieldsConfig } from 'interfaces/config.interfaces/form-config-sign-up.interface';

interface Props {
  formType: string;
  fields: ISignUpFieldsConfig;
  formData: ISignUpFormData;
  errors: {};
  isInProgress: boolean;
  isSuccess: boolean;
}

export const SignUp: FC<Props> = ({
  formType,
  fields,
  formData,
  errors,
  isInProgress,
  isSuccess,
}) => (
  <Main className="mt-10_5">
    {isSuccess
      ? (
        <div className="d-flex justify-content-center">
          <div className="w-50 flex-column">
            <BackHome />
            <Typography
              variant="h5"
              className="mt-3 py-2 px-5 bg-ebony text-white text-capitalize"
            >
              Thank you for registretion. Please, check your email.
            </Typography>
          </div>
        </div>
      ) : (
        <FormSignUp
          formType={formType}
          fields={fields}
          formData={formData}
          errors={errors}
          isInProgress={isInProgress}
        />
      )}
  </Main>
);