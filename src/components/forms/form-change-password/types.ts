import { IChangePasswordFormData } from 'interfaces/state.interfaces/forms.interfaces/form-change-password.interface';
import { IChangePasswordFieldsConfig } from 'interfaces/config.interfaces/form-config-change-password.interface';

export interface Props {
  formType: string;
  fields: IChangePasswordFieldsConfig;
  formData: IChangePasswordFormData;
  errors: {};
  isInProgress: boolean;
  isSuccess?: boolean;
}
