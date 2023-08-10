import http from "../utils/request";
const path = import.meta.env.VITE_PATH;

// 加入購物車
export function addCartApi(data) {
  return http({
    url: `/api/${path}/cart`,
    method: "post",
    data: { data },
  });
}
// 更新購物車
export function updateCartApi(data, id) {
  return http({
    url: `/api/${path}/cart/${id}`,
    method: "put",
    data: { data },
  });
}
// // 刪除某一筆購物車資料
export function deleteCartApi(id) {
  return http({
    url: `/api/${path}/cart/${id}`,
    method: "delete",
  });
}
// // 刪除全部購物車
export function deleteAllCartsApi(path) {
  return http({
    url: `/api/${path}/cart`,
    method: "delete",
  });
}
// 取得購物車列表
export function getCartApi() {
  return http({
    url: `/api/${path}/cart`,
    method: "get",
  });
}
// 套用優惠券
export function postCouponApi(code) {
  return http({
    url: `/api/${path}/coupon`,
    method: "post",
    data: {
      data: {
        code,
      },
    },
  });
}
// 送出訂單
export function postOrderApi(data) {
  return http({
    url: `/api/${path}/order`,
    method: "post",
    data: { data },
  });
}
// 取得某一筆訂單
export function getOrderApi(id) {
  return http({
    url: `/api/${path}/order/${id}`,
    method: "get",
  });
}
// 確認付款
export function postPayApi(id) {
  return http({
    url: `/api/${path}/pay/${id}`,
    method: "post",
  });
}
