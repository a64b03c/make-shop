import { defineStore } from "pinia";
import { loginApi, logOutApi, haveTokenApi } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/auth";
import router from "@/router";

const userStore = defineStore("user", {
  state: () => ({
    token: getToken(),
    loginStaus: false,
  }),
  actions: {
    login(user) {
      return new Promise((resolve, reject) => {
        loginApi(user)
          .then((res) => {
            setToken(res.data.token);
            // setExpire(res.data.expired);
            this.token = res.data.token;
            this.loginStaus = !this.loginStaus;
            router.push("/dashboard");
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    // 登出方法
    logOut() {
      return new Promise((resolve, reject) => {
        logOutApi()
          .then(() => {
            this.token = "";
            removeToken();
            this.loginStaus = !this.loginStaus;
            router.push("/");
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    // 確認有無登入
    haveToken() {
      return new Promise((resolve, reject) => {
        this.loginStaus = true;
        haveTokenApi()
          .then((res) => {
            if (!res.data.success) {
              router.push("/");
            }
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});

export default userStore;
