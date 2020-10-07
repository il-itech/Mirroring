export interface IFormConfig {
  FORM_TYPE: string;
}

export interface IFormField {
  type: string;
  label: string;
  validation: { type: string; value?: number }[];
}
