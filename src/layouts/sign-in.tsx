import { FC } from 'react';

import { Main } from 'components/main/main';
import { FormSignIn } from 'components/forms/form-sign-in/form-sign-in';
import { ISignInFormData } from 'interfaces/state.interfaces/forms.interfaces/form-sign-in.interface';
import { ISignInFieldsConfig } from 'interfaces/config.interfaces/form-config-sign-in.interface';

interface Props {
  formType: string;
  fields: ISignInFieldsConfig;
  formData: ISignInFormData;
  errors: {};
  isInProgress: boolean;
  isSuccess: boolean;
}

export const SignIn: FC<Props> = ({
  formType,
  fields,
  formData,
  errors,
  isInProgress,
}) => (
  <Main className="mt-10_5">
    <FormSignIn
      formType={formType}
      fields={fields}
      formData={formData}
      errors={errors}
      isInProgress={isInProgress}
    />
  </Main>
);
