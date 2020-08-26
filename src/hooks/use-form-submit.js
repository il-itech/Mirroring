import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { setFormErrors, clearFormErrors } from 'actions/forms/common';
import { checkErrors } from 'helpers/form';
import { isEmptyOrNil } from 'helpers/utils';
import { useShallowSelector } from './use-shallow-selector';

export const useFormSubmit = (formType, fields, actionFn) => {
  const { formData } = useShallowSelector(state => state?.forms?.[formType]);
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const errors = checkErrors(fields, formData);

      if (isEmptyOrNil(errors)) {
        R.compose(dispatch, clearFormErrors)(formType);
        R.compose(dispatch, actionFn)(formData);
      } else {
        R.compose(dispatch, setFormErrors)(formType, errors);
      }
    },
    [actionFn, dispatch, fields, formData, formType],
  );

  return {
    onSubmit,
  };
};
