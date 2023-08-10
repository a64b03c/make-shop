/**
  * vee-validate v4.9.6
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */
function getSingleParam(params, paramName) {
  return Array.isArray(params) ? params[0] : params[paramName];
}
function isEmpty(value) {
  if (value === null || value === void 0 || value === "") {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  return false;
}
const emailValidator = (value) => {
  if (isEmpty(value)) {
    return true;
  }
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (Array.isArray(value)) {
    return value.every((val) => re.test(String(val)));
  }
  return re.test(String(value));
};
function isNullOrUndefined(value) {
  return value === null || value === void 0;
}
function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0;
}
const maxLengthValidator = (value, params) => {
  if (isEmpty(value)) {
    return true;
  }
  const length = getSingleParam(params, "length");
  if (Array.isArray(value)) {
    return value.every((val) => maxLengthValidator(val, { length }));
  }
  return [...String(value)].length <= Number(length);
};
const minValidator = (value, params) => {
  if (isEmpty(value)) {
    return true;
  }
  const length = getSingleParam(params, "length");
  if (Array.isArray(value)) {
    return value.every((val) => minValidator(val, { length }));
  }
  return [...String(value)].length >= Number(length);
};
const requiredValidator = (value) => {
  if (isNullOrUndefined(value) || isEmptyArray(value) || value === false) {
    return false;
  }
  return !!String(value).trim().length;
};
/**
  * vee-validate v4.9.6
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */
function isCallable(fn) {
  return typeof fn === "function";
}
function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}
function getTag(value) {
  if (value == null) {
    return value === void 0 ? "[object Undefined]" : "[object Null]";
  }
  return Object.prototype.toString.call(value);
}
function isPlainObject(value) {
  if (!isObjectLike(value) || getTag(value) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}
function merge(target, source) {
  Object.keys(source).forEach((key) => {
    if (isPlainObject(source[key])) {
      if (!target[key]) {
        target[key] = {};
      }
      merge(target[key], source[key]);
      return;
    }
    target[key] = source[key];
  });
  return target;
}
function interpolate(template, values) {
  return template.replace(/(\d:)?{([^}]+)}/g, function(_, param, placeholder) {
    if (!param || !values.params) {
      return placeholder in values ? values[placeholder] : values.params && placeholder in values.params ? values.params[placeholder] : `{${placeholder}}`;
    }
    if (!Array.isArray(values.params)) {
      return placeholder in values.params ? values.params[placeholder] : `{${placeholder}}`;
    }
    const paramIndex = Number(param.replace(":", ""));
    return paramIndex in values.params ? values.params[paramIndex] : `${param}{${placeholder}}`;
  });
}
class Dictionary {
  constructor(locale, dictionary) {
    this.container = {};
    this.locale = locale;
    this.merge(dictionary);
  }
  resolve(ctx) {
    return this.format(this.locale, ctx);
  }
  getLocaleDefault(locale, field) {
    var _a, _b, _c, _d, _e;
    return ((_c = (_b = (_a = this.container[locale]) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b[field]) === null || _c === void 0 ? void 0 : _c._default) || ((_e = (_d = this.container[locale]) === null || _d === void 0 ? void 0 : _d.messages) === null || _e === void 0 ? void 0 : _e._default);
  }
  resolveLabel(locale, name, label) {
    var _a, _b, _c, _d;
    if (label) {
      return ((_b = (_a = this.container[locale]) === null || _a === void 0 ? void 0 : _a.names) === null || _b === void 0 ? void 0 : _b[label]) || label;
    }
    return ((_d = (_c = this.container[locale]) === null || _c === void 0 ? void 0 : _c.names) === null || _d === void 0 ? void 0 : _d[name]) || name;
  }
  format(locale, ctx) {
    var _a, _b, _c, _d, _e;
    let message;
    const { rule, form, label, name } = ctx;
    const fieldName = this.resolveLabel(locale, name, label);
    if (!rule) {
      message = this.getLocaleDefault(locale, name) || `${fieldName} is not valid`;
      return isCallable(message) ? message(ctx) : interpolate(message, Object.assign(Object.assign({}, form), { field: fieldName }));
    }
    message = ((_c = (_b = (_a = this.container[locale]) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b[name]) === null || _c === void 0 ? void 0 : _c[rule.name]) || ((_e = (_d = this.container[locale]) === null || _d === void 0 ? void 0 : _d.messages) === null || _e === void 0 ? void 0 : _e[rule.name]);
    if (!message) {
      message = this.getLocaleDefault(locale, name) || `${fieldName} is not valid`;
    }
    return isCallable(message) ? message(ctx) : interpolate(message, Object.assign(Object.assign({}, form), { field: fieldName, params: rule.params }));
  }
  merge(dictionary) {
    merge(this.container, dictionary);
  }
}
let DICTIONARY;
function localize(locale, dictionary) {
  if (!DICTIONARY) {
    DICTIONARY = new Dictionary("en", {});
  }
  const generateMessage = (ctx) => {
    return DICTIONARY.resolve(ctx);
  };
  if (typeof locale === "string") {
    DICTIONARY.locale = locale;
    if (dictionary) {
      DICTIONARY.merge({ [locale]: dictionary });
    }
    return generateMessage;
  }
  DICTIONARY.merge(locale);
  return generateMessage;
}
function setLocale(locale) {
  DICTIONARY.locale = locale;
}
const code = "zh_TW";
const messages = {
  _default: "{field} 的值無效",
  alpha: "{field} 須以英文組成",
  alpha_dash: "{field} 須以英數、破折號及底線組成",
  alpha_num: "{field} 須以英數組成",
  alpha_spaces: "{field} 須以英文及空格組成",
  between: "{field} 須介於 0:{min} 至 1:{max}之間",
  confirmed: " {field} 不一致",
  digits: "{field} 須為 0:{length} 位數字",
  dimensions: "{field} 圖片尺寸不正確。須為 0:{width} x 1:{height} 像素",
  email: "{field} 須為有效的電子信箱",
  not_one_of: "{field} 的選項無效",
  ext: "{field} 須為有效的檔案",
  image: "{field} 須為圖片",
  one_of: "{field} 的選項無效",
  integer: "{field} 須為整數",
  length: "{field} 的長度須為 0:{length}",
  max: "{field} 不能大於 0:{length} 個字元",
  max_value: "{field} 不得大於 0:{max}",
  mimes: "{field} 須為有效的檔案類型",
  min: "{field} 不能小於 0:{length} 個字元",
  min_value: "{field} 不得小於 0:{min}",
  numeric: "{field} 須為數字",
  regex: "{field} 的格式錯誤",
  required: "{field} 為必填",
  required_if: "{field} 為必填",
  size: "{field} 的檔案須小於 0:{size}KB",
  url: "{field} 須為有效的URL"
};
const zhTW = {
  code,
  messages
};
export {
  maxLengthValidator as a,
  emailValidator as e,
  localize as l,
  minValidator as m,
  requiredValidator as r,
  setLocale as s,
  zhTW as z
};
