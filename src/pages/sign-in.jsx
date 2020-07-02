import { useShallowSelector } from 'hooks/use-shallow-selector';
import { getConfig } from 'helpers/env';
import { SignIn as SignInLayout } from 'layouts/sign-in';

const { FORM_TYPE, FIELDS } = getConfig('FORMS.SIGN_IN');

const SignIn = () => {
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
