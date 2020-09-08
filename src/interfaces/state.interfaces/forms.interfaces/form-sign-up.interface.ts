import { IFormCommon } from '../common-interface';

export interface ISignUpFormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface ISignUpForm extends IFormCommon {
  formData: ISignUpFormData;
}
