import { IFormField, IFormConfig } from './forms-config.interface';

export interface IChangePasswordFieldsConfig {
  password: IFormField;
  passwordConfirmation: IFormField;
}

export interface IChangePasswordFormConfig extends IFormConfig {
  FIELDS: IChangePasswordFieldsConfig;
}
