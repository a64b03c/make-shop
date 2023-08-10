import http from "../utils/request";
const path = import.meta.env.VITE_PATH;

export function getProductsApi(page = 1) {
  return http({
    url: `/api/${path}/products?page=${page}`,
    method: "get",
  });
}

export function getAllProductsApi() {
  return http({
    url: `/api/${path}/products/all`,
    method: "get",
  });
}

export function getProductApi(id) {
  return http({
    url: `/api/${path}/product/${id}`,
    method: "get",
  });
}
