import { NextPage } from 'next';
import { useShallowSelector } from 'hooks/use-shallow-selector';
import { SignUp as SignUpLayout } from 'layouts/sign-up';
import CONFIG from 'config/config';

const { FORM_TYPE, FIELDS } = CONFIG?.FORMS?.SIGN_UP;

const SignUp: NextPage<{}> = () => {
  const {
    isInProgress,
    isSuccess,
    formData,
    errors,
  } = useShallowSelector(state => state?.forms?.signUp);

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
