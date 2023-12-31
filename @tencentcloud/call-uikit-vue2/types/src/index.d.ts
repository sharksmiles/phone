import { TUIGlobal, TUIStore, StoreName, TUICallKitServer, NAME, StatusChange as STATUS, CallRole, CallMediaType, VideoResolution, VideoDisplayMode, t } from './TUICallService/index';
import TUICallKit from '../../../call-uikit-vue2/src/Components/TUICallKit-vue2/TUICallKit.vue';
import { TUICallType } from "tuicall-engine-webrtc";
declare const plugin : (TUICore : any) => any;
declare const install : (app : any) => void;
declare const Version = "<@VERSION@>";
export { TUIGlobal, TUIStore, StoreName, TUICallKitServer, TUICallKit, plugin, install, NAME, STATUS, CallRole, CallMediaType, VideoResolution, VideoDisplayMode, TUICallType, Version, t, };