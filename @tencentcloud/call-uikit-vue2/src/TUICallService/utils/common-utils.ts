import { IUserInfo } from '../interface';
import { NAME } from '../const';

export const isUndefined = function(input: any) {
  return typeof input === NAME.UNDEFINED;
};

export const isPlainObject = function(input: any) {
  // 注意不能使用以下方式判断，因为IE9/IE10下，对象的__proto__是 undefined
  // return isObject(input) && input.__proto__ === Object.prototype;
  if (typeof input !== NAME.OBJECT || input === null) {
    return false;
  }
  const proto = Object.getPrototypeOf(input);
  if (proto === null) { // edge case Object.create(null)
    return true;
  }
  let baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  // 原型链第一个和最后一个比较
  return proto === baseProto;
};

export const isArray = function(input: any) {
  if (typeof Array.isArray === NAME.FUNCTION) {
    return Array.isArray(input);
  }
  return (Object as any).prototype.toString.call(input).match(/^\[object (.*)\]$/)[1].toLowerCase() === NAME.ARRAY;
};

export const isPrivateKey = function(key: string) {
  return key.startsWith('_');
};

export const isUrl = function(url: string) {
  return /^(https?:\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/.test(url);
};
/**
 * 检测input类型是否为string
 * @param {*} input 任意类型的输入
 * @returns {Boolean} true->string / false->not a string
 */
export const isString = function(input: any) {
  return typeof input === NAME.STRING;
};
export const isBoolean = function(input: any) {
  return typeof input === NAME.BOOLEAN;
};
export const isNumber = function(input: any) {
  return (
    input !== null &&
    ((typeof input === NAME.NUMBER && !isNaN(input - 0)) || (typeof input === NAME.OBJECT && input.constructor === Number))
  );
};

export function formatTime(secondTime: number): string {
  const hours: number = Math.floor(secondTime / 3600);
  const minutes: number = Math.floor((secondTime % 3600) / 60);
  const seconds: number = Math.floor(secondTime % 60);
  let callDurationStr: string = hours > 9 ? `${hours}` : `0${hours}`;
  callDurationStr += minutes > 9 ? `:${minutes}` : `:0${minutes}`;
  callDurationStr += seconds > 9 ? `:${seconds}` : `:0${seconds}`;
  return callDurationStr;
}
export function formatTimeInverse(stringTime: string): number {
  const list = stringTime.split(':');
  return parseInt(list[0]) * 3600 + parseInt(list[1]) * 60 + parseInt(list[2]);
}


// Determine if it is a JSON string
export function isJSON(str: string) {
  if (typeof str === NAME.STRING) {
    try {
      const data = JSON.parse(str);
      if (data) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
  return false;
}

// Determine if it is a JSON string
export const JSONToObject = function(str: string) {
  if (!str || !isJSON(str)) {
    return str;
  }
  return JSON.parse(str);
};


/**
 * 重试函数, catch 时，重试
 * @param {Promise} promise 需重试的函数
 * @param {number} num 需要重试的次数
 * @param {number} time 间隔时间（s）
 * @returns {Promise<any>} im 接口的 response 原样返回
 */
export const retryPromise = (promise: Promise<any>, num: number = 6, time: number = 0.5) => {
  let n = num;
  const func = () => {
    return promise;
  };
  return func()
    .catch((error: any) => {
      if (n === 0) {
        throw error;
      }
      const timer = setTimeout(() => {
        func();
        clearTimeout(timer);
        n--;
      }, time * 1000);
    });
};

// /**
//  * 节流函数（目前 TUICallKit 增加防重调用装饰器，该方法可删除）
//  * @param {Function} func 传入的函数
//  * @param {wait} time 间隔时间（ms）
//  */
// export const throttle = (func: Function, wait: number) => {
//   let previousTime = 0;
//   return function () {
//     const now = Date.now();
//     const args = [...arguments];
//     if (now - previousTime > wait) {
//       func.apply(this, args);
//       previousTime = now;
//     }
//   };
// }

/**
 * web call engine 重复调用时的错误, 这种错误在 TUICallKit 应该忽略
 * @param {any} error 错误信息
 */
export function handleRepeatedCallError(error: any) {
  if (error?.message.indexOf('is ongoing, please avoid repeated calls') !== -1) {
    return true;
  }
  return false;
}
/**
 * 设备无权限时的错误处理
 * @param {any} error 错误信息
 */
export function handleNoDevicePermissionError(error: any) {
  const { message } = error;
  if (message.indexOf('NotAllowedError: Permission denied') !== -1) {
    return true;
  }
  return false;
}

export function setDefaultUserInfo(userId: string, domId?: string): IUserInfo {
  let userInfo: IUserInfo = {
    userId,
    nick: '',
    avatar: '',
    isAudioAvailable: false,
    isVideoAvailable: false,
    isEnter: false,
    domId: domId || userId,
  };
  return domId ? userInfo : { ...userInfo, isEnter: false }; // localUserInfo 没有 isEnter, remoteUserInfoList 有 isEnter
}

/*
 * 获取向下取整的 performance.now() 值
 * @export
 * @return {Number}
 */
export function performanceNow() {
  // 在不支持 performance.now 的浏览器中，使用 Date.now()
  // 例如 ie 9，ie 10，避免加载 sdk 时报错
  if (!performance || !performance.now) {
    return Date.now();
  }
  return Math.floor(performance.now());
}
/**
 * 检测input类型是否为function
 * @param {*} input 任意类型的输入
 * @returns {Boolean} true->input is a function
 */
export const isFunction = function(input: any) {
  return typeof input === NAME.FUNCTION;
};

/*
 * 获取浏览器语言
 * @export
 * @return {zh-cn | en}
 */
export const getLanguage = () => {
  // @ts-ignore
  let lang = navigator?.language || navigator?.userLanguage || '';
  lang = lang.substr(0, 2);
  return lang === 'zh' ? 'zh-cn' : 'en';
};
