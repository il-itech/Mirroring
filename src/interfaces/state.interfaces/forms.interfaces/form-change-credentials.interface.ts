import { IFormCommon } from '../common-interface';

export interface IChangeCredentialsFormData {
  firstname: string;
  lastname: string;
  email: string;
  country: string;
}

export interface IChangeCredentialsForm extends IFormCommon {
  formData: IChangeCredentialsFormData;
}
