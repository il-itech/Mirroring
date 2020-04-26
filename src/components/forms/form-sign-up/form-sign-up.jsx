import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import NoSsr from '@material-ui/core/NoSsr';

import { FormElement } from '../../form-element/form-element';
import { RouteLink } from '../../route-link/route-link';

import './form-sign-up.scss';

export const FormSignUp = ({ formType, fields, formData }) => (
  <div className="d-flex flex-column m-auto app-sign-up">
    <RouteLink
      to="/"
      component={Button}
      copmonentClassName="mb-2 text-white back-home-button"
    >
      Back To Home
    </RouteLink>
    <div className="w-100 d-flex flex-column m-auto p-2 bg-ebony form-sign-up">
      <Typography className="mb-2 text-white" variant="h5">
        Sign up
      </Typography>
      <Typography className="mb-2">
        Sign up on the internal platform
      </Typography>

      <NoSsr>
        {Object.entries(fields).map(([field, item]) => (
          <FormElement
            key={field}
            formType={formType}
            field={field}
            variant="outlined"
            value={formData[field]}
            elementProps={{
              ...item,
              autoFocus: false,
              classes: {
                root: 'w-100 mt-2 mb-1',
              },
              InputProps: {
                classes: {
                  root: 'input-root',
                  input: 'text-white input-custom-autocomplete',
                  notchedOutline: 'input-outline',
                },
              },
              InputLabelProps: {
                classes: {
                  root: 'text-mischka',
                },
              },
            }}
          />
        ))}
      </NoSsr>

      <Button
        classes={{
          root: 'mt-2 py-1 px-3 text-white bg-blue',
        }}
      >
        Create account
      </Button>
      <Divider className="my-2 bg-vulcan" />
      <RouteLink
        to="/sign-in"
        component={Typography}
        copmonentClassName="text-gray cursor-pointer"
      >
        Have an account ?
      </RouteLink>
    </div>
  </div>
);

FormSignUp.propTypes = {
  formType: PropTypes.string.isRequired,
  fields: PropTypes.shape({}).isRequired,
  formData: PropTypes.shape({}).isRequired,
};

FormSignUp.propTypes = {
  formType: PropTypes.string.isRequired,
  fields: PropTypes.shape({}).isRequired,
  formData: PropTypes.shape({}).isRequired,
};
