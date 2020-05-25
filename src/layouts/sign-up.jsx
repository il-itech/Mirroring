import PropTypes from 'prop-types';

import { Main } from '../components/main/main';
import { FormSignUp } from '../components/forms/form-sign-up/form-sign-up';

export const SignUp = ({
  formType,
  fields,
  formData,
  errors,
  isInProgress,
}) => (
  <Main className="mt-10_5">
    <FormSignUp
      formType={formType}
      fields={fields}
      formData={formData}
      errors={errors}
      isInProgress={isInProgress}
    />
  </Main>
);

SignUp.propTypes = {
  formType: PropTypes.string.isRequired,
  fields: PropTypes.shape({}).isRequired,
  formData: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
  isInProgress: PropTypes.bool.isRequired,
};
