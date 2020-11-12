import { useEffect } from 'react';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { clearForm } from 'actions/forms/common';
import { useShallowSelector } from 'hooks/use-shallow-selector';
import { SignUp as SignUpLayout } from 'layouts/sign-up';
import CONFIG from 'config/config';
import { FORM_TYPES } from 'enums';

const { FORM_TYPE, FIELDS } = CONFIG?.FORMS?.SIGN_UP;

const SignUp: NextPage<{}> = () => {
  const dispatch = useDispatch();
  const {
    isInProgress,
    isSuccess,
    formData,
    errors,
  } = useShallowSelector(state => state?.forms?.signUp);

  useEffect(() => () => {
    R.compose(dispatch, clearForm)(FORM_TYPES.SIGN_UP);
  }, [dispatch]);

  return (
    <SignUpLayout
      formType={FORM_TYPE}
      fields={FIELDS}
      formData={formData}
      errors={errors}
      isInProgress={isInProgress}
      isSuccess={isSuccess}
    />
  );
};

export default SignUp;
