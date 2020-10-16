import { useEffect } from 'react';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { clearForm } from 'actions/forms/common';
import { useShallowSelector } from 'hooks/use-shallow-selector';
import { SignIn as SignInLayout } from 'layouts/sign-in';
import CONFIG from 'config/config';
import { FORM_TYPES } from 'enums';

const { FORM_TYPE, FIELDS } = CONFIG?.FORMS?.SIGN_IN;

const SignIn: NextPage<{}> = () => {
  const dispatch = useDispatch();

  const {
    isInProgress,
    isSuccess,
    formData,
    errors,
  } = useShallowSelector(state => state?.forms?.signIn);

  useEffect(() => () => {
    R.compose(dispatch, clearForm)(FORM_TYPES.SIGN_IN);
  }, [dispatch]);

  return (
    <SignInLayout
      formType={FORM_TYPE}
      fields={FIELDS}
      formData={formData}
      errors={errors}
      isInProgress={isInProgress}
      isSuccess={isSuccess}
    />
  );
};

export default SignIn;
