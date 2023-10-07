export * from './call';
export * from './error';
export * from './log';

// import { keys } from 'ts-transformer-keys';
// import { ICallStore } from '../interface/store';
// console.warn('--> ', keys<ICallStore>())

export const CALL_DATA_KEY: any = {
  CALL_STATUS: 'callStatus',
  CALL_ROLE: 'callRole',
  CALL_MEDIA_TYPE: 'callMediaType',
  LOCAL_USER_INFO: 'localUserInfo',
  REMOTE_USER_INFO_LIST: 'remoteUserInfoList',
  CALLER_USER_INFO: 'callerUserInfo',
  IS_GROUP: 'isGroup',
  CALL_DURATION: 'callDuration',
  CALL_TIPS: 'callTips',
  TOAST_INFO: 'toastInfo',
  IS_MINIMIZED: 'isMinimized',
  LANGUAGE: 'language',
  IS_CLICKABLE: 'isClickable',
  DISPLAY_MODE: 'displayMode',
  VIDEO_RESOLUTION: 'videoResolution',
};

export const NAME = {
  PREFIX: '【CallService】',
  AUDIO: 'audio',
  VIDEO: 'video',
  LOCAL_VIDEO: 'localVideo',
  ERROR: 'error',
  TIMEOUT: 'timeout',
  RAF: 'raf',
  INTERVAL: 'interval',
  DEFAULT: 'default',
  BOOLEAN: 'boolean',
  STRING: 'string',
  NUMBER: 'number',
  OBJECT: 'object',
  ARRAY: 'array',
  FUNCTION: 'function',
  ALL: 'all',
  MYSELF: 'myself',
  ...CALL_DATA_KEY,
};

export const AudioCallIcon = 'https://web.sdk.qcloud.com/component/TUIKit/assets/call.png';
export const VideoCallIcon = 'https://web.sdk.qcloud.com/component/TUIKit/assets/call-video-reverse.svg';
