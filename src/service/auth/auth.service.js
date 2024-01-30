import ApiClient from "@/helper/api.helper";

class Auth extends ApiClient {
  constructor() {
    super("/api");
  }

  login(user) {
    console.log(this.url);
    return axios.post(`${this.url}/login`, {
      ...user,
    });
  }

  register(user) {
    return axios.post(`${this.url}/register`, {
      ...user,
    });
  }

  checkOtp(user) {
    return axios.post(`${this.url}/check-otp`, {
      ...user,
    });
  }

  resendOtp(user) {
    return axios.post(`${this.url}/resend-otp`, {
      ...user,
    });
  }

  resetPasswordByLink(user) {
    return axios.post(`${this.url}/password/email`, {
      ...user,
    });
  }

  resetPassword(user) {
    return axios.post(`${this.url}/password/reset`, {
      ...user,
    });
  }

  logout() {
    return axios.post(`${this.url}/logout`);
  }
}

export default new Auth();
