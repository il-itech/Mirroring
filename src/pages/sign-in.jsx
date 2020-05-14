import * as R from 'ramda';

import { useShallowSelector } from '../hooks/use-shallow-selector';
import { getConfig } from '../helpers/env';
import { Main } from '../components/main/main';
import { FormSignIn } from '../components/forms/form-sign-in/form-sign-in';
import { REDUCER_TYPES, FORM_TYPES } from '../constants';

const { FORM_TYPE, FIELDS } = getConfig('FORMS.SIGN_IN');

const SignIn = () => {
  const { formData, errors } = useShallowSelector(R.path([REDUCER_TYPES.FORMS, FORM_TYPES.SIGN_IN]));

  return (
    <Main className="mt-10_5">
      <FormSignIn
        formType={FORM_TYPE}
        fields={FIELDS}
        formData={formData}
        errors={errors}
      />
    </Main>
  );
};

export default SignIn;
