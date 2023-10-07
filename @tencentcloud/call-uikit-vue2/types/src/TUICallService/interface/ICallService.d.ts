/**
 * @interface ITUICallService
*/
export interface ITUICallService {
    /**
     * 初始化 Service
     * @function
     * @private
     */
    init(params: any): void;
    /**
     * 1v1 通话
     * @function
     * @param {SwitchUserStatusParams} options 用户状态控制参数
     */
    call(callParams: ICallParams): void;
}
export interface ICallParams {
    userID: string;
    type: number;
    roomID?: number;
    userData?: string;
    timeout?: number;
    offlinePushInfo?: IOfflinePushInfo;
}
export interface IGroupCallParams {
    userIDList: Array<string>;
    type: number;
    groupID: string;
    roomID?: number;
    userData?: string;
    timeout?: number;
    offlinePushInfo?: IOfflinePushInfo;
}
export interface IUserInfo {
    userId: string;
    nick?: string;
    avatar?: string;
    isAudioAvailable?: boolean;
    isVideoAvailable?: boolean;
    volume?: number;
    isEnter?: boolean;
    domId?: string;
}
export interface IOfflinePushInfo {
    title?: string;
    description?: string;
    androidOPPOChannelID?: string;
    extension: String;
}
export interface ICallbackParam {
    beforeCalling?: (...args: any[]) => void;
    afterCalling?: (...args: any[]) => void;
    onMinimized?: (...args: any[]) => void;
    onMessageSentByMe?: (...args: any[]) => void;
    kickedOut?: (...args: any[]) => void;
    statusChanged?: (...args: any[]) => void;
}
export interface ISelfInfoParams {
    nickName: string;
    avatar: string;
}
