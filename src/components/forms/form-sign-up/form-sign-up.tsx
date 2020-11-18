import { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import classnames from 'classnames';

import { signUp } from 'actions/auth';
import { useFormSubmit } from 'hooks/use-form-submit';
import { BackHome } from 'components/back-home';
import { FormElement } from 'components/form-element/form-element';
import { RouteLink } from 'components/route-link';
import { CircularLoader } from 'components/progress-bar/circular-loader';
import { isEmptyOrNil } from 'helpers/utils';
import { Props } from './types';

import './form-sign-up.scss';

export const FormSignUp: FC<Props> = ({
  formType,
  fields,
  formData,
  errors,
  isInProgress,
}) => {
  const {
    onSubmit,
  } = useFormSubmit(formType, fields, signUp);

  return (
    <div className="d-flex flex-column m-auto app-sign-up">
      <BackHome className="mb-2" />
      <div className="w-100 d-flex flex-column m-auto p-2 bg-ebony form-sign-up">
        <Typography className="mb-2 text-white" variant="h5">
          Sign up
        </Typography>
        <Typography className="mb-2">
          Sign up on the internal platform
        </Typography>

        <form
          id="form-sign-up"
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
            Create account
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
          to="/sign-in"
          component={Typography}
          copmonentClassName="text-gray cursor-pointer"
        >
          Have an account ?
        </RouteLink>
      </div>
    </div>
  );
};
