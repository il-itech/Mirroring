import { IFormCommon } from './common-interface';

export interface ISignUpForm extends IFormCommon {
  formData: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  };
}

export interface ISignInForm extends IFormCommon {
  formData: {
    email: string;
    password: string;
  };
}

export interface IChatMessageForm extends IFormCommon {
  formData: {
    [key: string]: string;
  };
}

export interface IChangeCredentialsForm extends IFormCommon {
  formData: {
    firstname: string;
    lastname: string;
    email: string;
    country: string;
  };
}

export interface IChangePassword extends IFormCommon {
  formData: {
    password: string;
    passwordConfirmation: string;
  };
}

export interface IForms {
  signUp: ISignUpForm;
  signIn: ISignInForm;
  chatMessage: IChatMessageForm;
  changePassword: IChangePassword;
  changeCredentials: IChangeCredentialsForm;
}
