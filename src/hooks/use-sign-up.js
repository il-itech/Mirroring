import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { useShallowSelector } from './use-shallow-selector';
import { signUp } from '../actions/auth';
import { setFormErrors, clearFormErrors } from '../actions/forms/common';
import { checkErrors } from '../helpers/form';
import { isEmptyOrNil } from '../helpers/utils';
import { REDUCER_TYPES, FORM_TYPES } from '../constants';

export const useSignUp = (formType, fields) => {
  const { formData } = useShallowSelector(R.path([REDUCER_TYPES.FORMS, FORM_TYPES.SIGN_UP]));
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const errors = checkErrors(fields, formData);

      if (isEmptyOrNil(errors)) {
        R.compose(dispatch, clearFormErrors)(formType);
        R.compose(dispatch, signUp)(formData);
      } else {
        R.compose(dispatch, setFormErrors)(formType, errors);
      }
    },
    [dispatch, fields, formData, formType],
  );

  return {
    onSubmit,
  };
};
