export const validatePassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!!password?.length && password.length < minLength) {
    return `passwordMinLength`;
  }
  if (!hasUpperCase) {
    return "passwordOneUpperCase";
  }
  if (!hasLowerCase) {
    return "passwordOneLowerCase";
  }
  if (!hasDigit) {
    return "passwordOneNumber";
  }
  if (!hasSpecialChar) {
    return "passwordOneSpecialCharacter";
  }

  return true;
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (emailRegex.test(email)) {
    return true;
  } else {
    return "Email is not valid.";
  }
};
