(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet'];
var singlePageDisableKey = ['lanDebug', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
var launchOption = oldWx.getLaunchOptionsSync ? oldWx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
var _default = target[key];
exports.default = _default;

/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 109:
/*!*******************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/static/imgs/interaction.png ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 11:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 13:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 144:
/*!******************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/api/account.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changePassword = changePassword;
exports.releaseInit = releaseInit;
exports.releaseList = releaseList;
exports.releaseSubmit = releaseSubmit;
exports.statistics = statistics;
var _request = _interopRequireDefault(__webpack_require__(/*! ./../util/request */ 66));
function statistics(id) {
  return (0, _request.default)({
    url: '/account/statistics/id/' + id,
    method: 'GET'
  });
}
function releaseList(id, data) {
  return (0, _request.default)({
    url: '/account/releaseList',
    method: 'GET',
    data: data
  });
}
function releaseInit(id, data) {
  return (0, _request.default)({
    url: '/account/releaseInit/id/' + (id ? id : 0),
    method: 'GET',
    data: data
  });
}
function releaseSubmit(data) {
  return (0, _request.default)({
    url: '/account/release',
    method: 'POST',
    data: data
  });
}
function changePassword(data) {
  return (0, _request.default)({
    url: '/account/changePassword',
    method: 'POST',
    data: data
  });
}

/***/ }),

/***/ 15:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 171:
/*!************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/static/imgs/网站门派图片/霸刀头像/霸刀成男.png ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/imgs/网站门派图片/霸刀头像/霸刀成男.png";

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 188:
/*!******************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/static/imgs/grade/初出江湖.jpg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/imgs/grade/初出江湖.jpg";

/***/ }),

/***/ 189:
/*!******************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/static/imgs/grade/登峰造极.jpg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/imgs/grade/登峰造极.jpg";

/***/ }),

/***/ 19:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 190:
/*!******************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/static/imgs/grade/独孤求败.jpg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/imgs/grade/独孤求败.jpg";

/***/ }),

/***/ 191:
/*!******************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/static/imgs/grade/名震一方.jpg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/imgs/grade/名震一方.jpg";

/***/ }),

/***/ 192:
/*!******************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/static/imgs/grade/四海皆知.jpg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/imgs/grade/四海皆知.jpg";

/***/ }),

/***/ 193:
/*!******************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/static/imgs/grade/小有成就.jpg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/imgs/grade/小有成就.jpg";

/***/ }),

/***/ 194:
/*!******************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/static/imgs/grade/展露锋芒.jpg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/imgs/grade/展露锋芒.jpg";

/***/ }),

/***/ 2:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    platform = _wx$getSystemInfoSync.platform,
    pixelRatio = _wx$getSystemInfoSync.pixelRatio,
    windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
var locale;
{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__B572DD5",
    appName: "vol",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.7.9",
    uniRuntimeVersion: "3.7.9",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = language.replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "__UNI__B572DD5",
      appName: "vol",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var compressImage = {
  args: function args(fromArgs) {
    // https://developers.weixin.qq.com/community/develop/doc/000c08940c865011298e0a43256800?highLine=compressHeight
    if (fromArgs.compressedHeight && !fromArgs.compressHeight) {
      fromArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !fromArgs.compressWidth) {
      fromArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting,
  compressImage: compressImage
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach(function (name) {
      var matches = name.match(WORKLET_RE);
      if (matches) {
        var workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"vol","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
var eventChannelStack = [];
function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };
  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };
  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  {
    initWorkletMethods(pageOptions.methods, vueOptions.methods);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 203:
/*!************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/static/imgs/logo.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/imgs/logo.png";

/***/ }),

/***/ 204:
/*!************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/static/imgs/home.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/imgs/home.png";

/***/ }),

/***/ 205:
/*!***************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/static/icons/office.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAC3FBMVEUAAAD+/ODz6Kr//+PeqFfYrn3x167k0JXoxnyaaVzhs2ifaFXbrGLkvFnpyF7v2X/kwm3cp1nhsGfqw3rZqG3ntVzjrFPt3oDjvGnfr2fbnFGti3q0lH7ktoLryXn9v1T4znr/74bnvGz034v+2I/ktoDz6ZLkwY/Dfz7buoftzYbq2IPr0pjs3bLv6KPRrnbKhFv79ND488n/+dDZr4Lx38f/+cH/95f42oL7/97s2Y3++uzw1rvTk3DmuloAAHkBAm7uzWYAAGXktV3qvFr/0ljksE7fo0rWHxhrdocAAIAABHf143Pyy27w1GwGA2jtymHpwWDqxV/qyVyTeFrrwFflwFPislP+xVLpsErbmUfVkEbysETemUTpgj7ThT3XdTg5FDjdhTXWZTDaTCm7TCbTOCLXPiD9LA/QFg3UAwnOAQOEj5kcPpdyhZSptJEACJFpfo4AG44XMInFvYfTvIejmYSVkINyeoJzdoK9un6SjX7FrnwAEHp8enny2HjWwHjKtnhcX3jYzHeNhnfu2HWUjHWsonPNwnH70m9WTm8AAW//723pym3dtmn/0mbnxGa0o2ZeWWb8zGT/4mPtwmJuYmL/22D/vmB5ZGC9kF7/2l0MAF3uyFqnjVn4xFjYnli0mVi5i1jiqVfyyVbmtlbXkVNUOFPlvFLpt1LNrFKjfVLuvlBgHlDsuU/ouU9ONU/ov05ODk7/2E02Gk3jqkqEaUr/tUngjkf7n0bXikb6xERCJETdn0LckUG1gD/ooD3Ulj3jkz3TZT3WjjzOeDqBWDr3pDnglTlMADnbbTf2gjbkbzaTYDZpAjbplzTtcTTEazPXXzOeXzDscS3MPi38jizJWSrVSCrrXynzfCjVdCjZRyjTQCbFUiTlYCPXPSHLPSHWMR/wXh7iRh7GPh3PLBrSIRrWGhfMJxPGJxPRDBG/ABG2ABCxDg7BDAvEGArZAAbJAALPAADa4ry/AAAAPnRSTlMACEIaxqxpAvv7+ff19PDs7Ovn5uXk5OHg29LRy8fEw8G+vLqysaufnJiVk4yDfG9dXFpMSEFBNTApJyEcFO3QiBQAAAFzSURBVBjTYoACZjYZaTZmBmRgxsp9+di21ZysxggxxlmJZy/ev9LXnriIEa5VYUPIray0lOyd+ctVoKKWXFsmXXvu8exO5vsZnnuErcCC5m1e8x5nPXrxOu3TzSqHFguQmI18tff+Jx89HqR7fE5v7q5TtAYK6h8v81p4Ovv6wbAdmRc6HMpddYGCmudrCqbtTn2anHBq15SZ9iUx6kBBkSTfXIfUuBsPL909c9i/uP6EJFAQMJ6j2/Ps32Yk30uIy3jjXxgRLwEUVN07ubTo5LsPr16mXD1X29gZrgUUlN23uD/H28lp09o5TvYVs523ygEFORYsO+TbEOI5cVVTV+XUA1Fu/EBBoxXu0bfnT98cEePa45oUHR7MBHK9IV9Y/BFHFzc7R7/YqF4BsBiDqVBw0NLQoMAAF3c7vwmCEEFln1ZnZxe3wJWx7nZ2jj5qkNDU5l2/ZE3kusjQuRsDxPXYoQFqa6DBIiUmyqKkYwIWAgD35oZAL/mkFwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 22:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var isArray = Array.isArray;
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 222:
/*!**********************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/static/imgs/客服.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 223:
/*!****************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/static/imgs/ask-icon.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAADjUlEQVRYR82YS2xMYRSAv/9OZ5RSSluveBPikYZ4RKqoxMJzYaWxQSQS0gULiV6qxGwshEgkEsJGJHbeNjodr4SqR3RBSMqCRFVEqo+pmfvLf++tdjq3c/+ZkvqX955z/u+ec/5zzn8FGSz5qKaYrsR6sFYB84GpwAjXRCvwAWgEI0oocFuU1jTrmhc6gjJirgAOAOuAHB0dIA7cAU6I8vBDP520IDJ6aBqWPANs8DPk8/4WhqgUq4439SfXL4isMyuQnOvl+gGy0Ipgt1gdvuJlyBNE1prVGNQg0QqdNqFAYlEj1oSP9dVJ2ciGEBz1NB4aDl0/tfftV1BypC9MEogdDric4ongMJhXAfmToOEstGkfBm8W5RnY1jtMf0DcxHzVb07M3gLjF0HrJ3h+DqQFo6bB3K16Hnp5Htq/9pZtxRAl3QncAxIxb6Y9HUYQFu+BYUXQdA8+RqBgJpRs1wOpPwNtX/rK3hLl4Y3qoQ3i1okHKRZzcqFwnvP1X15AwQwo2QHxGDw5CfFOUGFLt5bth0AQvEGUZpmqM90g14FNKfbyxsKSSkh0wQM30ScshW9vIfZDzxNl1RAIpQO5IcrDm4VTtn998qyYXiB62/dI+YPECQUnChk5vB2si572vUDUER4zJz3O10YnbLbjfT0CGDuEjJgKwjvjvEBGToWFu9KDPD0F7S0ZgHBJgdQDi7U90g0S74DmxmS1cQvByIHMQZ4pEHW4CzMGUTXh6elktVITgkOzAWlRICqYQwYZJCZkrRlDEBp8kP8mNHVmPTKbZO2Eb2+SHVk0f0DJ+p8c39qqnQhxQTtHgnkwemb6OtLyBhKxDOqIKmj3DxaRMD4Peol3u69+08uk1+QWgOq+QsCTU9DhVttkG07Ts0Gi5kosolrd1w+kYBZMX+uMDnnFTudV3fthGGTCS7tnDHC9kjoYZdN9QyNg+QHHC2r9aod3N6D5tRdE8mBkg9wzp2DQAIz5o6G+RvUW9XXf3/v5oud97ihn5rLi0KUugJ7Le1S0Yeqq10HiJhJDf9csJNMNz93mZG3VSYTYl4V5fRXf68TdqvEM4RqIJfpWM5D0u2BJeTVA9NVepH2xUgH+F8v/yinrzAiS1f9id9em3iVcRg8vAGs5lpiMkMVIRjuekfkg8l0vqdOk+0tC7f/3fkv09pCUUvD40GTiRimWVWaPl1IWgyhEEAAG9KPmN1MA0n7Gc9HeAAAAAElFTkSuQmCC"

/***/ }),

