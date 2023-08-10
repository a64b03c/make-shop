export class Storage {
  static setToken(key, value, expires) {
    const data = JSON.stringify({ value, expires });
    localStorage.setItem(key, data);
  }

  static getToken(key) {
    const item = localStorage.getItem(key);
    const data = JSON.parse(item);
    if (!data) return "";
    if (data.expires && data.expires < Date.now()) {
      this.removeToken(key);
      return "";
    }
    return data.value;
  }

  static removeToken(key) {
    localStorage.removeItem(key);
  }
}
