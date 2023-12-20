// 开发环境配置
import * as config from './config.dev'
// 线上环境配置
// import * as config from "./config.pro";
// 
export const BASE_URL = config.BASE_URL
export const HTTP_CLIENT = 'web'
export const PLATFORM = "weiyu-ai"
// 登录超时
export const EVENT_BUS_LOGIN_TIMEOUT = 'EVENT_BUS_LOGIN_TIMEOUT'
// 用户名或密码错误
export const EVENT_BUS_LOGIN_ERROR_400 = 'EVENT_BUS_LOGIN_ERROR_400'
// 服务器错误500
export const EVENT_BUS_SERVER_ERROR_500 = 'EVENT_BUS_SERVER_ERROR_500'
// token失效
export const EVENT_TOKEN_INVALID = "EVENT_TOKEN_INVALID";