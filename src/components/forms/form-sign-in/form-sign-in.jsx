import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/Lock';
import NoSsr from '@material-ui/core/NoSsr';
import classnames from 'classnames';

import { useSignIn } from 'hooks/use-sign-in';
import { FormElement } from 'components/form-element/form-element';
import { RouteLink } from 'components/route-link/route-link';
import { CircularLoader } from 'components/progress-bar/circular-loader/circular-loader';
import { isEmptyOrNil } from 'helpers/utils';

import './form-sign-in.scss';

export const FormSignIn = ({
  formType,
  fields,
  formData,
  errors,
  isInProgress,
}) => {
  const {
    onSubmit,
  } = useSignIn(formType, fields);

  return (
    <div className="m-auto app-sign-in">
      <RouteLink
        to="/"
        component={Button}
        copmonentClassName="text-white mb-7 back-home-button"
      >
        Back To Home
      </RouteLink>

      <div className="w-100 d-flex flex-column position-relative px-4 pt-8 pb-3 bg-ebony form-sign-in">
        <Avatar
          variant="rounded"
          classes={{
            root: 'position-absolute bg-success form-icon',
          }}
        >
          <LockIcon />
        </Avatar>
        <Typography className="mb-2 text-white" variant="h5">
          Sign In
        </Typography>
        <Typography className="mb-2">
          Sign in on the internal platform
        </Typography>

        <NoSsr>
          {Object.entries(fields).map(([field, item]) => {
            const error = errors[field];
            const hasError = !isEmptyOrNil(error);

            return (
              <FormElement
                key={field}
                formType={formType}
                field={field}
                variant="outlined"
                value={formData[field]}
                elementProps={{
                  ...item,
                  autoFocus: false,
                  hasError,
                  helperText: error?.message,
                  classes: {
                    root: 'w-100 mt-2 mb-1',
                  },
                  InputProps: {
                    classes: {
                      input: 'text-white input-custom-autocomplete',
                      notchedOutline: classnames({
                        'border-white-23': !hasError,
                        'border-cinnabar': hasError,
                      }),
                    },
                  },
                  InputLabelProps: {
                    classes: {
                      root: 'text-mischka',
                    },
                  },
                }}
              />
            );
          })}
        </NoSsr>

        <Button
          classes={{
            root: classnames('mt-2 py-1 px-3 text-white', {
              'bg-blue': !isInProgress,
              'bg-vulcan bg-hover-none': isInProgress,
            }),
          }}
          onClick={onSubmit}
          disabled={isInProgress}
        >
          Log in
          {isInProgress && (
            <CircularLoader
              colorPrimary={classnames({
                'text-muted': isInProgress,
              })}
            />
          )}
        </Button>
        <Divider className="my-2 bg-vulcan" />
        <RouteLink
          to="/sign-up"
          component={Typography}
          copmonentClassName="text-gray cursor-pointer"
        >
          Create new account
        </RouteLink>
      </div>
    </div>
  );
};

FormSignIn.propTypes = {
  formType: PropTypes.string.isRequired,
  fields: PropTypes.shape({}).isRequired,
  formData: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
  isInProgress: PropTypes.bool.isRequired,
};
