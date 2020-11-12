export interface ICommon {
  isInProgress: false;
  isSuccess: false;
}

export interface IFormCommon extends ICommon {
  formData: Record<string, any>;
  errors: Record<string, any>;
}
