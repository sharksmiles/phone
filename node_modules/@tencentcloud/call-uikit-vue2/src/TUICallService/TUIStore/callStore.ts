import { CallStatus, CallRole, CallMediaType, NAME, VideoDisplayMode, VideoResolution } from '../const';
import { ICallStore } from '../interface/ICallStore';
import { getLanguage } from '../utils/common-utils';

export default class CallStore {
  public defaultStore: ICallStore = {
    callStatus: CallStatus.IDLE,
    callRole: CallRole.UNKNOWN,
    callMediaType: CallMediaType.UNKNOWN,
    localUserInfo: { userId: '' },
    remoteUserInfoList: [],
    callerUserInfo: { userId: '' },
    isGroup: false,
    callDuration: '00:00:00', // 通话时长
    callTips: '', // 通话提示的信息. 例如: '等待谁接听', 'xxx 拒绝通话', 'xxx 挂断通话'
    toastInfo: { text: '' }, // 远端用户挂断、拒绝、超时、忙线等的 toast 提示信息
    isMinimized: false,
    language: getLanguage(), // en, zh-cn
    isClickable: false, // 是否可点击, 用于按钮增加 loading 效果，不可点击
    // TUICallKit 组件上的属性
    displayMode: VideoDisplayMode.COVER, // 设置预览远端的画面显示模式
    videoResolution: VideoResolution.RESOLUTION_480P,
  };
  public store: ICallStore = Object.assign({}, this.defaultStore);;

  public update(key: keyof ICallStore, data: any): void {
    switch (key) {
      // case 'callTips':
      //   break;
      default:
        // resolve "Type 'any' is not assignable to type 'never'.ts", ref: https://github.com/microsoft/TypeScript/issues/31663
        (this.store[key] as any) = data as any;
    }
  }

  public getData(key: string | undefined): any {
    if (!key) return this.store;
    return this.store[key as keyof ICallStore];
  }
  // reset call store
  public reset(keyList: Array<string> = []) {
    if (keyList.length === 0) {
      keyList = Object.keys(this.store);
    }
    const resetToDefault = keyList.reduce((acc, key) => ({ ...acc, [key]: this.defaultStore[key as keyof ICallStore] }), {});
    this.store = {
      ...this.defaultStore,
      ...this.store,
      ...resetToDefault,
    };
  }
}
