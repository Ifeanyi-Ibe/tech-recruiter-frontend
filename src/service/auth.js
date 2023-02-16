import axios from "../config/axios";

class AuthService {
  constructor() {
    this.axios = axios;
    this.BaseURL = process.env.AUTH_BASE_URL;
  }

  login(data) {
    if (!data.email || !data.password) return null;
    console.log(this.BaseURL);
    return this.axios
      .post(`${this.BaseURL}/login`, data)
      .then((response) => {
        if (response.token) {
          const { token, user } = response;
          localStorage.setItem(
            "user",
            JSON.stringify({ accessToken: token, ...user })
          );
        }
        return response;
      })
      .catch((error) => Promise.reject(error));
  }
}

export default new AuthService();
