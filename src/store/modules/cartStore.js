import { defineStore } from "pinia";
import {
  addCartApi,
  getCartApi,
  deleteCartApi,
  updateCartApi,
} from "@/api/carts";
import { getProductApi } from "@/api/products";

const useCart = defineStore("cart", {
  state: () => ({
    // 購物車
    carts: [],
    // 我的最愛
    favorite: JSON.parse(localStorage.getItem("favorite")) || [],
    favoriteData: [],
  }),
  actions: {
    // 取得我得最愛資料
    async getFavorite() {
      try {
        const promiseAll = [];
        this.favorite.forEach((item) => {
          promiseAll.push(getProductApi(item));
        });
        const results = await Promise.all(promiseAll);

        const hasFalse = results.find((item) => item.data.success === false);
        if (hasFalse) {
          throw new Error("加載失敗");
        }
        const products = [];

        results.forEach((item) => {
          products.push(item.data.product);
        });

        this.favoriteData = products;
      } catch (error) {
        console.log(error);
      }
    },
    // 加入我的最愛
    addFavorite(id) {
      const hasId = this.favorite.includes(id);
      if (!hasId) {
        this.favorite.push(id);
        localStorage.setItem("favorite", JSON.stringify(this.favorite));
        this.getFavorite();
      }
    },
    // 刪除我得最愛
    deleteFavorite(index) {
      this.favorite.splice(index, 1);
      localStorage.setItem("favorite", JSON.stringify(this.favorite));
      this.getFavorite();
    },
    // 獲取購物車
    async getCart() {
      try {
        const result = await getCartApi();
        if (!result.data.success) {
          throw new Error("加載失敗");
        }
        this.carts = result.data.data.carts;
      } catch (error) {
        console.log(error);
      }
    },
    // 加入購物車
    async addCart(data) {
      try {
        const result = await addCartApi(data);
        if (!result.data.success) {
          throw new Error("加入失敗");
        }
        this.getCart();
      } catch (error) {
        console.log(error);
      }
    },
    // 更新購物車
    async updateCart(data, id) {
      try {
        const result = await updateCartApi(data, id);
        if (!result.data.success) {
          throw new Error("更新購物車失敗");
        }
        this.getCart();
      } catch (error) {
        console.log(error);
      }
    },
    // 刪除某一筆購物車資料
    async deleteCart(id) {
      try {
        const result = await deleteCartApi(id);
        if (!result.data.success) {
          throw new Error("加載失敗");
        }
        this.getCart();
      } catch (error) {
        console.log(error);
      }
    },
    // 刪除全部購物車資料
    deleteAllCarts() {},
  },
  getters: {
    total() {
      return this.carts.reduce((a, b) => {
        return a + b.final_total;
      }, 0);
    },
  },
});

export default useCart;
