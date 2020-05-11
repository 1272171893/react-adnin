import axios from "./axios";
import jsonp from "jsonp";
import {
    message
} from "antd";
const baseUrl = "http://localhost:3000";
//请求登录
export const login = (username, password) => axios.post(baseUrl + "/login", {
    username,
    password
})
export const getWeather = (city) => {
    return new Promise((resolve, reject) => {
        const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
        jsonp(url, {}, (err, data) => {
            if (!err && data.error === 0) {
                const {
                    dayPictureUrl,
                    weather
                } = data.results[0].weather_data[0]
                resolve({
                    dayPictureUrl,
                    weather
                })
            } else {
                message.error("获取天气失败")
            }
        })
    })
}
//获取分类的列表
export const getCategory = () => axios.get(baseUrl + "/manage/category/list")