export interface ICommon {
  isInProgress: false;
  isSuccess: false;
}

export interface IFormCommon extends ICommon {
  formData: {
    [key: string]: any;
  };
  errors: {
    [key: string]: any;
  };
}
