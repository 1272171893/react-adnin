import axios from "./axios";
const baseUrl = "http://localhost:3000";
//请求登录
export const login = (username, password) => axios.post(baseUrl + "/login", { username, password })
