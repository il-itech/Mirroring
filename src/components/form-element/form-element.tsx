import { FC, useCallback, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { setFormData, setFormError, clearFormError } from 'actions/forms/common';
import { checkErrors } from 'helpers/form';
import { isEmptyOrNil } from 'helpers/utils';
import { getElement } from 'helpers/get-form-element';
import { FORM_TARGET_VALUES_SERIALIZE } from 'enums';
import { Props } from './types';

export const FormElement: FC<Props> = ({
  formType,
  field,
  elementProps,
  parentProps,
  variant,
  customHandleChange,
  customHandleBlur,
  value,
  isChecked,
}) => {
  const { type: elementType, validation } = elementProps;
  // @ts-ignore
  const Element = getElement(elementType)!;
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useCallback(
    R.compose(
      dispatch,
      ({
        target: {
          name,
          // @ts-ignore TODO: should be fixed:
          [FORM_TARGET_VALUES_SERIALIZE[elementType]]: formValue,
        },
      }: ChangeEvent<{
        name?: string | undefined;
        value?: string;
        checked?: boolean;
      }>) => setFormData(formType, { [name as string]: formValue }),
    ), [dispatch, elementType, formType],
  );

  const handleBlur = useCallback(
    () => {
      const error = checkErrors({ [field]: { validation } }, { [field]: value });

      if (isEmptyOrNil(error)) {
        R.compose(dispatch, clearFormError)(formType, field);
      } else {
        R.compose(dispatch, setFormError)(formType, error);
      }
    },
    [dispatch, field, formType, validation, value],
  );

  return (
    <Element
      field={field}
      variant={variant}
      handleChange={customHandleChange || handleChange}
      handleBlur={customHandleBlur || handleBlur}
      value={value}
      checked={isChecked}
      {...elementProps}
      {...parentProps}
    />
  );
};
