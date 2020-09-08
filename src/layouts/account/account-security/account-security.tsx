import { FC } from 'react';
import Typography from '@material-ui/core/Typography';

import { useShallowSelector } from 'hooks/use-shallow-selector';
import { FormChangePassword } from 'components/forms/form-change-password/form-change-password';
import CONFIG from 'config/config';

const { FORM_TYPE, FIELDS } = CONFIG?.FORMS?.CHANGE_PASSWORD;

export const AccountSecurity: FC<{}> = () => {
  const { formData, errors, isInProgress } = useShallowSelector(state => state?.forms?.[FORM_TYPE]);

  return (
    <div className="w-100 d-flex flex-column ml-3 p-2 bg-ebony account-security">
      <Typography className="pb-2 border-bottom border-white-12">Change Password</Typography>
      <FormChangePassword
        formType={FORM_TYPE}
        fields={FIELDS}
        formData={formData}
        errors={errors}
        isInProgress={isInProgress}
      />
    </div>
  );
};