/***/ 224:
/*!*******************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/static/imgs/answer-icon.png ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAFS0lEQVRYR71YS2yUVRT+zj/v6Tz6oI/pA6cPsWqhRYmPCCkNskARXaiJcSHGhSvER3QJ6Mq4UYIujAtIjDFGFwREjFEKIgLyLKjQAp0+05kypTP/tJ33f8y9tmWmncffKJzFLOZ+95zvntc99ycsQfwcqYrG+CkAnczcphC8TOQUKog5ojEGiOhPAMdsVvqhhpzjetWTHuBgUl2bTvJ7IGwiwKhnDwMpMA4bTPTRPSbXb8X2FCQyEA01gpQ9zPx0MUWF1onoEFjb5rWV+vLh8hLxxadegpb+HIB0/f8gESiG1xstjq9z6cpJxBcN7yCiXcysK3R6SRIRM/OuRpv7g4V7FhkSJAC8nwlMaRpmUgm4zNaCNtVErChmVsHOhWSyiIhwEGtfLfTEufFhfHv9PFrLqrH1/sdykvHPqPjkYjfKLXa889AGGEjJS1p6hpSXM8M0T0QkJoN6cuXEnp5jGJ0O4cFyD1Ytq80yoBBhZUUd9vf34JR/ALUlbnTWtSwiIYi1VWTtjRC4fS6BbxOJqd/nqo4b4SC++OtE3tOZFQO2d3RJbyS1dF6c3WjGjkc2Za2LavJaXZtlHxI/ok9oKT6+UEsincLunqOYiE1jRWkVqu0uXLg5jKlkXIap0uaEgQhDkUn0q0E0OMrgdVUgGI3gymQATpMFHZUNUq0gvHF56yKiipHWiT4jifTPhA8Q4ZmFqP39l3DK75Nxf7OjC2aDEUdH+vDj0JX5fBFJ/OXVPzA2reKt1V1wm22Ip1P48NxPiKWS2Na+XoYrnzDjYJPdvYVE256JaaO5Ouax0ev4efgqXml9FC2llVJXNJWUhtsqPLivrBpHRvrk/yvLa9FaXj1v78hwL34Z6cXGhlasr1+RnwiQsluVOvJF1a0A782HnE7GUWKyZC0zgPPjQzjguyxPL8SkKHiyoRXrapuhkCL/F2VfYjLraDP0qiCyF+CtOtASMjYdlgR86gQcJgteaFmNFGv47voF6a06Rymeb+6Ap0A4FtuifTQQDZ9hYE0xIv5pFd2j13ApOAoG497SKrzYshrO2SYXjkfxzbVz6FcnIEp6TdVyPOFpkgleTJhxVhC5ycCyXGCNNVydDOB0YBC9k4F5iN1owqpl9f+WXIYwMy4GRxCbDZdYanFXSkKiyohy3xgEBMkXU2Ngzk4CQJ76U9nIwtKUzWDCAxU1EF1WjwjDN8I3kdQ0Ca+0OfBG+3qYFEOOyFA8LxGBPhMYlFWxtrZZulrQ+/uWXw8PWVHMwOmAD7+P+dBW7sFzze359iYKhka4WlSIiPl/kZSWRpoZFkPumUqGRm+yivsmMKMuiY9I1G3tnUX3EHBWd/mKu0TcsFaDqaiHNGbE0knU2F2yI+uQfUUb2pySOSLb27vgKSlckqLd7+7p1k2EoL1WsMVnnuROERFDts2q1Ba89HIRebymEU7zomrP8n4kEcdJv0+fRwgHG63uLQXHgFxEdMR7HqInRxhKZ5PN+WvRwWhhjnTVr5BXfSEJJ6LoHukr6hEGDjXZ3LcHI6G00Kgo1kemQkimU/JSE3NJIRED1ehUCCaDEfWO0pxQAk1oSD/cZCsbFABdw/NSwqETqxEZN3utJYfn8LqeEzqV64cRPm60ut/O3HBXH1gZhs+QlnjWW1I5ltcjcwt34MmZ7TFGCAp2ei2uz4gofVce4YViRkRHvVZXl65rtT96ax3Y8O5SPksI46JriuoAIQRmlQEVRCGFcQvgcY2UIU4lTzY7yi/rIjJ3oswPNQRuA2Y/1LB8WQWZaZwUnCXCcbPZfMID65B4XurJ4n8AuHuBRn42fisAAAAASUVORK5CYII="

/***/ }),

/***/ 23:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 233:
/*!************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/static/imgs/暂无信息.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 24:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 242:
/*!************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/static/imgs/订单完成.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 25:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"vol","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"vol","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"vol","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"vol","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize',
    'onUploadDouyinVideo'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 26:
/*!**************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/pages.json ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 32:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 33:
/*!**********************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 34));
var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 35));
var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 39));
var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 40));
var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 44));
var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 45));
var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 46));
var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 47));
var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 48));
var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 49));
var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 50));
var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 37));
var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 36));
var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 51));
var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 38));
var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 52));
var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 53));
var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 54));
var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 55));
var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 56));
var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 57);
var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 58));
var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 59));
var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 60));
var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 61));
// 引入全局mixin

// 引入关于是否mixin集成小程序分享的配置
// import wxshare from './libs/mixin/mpShare.js'
// 全局挂载引入http相关请求拦截插件

function wranning(str) {
  // 开发环境进行信息输出,主要是一些报错信息
  // 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {
    console.warn(str);
  }
}

// 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }

// post类型对象参数转为get类型url参数

var $u = {
  queryParams: _queryParams.default,
  route: _route.default,
  timeFormat: _timeFormat.default,
  date: _timeFormat.default,
  // 另名date
  timeFrom: _timeFrom.default,
  colorGradient: _colorGradient.default.colorGradient,
  colorToRgba: _colorGradient.default.colorToRgba,
  guid: _guid.default,
  color: _color.default,
  sys: _sys.sys,
  os: _sys.os,
  type2icon: _type2icon.default,
  randomArray: _randomArray.default,
  wranning: wranning,
  get: _request.default.get,
  post: _request.default.post,
  put: _request.default.put,
  'delete': _request.default.delete,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: _request.default,
  toast: _toast.default,
  config: _config.default,
  // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default
};

// $u挂载到uni对象上
uni.$u = $u;
var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  // Vue.mixin(vuexStore);
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};
var _default = {
  install: install
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 34:
/*!*********************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/mixin/mixin.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  methods: {
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {
      var _this = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().in(_this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    },
    getParentData: function getParentData() {
      var _this2 = this;
      var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = false;
      // 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this2.parentData[key] = _this2.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && e.stopPropagation && e.stopPropagation();
    }
  },
  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {
    var _this3 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this3) {
          childrenList.splice(index, 1);
        }
      });
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 35:
/*!***********************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/request/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 36));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 38));
var Request = /*#__PURE__*/function () {
  function Request() {
    var _this = this;
    (0, _classCallCheck2.default)(this, Request);
    this.config = {
      baseUrl: '',
      // 请求的根域名
      // 默认的请求头
      header: {},
      method: 'POST',
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: 'json',
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: 'text',
      showLoading: true,
      // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800,
      // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null,
      // 定时器
      originalData: false,
      // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    // 拦截器
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null
    };

    // get请求
    this.get = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        method: 'GET',
        url: url,
        header: header,
        data: data
      });
    };

    // post请求
    this.post = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        url: url,
        method: 'POST',
        header: header,
        data: data
      });
    };

    // put请求，不支持支付宝小程序(HX2.6.15)
    this.put = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data
      });
    };

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    this.delete = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data
      });
    };
  }
  (0, _createClass2.default)(Request, [{
    key: "setConfig",
    value:
    // 设置全局默认配置
    function setConfig(customConfig) {
      // 深度合并对象，否则会造成对象深层属性丢失
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // 主要请求部分
  }, {
    key: "request",
    value: function request() {
      var _this2 = this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // 检查请求拦截
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          // 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
          return new Promise(function () {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;
      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
          uni.hideLoading();
          // 清除定时器，如果请求回来了，就无需loading
          clearTimeout(_this2.config.timer);
          _this2.config.timer = null;
          // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
          if (_this2.config.originalData) {
            // 判断是否存在拦截器
            if (_this2.interceptor.response && typeof _this2.interceptor.response === 'function') {
              var resInterceptors = _this2.interceptor.response(response);
              // 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                reject(response);
              }
            } else {
              // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this2.interceptor.response && typeof _this2.interceptor.response === 'function') {
                var _resInterceptors = _this2.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
                resolve(response.data);
              }
            } else {
              // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
              // if(response.errMsg) {
              // 	uni.showModal({
              // 		title: response.errMsg
              // 	});
              // }
              reject(response);
            }
          }
        };

        // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
        options.url = _test.default.url(options.url) ? options.url : _this2.config.baseUrl + (options.url.indexOf('/') == 0 ? options.url : '/' + options.url);

        // 是否显示loading
        // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
        // 而没有清除前者的定时器，导致前者超时，一直显示loading
        if (_this2.config.showLoading && !_this2.config.timer) {
          _this2.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this2.config.loadingText,
              mask: _this2.config.loadingMask
            });
            _this2.config.timer = null;
          }, _this2.config.loadingTime);
        }
        uni.request(options);
      });
      // .catch(res => {
      // 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
      // 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
      // 	return new Promise(()=>{});
      // })
    }
  }]);
  return Request;
}();
var _default = new Request();
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 36:
/*!****************************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/deepMerge.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 37));
// JS对象深度合并
function deepMerge() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if ((0, _typeof2.default)(target) !== 'object' || (0, _typeof2.default)(source) !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if ((0, _typeof2.default)(target[prop]) !== 'object') {
        target[prop] = source[prop];
      } else {
        if ((0, _typeof2.default)(source[prop]) !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}
var _default = deepMerge;
exports.default = _default;

/***/ }),

/***/ 37:
/*!****************************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/deepClone.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if ((0, _typeof2.default)(obj) !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = (0, _typeof2.default)(obj[i]) === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}
var _default = deepClone;
exports.default = _default;

/***/ }),

/***/ 38:
/*!***********************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/test.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/**
 * 验证电子邮箱格式
 */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
 * 验证手机格式
 */
function mobile(value) {
  return /^1[3-9]\d{9}$/.test(value);
}

/**
 * 验证URL格式
 */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
 * 验证日期格式
 */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
 * 验证ISO类型的日期格式
 */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
 * 验证十进制数字
 */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
 * 验证整数
 */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
 * 验证身份证号码
 */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
}

/**
 * 是否车牌号
 */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
 * 金额,只允许2位小数
 */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
 * 中文
 */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
 * 只能输入字母
 */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
 * 只能是字母或者数字
 */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
 * 验证是否包含某个值
 */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
 * 验证一个值范围[min, max]
 */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
 * 验证一个长度范围[min, max]
 */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
 * 是否固定电话
 */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
 * 判断是否为空
 */
function empty(value) {
  switch ((0, _typeof2.default)(value)) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;
  }
  return false;
}

/**
 * 是否json字符串
 */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if ((0, _typeof2.default)(obj) == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}

/**
 * 是否数组
 */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
 * 是否对象
 */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * 是否短信验证码
 */
function code(value) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}
var _default = {
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code
};
exports.default = _default;

/***/ }),

/***/ 384:
/*!**********************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/util/emitter.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 递归使用 call 方式this指向
 * @param componentName // 需要找的组件的名称
 * @param eventName // 事件名称
 * @param params // 需要传递的参数
 */
function _broadcast(componentName, eventName, params) {
  // 循环子节点找到名称一样的子节点 否则 递归 当前子节点
  this.$children.map(function (child) {
    if (componentName === child.$options.name) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}
var _default = {
  methods: {
    /**
     * 派发 (向上查找) (一个)
     * @param componentName // 需要找的组件的名称
     * @param eventName // 事件名称
     * @param params // 需要传递的参数
     */
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root; //$parent 找到最近的父节点 $root 根节点
      var name = parent.$options.name; // 获取当前组件实例的name
      // 如果当前有节点 && 当前没名称 且 当前名称等于需要传进来的名称的时候就去查找当前的节点
      // 循环出当前名称的一样的组件实例
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      // 有节点表示当前找到了name一样的实例
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    /**
     * 广播 (向下查找) (广播多个)
     * @param componentName // 需要找的组件的名称
     * @param eventName // 事件名称
     * @param params // 需要传递的参数
     */
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 39:
/*!******************************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/queryParams.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 对象转url参数
 * @param {*} data,对象
 * @param {*} isPrefix,是否自动加上"?"
 */
function queryParams() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';
  var _loop = function _loop(key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i]);
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push(key + '=' + _value);
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = "";
          value.forEach(function (_value) {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + '=' + commaStr);
          break;
        default:
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
      }
    } else {
      _result.push(key + '=' + value);
    }
  };
  for (var key in data) {
    var _ret = _loop(key);
    if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}
var _default = queryParams;
exports.default = _default;

/***/ }),

/***/ 4:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 40:
/*!************************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/route.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 41));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 43));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
/**
 * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
 * 并且带有路由拦截功能
 */
var Router = /*#__PURE__*/function () {
  function Router() {
    (0, _classCallCheck2.default)(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1,
      // navigateBack页面后退时,回退的层数
      params: {},
      // 传递的参数
      animationType: 'pop-in',
      // 窗口动画,只在APP有效
      animationDuration: 300,
      // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  (0, _createClass2.default)(Router, [{
    key: "addRootPath",
    value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, {
    key: "mixinParam",
    value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&" + query;
      } else {
        // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
        query = uni.$u.queryParams(params);
        return url += query;
      }
    }

    // 对外的方法名称
  }, {
    key: "route",
    value: function () {
      var _route = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var options,
          params,
          mergeConfig,
          isNext,
          _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};
                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }
                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {
                  _context.next = 14;
                  break;
                }
                _context.next = 10;
                return new Promise(function (resolve, reject) {
                  uni.$u.routeIntercept(mergeConfig, resolve);
                });
              case 10:
                isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);
                _context.next = 15;
                break;
              case 14:
                this.openPage(mergeConfig);
              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function route() {
        return _route.apply(this, arguments);
      }
      return route;
    }() // 执行路由跳转
  }, {
    key: "openPage",
    value: function openPage(config) {
      // 解构参数
      var url = config.url,
        type = config.type,
        delta = config.delta,
        animationType = config.animationType,
        animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration
        });
      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url
        });
      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url
        });
      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url
        });
      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta
        });
      }
    }
  }]);
  return Router;
}();
var _default = new Router().route;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 41:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 42)();
module.exports = runtime;

