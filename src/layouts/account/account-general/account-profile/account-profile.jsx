import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classnames from 'classnames';

import { useAccountProfile } from 'hooks/account/use-account-profile';
import { getConfig } from 'helpers/env';
import { FormElement } from 'components/form-element/form-element';
import { CircularLoader } from 'components/progress-bar/circular-loader/circular-loader';
import { isEmptyOrNil } from 'helpers/utils';

import './account-profile.scss';

const { FORM_TYPE, FIELDS } = getConfig('FORMS.ACCOUNT');

export const AccountProfile = () => {
  const {
    formData,
    errors,
    isInProgress,
    onSubmit,
  } = useAccountProfile(FORM_TYPE, FIELDS);

  return (
    <div className="w-75 d-flex flex-column ml-3 p-2 bg-ebony account-profile">
      <Typography className="pb-2 border-bottom border-white-12">Profile</Typography>
      <div className="pb-1_5 border-bottom border-white-12 account-forms">
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
      </div>

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
        Save changes
        {isInProgress && (
          <CircularLoader
            colorPrimary={classnames({
              'text-muted': isInProgress,
            })}
          />
        )}
      </Button>
    </div>
  );
};
