import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response?.data ?? null;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
