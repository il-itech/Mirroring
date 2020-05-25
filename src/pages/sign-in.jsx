import * as R from 'ramda';

import { useShallowSelector } from '../hooks/use-shallow-selector';
import { getConfig } from '../helpers/env';
import { REDUCER_TYPES, FORM_TYPES } from '../constants';
import { SignIn as SignInLayout } from '../layouts/sign-in';

const { FORM_TYPE, FIELDS } = getConfig('FORMS.SIGN_IN');

const SignIn = () => {
  const {
    isInProgress,
    formData,
    errors,
  } = useShallowSelector(R.path([REDUCER_TYPES.FORMS, FORM_TYPES.SIGN_IN]));

  return (
    <SignInLayout
      formType={FORM_TYPE}
      fields={FIELDS}
      formData={formData}
      errors={errors}
      isInProgress={isInProgress}
    />
  );
};

export default SignIn;
