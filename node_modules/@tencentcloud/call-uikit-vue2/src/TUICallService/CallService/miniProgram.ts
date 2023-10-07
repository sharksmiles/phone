import { CallMediaType, CallStatus, NAME } from '../const';
const wx: any = {};

export function initialUI() {
  // 收起键盘
  wx.hideKeyboard();
  // 隐藏 tabBar
  // if (shouldHideTabBar) {
  //   wx.hideTabBar();
  // }
};

// 检测运行时环境, 当是微信开发者工具时, 提示用户需要手机调试
export function checkRunPlatform() {
  const systemInfo = wx.getSystemInfoSync();
  if (systemInfo.platform === 'devtools') {
  // 当前运行在微信开发者工具里
    wx.showModal({
      icon: 'none',
      title: '运行环境提醒',
      content: '微信开发者工具不支持原生推拉流组件(即 <live-pusher> 和 <live-player> 标签)，请使用真机调试或者扫码预览。',
      showCancel: false,
    });
  }
};

export async function beforeCall(type: CallMediaType, that: any) {
  try {
    initialUI(); // miniProgram 收起键盘, 隐藏 tabBar
    checkRunPlatform() // miniProgram 检测运行时环境
    // 检查设备权限
    const deviceMap = {
      microphone: true,
      camera: type === CallMediaType.VIDEO,
    };
    const hasDevicePermission = await that._tuiCallEngine.deviceCheck(deviceMap); // miniProgram 检查设备权限  
    return hasDevicePermission ? CallStatus.CALLING : CallStatus.IDLE;
  } catch (error) {
    return CallStatus.IDLE;
  }
}

// 铃声设置
export class BellContext {
  private context: any = null;
  constructor() {
    this.context = wx.createInnerAudioContext();
    this.context.loop = true;
    this.context.onError((res: any) => {
      this.handleError(res.errCode);
    });
  }
  setBellSrc(filePath: string) {
    const fs = wx.getFileSystemManager();
    try {
      fs.readFileSync(filePath, 'utf8', 0);
    } catch (e) {
      console.warn(`${NAME.PREFIX}setCallingBell: 媒体铃声路径错误`, filePath);
    }
    this.context.src = filePath;
  }
  play() {
    this.context.play();
  }
  stop() {
    this.context.stop();
  }
  handleError(code: number) {
    let errMsg = '';
    switch (code) {
      case 10001:
        errMsg = '系统错误';
        break;
      case 10002:
        errMsg = '网络错误';
        break;
      case 10003:
        errMsg = '文件错误';
        break;
      case 10004:
        errMsg = '格式错误';
        break;
      default:
        errMsg = '未知错误';
        break;
    }
    console.warn(`${NAME.PREFIX}setCallingBell: 媒体铃声${errMsg}`);
  }
  destroyInstance() {
    this.context.destroy();
  }
}
