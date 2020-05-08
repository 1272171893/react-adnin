import axios from "axios";
import qs from "qs";
import { message } from "antd";
axios.interceptors.request.use((config) => {
  const { method, data } = config;
  if (method.toLocaleLowerCase() === "post" && typeof data === "object") {
    config.data = qs.stringify(data);
  }
  return config;
});
axios.interceptors.response.use(
  (result) => {
    return result.data;
  },
  (error) => {
    message.error(error.message);
    return new Promise(() => {});
    //   return Promise.reject(error)
  }
);
export default axios;
