class Utils {
  static setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  static getValueLocalStorage(key) {
    const value = localStorage.getItem(key);
    let re = null;
    value && (re = Utils.parseJson(value));
    return re;
  }
  static removeItemLocalStorage(key) {
    localStorage.removeItem(key);
  }
  static parseJson(str) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return null;
    }
  }
}
