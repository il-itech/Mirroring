import { IFormCommon } from '../common-interface';

export interface IResetPasswordFormData {
  email: string;
}

export interface IResetPasswordForm extends IFormCommon {
  formData: IResetPasswordFormData;
}
