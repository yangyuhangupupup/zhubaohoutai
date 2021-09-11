/*
 * @Descripttion:
 * @Author: yyh
 * @Date: 2021-09-11 15:24:16
 * @LastEditors: yyh
 * @LastEditTime: 2021-09-11 15:27:13
 */
class LocalCache {
  setCache(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getCache(key) {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }

  deleteCache(key) {
    window.localStorage.removeItem(key);
  }

  clearCache() {
    window.localStorage.clear();
  }
}

export default new LocalCache();