/***/ }),

/***/ 42:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 427:
/*!******************************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/util/async-validator.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"vol","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}) && "development" !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}
function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var i = 1;
  var f = args[0];
  var len = args.length;
  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }
  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
          break;
        default:
          return x;
      }
    });
    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += " " + arg;
    }
    return str;
  }
  return f;
}
function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}
function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function (a) {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}
function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject({
          errors: errors,
          fields: convertFieldsError(errors)
        }) : resolve();
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending["catch"](function (e) {
      return e;
    });
    return _pending;
  }
  var firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject({
          errors: results,
          fields: convertFieldsError(results)
        }) : resolve();
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve();
    }
    objArrKeys.forEach(function (key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}
function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }
    return {
      message: typeof oe === 'function' ? oe() : oe,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if ((0, _typeof2.default)(value) === 'object' && (0, _typeof2.default)(target[s]) === 'object') {
          target[s] = _extends({}, target[s], {}, value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}

/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    // 修改源码，将字符串数值先转为数值
    return typeof +value === 'number';
  },
  object: function object(value) {
    return (0, _typeof2.default)(value) === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};
/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required(rule, value, source, errors, options);
    return;
  }
  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check
  } else if (ruleType && (0, _typeof2.default)(value) !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);
  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type

  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}
var ENUM = 'enum';
/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}
var rules = {
  required: required,
  whitespace: whitespace,
  type: type,
  range: range,
  "enum": enumerable,
  pattern: pattern$1
};

/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, 'string');
    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
}

/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === '') {
      value = undefined;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'array') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, 'array');
    if (!isEmptyValue(value, 'array')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
var ENUM$1 = 'enum';
/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function date(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      var dateObject;
      if (typeof value === 'number') {
        dateObject = new Date(value);
      } else {
        dateObject = value;
      }
      rules.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
}
function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : (0, _typeof2.default)(value);
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
}
function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Performs validation for any type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
  }
  callback(errors);
}
var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable$1,
  pattern: pattern$2,
  date: date,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any: any
};
function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}
Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }
    if ((0, _typeof2.default)(rules) !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }
    this.rules = {};
    var z;
    var item;
    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o, oc) {
    var _this = this;
    if (o === void 0) {
      o = {};
    }
    if (oc === void 0) {
      oc = function oc() {};
    }
    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }
      return Promise.resolve();
    }
    function complete(results) {
      var i;
      var errors = [];
      var fields = {};
      function add(e) {
        if (Array.isArray(e)) {
          var _errors;
          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }
      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }
      callback(errors, fields);
    }
    if (options.messages) {
      var messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    var arr;
    var value;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;
        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }
        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);
        if (!rule.validator) {
          return;
        }
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && ((0, _typeof2.default)(rule.fields) === 'object' || (0, _typeof2.default)(rule.defaultField) === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullfield(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key
        });
      }
      function cb(e) {
        if (e === void 0) {
          e = [];
        }
        var errors = e;
        if (!Array.isArray(errors)) {
          errors = [errors];
        }
        if (!options.suppressWarning && errors.length) {
          Schema.warning('async-validator:', errors);
        }
        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }
        errors = errors.map(complementError(rule));
        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }
        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            } else {
              errors = [];
            }
            return doIt(errors);
          }
          var fieldsSchema = {};
          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }
          fieldsSchema = _extends({}, fieldsSchema, {}, data.rule.fields);
          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }
          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];
            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      var res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || rule.field + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }
    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }
    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }
    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }
    return validators[this.getType(rule)] || false;
  }
};
Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }
  validators[type] = validator;
};
Schema.warning = warning;
Schema.messages = messages;
var _default = Schema;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 428)))

/***/ }),

/***/ 428:
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 429);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ 429:
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 428)))

/***/ }),

/***/ 43:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 44:
/*!*****************************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/timeFormat.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {
    var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError('fillString must be String');
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);
    var fillLength = maxLength - str.length,
      times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat() {
  var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(dateTime);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(),
    // 年
    "m+": (date.getMonth() + 1).toString(),
    // 月
    "d+": date.getDate().toString(),
    // 日
    "h+": date.getHours().toString(),
    // 时
    "M+": date.getMinutes().toString(),
    // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };

  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    }
    ;
  }
  ;
  return fmt;
}
var _default = timeFormat;
exports.default = _default;

/***/ }),

/***/ 45:
/*!***************************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/timeFrom.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 44));
/**
 * 时间戳转为多久之前
 * @param String timestamp 时间戳
 * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
 * 如果为布尔值false，无论什么时间，都返回多久以前的格式
 */
function timeFrom() {
  var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var timestamp = +new Date(Number(dateTime));
  var timer = (Number(new Date()) - timestamp) / 1000;
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }
  }
  return tips;
}
var _default = timeFrom;
exports.default = _default;

/***/ }),

/***/ 46:
/*!********************************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/colorGradient.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 求两个颜色之间的渐变值
 * @param {string} startColor 开始的颜色
 * @param {string} endColor 结束的颜色
 * @param {number} step 颜色等分的份额
 * */
function colorGradient() {
  var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';
  var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];
  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];
  var sR = (endR - startR) / step; //总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    //计算每一步的hex值 
    var hex = rgbToHex('rgb(' + Math.round(sR * i + startR) + ',' + Math.round(sG * i + startG) + ',' + Math.round(sB * i + startB) + ')');
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {
  var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map(function (val) {
      return Number(val);
    });
  } else {
    return sColor;
  }
}
;

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    var aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}

/**
* JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
* sHex为传入的十六进制的色值
* alpha为rgba的透明度
*/
function colorToRgba(color) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = color.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(_i3, _i3 + 2)));
    }
    // return sColorChange.join(',')
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
  } else {
    return sColor;
  }
}
var _default = {
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba
};
exports.default = _default;

/***/ }),

/***/ 47:
/*!***********************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/guid.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
 * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
 * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
 * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
 * v-for的时候,推荐使用后端返回的id而不是循环的index
 * @param {Number} len uuid的长度
 * @param {Boolean} firstU 将返回的首字母置为"u"
 * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
 */
function guid() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
  var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;
  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {
      uuid[i] = chars[0 | Math.random() * radix];
    }
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';
    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}
var _default = guid;
exports.default = _default;

/***/ }),

/***/ 48:
/*!************************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/color.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",
  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",
  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",
  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",
  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",
  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed"
};
var _default = color;
exports.default = _default;

/***/ }),

/***/ 49:
/*!****************************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/type2icon.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 根据主题type值,获取对应的图标
 * @param String type 主题名称,primary|info|error|warning|success
 * @param String fill 是否使用fill填充实体的图标  
 */
function type2icon() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';
  var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';
  }
  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}
var _default = type2icon;
exports.default = _default;

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 50:
/*!******************************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/randomArray.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 打乱数组
function randomArray() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {
    return Math.random() - 0.5;
  });
}
var _default = randomArray;
exports.default = _default;

/***/ }),

