import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classnames from 'classnames';
import * as R from 'ramda';

import { useShallowSelector } from 'hooks/use-shallow-selector';
import { resetPassword } from 'actions/auth';
import { clearForm } from 'actions/forms/common';
import { useFormSubmit } from 'hooks/use-form-submit';
import { FormElement } from 'components/form-element/form-element';
import { CircularLoader } from 'components/progress-bar/circular-loader/circular-loader';
import { isEmptyOrNil } from 'helpers/utils';
import CONFIG from 'config/config';
import { FORM_TYPES } from 'enums';

const { FORM_TYPE, FIELDS } = CONFIG?.FORMS?.RESET_PASSWORD;

export const FormResetPassword: FC<{}> = () => {
  const dispatch = useDispatch();
  const { formData, errors, isInProgress } = useShallowSelector(state => state?.forms?.resetPassword);
  const { onSubmit } = useFormSubmit(FORM_TYPE, FIELDS, resetPassword);

  useEffect(() => () => {
    R.compose(dispatch, clearForm)(FORM_TYPES.RESET_PASSWORD);
  }, [dispatch]);

  return (
    <>
      <Typography className="text-white" variant="h6">
        Type your email to reset password
      </Typography>

      <form>
        {Object.entries(FIELDS).map(([field, item]) => {
          const error = errors[field];
          const hasError = !isEmptyOrNil(error);

          return (
            <FormElement
              key={field}
              formType={FORM_TYPE}
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
        Reset password
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
