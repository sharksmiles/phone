/**
 * @interface TUIGlobal
 * @property {Object} global 根据运行环境代理 wx、uni、window
 * @property {Boolean} isPC true 标识是 pc 网页
 * @property {Boolean} isH5 true 标识是 手机 H5
 * @property {Boolean} isWeChat true 标识是 微信小程序
 * @property {Boolean} isApp true 标识是 uniapp 打包的 native app
 * @property {Boolean} isUniPlatform true 标识当前应用是通过 uniapp 平台打包的产物
 * @property {Boolean} isOfficial true 标识是腾讯云官网 Demo 应用
*/
export interface ITUIGlobal {
  global: any; // 挂在 wx、uni、window 对象
  isPC: boolean;
  isH5: boolean;
  isWeChat: boolean;
  isApp: boolean;
  isUniPlatform: boolean;
  isOfficial: boolean;

  /**
   * 初始化 TUIGlobal 环境变量
   * @function
   * @private
   */
  initEnv(): void;

  /**
   * 初始化 isOfficial
   * @function
   * @param {number} SDKAppID 当前实例的应用 SDKAppID
   * @private
   */
  initOfficial(SDKAppID: number): void;
}
