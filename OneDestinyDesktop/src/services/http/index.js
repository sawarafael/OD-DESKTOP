import axios from "axios";
// import Store from "./../../store";

// const acessToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJIYXJ1IiwiaWF0IjoxNjEwODI1MTA3LCJleHAiOjE2MTA5OTc5MDd9.mLks53olu3mWMqwVFtM9d16dnlRj_DGRUsSAKF69m38";

const http = axios.create({
  baseURL: "http://localhost:54213/",
  headers: {
    Accept: "application/json",
    Content: "application/json"
  }
});

// http.interceptors.request.use(
//   config => {
//     config.headers.authorization = `${acessToken}`;
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

export default http;