/***/ 507:
/*!*************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uqrcodejs/uqrcode.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ 41);
var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 43);
var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11);
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
//---------------------------------------------------------------------
// uQRCode二维码生成插件 v4.0.7
// 
// uQRCode是一款基于Javascript环境开发的二维码生成插件，适用所有Javascript运行环境的前端应用和Node.js。
// 
// Copyright (c) Sansnn uQRCode All rights reserved.
// 
// Licensed under the Apache License, Version 2.0.
//   http://www.apache.org/licenses/LICENSE-2.0
// 
// github地址：
//   https://github.com/Sansnn/uQRCode
// 
// npm地址：
//   https://www.npmjs.com/package/uqrcodejs
// 
// uni-app插件市场地址：
//   https://ext.dcloud.net.cn/plugin?id=1287
// 
// 复制使用请保留本段注释，感谢支持开源！
// 
//---------------------------------------------------------------------

//---------------------------------------------------------------------
// 当前文件格式为 umd，通用模块定义，生成的包同时支持 amd、cjs 和 iife 三种格式
// 如需在其他环境使用，请获取环境对应的格式文件
// 格式说明：
// amd - 异步模块定义，适用于 RequireJS 等模块加载器
// cjs - CommonJS，适用于 Node 环境和其他打包工具（别名：commonjs）
// es - 将 bundle 保留为 ES 模块文件，适用于其他打包工具以及支持 <script type=module> 标签的浏览器（别名: esm，module）
// umd - 通用模块定义，生成的包同时支持 amd、cjs 和 iife 三种格式
//---------------------------------------------------------------------

!function (o, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(typeof window !== "undefined" ? window : global, function () {
  function o(o) {
    this.mode = r.MODE_8BIT_BYTE, this.data = o;
  }
  function e(o, e) {
    this.typeNumber = o, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = new Array();
  }
  o.prototype = {
    getLength: function getLength(o) {
      return this.data.length;
    },
    write: function write(o) {
      for (var e = 0; e < this.data.length; e++) {
        o.put(this.data.charCodeAt(e), 8);
      }
    }
  }, e.prototype = {
    addData: function addData(e) {
      var r = new o(e);
      this.dataList.push(r), this.dataCache = null;
    },
    isDark: function isDark(o, e) {
      if (o < 0 || this.moduleCount <= o || e < 0 || this.moduleCount <= e) throw new Error(o + "," + e);
      return this.modules[o][e];
    },
    getModuleCount: function getModuleCount() {
      return this.moduleCount;
    },
    make: function make() {
      if (this.typeNumber < 1) {
        var o = 1;
        for (o = 1; o < 40; o++) {
          for (var e = v.getRSBlocks(o, this.errorCorrectLevel), r = new p(), t = 0, i = 0; i < e.length; i++) {
            t += e[i].dataCount;
          }
          for (i = 0; i < this.dataList.length; i++) {
            var n = this.dataList[i];
            r.put(n.mode, 4), r.put(n.getLength(), h.getLengthInBits(n.mode, o)), n.write(r);
          }
          if (r.getLengthInBits() <= 8 * t) break;
        }
        this.typeNumber = o;
      }
      this.makeImpl(!1, this.getBestMaskPattern());
    },
    makeImpl: function makeImpl(o, r) {
      this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
      for (var t = 0; t < this.moduleCount; t++) {
        this.modules[t] = new Array(this.moduleCount);
        for (var i = 0; i < this.moduleCount; i++) {
          this.modules[t][i] = null;
        }
      }
      this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(o, r), this.typeNumber >= 7 && this.setupTypeNumber(o), null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, r);
    },
    setupPositionProbePattern: function setupPositionProbePattern(o, e) {
      for (var r = -1; r <= 7; r++) {
        if (!(o + r <= -1 || this.moduleCount <= o + r)) for (var t = -1; t <= 7; t++) {
          e + t <= -1 || this.moduleCount <= e + t || (this.modules[o + r][e + t] = 0 <= r && r <= 6 && (0 == t || 6 == t) || 0 <= t && t <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= t && t <= 4);
        }
      }
    },
    getBestMaskPattern: function getBestMaskPattern() {
      for (var o = 0, e = 0, r = 0; r < 8; r++) {
        this.makeImpl(!0, r);
        var t = h.getLostPoint(this);
        (0 == r || o > t) && (o = t, e = r);
      }
      return e;
    },
    createMovieClip: function createMovieClip(o, e, r) {
      var t = o.createEmptyMovieClip(e, r);
      this.make();
      for (var i = 0; i < this.modules.length; i++) {
        for (var n = 1 * i, a = 0; a < this.modules[i].length; a++) {
          var d = 1 * a;
          this.modules[i][a] && (t.beginFill(0, 100), t.moveTo(d, n), t.lineTo(d + 1, n), t.lineTo(d + 1, n + 1), t.lineTo(d, n + 1), t.endFill());
        }
      }
      return t;
    },
    setupTimingPattern: function setupTimingPattern() {
      for (var o = 8; o < this.moduleCount - 8; o++) {
        null == this.modules[o][6] && (this.modules[o][6] = o % 2 == 0);
      }
      for (var e = 8; e < this.moduleCount - 8; e++) {
        null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0);
      }
    },
    setupPositionAdjustPattern: function setupPositionAdjustPattern() {
      for (var o = h.getPatternPosition(this.typeNumber), e = 0; e < o.length; e++) {
        for (var r = 0; r < o.length; r++) {
          var t = o[e],
            i = o[r];
          if (null == this.modules[t][i]) for (var n = -2; n <= 2; n++) {
            for (var a = -2; a <= 2; a++) {
              this.modules[t + n][i + a] = -2 == n || 2 == n || -2 == a || 2 == a || 0 == n && 0 == a;
            }
          }
        }
      }
    },
    setupTypeNumber: function setupTypeNumber(o) {
      for (var e = h.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
        var t = !o && 1 == (e >> r & 1);
        this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = t;
      }
      for (r = 0; r < 18; r++) {
        t = !o && 1 == (e >> r & 1);
        this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = t;
      }
    },
    setupTypeInfo: function setupTypeInfo(o, e) {
      for (var r = this.errorCorrectLevel << 3 | e, t = h.getBCHTypeInfo(r), i = 0; i < 15; i++) {
        var n = !o && 1 == (t >> i & 1);
        i < 6 ? this.modules[i][8] = n : i < 8 ? this.modules[i + 1][8] = n : this.modules[this.moduleCount - 15 + i][8] = n;
      }
      for (i = 0; i < 15; i++) {
        n = !o && 1 == (t >> i & 1);
        i < 8 ? this.modules[8][this.moduleCount - i - 1] = n : i < 9 ? this.modules[8][15 - i - 1 + 1] = n : this.modules[8][15 - i - 1] = n;
      }
      this.modules[this.moduleCount - 8][8] = !o;
    },
    mapData: function mapData(o, e) {
      for (var r = -1, t = this.moduleCount - 1, i = 7, n = 0, a = this.moduleCount - 1; a > 0; a -= 2) {
        for (6 == a && a--;;) {
          for (var d = 0; d < 2; d++) {
            if (null == this.modules[t][a - d]) {
              var u = !1;
              n < o.length && (u = 1 == (o[n] >>> i & 1)), h.getMask(e, t, a - d) && (u = !u), this.modules[t][a - d] = u, -1 == --i && (n++, i = 7);
            }
          }
          if ((t += r) < 0 || this.moduleCount <= t) {
            t -= r, r = -r;
            break;
          }
        }
      }
    }
  }, e.PAD0 = 236, e.PAD1 = 17, e.createData = function (o, r, t) {
    for (var i = v.getRSBlocks(o, r), n = new p(), a = 0; a < t.length; a++) {
      var d = t[a];
      n.put(d.mode, 4), n.put(d.getLength(), h.getLengthInBits(d.mode, o)), d.write(n);
    }
    var u = 0;
    for (a = 0; a < i.length; a++) {
      u += i[a].dataCount;
    }
    if (n.getLengthInBits() > 8 * u) throw new Error("code length overflow. (" + n.getLengthInBits() + ">" + 8 * u + ")");
    for (n.getLengthInBits() + 4 <= 8 * u && n.put(0, 4); n.getLengthInBits() % 8 != 0;) {
      n.putBit(!1);
    }
    for (; !(n.getLengthInBits() >= 8 * u || (n.put(e.PAD0, 8), n.getLengthInBits() >= 8 * u));) {
      n.put(e.PAD1, 8);
    }
    return e.createBytes(n, i);
  }, e.createBytes = function (o, e) {
    for (var r = 0, t = 0, i = 0, n = new Array(e.length), a = new Array(e.length), d = 0; d < e.length; d++) {
      var u = e[d].dataCount,
        s = e[d].totalCount - u;
      t = Math.max(t, u), i = Math.max(i, s), n[d] = new Array(u);
      for (var g = 0; g < n[d].length; g++) {
        n[d][g] = 255 & o.buffer[g + r];
      }
      r += u;
      var l = h.getErrorCorrectPolynomial(s),
        c = new f(n[d], l.getLength() - 1).mod(l);
      a[d] = new Array(l.getLength() - 1);
      for (g = 0; g < a[d].length; g++) {
        var m = g + c.getLength() - a[d].length;
        a[d][g] = m >= 0 ? c.get(m) : 0;
      }
    }
    var v = 0;
    for (g = 0; g < e.length; g++) {
      v += e[g].totalCount;
    }
    var p = new Array(v),
      C = 0;
    for (g = 0; g < t; g++) {
      for (d = 0; d < e.length; d++) {
        g < n[d].length && (p[C++] = n[d][g]);
      }
    }
    for (g = 0; g < i; g++) {
      for (d = 0; d < e.length; d++) {
        g < a[d].length && (p[C++] = a[d][g]);
      }
    }
    return p;
  };
  for (var r = {
      MODE_NUMBER: 1,
      MODE_ALPHA_NUM: 2,
      MODE_8BIT_BYTE: 4,
      MODE_KANJI: 8
    }, t = {
      L: 1,
      M: 0,
      Q: 3,
      H: 2
    }, i = 0, n = 1, a = 2, d = 3, u = 4, s = 5, g = 6, l = 7, h = {
      PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
      G15: 1335,
      G18: 7973,
      G15_MASK: 21522,
      getBCHTypeInfo: function getBCHTypeInfo(o) {
        for (var e = o << 10; h.getBCHDigit(e) - h.getBCHDigit(h.G15) >= 0;) {
          e ^= h.G15 << h.getBCHDigit(e) - h.getBCHDigit(h.G15);
        }
        return (o << 10 | e) ^ h.G15_MASK;
      },
      getBCHTypeNumber: function getBCHTypeNumber(o) {
        for (var e = o << 12; h.getBCHDigit(e) - h.getBCHDigit(h.G18) >= 0;) {
          e ^= h.G18 << h.getBCHDigit(e) - h.getBCHDigit(h.G18);
        }
        return o << 12 | e;
      },
      getBCHDigit: function getBCHDigit(o) {
        for (var e = 0; 0 != o;) {
          e++, o >>>= 1;
        }
        return e;
      },
      getPatternPosition: function getPatternPosition(o) {
        return h.PATTERN_POSITION_TABLE[o - 1];
      },
      getMask: function getMask(o, e, r) {
        switch (o) {
          case i:
            return (e + r) % 2 == 0;
          case n:
            return e % 2 == 0;
          case a:
            return r % 3 == 0;
          case d:
            return (e + r) % 3 == 0;
          case u:
            return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
          case s:
            return e * r % 2 + e * r % 3 == 0;
          case g:
            return (e * r % 2 + e * r % 3) % 2 == 0;
          case l:
            return (e * r % 3 + (e + r) % 2) % 2 == 0;
          default:
            throw new Error("bad maskPattern:" + o);
        }
      },
      getErrorCorrectPolynomial: function getErrorCorrectPolynomial(o) {
        for (var e = new f([1], 0), r = 0; r < o; r++) {
          e = e.multiply(new f([1, c.gexp(r)], 0));
        }
        return e;
      },
      getLengthInBits: function getLengthInBits(o, e) {
        if (1 <= e && e < 10) switch (o) {
          case r.MODE_NUMBER:
            return 10;
          case r.MODE_ALPHA_NUM:
            return 9;
          case r.MODE_8BIT_BYTE:
          case r.MODE_KANJI:
            return 8;
          default:
            throw new Error("mode:" + o);
        } else if (e < 27) switch (o) {
          case r.MODE_NUMBER:
            return 12;
          case r.MODE_ALPHA_NUM:
            return 11;
          case r.MODE_8BIT_BYTE:
            return 16;
          case r.MODE_KANJI:
            return 10;
          default:
            throw new Error("mode:" + o);
        } else {
          if (!(e < 41)) throw new Error("type:" + e);
          switch (o) {
            case r.MODE_NUMBER:
              return 14;
            case r.MODE_ALPHA_NUM:
              return 13;
            case r.MODE_8BIT_BYTE:
              return 16;
            case r.MODE_KANJI:
              return 12;
            default:
              throw new Error("mode:" + o);
          }
        }
      },
      getLostPoint: function getLostPoint(o) {
        for (var e = o.getModuleCount(), r = 0, t = 0; t < e; t++) {
          for (var i = 0; i < e; i++) {
            for (var n = 0, a = o.isDark(t, i), d = -1; d <= 1; d++) {
              if (!(t + d < 0 || e <= t + d)) for (var u = -1; u <= 1; u++) {
                i + u < 0 || e <= i + u || 0 == d && 0 == u || a == o.isDark(t + d, i + u) && n++;
              }
            }
            n > 5 && (r += 3 + n - 5);
          }
        }
        for (t = 0; t < e - 1; t++) {
          for (i = 0; i < e - 1; i++) {
            var s = 0;
            o.isDark(t, i) && s++, o.isDark(t + 1, i) && s++, o.isDark(t, i + 1) && s++, o.isDark(t + 1, i + 1) && s++, 0 != s && 4 != s || (r += 3);
          }
        }
        for (t = 0; t < e; t++) {
          for (i = 0; i < e - 6; i++) {
            o.isDark(t, i) && !o.isDark(t, i + 1) && o.isDark(t, i + 2) && o.isDark(t, i + 3) && o.isDark(t, i + 4) && !o.isDark(t, i + 5) && o.isDark(t, i + 6) && (r += 40);
          }
        }
        for (i = 0; i < e; i++) {
          for (t = 0; t < e - 6; t++) {
            o.isDark(t, i) && !o.isDark(t + 1, i) && o.isDark(t + 2, i) && o.isDark(t + 3, i) && o.isDark(t + 4, i) && !o.isDark(t + 5, i) && o.isDark(t + 6, i) && (r += 40);
          }
        }
        var g = 0;
        for (i = 0; i < e; i++) {
          for (t = 0; t < e; t++) {
            o.isDark(t, i) && g++;
          }
        }
        return r += 10 * (Math.abs(100 * g / e / e - 50) / 5);
      }
    }, c = {
      glog: function glog(o) {
        if (o < 1) throw new Error("glog(" + o + ")");
        return c.LOG_TABLE[o];
      },
      gexp: function gexp(o) {
        for (; o < 0;) {
          o += 255;
        }
        for (; o >= 256;) {
          o -= 255;
        }
        return c.EXP_TABLE[o];
      },
      EXP_TABLE: new Array(256),
      LOG_TABLE: new Array(256)
    }, m = 0; m < 8; m++) {
    c.EXP_TABLE[m] = 1 << m;
  }
  for (m = 8; m < 256; m++) {
    c.EXP_TABLE[m] = c.EXP_TABLE[m - 4] ^ c.EXP_TABLE[m - 5] ^ c.EXP_TABLE[m - 6] ^ c.EXP_TABLE[m - 8];
  }
  for (m = 0; m < 255; m++) {
    c.LOG_TABLE[c.EXP_TABLE[m]] = m;
  }
  function f(o, e) {
    if (null == o.length) throw new Error(o.length + "/" + e);
    for (var r = 0; r < o.length && 0 == o[r];) {
      r++;
    }
    this.num = new Array(o.length - r + e);
    for (var t = 0; t < o.length - r; t++) {
      this.num[t] = o[t + r];
    }
  }
  function v(o, e) {
    this.totalCount = o, this.dataCount = e;
  }
  function p() {
    this.buffer = new Array(), this.length = 0;
  }
  function C(o) {
    return o.setFillStyle = o.setFillStyle || function (e) {
      o.fillStyle = e;
    }, o.setFontSize = o.setFontSize || function (e) {
      o.font = "".concat(e, "px");
    }, o.setTextAlign = o.setTextAlign || function (e) {
      o.textAlign = e;
    }, o.setTextBaseline = o.setTextBaseline || function (e) {
      o.textBaseline = e;
    }, o.setGlobalAlpha = o.setGlobalAlpha || function (e) {
      o.globalAlpha = e;
    }, o.setStrokeStyle = o.setStrokeStyle || function (e) {
      o.strokeStyle = e;
    }, o.setShadow = o.setShadow || function (e, r, t, i) {
      o.shadowOffsetX = e, o.shadowOffsetY = r, o.shadowBlur = t, o.shadowColor = i;
    }, o.draw = o.draw || function (o, e) {
      e && e();
    }, o;
  }
  function b(o, e) {
    var _this = this;
    var r = this.data = "";
    this.dataEncode = !0;
    var t = this.size = 200;
    this.useDynamicSize = !1, this.dynamicSize = t;
    var i = this.typeNumber = -1;
    this.errorCorrectLevel = b.errorCorrectLevel.H;
    var n = this.margin = 0;
    this.areaColor = "#FFFFFF", this.backgroundColor = "rgba(255,255,255,0)", this.backgroundImageSrc = void 0;
    var a = this.backgroundImageWidth = void 0,
      d = this.backgroundImageHeight = void 0,
      u = this.backgroundImageX = void 0,
      s = this.backgroundImageY = void 0;
    this.backgroundImageAlpha = 1, this.backgroundImageBorderRadius = 0;
    var g = this.backgroundPadding = 0;
    this.foregroundColor = "#000000", this.foregroundImageSrc = void 0;
    var l = this.foregroundImageWidth = void 0,
      h = this.foregroundImageHeight = void 0,
      c = this.foregroundImageX = void 0,
      m = this.foregroundImageY = void 0,
      f = this.foregroundImagePadding = 0;
    this.foregroundImageBackgroundColor = "#FFFFFF";
    var v = this.foregroundImageBorderRadius = 0,
      p = this.foregroundImageShadowOffsetX = 0,
      y = this.foregroundImageShadowOffsetY = 0,
      k = this.foregroundImageShadowBlur = 0;
    this.foregroundImageShadowColor = "#808080";
    var w = this.foregroundPadding = 0,
      I = this.positionProbeBackgroundColor = void 0,
      B = this.positionProbeForegroundColor = void 0,
      S = this.separatorColor = void 0,
      P = this.positionAdjustBackgroundColor = void 0,
      E = this.positionAdjustForegroundColor = void 0,
      L = this.timingBackgroundColor = void 0,
      D = this.timingForegroundColor = void 0,
      T = this.typeNumberBackgroundColor = void 0,
      A = this.typeNumberForegroundColor = void 0,
      N = this.darkBlockColor = void 0;
    this.base = void 0, this.modules = [], this.moduleCount = 0, this.drawModules = [];
    var M = this.canvasContext = void 0;
    this.loadImage, this.drawReserve = !1, this.isMaked = !1, Object.defineProperties(this, {
      data: {
        get: function get() {
          if ("" === r || void 0 === r) throw console.error("[uQRCode]: data must be set!"), new b.Error("data must be set!");
          return r;
        },
        set: function set(o) {
          r = String(o);
        }
      },
      size: {
        get: function get() {
          return t;
        },
        set: function set(o) {
          t = Number(o);
        }
      },
      typeNumber: {
        get: function get() {
          return i;
        },
        set: function set(o) {
          i = Number(o);
        }
      },
      margin: {
        get: function get() {
          return n;
        },
        set: function set(o) {
          n = Number(o);
        }
      },
      backgroundImageWidth: {
        get: function get() {
          return void 0 === a ? this.dynamicSize : this.useDynamicSize ? this.dynamicSize / this.size * a : a;
        },
        set: function set(o) {
          a = Number(o);
        }
      },
      backgroundImageHeight: {
        get: function get() {
          return void 0 === d ? this.dynamicSize : this.useDynamicSize ? this.dynamicSize / this.size * d : d;
        },
        set: function set(o) {
          d = Number(o);
        }
      },
      backgroundImageX: {
        get: function get() {
          return void 0 === u ? 0 : this.useDynamicSize ? this.dynamicSize / this.size * u : u;
        },
        set: function set(o) {
          u = Number(o);
        }
      },
      backgroundImageY: {
        get: function get() {
          return void 0 === s ? 0 : this.useDynamicSize ? this.dynamicSize / this.size * s : s;
        },
        set: function set(o) {
          s = Number(o);
        }
      },
      backgroundPadding: {
        get: function get() {
          return g;
        },
        set: function set(o) {
          g = o > 1 ? 1 : o < 0 ? 0 : o;
        }
      },
      foregroundImageWidth: {
        get: function get() {
          return void 0 === l ? (this.dynamicSize - 2 * this.margin) / 4 : this.useDynamicSize ? this.dynamicSize / this.size * l : l;
        },
        set: function set(o) {
          l = Number(o);
        }
      },
      foregroundImageHeight: {
        get: function get() {
          return void 0 === h ? (this.dynamicSize - 2 * this.margin) / 4 : this.useDynamicSize ? this.dynamicSize / this.size * h : h;
        },
        set: function set(o) {
          h = Number(o);
        }
      },
      foregroundImageX: {
        get: function get() {
          return void 0 === c ? this.dynamicSize / 2 - this.foregroundImageWidth / 2 : this.useDynamicSize ? this.dynamicSize / this.size * c : c;
        },
        set: function set(o) {
          c = Number(o);
        }
      },
      foregroundImageY: {
        get: function get() {
          return void 0 === m ? this.dynamicSize / 2 - this.foregroundImageHeight / 2 : this.useDynamicSize ? this.dynamicSize / this.size * m : m;
        },
        set: function set(o) {
          m = Number(o);
        }
      },
      foregroundImagePadding: {
        get: function get() {
          return this.useDynamicSize ? this.dynamicSize / this.size * f : f;
        },
        set: function set(o) {
          f = Number(o);
        }
      },
      foregroundImageBorderRadius: {
        get: function get() {
          return this.useDynamicSize ? this.dynamicSize / this.size * v : v;
        },
        set: function set(o) {
          v = Number(o);
        }
      },
      foregroundImageShadowOffsetX: {
        get: function get() {
          return this.useDynamicSize ? this.dynamicSize / this.size * p : p;
        },
        set: function set(o) {
          p = Number(o);
        }
      },
      foregroundImageShadowOffsetY: {
        get: function get() {
          return this.useDynamicSize ? this.dynamicSize / this.size * y : y;
        },
        set: function set(o) {
          y = Number(o);
        }
      },
      foregroundImageShadowBlur: {
        get: function get() {
          return this.useDynamicSize ? this.dynamicSize / this.size * k : k;
        },
        set: function set(o) {
          k = Number(o);
        }
      },
      foregroundPadding: {
        get: function get() {
          return w;
        },
        set: function set(o) {
          w = o > 1 ? 1 : o < 0 ? 0 : o;
        }
      },
      positionProbeBackgroundColor: {
        get: function get() {
          return I || this.backgroundColor;
        },
        set: function set(o) {
          I = o;
        }
      },
      positionProbeForegroundColor: {
        get: function get() {
          return B || this.foregroundColor;
        },
        set: function set(o) {
          B = o;
        }
      },
      separatorColor: {
        get: function get() {
          return S || this.backgroundColor;
        },
        set: function set(o) {
          S = o;
        }
      },
      positionAdjustBackgroundColor: {
        get: function get() {
          return P || this.backgroundColor;
        },
        set: function set(o) {
          P = o;
        }
      },
      positionAdjustForegroundColor: {
        get: function get() {
          return E || this.foregroundColor;
        },
        set: function set(o) {
          E = o;
        }
      },
      timingBackgroundColor: {
        get: function get() {
          return L || this.backgroundColor;
        },
        set: function set(o) {
          L = o;
        }
      },
      timingForegroundColor: {
        get: function get() {
          return D || this.foregroundColor;
        },
        set: function set(o) {
          D = o;
        }
      },
      typeNumberBackgroundColor: {
        get: function get() {
          return T || this.backgroundColor;
        },
        set: function set(o) {
          T = o;
        }
      },
      typeNumberForegroundColor: {
        get: function get() {
          return A || this.foregroundColor;
        },
        set: function set(o) {
          A = o;
        }
      },
      darkBlockColor: {
        get: function get() {
          return N || this.foregroundColor;
        },
        set: function set(o) {
          N = o;
        }
      },
      canvasContext: {
        get: function get() {
          if (void 0 === M) throw console.error("[uQRCode]: use drawCanvas, you need to set the canvasContext!"), new b.Error("use drawCanvas, you need to set the canvasContext!");
          return M;
        },
        set: function set(o) {
          M = C(o);
        }
      }
    }), b.plugins.forEach(function (o) {
      return o(b, _this, !1);
    }), o && this.setOptions(o), e && (this.canvasContext = C(e));
  }
  return f.prototype = {
    get: function get(o) {
      return this.num[o];
    },
    getLength: function getLength() {
      return this.num.length;
    },
    multiply: function multiply(o) {
      for (var e = new Array(this.getLength() + o.getLength() - 1), r = 0; r < this.getLength(); r++) {
        for (var t = 0; t < o.getLength(); t++) {
          e[r + t] ^= c.gexp(c.glog(this.get(r)) + c.glog(o.get(t)));
        }
      }
      return new f(e, 0);
    },
    mod: function mod(o) {
      if (this.getLength() - o.getLength() < 0) return this;
      for (var e = c.glog(this.get(0)) - c.glog(o.get(0)), r = new Array(this.getLength()), t = 0; t < this.getLength(); t++) {
        r[t] = this.get(t);
      }
      for (t = 0; t < o.getLength(); t++) {
        r[t] ^= c.gexp(c.glog(o.get(t)) + e);
      }
      return new f(r, 0).mod(o);
    }
  }, v.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], v.getRSBlocks = function (o, e) {
    var r = v.getRsBlockTable(o, e);
    if (null == r) throw new Error("bad rs block @ typeNumber:" + o + "/errorCorrectLevel:" + e);
    for (var t = r.length / 3, i = new Array(), n = 0; n < t; n++) {
      for (var a = r[3 * n + 0], d = r[3 * n + 1], u = r[3 * n + 2], s = 0; s < a; s++) {
        i.push(new v(d, u));
      }
    }
    return i;
  }, v.getRsBlockTable = function (o, e) {
    switch (e) {
      case t.L:
        return v.RS_BLOCK_TABLE[4 * (o - 1) + 0];
      case t.M:
        return v.RS_BLOCK_TABLE[4 * (o - 1) + 1];
      case t.Q:
        return v.RS_BLOCK_TABLE[4 * (o - 1) + 2];
      case t.H:
        return v.RS_BLOCK_TABLE[4 * (o - 1) + 3];
      default:
        return;
    }
  }, p.prototype = {
    get: function get(o) {
      var e = Math.floor(o / 8);
      return 1 == (this.buffer[e] >>> 7 - o % 8 & 1);
    },
    put: function put(o, e) {
      for (var r = 0; r < e; r++) {
        this.putBit(1 == (o >>> e - r - 1 & 1));
      }
    },
    getLengthInBits: function getLengthInBits() {
      return this.length;
    },
    putBit: function putBit(o) {
      var e = Math.floor(this.length / 8);
      this.buffer.length <= e && this.buffer.push(0), o && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
    }
  }, e.errorCorrectLevel = t, b.errorCorrectLevel = e.errorCorrectLevel, b.Error = function (o) {
    this.errMsg = "[uQRCode]: " + o;
  }, b.plugins = [], b.use = function (o) {
    "function" == typeof o && b.plugins.push(o);
  }, b.prototype.loadImage = function (o) {
    return Promise.resolve(o);
  }, b.prototype.setOptions = function (o) {
    var _this2 = this;
    var e, r, t, i, n, a, d, u, s, g, l, h, c, m, f, v, p, C, b, y, k, w, I, B, S, P, E, L, D, T, A, N, M, z, _, O, R, x, F, H, X, Y, j, W, G, K, Q, U, $, J, q, V, Z, oo, eo, ro;
    o && (Object.keys(o).forEach(function (e) {
      _this2[e] = o[e];
    }), function () {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      var t;
      for (var i in t = r ? o : _objectSpread({}, o), e) {
        var n = e[i];
        null != n && (n.constructor == Object ? t[i] = this.deepReplace(t[i], n) : n.constructor != String || n ? t[i] = n : t[i] = t[i]);
      }
    }(this, {
      data: o.data || o.text,
      dataEncode: o.dataEncode,
      size: o.size,
      useDynamicSize: o.useDynamicSize,
      typeNumber: o.typeNumber,
      errorCorrectLevel: o.errorCorrectLevel,
      margin: o.margin,
      areaColor: o.areaColor,
      backgroundColor: o.backgroundColor || (null === (e = o.background) || void 0 === e ? void 0 : e.color),
      backgroundImageSrc: o.backgroundImageSrc || (null === (r = o.background) || void 0 === r || null === (t = r.image) || void 0 === t ? void 0 : t.src),
      backgroundImageWidth: o.backgroundImageWidth || (null === (i = o.background) || void 0 === i || null === (n = i.image) || void 0 === n ? void 0 : n.width),
      backgroundImageHeight: o.backgroundImageHeight || (null === (a = o.background) || void 0 === a || null === (d = a.image) || void 0 === d ? void 0 : d.height),
      backgroundImageX: o.backgroundImageX || (null === (u = o.background) || void 0 === u || null === (s = u.image) || void 0 === s ? void 0 : s.x),
      backgroundImageY: o.backgroundImageY || (null === (g = o.background) || void 0 === g || null === (l = g.image) || void 0 === l ? void 0 : l.y),
      backgroundImageAlpha: o.backgroundImageAlpha || (null === (h = o.background) || void 0 === h || null === (c = h.image) || void 0 === c ? void 0 : c.alpha),
      backgroundImageBorderRadius: o.backgroundImageBorderRadius || (null === (m = o.background) || void 0 === m || null === (f = m.image) || void 0 === f ? void 0 : f.borderRadius),
      backgroundPadding: o.backgroundPadding,
      foregroundColor: o.foregroundColor || (null === (v = o.foreground) || void 0 === v ? void 0 : v.color),
      foregroundImageSrc: o.foregroundImageSrc || (null === (p = o.foreground) || void 0 === p || null === (C = p.image) || void 0 === C ? void 0 : C.src),
      foregroundImageWidth: o.foregroundImageWidth || (null === (b = o.foreground) || void 0 === b || null === (y = b.image) || void 0 === y ? void 0 : y.width),
      foregroundImageHeight: o.foregroundImageHeight || (null === (k = o.foreground) || void 0 === k || null === (w = k.image) || void 0 === w ? void 0 : w.height),
      foregroundImageX: o.foregroundImageX || (null === (I = o.foreground) || void 0 === I || null === (B = I.image) || void 0 === B ? void 0 : B.x),
      foregroundImageY: o.foregroundImageY || (null === (S = o.foreground) || void 0 === S || null === (P = S.image) || void 0 === P ? void 0 : P.y),
      foregroundImagePadding: o.foregroundImagePadding || (null === (E = o.foreground) || void 0 === E || null === (L = E.image) || void 0 === L ? void 0 : L.padding),
      foregroundImageBackgroundColor: o.foregroundImageBackgroundColor || (null === (D = o.foreground) || void 0 === D || null === (T = D.image) || void 0 === T ? void 0 : T.backgroundColor),
      foregroundImageBorderRadius: o.foregroundImageBorderRadius || (null === (A = o.foreground) || void 0 === A || null === (N = A.image) || void 0 === N ? void 0 : N.borderRadius),
      foregroundImageShadowOffsetX: o.foregroundImageShadowOffsetX || (null === (M = o.foreground) || void 0 === M || null === (z = M.image) || void 0 === z ? void 0 : z.shadowOffsetX),
      foregroundImageShadowOffsetY: o.foregroundImageShadowOffsetY || (null === (_ = o.foreground) || void 0 === _ || null === (O = _.image) || void 0 === O ? void 0 : O.shadowOffsetY),
      foregroundImageShadowBlur: o.foregroundImageShadowBlur || (null === (R = o.foreground) || void 0 === R || null === (x = R.image) || void 0 === x ? void 0 : x.shadowBlur),
      foregroundImageShadowColor: o.foregroundImageShadowColor || (null === (F = o.foreground) || void 0 === F || null === (H = F.image) || void 0 === H ? void 0 : H.shadowColor),
      foregroundPadding: o.foregroundPadding,
      positionProbeBackgroundColor: o.positionProbeBackgroundColor || (null === (X = o.positionProbe) || void 0 === X ? void 0 : X.backgroundColor) || (null === (Y = o.positionDetection) || void 0 === Y ? void 0 : Y.backgroundColor),
      positionProbeForegroundColor: o.positionProbeForegroundColor || (null === (j = o.positionProbe) || void 0 === j ? void 0 : j.foregroundColor) || (null === (W = o.positionDetection) || void 0 === W ? void 0 : W.foregroundColor),
      separatorColor: o.separatorColor || (null === (G = o.separator) || void 0 === G ? void 0 : G.color),
      positionAdjustBackgroundColor: o.positionAdjustBackgroundColor || (null === (K = o.positionAdjust) || void 0 === K ? void 0 : K.backgroundColor) || (null === (Q = o.alignment) || void 0 === Q ? void 0 : Q.backgroundColor),
      positionAdjustForegroundColor: o.positionAdjustForegroundColor || (null === (U = o.positionAdjust) || void 0 === U ? void 0 : U.foregroundColor) || (null === ($ = o.alignment) || void 0 === $ ? void 0 : $.foregroundColor),
      timingBackgroundColor: o.timingBackgroundColor || (null === (J = o.timing) || void 0 === J ? void 0 : J.backgroundColor),
      timingForegroundColor: o.timingForegroundColor || (null === (q = o.timing) || void 0 === q ? void 0 : q.foregroundColor),
      typeNumberBackgroundColor: o.typeNumberBackgroundColor || (null === (V = o.typeNumber) || void 0 === V ? void 0 : V.backgroundColor) || (null === (Z = o.versionInformation) || void 0 === Z ? void 0 : Z.backgroundColor),
      typeNumberForegroundColor: o.typeNumberForegroundColor || (null === (oo = o.typeNumber) || void 0 === oo ? void 0 : oo.foregroundColor) || (null === (eo = o.versionInformation) || void 0 === eo ? void 0 : eo.foregroundColor),
      darkBlockColor: o.darkBlockColor || (null === (ro = o.darkBlock) || void 0 === ro ? void 0 : ro.color)
    }, !0));
  }, b.prototype.make = function () {
    var o = this.foregroundColor,
      r = this.backgroundColor,
      t = this.typeNumber,
      i = this.errorCorrectLevel,
      n = this.data,
      a = this.dataEncode,
      d = this.size,
      u = this.margin,
      s = this.useDynamicSize;
    if (o === r) throw console.error("[uQRCode]: foregroundColor and backgroundColor cannot be the same!"), new b.Error("foregroundColor and backgroundColor cannot be the same!");
    a && (n = function (o) {
      o = o.toString();
      for (var e, r = "", t = 0; t < o.length; t++) {
        (e = o.charCodeAt(t)) >= 1 && e <= 127 ? r += o.charAt(t) : e > 2047 ? (r += String.fromCharCode(224 | e >> 12 & 15), r += String.fromCharCode(128 | e >> 6 & 63), r += String.fromCharCode(128 | e >> 0 & 63)) : (r += String.fromCharCode(192 | e >> 6 & 31), r += String.fromCharCode(128 | e >> 0 & 63));
      }
      return r;
    }(n));
    var g = new e(t, i);
    g.addData(n), g.make(), this.base = g, this.typeNumber = g.typeNumber, this.modules = g.modules, this.moduleCount = g.moduleCount, this.dynamicSize = s ? Math.ceil((d - 2 * u) / g.moduleCount) * g.moduleCount + 2 * u : d, function (o) {
      var e = o.dynamicSize,
        r = o.margin,
        t = o.backgroundColor,
        i = o.backgroundPadding,
        n = o.foregroundColor,
        a = o.foregroundPadding,
        d = o.modules,
        u = o.moduleCount;
      var s = (e - 2 * r) / u,
        g = s,
        l = 0;
      i > 0 && (g -= 2 * (l = g * i / 2));
      var h = s,
        c = 0;
      a > 0 && (h -= 2 * (c = h * a / 2));
      for (var m = 0; m < u; m++) {
        for (var f = 0; f < u; f++) {
          var v = f * s + r,
            p = m * s + r;
          if (d[m][f]) {
            var C = c,
              b = v + c,
              y = p + c,
              k = h,
              w = h;
            d[m][f] = {
              type: ["foreground"],
              color: n,
              isBlack: !0,
              isDrawn: !1,
              destX: v,
              destY: p,
              destWidth: s,
              destHeight: s,
              x: b,
              y: y,
              width: k,
              height: w,
              paddingTop: C,
              paddingRight: C,
              paddingBottom: C,
              paddingLeft: C
            };
          } else C = l, b = v + l, y = p + l, k = g, w = g, d[m][f] = {
            type: ["background"],
            color: t,
            isBlack: !1,
            isDrawn: !1,
            destX: v,
            destY: p,
            destWidth: s,
            destHeight: s,
            x: b,
            y: y,
            width: k,
            height: w,
            paddingTop: C,
            paddingRight: C,
            paddingBottom: C,
            paddingLeft: C
          };
        }
      }
    }(this), function (o) {
      var e = o.modules,
        r = o.moduleCount,
        t = o.positionProbeBackgroundColor,
        i = o.positionProbeForegroundColor;
      var n = r - 7;
      [[0, 0, 1], [1, 0, 1], [2, 0, 1], [3, 0, 1], [4, 0, 1], [5, 0, 1], [6, 0, 1], [0, 1, 1], [1, 1, 0], [2, 1, 0], [3, 1, 0], [4, 1, 0], [5, 1, 0], [6, 1, 1], [0, 2, 1], [1, 2, 0], [2, 2, 1], [3, 2, 1], [4, 2, 1], [5, 2, 0], [6, 2, 1], [0, 3, 1], [1, 3, 0], [2, 3, 1], [3, 3, 1], [4, 3, 1], [5, 3, 0], [6, 3, 1], [0, 4, 1], [1, 4, 0], [2, 4, 1], [3, 4, 1], [4, 4, 1], [5, 4, 0], [6, 4, 1], [0, 5, 1], [1, 5, 0], [2, 5, 0], [3, 5, 0], [4, 5, 0], [5, 5, 0], [6, 5, 1], [0, 6, 1], [1, 6, 1], [2, 6, 1], [3, 6, 1], [4, 6, 1], [5, 6, 1], [6, 6, 1]].forEach(function (o) {
        var r = e[o[0]][o[1]],
          a = e[o[0] + n][o[1]],
          d = e[o[0]][o[1] + n];
        d.type.push("positionProbe"), a.type.push("positionProbe"), r.type.push("positionProbe"), r.color = 1 == o[2] ? i : t, a.color = 1 == o[2] ? i : t, d.color = 1 == o[2] ? i : t;
      });
    }(this), function (o) {
      var e = o.modules,
        r = o.moduleCount,
        t = o.separatorColor;
      [[7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [0, 7], [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7]].forEach(function (o) {
        var i = e[o[0]][o[1]],
          n = e[r - o[0] - 1][o[1]],
          a = e[o[0]][r - o[1] - 1];
        a.type.push("separator"), n.type.push("separator"), i.type.push("separator"), i.color = t, n.color = t, a.color = t;
      });
    }(this), function (o) {
      var e = o.typeNumber,
        r = o.modules,
        t = o.moduleCount,
        i = o.foregroundColor,
        n = o.backgroundColor,
        a = o.positionAdjustForegroundColor,
        d = o.positionAdjustBackgroundColor,
        u = o.timingForegroundColor,
        s = o.timingBackgroundColor;
      var g = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]][e - 1];
      if (g) for (var l = [[-2, -2, 1], [-1, -2, 1], [0, -2, 1], [1, -2, 1], [2, -2, 1], [-2, -1, 1], [-1, -1, 0], [0, -1, 0], [1, -1, 0], [2, -1, 1], [-2, 0, 1], [-1, 0, 0], [0, 0, 1], [1, 0, 0], [2, 0, 1], [-2, 1, 1], [-1, 1, 0], [0, 1, 0], [1, 1, 0], [2, 1, 1], [-2, 2, 1], [-1, 2, 1], [0, 2, 1], [1, 2, 1], [2, 2, 1]], h = g.length, c = 0; c < h; c++) {
        for (var m = 0; m < h; m++) {
          var _x$y = {
              x: g[c],
              y: g[m]
            },
            f = _x$y.x,
            v = _x$y.y;
          f < 9 && v < 9 || f > t - 9 - 1 && v < 9 || v > t - 9 - 1 && f < 9 || l.forEach(function (o) {
            var e = r[f + o[0]][v + o[1]];
            e.type.push("positionAdjust"), e.type.includes("timing") ? 1 == o[2] ? e.color = a == i ? u : a : e.color = a == i && d == n ? s : d : e.color = 1 == o[2] ? a : d;
          });
        }
      }
    }(this), function (o) {
      var e = o.modules,
        r = o.moduleCount,
        t = o.timingForegroundColor,
        i = o.timingBackgroundColor;
      for (var n = r - 16, a = 0; a < n; a++) {
        var d = e[6][8 + a],
          u = e[8 + a][6];
        d.type.push("timing"), u.type.push("timing"), d.color = 1 & a ^ 1 ? t : i, u.color = 1 & a ^ 1 ? t : i;
      }
    }(this), function (o) {
      var e = o.modules,
        r = o.moduleCount,
        t = o.darkBlockColor;
      var i = e[r - 7 - 1][8];
      i.type.push("darkBlock"), i.color = t;
    }(this), function (o) {
      var e = o.typeNumber,
        r = o.modules,
        t = o.moduleCount,
        i = o.typeNumberBackgroundColor,
        n = o.typeNumberForegroundColor;
      if (e < 7) return r;
      var a = [0, 0, 0, 0, 0, 0, 0, "000111110010010100", "001000010110111100", "001001101010011001", "001010010011010011", "001011101111110110", "001100011101100010", "001101100001000111", "001110011000001101", "001111100100101000", "010000101101111000", "010001010001011101", "010010101000010111", "010011010100110010", "010100100110100110", "010101011010000011", "010110100011001001", "010111011111101100", "011000111011000100", "011001000111100001", "011010111110101011", "011011000010001110", "011100110000011010", "011101001100111111", "011110110101110101", "011111001001010000", "100000100111010101", "100001011011110000", "100010100010111010", "100011011110011111", "100100101100001011", "100101010000101110", "100110101001100100", "100111010101000001", "101000110001101001"],
        d = a[e] + a[e],
        u = [t - 11, t - 10, t - 9];
      [[5, u[2]], [5, u[1]], [5, u[0]], [4, u[2]], [4, u[1]], [4, u[0]], [3, u[2]], [3, u[1]], [3, u[0]], [2, u[2]], [2, u[1]], [2, u[0]], [1, u[2]], [1, u[1]], [1, u[0]], [0, u[2]], [0, u[1]], [0, u[0]], [u[2], 5], [u[1], 5], [u[0], 5], [u[2], 4], [u[1], 4], [u[0], 4], [u[2], 3], [u[1], 3], [u[0], 3], [u[2], 2], [u[1], 2], [u[0], 2], [u[2], 1], [u[1], 1], [u[0], 1], [u[2], 0], [u[1], 0], [u[0], 0]].forEach(function (o, e) {
        var t = r[o[0]][o[1]];
        t.type.push("typeNumber"), t.color = "1" == d[e] ? n : i;
      });
    }(this), this.isMaked = !0, this.drawModules = [];
  }, b.prototype.getDrawModules = function () {
    if (this.drawModules && this.drawModules.length > 0) return this.drawModules;
    var o = this.drawModules = [],
      e = this.modules,
      r = this.moduleCount,
      t = this.dynamicSize,
      i = this.areaColor,
      n = this.backgroundImageSrc,
      a = this.backgroundImageX,
      d = this.backgroundImageY,
      u = this.backgroundImageWidth,
      s = this.backgroundImageHeight,
      g = this.backgroundImageAlpha,
      l = this.backgroundImageBorderRadius,
      h = this.foregroundImageSrc,
      c = this.foregroundImageX,
      m = this.foregroundImageY,
      f = this.foregroundImageWidth,
      v = this.foregroundImageHeight,
      p = this.foregroundImagePadding,
      C = this.foregroundImageBackgroundColor,
      b = this.foregroundImageBorderRadius,
      y = this.foregroundImageShadowOffsetX,
      k = this.foregroundImageShadowOffsetY,
      w = this.foregroundImageShadowBlur,
      I = this.foregroundImageShadowColor;
    i && o.push({
      name: "area",
      type: "area",
      color: i,
      x: 0,
      y: 0,
      width: t,
      height: t
    }), n && o.push({
      name: "backgroundImage",
      type: "image",
      imageSrc: n,
      mappingName: "backgroundImageSrc",
      x: a,
      y: d,
      width: u,
      height: s,
      alpha: g,
      borderRadius: l
    });
    for (var B = 0; B < r; B++) {
      for (var S = 0; S < r; S++) {
        var P = e[B][S];
        P.isDrawn || (P.type.includes("foreground") ? o.push({
          name: "foreground",
          type: "tile",
          color: P.color,
          destX: P.destX,
          destY: P.destY,
          destWidth: P.destWidth,
          destHeight: P.destHeight,
          x: P.x,
          y: P.y,
          width: P.width,
          height: P.height,
          paddingTop: P.paddingTop,
          paddingRight: P.paddingRight,
          paddingBottom: P.paddingBottom,
          paddingLeft: P.paddingLeft,
          rowIndex: B,
          colIndex: S
        }) : o.push({
          name: "background",
          type: "tile",
          color: P.color,
          destX: P.destX,
          destY: P.destY,
          destWidth: P.destWidth,
          destHeight: P.destHeight,
          x: P.x,
          y: P.y,
          width: P.width,
          height: P.height,
          paddingTop: P.paddingTop,
          paddingRight: P.paddingRight,
          paddingBottom: P.paddingBottom,
          paddingLeft: P.paddingLeft,
          rowIndex: B,
          colIndex: S
        }), P.isDrawn = !0);
      }
    }
    return h && o.push({
      name: "foregroundImage",
      type: "image",
      imageSrc: h,
      mappingName: "foregroundImageSrc",
      x: c,
      y: m,
      width: f,
      height: v,
      padding: p,
      backgroundColor: C,
      borderRadius: b,
      shadowOffsetX: y,
      shadowOffsetY: k,
      shadowBlur: w,
      shadowColor: I
    }), o;
  }, b.prototype.isBlack = function (o, e) {
    var r = this.moduleCount;
    return !(0 > o || 0 > e || o >= r || e >= r) && this.modules[o][e].isBlack;
  }, b.prototype.drawCanvas = function (o) {
    var _this3 = this;
    var e = this.isMaked,
      r = this.canvasContext,
      t = this.useDynamicSize,
      i = this.dynamicSize,
      n = this.foregroundColor,
      a = this.foregroundPadding,
      d = this.backgroundColor,
      u = this.backgroundPadding,
      s = this.drawReserve,
      g = this.margin;
    if (!e) return console.error("[uQRCode]: please execute the make method first!"), Promise.reject(new b.Error("please execute the make method first!"));
    var l = this.getDrawModules(),
      h = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(e, t) {
          var i, n, a, d, u, g, h, c, m, f, v, p, C, y;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  r.draw(o);
                  i = 0;
                case 3:
                  if (!(i < l.length)) {
                    _context.next = 48;
                    break;
                  }
                  n = l[i];
                  _context.t0 = (r.save(), n.type);
                  _context.next = _context.t0 === "area" ? 8 : _context.t0 === "tile" ? 10 : _context.t0 === "image" ? 13 : 44;
                  break;
                case 8:
                  r.setFillStyle(n.color), r.fillRect(n.x, n.y, n.width, n.height);
                  return _context.abrupt("break", 44);
                case 10:
                  a = n.x, d = n.y, u = n.width, g = n.height;
                  r.setFillStyle(n.color), r.fillRect(a, d, u, g);
                  return _context.abrupt("break", 44);
                case 13:
                  if (!("backgroundImage" === n.name)) {
                    _context.next = 28;
                    break;
                  }
                  a = Math.round(n.x), d = Math.round(n.y), u = Math.round(n.width), g = Math.round(n.height);
                  u < 2 * (c = Math.round(n.borderRadius)) && (c = u / 2), g < 2 * c && (c = g / 2), r.setGlobalAlpha(n.alpha), c > 0 && (r.beginPath(), r.moveTo(a + c, d), r.arcTo(a + u, d, a + u, d + g, c), r.arcTo(a + u, d + g, a, d + g, c), r.arcTo(a, d + g, a, d, c), r.arcTo(a, d, a + u, d, c), r.closePath(), r.setStrokeStyle("rgba(0,0,0,0)"), r.stroke(), r.clip());
                  _context.prev = 16;
                  _context.next = 19;
                  return _this3.loadImage(n.imageSrc);
                case 19:
                  h = _context.sent;
                  r.drawImage(h, a, d, u, g);
                  _context.next = 26;
                  break;
                case 23:
                  _context.prev = 23;
                  _context.t1 = _context["catch"](16);
                  throw console.error("[uQRCode]: ".concat(n.mappingName, " invalid!")), new b.Error("".concat(n.mappingName, " invalid!"));
                case 26:
                  _context.next = 44;
                  break;
                case 28:
                  if (!("foregroundImage" === n.name)) {
                    _context.next = 44;
                    break;
                  }
                  a = Math.round(n.x), d = Math.round(n.y), u = Math.round(n.width), g = Math.round(n.height);
                  m = Math.round(n.padding);
                  u < 2 * (c = Math.round(n.borderRadius)) && (c = u / 2), g < 2 * c && (c = g / 2);
                  f = a - m, v = d - m, p = u + 2 * m, C = g + 2 * m, y = Math.round(p / u * c);
                  p < 2 * y && (y = p / 2), C < 2 * y && (y = C / 2), r.save(), r.setShadow(n.shadowOffsetX, n.shadowOffsetY, n.shadowBlur, n.shadowColor), y > 0 ? (r.beginPath(), r.moveTo(f + y, v), r.arcTo(f + p, v, f + p, v + C, y), r.arcTo(f + p, v + C, f, v + C, y), r.arcTo(f, v + C, f, v, y), r.arcTo(f, v, f + p, v, y), r.closePath(), r.setFillStyle(n.backgroundColor), r.fill()) : (r.setFillStyle(n.backgroundColor), r.fillRect(f, v, p, C)), r.restore(), r.save(), y > 0 ? (r.beginPath(), r.moveTo(f + y, v), r.arcTo(f + p, v, f + p, v + C, y), r.arcTo(f + p, v + C, f, v + C, y), r.arcTo(f, v + C, f, v, y), r.arcTo(f, v, f + p, v, y), r.closePath(), r.setFillStyle(m > 0 ? n.backgroundColor : "rgba(0,0,0,0)"), r.fill()) : (r.setFillStyle(m > 0 ? n.backgroundColor : "rgba(0,0,0,0)"), r.fillRect(f, v, p, C)), r.restore(), c > 0 && (r.beginPath(), r.moveTo(a + c, d), r.arcTo(a + u, d, a + u, d + g, c), r.arcTo(a + u, d + g, a, d + g, c), r.arcTo(a, d + g, a, d, c), r.arcTo(a, d, a + u, d, c), r.closePath(), r.setStrokeStyle("rgba(0,0,0,0)"), r.stroke(), r.clip());
                  _context.prev = 34;
                  _context.next = 37;
                  return _this3.loadImage(n.imageSrc);
                case 37:
                  h = _context.sent;
                  r.drawImage(h, a, d, u, g);
                  _context.next = 44;
                  break;
                case 41:
                  _context.prev = 41;
                  _context.t2 = _context["catch"](34);
                  throw console.error("[uQRCode]: ".concat(n.mappingName, " invalid!")), new b.Error("".concat(n.mappingName, " invalid!"));
                case 44:
                  s && r.draw(!0), r.restore();
                case 45:
                  i++;
                  _context.next = 3;
                  break;
                case 48:
                  r.draw(!0), setTimeout(e, 150);
                  _context.next = 54;
                  break;
                case 51:
                  _context.prev = 51;
                  _context.t3 = _context["catch"](0);
                  t(_context.t3);
                case 54:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 51], [16, 23], [34, 41]]);
        }));
        return function h(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();
    return new Promise(function (o, e) {
      h(o, e);
    });
  }, b.prototype.draw = function (o) {
    return this.drawCanvas(o);
  }, b.prototype.register = function (o) {
    o && o(b, this, !0);
  }, b;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 51:
/*!**************************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/addUnit.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addUnit;
var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 38));
// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),

/***/ 52:
/*!*************************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/random.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}
var _default = random;
exports.default = _default;

/***/ }),

