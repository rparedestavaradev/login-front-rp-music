import { AbstractControl, AbstractControlOptions, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
const PatternSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
const UppercasePattern = /[A-Z]/;
const NumerPattern = /\d/;

function passwordMatchValidator(control: AbstractControl): { [key: string]: any } | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  if (!password || !confirmPassword || password !== confirmPassword) {
    return { 'passwordMismatch': true };
  }
  return null;
}

export function PasswordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return passwordMatchValidator(control);
  };
}

function unUppercase(control: AbstractControl): { [key: string]: any } | null {
  const hasUppercase = UppercasePattern.test(control.value);
  return hasUppercase ? null : { 'almostAnUppercase': true };
}

export function UnUppercase(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return unUppercase(control);
  };
}

function specialCharacterPattern(control: AbstractControl): { [key: string]: any } | null {
  const hasUppercase = PatternSpecialCharacter.test(control.value);
  return hasUppercase ? null : { 'specialCharacter': true };
}

export function SpecialCharacterPattern(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return specialCharacterPattern(control);
  }
};

function numerPattern(control: AbstractControl): { [key: string]: any } | null {
  const hasUppercase = NumerPattern.test(control.value);
  return hasUppercase ? null : { 'almostAnNumber': true };
}

export function NumerPatterValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return numerPattern(control);
  }
};