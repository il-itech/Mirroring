import * as R from 'ramda';

import { getConfig } from 'helpers/env';
import { useShallowSelector } from 'hooks/use-shallow-selector';
import { SignUp as SignUpLayout } from 'layouts/sign-up';
import { REDUCER_TYPES, FORM_TYPES } from 'constants';

const { FORM_TYPE, FIELDS } = getConfig('FORMS.SIGN_UP');

const SignUp = () => {
  const {
    isInProgress,
    formData,
    errors,
  } = useShallowSelector(R.path([REDUCER_TYPES.FORMS, FORM_TYPES.SIGN_UP]));

  return (
    <SignUpLayout
      formType={FORM_TYPE}
      fields={FIELDS}
      formData={formData}
      errors={errors}
      isInProgress={isInProgress}
    />
  );
};

export default SignUp;
