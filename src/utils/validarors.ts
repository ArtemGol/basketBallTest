export const required1 = (value: string): any => (value ? undefined : "Required");
export const required2 = (value: string) =>
  value ? undefined : "You must be accept the agreement";

export const maxLengthCreator = (maxLength: number) => (value: string) => {
  if (value.length > maxLength)
    return `Max length must be less than ${maxLength} symbols`;
  return undefined;
};

export const confirmPassword = (confirmPas: string) => async (value: string) => {
  await required1(value);
  if (confirmPas !== value) return `The password is repeated incorrect`;
  return undefined;
};

export const composeValidators = (...validators: any[]) => (value: string) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
