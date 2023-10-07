import { CallStatus, CallRole, CallMediaType, VideoDisplayMode, VideoResolution } from '../const';
import { IUserInfo } from './index';
export interface IToastInfo {
    text: string;
    type?: string;
}
export interface ICallStore {
    callStatus: CallStatus;
    callRole: CallRole;
    callMediaType: CallMediaType;
    localUserInfo: IUserInfo;
    remoteUserInfoList: Array<IUserInfo>;
    callerUserInfo: IUserInfo;
    isGroup: boolean;
    callDuration: string;
    callTips: string;
    toastInfo: IToastInfo;
    isMinimized: boolean;
    language: string;
    isClickable: boolean;
    displayMode: VideoDisplayMode;
    videoResolution: VideoResolution;
}
