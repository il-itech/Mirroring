import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import classnames from 'classnames';
import * as R from 'ramda';

import { useShallowSelector } from 'hooks/use-shallow-selector';
import { clearForm } from 'actions/forms/common';
import { changePassword } from 'actions/auth';
import { useFormSubmit } from 'hooks/use-form-submit';
import { FormElement } from 'components/form-element/form-element';
import { CircularLoader } from 'components/progress-bar/circular-loader/circular-loader';
import { isEmptyOrNil } from 'helpers/utils';
import CONFIG from 'config/config';
import { FORM_TYPES } from 'enums';
import { useRouter } from 'next/router';

const { FORM_TYPE, FIELDS } = CONFIG?.FORMS?.CHANGE_PASSWORD;

export const FormChangePassword: FC<{}> = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const { formData, errors, isInProgress } = useShallowSelector(state => state?.forms?.changePassword);
  const { onSubmit } = useFormSubmit(FORM_TYPE, FIELDS, changePassword, { token: query?.token });

  useEffect(() => () => {
    R.compose(dispatch, clearForm)(FORM_TYPES.CHANGE_PASSWORD);
  }, [dispatch]);

  return (
    <>
      <form className="pb-1_5 border-bottom border-white-12 account-forms">
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
