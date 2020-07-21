import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import { Main } from 'components/main/main';
import { BackHome } from 'components/back-home/back-home';
import { FormSignUp } from 'components/forms/form-sign-up/form-sign-up';

export const SignUp = ({
  formType,
  fields,
  formData,
  errors,
  isInProgress,
  isSuccess,
}) => (
  <Main className="mt-10_5">
    {isSuccess
      ? (
        <div className="d-flex justify-content-center">
          <div className="w-50 flex-column">
            <BackHome />
            <Typography
              variant="h5"
              className="mt-3 py-2 px-5 bg-ebony text-white text-capitalize"
            >
              Thank you for registretion. Please, check your email.
            </Typography>
          </div>
        </div>
      ) : (
        <FormSignUp
          formType={formType}
          fields={fields}
          formData={formData}
          errors={errors}
          isInProgress={isInProgress}
        />
      )}
  </Main>
);

SignUp.propTypes = {
  formType: PropTypes.string.isRequired,
  fields: PropTypes.shape({}).isRequired,
  formData: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
  isInProgress: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};
