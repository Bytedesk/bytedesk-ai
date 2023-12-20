import axios from "axios";
import PubSub from "pubsub-js";
import { BASE_URL, EVENT_BUS_SERVER_ERROR_500, EVENT_TOKEN_INVALID } from "src/utils/constants";

const request = axios.create({
    timeout: 20000,
    baseURL: BASE_URL,
});

request.interceptors.request.use(
    (config) => {
        // 发送请求之前做一些处理
        let token = localStorage.access_token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            // config.headers["Authorization"] = "Bearer " + token;
        }
        // TODO: 如果token不为空的话，设置请求头 
        console.log("request config", config);
        return config;
    },
    (error) => {
        console.log('request error', error);
        if (error.response.status === 403) {
          PubSub.publish(EVENT_TOKEN_INVALID, "403");
        }
        if (
          error.response.status === 401
        //   !(data.result && data.result.isLogin)
        ) {
          PubSub.publish(EVENT_TOKEN_INVALID, "401");
        }
        // 请求错误做些什么
        return Promise.reject(error);
    }
);

request.interceptors.response.use(
    (response) => {
        // 接收到响应数据之后做点什么
        console.log('response success', response);
        return response;
    },
    (error) => {
        console.log('response error', error);
        if (error.response) {
          switch (error.response.status) {
            case 400:
              // TODO: 修改登录错误提示为：密码错误
              console.log("axios interception error 400");
              PubSub.publish(EVENT_TOKEN_INVALID, "400");
              break;
            case 401:
              // FIXME: 401报错自动清理本地存储access_token, 然后重新获取access_token
              console.log("axios interception error 401");
              PubSub.publish(EVENT_TOKEN_INVALID, "401");
              break;
            case 403:
              // TODO: 通过refresh_token获取最新access_token?
              // 403 无权限，跳转到首页
              console.log("axios interception error 403");
              PubSub.publish(EVENT_TOKEN_INVALID, "403");
              break;
            case 500:
              // TODO: 服务器错误
              console.log("axios interception error 500");
              PubSub.publish(EVENT_BUS_SERVER_ERROR_500, "500");
              break;
          }
        }
        // 响应错误做点什么
        return "return axios interception error";
    }
);


export default request;