import { NextPage } from 'next';
import { useShallowSelector } from 'hooks/use-shallow-selector';
import { SignIn as SignInLayout } from 'layouts/sign-in';
import CONFIG from 'config/config';

const { FORM_TYPE, FIELDS } = CONFIG?.FORMS?.SIGN_IN;

const SignIn: NextPage<{}> = () => {
  const {
    isInProgress,
    formData,
    errors,
  } = useShallowSelector(state => state?.forms?.signIn);

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