/***/ 53:
/*!***********************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/trim.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function trim(str) {
  var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}
var _default = trim;
exports.default = _default;

/***/ }),

/***/ 54:
/*!************************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/toast.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function toast(title) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration
  });
}
var _default = toast;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 55:
/*!****************************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/getParent.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getParent;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
// 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      var _ret = function () {
        var data = {};
        // 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // 历遍传过来的对象参数
          for (var i in keys) {
            // 如果子组件有此值则用，无此值则用父组件的值
            // 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return {
          v: data
        };
      }();
      if ((0, _typeof2.default)(_ret) === "object") return _ret.v;
    }
  }
  return {};
}

/***/ }),

/***/ 56:
/*!**************************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/$parent.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = $parent;
// 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
function $parent() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),

/***/ 57:
/*!**********************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/sys.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.os = os;
exports.sys = sys;
function os() {
  return uni.getSystemInfoSync().platform;
}
;
function sys() {
  return uni.getSystemInfoSync();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 58:
/*!***************************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/debounce.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var timeout = null;

/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行 
 * @return null
 */
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}
var _default = debounce;
exports.default = _default;

/***/ }),

/***/ 59:
/*!***************************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/function/throttle.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var timer, flag;
/**
 * 节流原理：在一定时间内，只能触发一次
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
function throttle(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(function () {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }
  }
}
;
var _default = throttle;
exports.default = _default;

/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 60:
/*!***********************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/config/config.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 此版本发布于2020-12-17
var version = '1.8.3';
var _default = {
  v: version,
  version: version,
  // 主题名称
  type: ['primary', 'success', 'info', 'error', 'warning']
};
exports.default = _default;

/***/ }),

