import { Constants } from "../constants/constants";

const validateForm = (inputs) => {
  const errors = {
    password: [],
    confirmPassword: ""
  };
  const specialChar = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
  const capitalChar = /[A-Z]/;
  const numberValid = /[0-9]/;

  // Pattern Matching.
  if (!inputs.password || inputs.password.length < 6) {
    errors.password.push(Constants?.lengthCharError);
  }
  if (!specialChar.test(inputs.password)) {
    errors.password.push(Constants?.specialCharError);
  }
  if (!capitalChar.test(inputs.password)) {
    errors.password.push(Constants?.capitalCharError);
  }
  if (!numberValid.test(inputs.password)) {
    errors.password.push(Constants?.numberError);
  }

  // Check if first input box is having error
  if (errors.password.length) {
    // If it is having error Display False
    errors.confirmPassword = false;
  } else {
    // Else check if both password are same
    if (inputs.password !== inputs.confirmPassword) {
      errors.confirmPassword = false;
    } else {
      errors.confirmPassword = true;
    }
  }

  return errors;
};

export default validateForm;
