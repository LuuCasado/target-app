import axios from "axios";

import { base, endpoints } from "constants/api";

const headers = {
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

    return axios.post(`${base}${endpoints.users}`, data, headers);
  }
}

export default AuthService;
