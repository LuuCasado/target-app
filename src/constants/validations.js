const errors = {
  email: "Please enter valid email",
  empty: "This field is required",
  password: "Your password must be at least 8 characters",
  confirmPassword: "Your passwords don't match",
};

export const validateEmail = (email) =>
  !String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    ? errors.email
    : "";

export const isEmpty = (str) => (!str ? errors.empty : "");

export const validatePassword = (str) =>
  str.length < 8 ? errors.password : "";

export const validateConfirmPassword = (password, confirmPassword) =>
  password !== confirmPassword ? errors.confirmPassword : "";
