import http from "../utils/request";

export function loginApi(data) {
  return http({
    url: "admin/signin",
    headers: {
      isToken: false,
    },
    method: "post",
    data: data,
  });
}

export function logOutApi() {
  return http({
    url: "logout",
    method: "post",
  });
}

export function haveTokenApi() {
  return http({
    url: "api/user/check",
    method: "post",
  });
}
