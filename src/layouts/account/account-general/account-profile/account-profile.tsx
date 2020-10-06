import { FC } from 'react';
import Typography from '@material-ui/core/Typography';

import { useShallowSelector } from 'hooks/use-shallow-selector';
import { FormChangeCredentials } from 'components/forms/form-change-credentials/form-change-credentials';
import CONFIG from 'config/config';

import './account-profile.scss';

const { FORM_TYPE, FIELDS } = CONFIG?.FORMS?.CHANGE_CREDENTIALS;

export const AccountProfile: FC<{}> = () => {
  const { formData, errors, isInProgress } = useShallowSelector(state => state?.forms?.[FORM_TYPE]);

  return (
    <div className="w-75 d-flex flex-column ml-3 p-2 bg-ebony account-profile">
      <Typography className="pb-2 border-bottom border-white-12">Profile</Typography>
      <FormChangeCredentials
        formType={FORM_TYPE}
        fields={FIELDS}
        formData={formData}
        errors={errors}
        isInProgress={isInProgress}
      />
    </div>
  );
};
