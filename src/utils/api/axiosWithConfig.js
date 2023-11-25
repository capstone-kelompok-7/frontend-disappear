import axios from "axios";

let bearerToken = localStorage.getItem("accessToken");
let baseUrl = "https://test.disappear-organization.my.id/";
const axiosWithConfig = axios.create();

export const setAxiosConfig = (token, backendUrl) => {
  baseUrl = backendUrl;
  bearerToken = token;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = baseUrl;
  axiosConfig.headers.Authorization = `Bearer ${bearerToken}`;

  return axiosConfig;
});

export default axiosWithConfig;
