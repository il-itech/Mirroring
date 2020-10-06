import { ISignUpFormData } from 'interfaces/state.interfaces/forms.interfaces/form-sign-up.interface';
import { ISignUpFieldsConfig } from 'interfaces/config.interfaces/form-config-sign-up.interface';

export interface Props {
  formType: string;
  fields: ISignUpFieldsConfig;
  formData: ISignUpFormData;
  errors: {};
  isInProgress: boolean;
  isSuccess?: boolean;
}
