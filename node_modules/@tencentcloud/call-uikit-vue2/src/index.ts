import { TUIGlobal, TUIStore, StoreName, TUICallKitServer, NAME, StatusChange as STATUS, CallRole, CallMediaType, VideoResolution, VideoDisplayMode, t } from './TUICallService/index';
// @ts-ignore
import TUICallKit from './Components/TUICallKit-vue2/TUICallKit.vue';
import { TUICallType } from "tuicall-engine-webrtc"; // ≤v2.2.1 抛出的字段

// 原 web callKit 融合 chat 方法. ref: https://tapd.woa.com/20396022/prong/stories/view/1020396022885708891
// @ts-ignore
const plugin = (TUICore) => {
  TUICore.component("TUICallKit", { server: TUICallKitServer });
  TUICallKitServer.bindTUICore(TUICore);
  return TUICallKit;
};
// @ts-ignore
const install = (app) => {
  app.component("TUICallKit", TUICallKit);
  console.log("TUICallKit&mini installed", app);
};
TUICallKit.plugin = plugin;
TUICallKit.install = install; 
const Version = '3.0.3'; // basic-demo 原来上报使用
// 输出产物
export {
  TUIGlobal,
  TUIStore,
  StoreName,
  TUICallKitServer,
  TUICallKit,
  plugin,
  install,
  NAME,
  STATUS,
  CallRole,
  CallMediaType,
  VideoResolution,
  VideoDisplayMode,
  TUICallType,
  Version,
  t,
};
