import axios from "axios";
import Store from './../../store';

const http = axios.create({
  baseURL: "http://31.220.52.152:54213/",
  headers: {
    Accept: "application/json",
    Content: "application/json"
  }
});

http.interceptors.request.use(
  function(config) {
    const token = Store.state.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
);

export default http;
