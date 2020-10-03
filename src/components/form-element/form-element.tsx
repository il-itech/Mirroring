import React, { FC, useCallback, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { setFormData, setFormError, clearFormError } from 'actions/forms/common';
import { checkErrors } from 'helpers/form';
import { isEmptyOrNil } from 'helpers/utils';
import { FORM_FIELD_TYPES, FORM_TARGET_VALUES_SERIALIZE } from 'enums';
import elements from './elements';
import { Props } from './types';

const {
  RADIO,
  SELECT,
  SWITCH,
  CHECKBOX,
  TEXT,
  PASSWORD,
  TEXTAREA,
} = FORM_FIELD_TYPES;

const {
  CustomRadio,
  CustomSelect,
  CustomSwitch,
  CustomCheckbox,
  CustomTextField,
} = elements;

const getElement = R.cond([
  [R.equals(RADIO), R.always(CustomRadio)],
  [R.equals(SELECT), R.always(CustomSelect)],
  [R.equals(SWITCH), R.always(CustomSwitch)],
  [R.equals(CHECKBOX), R.always(CustomCheckbox)],
  [(type: FORM_FIELD_TYPES) => [TEXT, PASSWORD, TEXTAREA].includes(type), R.always(CustomTextField)],
  [R.T, R.always(null)],
]);

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
  const Element = getElement(elementType)!;
  const dispatch = useDispatch();

  const handleChange = useCallback(
    R.compose(
      dispatch,
      ({
        target: {
          name,
          [FORM_TARGET_VALUES_SERIALIZE[elementType]]: formValue,
        },
      }: ChangeEvent<{
        name?: string | undefined;
        value?: string;
        checked?: boolean;
      }>) => setFormData(formType, { [name as string]: formValue }),
    ),
    [dispatch],
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
