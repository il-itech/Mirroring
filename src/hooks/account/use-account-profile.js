import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { changeCredentials } from 'actions/auth';
import { setFormErrors, clearFormErrors } from 'actions/forms/common';
import { checkErrors } from 'helpers/form';
import { isEmptyOrNil } from 'helpers/utils';
import { useShallowSelector } from '../use-shallow-selector';

export const useAccountProfile = (formType, fields) => {
  const { formData, errors, isInProgress } = useShallowSelector(state => state?.forms?.account);
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const formErrors = checkErrors(fields, formData);

      if (isEmptyOrNil(formErrors)) {
        R.compose(dispatch, clearFormErrors)(formType);
        R.compose(dispatch, changeCredentials)(formData);
      } else {
        R.compose(dispatch, setFormErrors)(formType, formErrors);
      }
    },
    [dispatch, fields, formData, formType],
  );

  return {
    formData,
    errors,
    isInProgress,
    onSubmit,
  };
};