/***/ 61:
/*!***********************************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/node_modules/uview-ui/libs/config/zIndex.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */
var _default = {
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965
};
exports.default = _default;

/***/ }),

/***/ 62:
/*!******************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/store/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 63));
var _user = _interopRequireDefault(__webpack_require__(/*! ./modules/user */ 64));
var _game = _interopRequireDefault(__webpack_require__(/*! ./modules/game */ 69));
_vue.default.use(_vuex.default);
var store = new _vuex.default.Store({
  modules: {
    user: _user.default,
    game: _game.default
  }
});
var _default = store;
exports.default = _default;

/***/ }),

/***/ 63:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 64:
/*!*************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/store/modules/user.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _user = __webpack_require__(/*! ../../api/user */ 65);
var _auth = __webpack_require__(/*! ../../util/auth */ 67);
var infoHistory = uni.getStorageSync('userInfo') || {};
var state = {
    hasLogin: Boolean(Object.keys(infoHistory).length),
    info: infoHistory
  },
  getters = {
    info: function info(state) {
      return state.info;
    },
    hasLogin: function hasLogin(state) {
      return state.hasLogin;
    }
  },
  mutations = {
    setUserInfo: function setUserInfo(state, data) {
      state.hasLogin = true;
      state.info = data;
      uni.setStorageSync('userInfo', data);
    },
    logout: function logout(state) {
      state.info = {};
      state.hasLogin = false;
      (0, _auth.removeToken)();
      uni.removeStorageSync('userInfo');
      uni.reLaunch({
        url: "/pages/user/login"
      });
    }
  },
  actions = {
    login: function login(_ref, param) {
      var commit = _ref.commit;
      var loginWay = param.loginWay,
        api;
      api = param.loginWay == 1 ? (0, _user.login)(param) : (0, _user.mobilelogin)(param);
      api.then(function (response) {
        console.log(response);
        if (response.code == 1) {
          var data = response.data;
          var userinfo = data.userinfo;
          commit('setUserInfo', userinfo);
          (0, _auth.setToken)(userinfo.token);
          uni.reLaunch({
            url: "/pages/tabBar/rent"
          });
        } else {
          uni.showToast({
            title: response.msg,
            icon: 'none',
            duration: 2000
          });
        }
      }).catch(function (error) {
        uni.showToast({
          title: "操作失败",
          icon: 'none',
          duration: 2000
        });
        console.log(error);
      });
    },
    getUserInfo: function getUserInfo(_ref2) {
      var commit = _ref2.commit;
      (0, _user.getUserInfo)().then(function (response) {
        if (response.code == 1) {
          var data = response.data;
          commit('setUserInfo', data);
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
  };
var _default = {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 65:
/*!***************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/api/user.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accountList = accountList;
exports.getUserInfo = getUserInfo;
exports.login = login;
exports.mobilelogin = mobilelogin;
exports.sendCode = sendCode;
var _request = _interopRequireDefault(__webpack_require__(/*! ./../util/request */ 66));
function login(data) {
  return (0, _request.default)({
    url: 'user/login',
    method: 'POST',
    data: data
  });
}
function sendCode(data) {
  return (0, _request.default)({
    url: 'sms/send',
    method: 'POST',
    data: data
  });
}
function mobilelogin(data) {
  return (0, _request.default)({
    url: 'user/mobilelogin',
    method: 'POST',
    data: data
  });
}
function getUserInfo() {
  return (0, _request.default)({
    url: 'user/getUserInfo',
    method: 'GET'
  });
}
function accountList(data) {
  return (0, _request.default)({
    url: 'user/accountList',
    method: 'GET',
    data: data
  });
}

/***/ }),

/***/ 66:
/*!*******************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/util/request.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _auth = __webpack_require__(/*! ../util/auth */ 67);
var _env = _interopRequireDefault(__webpack_require__(/*! ../util/env */ 68));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function service() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  options.url = "".concat(_env.default.baseUrl).concat(options.url);
  // 判断本地是否存在token，如果存在则带上请求头
  if ((0, _auth.getToken)()) {
    options.header = {
      'content-type': 'application/json',
      'token': "".concat((0, _auth.getToken)()) // 这里是token(可自行修改)
    };
  }

  options.data = options.data ? options.data : {};
  return new Promise(function (resolved, rejected) {
    options.success = function (res) {
      uni.hideLoading();
      if (res.data.code == 401) {
        (0, _auth.removeToken)();
        uni.removeStorageSync('userInfo');
        uni.reLaunch({
          url: '/pages/user/login'
        });
        return resolved();
      }
      resolved(res.data);
    };
    options.fail = function (err) {
      uni.hideLoading();
      uni.showToast({
        icon: 'none',
        duration: 3000,
        title: '服务器错误,请稍后再试'
      });
      rejected(err);
    };
    uni.request(options);
  });
}
var _default = service;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 67:
/*!****************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/util/auth.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = getToken;
exports.removeToken = removeToken;
exports.setToken = setToken;
var TokenKey = 'token';

// 认证令牌
function getToken() {
  return uni.getStorageSync(TokenKey);
}
function setToken(token) {
  return uni.setStorageSync(TokenKey, token);
}
function removeToken() {
  return uni.removeStorageSync(TokenKey);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 68:
/*!***************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/util/env.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  baseUrl: "http://zonline.ak7.cc/api/",
  uploadUrl: "http://zonline.ak7.cc/api/common/upload",
  appId: "wx8da74614c2062030"
};
exports.default = _default;

/***/ }),

