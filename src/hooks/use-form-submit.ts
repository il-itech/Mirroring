import { useCallback, ReactEventHandler } from 'react';
import { ActionCreator } from 'deox';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { setFormErrors, clearFormErrors } from 'actions/forms/common';
import { checkErrors } from 'helpers/form';
import { isEmptyOrNil } from 'helpers/utils';
import { useShallowSelector } from './use-shallow-selector';

interface IUseFormSubmit {
  onSubmit: ReactEventHandler;
}

export const useFormSubmit = <T>(
  formType: string,
  fields: T,
  actionFn: ActionCreator<string>,
): IUseFormSubmit => {
  const { formData } = useShallowSelector(state => state?.forms?.[formType]);
  const dispatch = useDispatch();

  const onSubmit: ReactEventHandler = useCallback(
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
