import { ITUIGlobal } from './interface/ITUIGlobal';
import { ITUIStore } from './interface/ITUIStore';
import TUIGlobal from './TUIGlobal/tuiGlobal';
import TUIStore from './TUIStore/tuiStore';
import { StoreName } from './const';
import TUICallService from './CallService';
import { NAME, CallRole, CallMediaType, CallStatus, StatusChange, VideoResolution, VideoDisplayMode } from './const';
import { t } from './locales';

// 实例化
const tuiGlobal: ITUIGlobal = TUIGlobal.getInstance();
const tuiStore: ITUIStore = TUIStore.getInstance();
const TUICallKitServer = TUICallService.getInstance();

// 输出 service 方法参数和 model 声明文件
// export * from './type';
// export * from './interface/model';

// TODO: 发布时, 下面的进行删除, 调式使用
(window as any).$TUIStore = tuiStore;
(window as any).$TUIGlobal = tuiGlobal;

// 输出产物
export {
  tuiGlobal as TUIGlobal,
  tuiStore as TUIStore,
  StoreName,
  TUICallKitServer,
  NAME,
  CallStatus,
  CallRole,
  CallMediaType,
  StatusChange,
  VideoResolution,
  VideoDisplayMode,
  t,
};