/***/ 69:
/*!*************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/store/modules/game.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _game = __webpack_require__(/*! @/api/game */ 70);
var gameList = uni.getStorageSync('gameList') || {};
var state = {
    data: gameList
  },
  getters = {
    data: function data(state) {
      return state.data;
    }
  },
  mutations = {},
  actions = {
    list: function list(_ref, param) {
      var commit = _ref.commit;
      (0, _game.gameList)().then(function (res) {
        var data = res.data;
        uni.setStorageSync('gameList', data);
      });
    }
  };
var _default = {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 7:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 70:
/*!***************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/api/game.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameList = gameList;
var _request = _interopRequireDefault(__webpack_require__(/*! ./../util/request */ 66));
function gameList() {
  return (0, _request.default)({
    url: 'game/getList',
    method: 'GET'
  });
}

/***/ }),

/***/ 71:
/*!*****************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/util/utils.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDay = addDay;
exports.addMonth = addMonth;
exports.comeback = comeback;
exports.copy = copy;
exports.formatImage = formatImage;
exports.getDate = getDate;
exports.handleNavigate = handleNavigate;
exports.handleSetTimeNav = handleSetTimeNav;
exports.isEmpty = isEmpty;
function _getDate(date) {
  var year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate();
  return "".concat(year, "-").concat(fillZero(month), "-").concat(fillZero(day));
}
function fillZero(val) {
  return (val < 10 ? '0' : '') + val;
}
function copy(data) {
  uni.setClipboardData({
    data: data,
    success: function success(res) {
      uni.showToast({
        title: "复制成功",
        icon: "none",
        mask: true
      });
    }
  });
}
function comeback() {
  var pages = getCurrentPages();
  if (pages[pages.length - 2]) {
    //如果有上一页，就返回上一页        
    uni.navigateBack();
  } else {
    //如果没有上一页，则返回首页        
    uni.reLaunch({
      url: "/pages/tabBar/rent"
    });
  }
}
function handleSetTimeNav(url) {
  setTimeout(function () {
    handleNavigate(url);
  }, 1000);
}
function handleNavigate(url) {
  uni.navigateTo({
    url: url,
    success: function success(res) {
      console.log(res);
    },
    fail: function fail(err) {
      console.log(err);
    }
  });
}
function formatImage(lists) {
  var arr = [];
  for (var index in lists) {
    if (!lists[index].error) {
      if (lists[index].response) {
        arr.push(lists[index].response.data.fullurl);
      } else {
        arr.push(lists[index].url);
      }
    }
  }
  return arr;
}
function getDate() {
  var date = new Date();
  return _getDate(date);
}

//日期+多少天
//日期-10天：this.base.date('2023-04-02',-10)
//当天日期-10天：this.base.date(this.base.getDate(),-10)
function addDay(date, days) {
  if (!days) {
    return date;
  }
  date = new Date(new Date(date).setDate(new Date(date).getDate() + days));
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  var day = date.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  return year + "-" + month + "-" + day;
}

//日期+多少月，同上
function addMonth(date, m) {
  date = new Date(new Date(date).setMonth(new Date(date).getMonth() + (m === undefined ? 1 : m)));
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  var day = date.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  return year + "-" + month + "-" + day;
}
function isEmpty(value, checkArr) {
  if (checkArr) {
    if (Array.isArray(value)) {
      if (!value.length) {
        return true;
      }
    }
  }
  return value === '' || value === ' ' || value === undefined || value === null || value === 'null';
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 72:
/*!********************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/util/validate.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIsPositiveEx0 = checkIsPositiveEx0;
exports.mobile = mobile;
function mobile(mobile) {
  var reg = /^1(3\d|5[0-35-9]|8[025-9]|47)\d{8}$/;
  return reg.test(mobile);
}
function checkIsPositiveEx0(val) {
  var reg = /^\d+(?=\.{0,1}\d+$|$)/;
  return reg.test(val) && val > 0;
}

/***/ }),

/***/ 73:
/*!*****************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/exception/AccountError.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ 74));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 75));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 77));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ 78));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var AccountError = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(AccountError, _Error);
  var _super = _createSuper(AccountError);
  function AccountError(message) {
    (0, _classCallCheck2.default)(this, AccountError);
    return _super.call(this, message);
  }
  return (0, _createClass2.default)(AccountError);
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
exports.default = AccountError;

/***/ }),

/***/ 74:
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 75:
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ 76);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 76:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 77:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 78:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ 77);
var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeFunction = __webpack_require__(/*! ./isNativeFunction.js */ 79);
var construct = __webpack_require__(/*! ./construct.js */ 15);
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 79:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 84:
/*!******************************************************************************!*\
  !*** /Users/weiweiwei/Hbuilderx/RentNumber/phone/static/imgs/SwordThree.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 9:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map