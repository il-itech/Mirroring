import { ISignInFormData } from 'interfaces/state.interfaces/forms.interfaces/form-sign-in.interface';
import { ISignInFieldsConfig } from 'interfaces/config.interfaces/form-config-sign-in.interface';

export interface Props {
  formType: string;
  fields: ISignInFieldsConfig;
  formData: ISignInFormData;
  errors: {};
  isInProgress: boolean;
  isSuccess?: boolean;
}
