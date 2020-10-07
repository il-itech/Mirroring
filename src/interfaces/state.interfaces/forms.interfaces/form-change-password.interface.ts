import { IFormCommon } from '../common-interface';

export interface IChangePasswordFormData {
  password: string;
  passwordConfirmation: string;
}

export interface IChangePasswordForm extends IFormCommon {
  formData: IChangePasswordFormData;
}
