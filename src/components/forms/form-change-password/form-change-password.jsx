import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classnames from 'classnames';

import { changePassword } from 'actions/auth';
import { useFormSubmit } from 'hooks/use-form-submit';
import { FormElement } from 'components/form-element/form-element';
import { CircularLoader } from 'components/progress-bar/circular-loader/circular-loader';
import { isEmptyOrNil } from 'helpers/utils';

export const FormChangePassword = ({
  formType,
  fields,
  formData,
  errors,
  isInProgress,
}) => {
  const { onSubmit } = useFormSubmit(formType, fields, changePassword);

  return (
    <>
      <form className="pb-1_5 border-bottom border-white-12 account-forms">
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
      </form>

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
        Change password
        {isInProgress && (
          <CircularLoader
            colorPrimary={classnames({
              'text-muted': isInProgress,
            })}
          />
        )}
      </Button>
    </>
  );
};

FormChangePassword.propTypes = {
  formType: PropTypes.string.isRequired,
  fields: PropTypes.shape({}).isRequired,
  formData: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
  isInProgress: PropTypes.bool.isRequired,
};
