export enum RequiredFieldMessage {
  FIRST_NAME = 'First name is required.',
  LAST_NAME = 'Last name is required.',
  EMAIL = 'Email is required.',
  PASSWORD = 'Password is required.',
  DATE_OF_BIRTH = 'Date of birth is required.',
  TYPE = 'Type is required.',
  MODEL = 'Model is required.',
  PRODUCTION_YEAR = 'Production year is required.',
  LICENSE_NR = 'Licence number is required.',
  CHASSIS_SERIES = 'Chassis series is required.',
  NR_KM = 'Number of kilometers are required.',
}

export enum MatchingRuleMessage {
  CHARACTER = 'This character is not allowed.',
  EMAIL = 'Invalid email format.',
  PASSWORD = 'Password must contain at least 2 letters, 2 numbers and a special character.',
  LAST_NAME_MIN = 'Last name should have at least 3 characters.',
  FIRST_NAME_MAX = 'First name should have max 10 characters.',
  NUMBER = 'Invalid input! Please insert a number.',
  DATE = 'Invalid input! Please respect the format.'
}

export const NAME_REG_EXP: RegExp = /^[A-Za-zÀ-ž- _]*[A-Za-zÀ-ž-][A-Za-zÀ-ž- _]*$/;

export const EMAIL_REG_EXP: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const PASSWORD_REG_EXP: RegExp = /^(?=.*[a-zA-Z].*[a-zA-Z])(?=.*\d.*\d)(?=.*[^a-zA-Z0-9]).{5,}$/;
