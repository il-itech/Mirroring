import { IFormField, IFormConfig } from './forms-config.interface';

export interface ISignUpFieldsConfig {
  firstname: IFormField;
  lastname: IFormField;
  email: IFormField;
  password: IFormField;
}

export interface ISignUpFormConfig extends IFormConfig {
  FIELDS: ISignUpFieldsConfig;
}
