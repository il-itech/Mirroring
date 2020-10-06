import { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/Lock';
import classnames from 'classnames';

import { signIn } from 'actions/auth';
import { useFormSubmit } from 'hooks/use-form-submit';
import { BackHome } from 'components/back-home/back-home';
import { FormElement } from 'components/form-element/form-element';
import { RouteLink } from 'components/route-link/route-link';
import { CircularLoader } from 'components/progress-bar/circular-loader/circular-loader';
import { isEmptyOrNil } from 'helpers/utils';
import { Props } from './types';

import './form-sign-in.scss';

export const FormSignIn: FC<Props> = ({
  formType,
  fields,
  formData,
  errors,
  isInProgress,
}) => {
  const {
    onSubmit,
  } = useFormSubmit(formType, fields, signIn);

  return (
    <div className="m-auto w-50 app-sign-in">
      <BackHome className="mb-7" />

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

        <form
          id="form-sign-in"
          onSubmit={onSubmit}
          className="d-flex flex-column"
        >
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
        </form>
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
