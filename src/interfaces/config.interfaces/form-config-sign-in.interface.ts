import { IFormField, IFormConfig } from './forms-config.interface';

export interface ISignInFieldsConfig {
  email: IFormField;
  password: IFormField;
}

export interface ISignInFormConfig extends IFormConfig {
  FIELDS: ISignInFieldsConfig;
}
