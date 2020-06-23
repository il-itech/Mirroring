import PropTypes from 'prop-types';

import { Main } from 'components/main/main';
import { FormSignIn } from 'components/forms/form-sign-in/form-sign-in';

export const SignIn = ({
  formType,
  fields,
  formData,
  errors,
  isInProgress,
}) => (
  <Main className="mt-10_5">
    <FormSignIn
      formType={formType}
      fields={fields}
      formData={formData}
      errors={errors}
      isInProgress={isInProgress}
    />
  </Main>
);

SignIn.propTypes = {
  formType: PropTypes.string.isRequired,
  fields: PropTypes.shape({}).isRequired,
  formData: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
  isInProgress: PropTypes.bool.isRequired,
};
