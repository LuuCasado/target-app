import axios from "axios";

import { base, endpoints } from "constants/api";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

class AuthService {
  static signUp(values) {
    const data = {
      user: {
        username: values.name,
        email: values.email,
        gender: values.gender.toLowerCase(),
        password: values.password,
        password_confirmation: values.confirmPassword,
      },
    };
    return axios.post(`${base}${endpoints.signUp}`, data, config);
  }

  static logIn(values) {
    const data = {
      user: {
        email: values.email,
        password: values.password,
      },
    };
    return axios.post(`${base}${endpoints.signIn}`, data, config);
  }
}

export default AuthService;
