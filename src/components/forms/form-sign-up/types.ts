import { ISignUpFormData } from 'interfaces/state.interfaces/forms.interfaces/form-sign-up.interface';
import { ISignUpFieldsConfig } from 'interfaces/config.interfaces/form-config-sign-up.interface';
import { FormErrors } from 'interfaces';

export interface Props {
  formType: string;
  fields: ISignUpFieldsConfig;
  formData: ISignUpFormData;
  errors: FormErrors;
  isInProgress: boolean;
  isSuccess?: boolean;
}
