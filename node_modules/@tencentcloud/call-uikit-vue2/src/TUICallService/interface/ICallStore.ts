import { CallStatus, CallRole, CallMediaType, VideoDisplayMode, VideoResolution } from '../const';
import { IUserInfo } from './index';

export interface IToastInfo {
  text: string;
  type?: string; // 默认 info 通知, 取值: 'info' | 'warn' | 'success' | 'error'
}
export interface ICallStore {
  callStatus: CallStatus; // 当前的通话状态, 默认: 'idle'
  callRole: CallRole; // 通话角色, 默认: 'callee'
  callMediaType: CallMediaType; // 通话类型
  localUserInfo: IUserInfo; // 自己的信息, 默认: {}
  remoteUserInfoList: Array<IUserInfo>; // 远端用户信息列表, 默认: []
  callerUserInfo: IUserInfo; // 被叫在未接通时，展示主叫的 userId、头像。但是如果主叫进入通话后再挂断，此时被叫无法知道主叫的信息了。因为目前 store 中仅提供了 remoteUserInfoList 数据，主叫离开后，被叫就没有主叫的信息了。因此考虑在 store 中增加 callerUserInfo 字段。
  isGroup: boolean; // 是否是群组通话, 默认: false
  callDuration: string; // 通话时长, 默认: '00:00:00'
  callTips: string; // 通话提示的信息. 例如: '等待谁接听', 'xxx 拒绝通话', 'xxx 挂断通话'
  toastInfo: IToastInfo; // 远端用户挂断、拒绝、超时、忙线等的 toast 提示信息
  isMinimized: boolean; // 是否最小化, 默认: false
  language: string; // 当前语言
  isClickable: boolean; // 按钮是否可点击（呼叫后, '挂断' 按钮不可点击, 发送信令后才可以点击）
  // TUICallKit 组件上的属性
  displayMode: VideoDisplayMode; // 设置预览远端的画面显示模式, 默认: VideoDisplayMode.COVER
  videoResolution: VideoResolution; // 设置视频分辨率, 默认: VideoResolution.RESOLUTION_480P
}
