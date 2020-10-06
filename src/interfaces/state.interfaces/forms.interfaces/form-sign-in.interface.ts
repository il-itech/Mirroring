import { IFormCommon } from '../common-interface';

export interface ISignInFormData {
  email: string;
  password: string;
}

export interface ISignInForm extends IFormCommon {
  formData: ISignInFormData;
}
