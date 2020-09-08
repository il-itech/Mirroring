import { handleActions } from 'redux-actions';

import { IChangeCredentialsForm } from 'interfaces/state.interfaces/forms.interfaces/form-change-credentials.interface';
import { FORM_TYPES } from 'constants';
import { getFormsCommonReducer, getInitialFormState } from '../common';

const additionalState = {
  formData: {
    firstname: '',
    lastname: '',
    email: '',
    country: '',
  },
};

export const changeCredentials = handleActions<IChangeCredentialsForm, any>(
  {
    ...getFormsCommonReducer(FORM_TYPES.CHANGE_CREDENTIALS, additionalState),
  },
  getInitialFormState(additionalState),
);
