import { IChangeCredentialsFormData } from 'interfaces/state.interfaces/forms.interfaces/form-change-credentials.interface';
import { IChangeCredentialsFieldsConfig } from 'interfaces/config.interfaces/form-config-change-credentials.interface';

export interface Props {
  formType: string;
  fields: IChangeCredentialsFieldsConfig;
  formData: IChangeCredentialsFormData;
  errors: {};
  isInProgress: boolean;
  isSuccess?: boolean;
}
