import { IFormField, IFormConfig } from './forms-config.interface';

export interface IChangeCredentialsFieldsConfig {
  firstname: IFormField;
  lastname: IFormField;
  email: IFormField;
  country: IFormField;
}

export interface IChangeCredentialsFormConfig extends IFormConfig {
  FIELDS: IChangeCredentialsFieldsConfig;
}
