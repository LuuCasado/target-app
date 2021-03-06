import axios from "axios";

import { base, endpoints } from "constants/api";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

class AuthService {
  static signUp({ name: username, email, gender, password, confirmPassword }) {
    const data = {
      user: {
        username,
        email,
        gender: gender.toLowerCase(),
        password,
        password_confirmation: confirmPassword,
      },
    };
    return axios.post(`${base}${endpoints.signUp}`, data, config);
  }

  static logIn({ email, password }) {
    const data = {
      user: {
        email,
        password,
      },
    };
    return axios.post(`${base}${endpoints.signIn}`, data, config);
  }

  static logOut() {
    return axios.delete(`${base}${endpoints.signOut}`, {
      data: {},
    });
  }

  static updateUserInfo({ email, id }) {
    const data = {
      user: {
        email,
      },
    };
    return axios.put(`${base}${endpoints.signUp}/${id}`, data, config);
  }
  static changePassword({ currentPassword, newPassword, confirmNewPassword }) {
    const data = {
      current_password: currentPassword,
      password: newPassword,
      password_confirmation: confirmNewPassword,
    };
    return axios.put(`${base}${endpoints.changePassword}`, data, config);
  }
}

export default AuthService;
