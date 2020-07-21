import { getConfig } from 'helpers/env';
import { useShallowSelector } from 'hooks/use-shallow-selector';
import { SignUp as SignUpLayout } from 'layouts/sign-up';

const { FORM_TYPE, FIELDS } = getConfig('FORMS.SIGN_UP');

const SignUp = () => {
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
