import { IChangeCredentialsFormData } from 'interfaces/state.interfaces/forms.interfaces/form-change-credentials.interface';
import { IChangeCredentialsFieldsConfig } from 'interfaces/config.interfaces/form-config-change-credentials.interface';
import { FormErrors } from 'interfaces';

export interface Props {
  formType: string;
  fields: IChangeCredentialsFieldsConfig;
  formData: IChangeCredentialsFormData;
  errors: FormErrors;
  isInProgress: boolean;
  isSuccess?: boolean;
}
