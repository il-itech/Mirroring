import * as R from 'ramda';

import { useShallowSelector } from '../hooks/use-shallow-selector';
import { getConfig } from '../helpers/env';
import { Main } from '../components/main/main';
import { FormSignUp } from '../components/forms/form-sign-up/form-sign-up';
import { REDUCER_TYPES, FORM_TYPES } from '../constants';

const { FORM_TYPE, FIELDS } = getConfig('FORMS.SIGN_UP');

export const SignUp = () => {
  const {
    formData,
    errors,
  } = useShallowSelector(R.path([REDUCER_TYPES.FORMS, FORM_TYPES.SIGN_UP]));

  return (
    <Main className="mt-10_5">
      <FormSignUp
        formType={FORM_TYPE}
        fields={FIELDS}
        formData={formData}
        errors={errors}
      />
    </Main>
  );
};
