// import axios from "axios";
// import { request } from "@umijs/max";
import { HTTP_CLIENT, PLATFORM } from "src/utils/constants";
import request from "./request";

// 注册访客
export function registerVisitor(wid: string,) {
    return request.get<USER.PageResultProfile>(
      "/visitor/api/v3/registe/visitor",
      {
        params: {
          wid: wid,
          platform: PLATFORM,
          client: HTTP_CLIENT,
        },
      }
    );
}

/**
 * 访客登录OAuth2
 * @param {*} username 用户名
 */
export function loginVisitor(
  username: string,
) {
  return request<AUTH.LoginResult>({
    method: "post",
    url: "/visitor/token",
    params: {
      username: username,
      password: username,
      grant_type: "password",
      scope: "all",
    },
    auth: {
      username: "client",
      password: "secret",
    },
  });
}


export function getUserProfile(uid: string) {
  return request.get<USER.Profile>("/visitor/api/profile", {
    params: {
      uid: uid,
      client: HTTP_CLIENT,
    },
  });
}

// 
// export function register(
//   wid: string,
//   successcb: (jsonContent: string) => void,
//   failedcb: (jsonContent: string) => void
// ) {
//   return request.get(
//     "/visitor/api/v3/registe/visitor",
//     {
//       params: {
//         wid: wid,
//         platform: PLATFORM,
//         client: HTTP_CLIENT,
//       },
//     }
//   ).then((response) => {
//     console.log("registerVisitor", response.data);
//     successcb(response.data);
//   })
//   .catch((error) => {
//     failedcb(error);
//   });
// }