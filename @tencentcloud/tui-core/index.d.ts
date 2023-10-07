interface CallServiceParams {
    serviceName: string;
    method: string;
    params: any;
    callback?: Function;
}
interface ExtensionInfo {
    weight: number;
    text: string;
    icon: string;
    data: object;
    listener: {
        onClicked?: Function;
        onLongPressed?: Function;
        onTouched?: Function;
        onSwiped?: Function;
    };
}
interface LoginParams {
    SDKAppID: number;
    userID: string;
    userSig: string;
    TUIOfflinePush?: any;
    offlinePushConfig?: any;
    useUploadPlugin?: boolean;
    useProfanityFilterPlugin?: boolean;
    unlimitedAVChatRoom?: boolean;
    scene?: string;
    fileUploadProxy?: string;
    fileDownloadProxy?: string;
    proxyServer?: string;
    devMode?: boolean;
    framework?: 'vue2' | 'vue3' | undefined;
}

interface ITUINotification {
    onNotifyEvent(eventName: string, subKey: string, params?: object): void;
}

interface ITUIExtension {
    onGetExtension(extensionID: string, params?: object): Array<ExtensionInfo>;
}

interface ITUIService {
    onCall(method: string, params: object, callback?: Function): void;
}

interface ITUICore {
    registerService(serviceName: string, service: any): void;
    unregisterService(serviceName: string): void;
    getService(serviceName: string): ITUIService;
    callService(options: CallServiceParams): void;
    registerExtension(extensionID: string, extension: ITUIExtension): void;
    unregisterExtension(extensionID: string, extension: ITUIExtension): void;
    getExtensionList(extensionID: string, params?: object): Array<ExtensionInfo>;
    registerEvent(eventName: string, subKey: string, notification: ITUINotification): void;
    unregisterEvent(eventName: string, subKey: string, notification: ITUINotification): void;
    notifyEvent(eventName: string, subKey: string, params?: object): void;
}

interface ITUILogin {
    login(options: LoginParams): Promise<any>;
    logout(): Promise<any>;
    destroy(): Promise<any>;
    setLogLevel(level: number): void;
    getContext(): object;
}

declare const TUIConstants: {
    TUILogin: {
        EVENT: {
            LOGIN_STATE_CHANGED: string;
        };
        EVENT_SUB_KEY: {
            USER_LOGIN_SUCCESS: string;
            USER_LOGOUT_SUCCESS: string;
            USER_KICKED_OFFLINE: string;
            USER_SIG_EXPIRED: string;
        };
    };
    TUIConversation: {
        SERVICE: {
            NAME: string;
            METHOD: {};
        };
        EXTENSION: {
            CONV_POP_MENU: {
                EXT_ID: string;
            };
            CONV_GROUP: {
                EXT_ID: string;
            };
        };
    };
    TUIChat: {
        SERVICE: {
            NAME: string;
            METHOD: {
                UPDATE_MESSAGE_LIST: string;
            };
        };
        EXTENSION: {
            INPUT_MORE: {
                EXT_ID: string;
            };
            MSG_POP_MENU: {
                EXT_ID: string;
            };
        };
    };
    TUIGroup: {
        SERVICE: {
            NAME: string;
            METHOD: {};
        };
    };
    TUIContact: {
        SERVICE: {
            NAME: string;
            METHOD: {};
        };
    };
    TUISearch: {
        SERVICE: {
            NAME: string;
            METHOD: {};
        };
    };
    TUICalling: {
        SERVICE: {
            NAME: string;
            METHOD: {
                START_CALL: string;
            };
        };
    };
};

declare const tuiCore: ITUICore;
declare const tuiLogin: ITUILogin;

export { CallServiceParams, ExtensionInfo, LoginParams, TUIConstants, tuiLogin as TUILogin, tuiCore as default };
